"""Pack Dala Murasy 3D meshes into dala-mesh.bin (indexed, byte-shuffled, gzip).

Used by scene.py inside Blender, or from the command line on an old dala-mesh.js:
    python tools/pack_mesh.py dist/dala-mesh.js dist/dala-mesh.bin
The browser decoder lives in dist/app.js (decodeMesh).
"""
import array, gzip, json, re, struct, sys

NAMES = ("DALA_MESH", "DALA_PLAYER", "DALA_HORSE", "DALA_TRAVELER")


def pack(meshes, path):
    """meshes: list of 4 flat float lists, 7 floats per vertex."""
    header, parts = [], []
    for values in meshes:
        floats = array.array("f", values)
        bits = array.array("I", floats.tobytes())
        n = len(floats) // 7
        seen, uniq, idx = {}, [], array.array("I", bytes(4 * n))
        for i in range(n):
            key = tuple(bits[i * 7:i * 7 + 7])
            vid = seen.get(key)
            if vid is None:
                vid = seen[key] = len(uniq)
                uniq.append(i)
            idx[i] = vid
        u = len(uniq)
        planes = array.array("f", bytes(4 * u * 7))
        for j in range(7):
            for v, src in enumerate(uniq):
                planes[j * u + v] = floats[src * 7 + j]
        raw = planes.tobytes()
        shuffled = b"".join(raw[b::4] for b in range(4))
        deltas, prev = array.array("I", bytes(4 * n)), 0
        for i in range(n):
            d = idx[i] - prev
            prev = idx[i]
            deltas[i] = ((d << 1) ^ (d >> 31)) & 0xFFFFFFFF
        if sys.byteorder != "little":
            deltas.byteswap()
        header += [u, n]
        parts += [shuffled, deltas.tobytes()]
    head = b"DALA" + struct.pack("<II", 1, len(meshes)) + struct.pack("<%dI" % len(header), *header)
    with open(path, "wb") as f:
        f.write(gzip.compress(head + b"".join(parts), 9))


def from_js(path):
    text = open(path, encoding="utf-8").read()
    return [json.loads(re.search(r"window\.%s=(\[.*?\]);" % k, text, re.S).group(1)) for k in NAMES]


if __name__ == "__main__":
    pack(from_js(sys.argv[1]), sys.argv[2])
    print("packed", sys.argv[2])
