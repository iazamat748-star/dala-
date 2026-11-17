// Packs window.DALA_* arrays (7 floats per vertex, non-indexed) into an indexed, gzip-compressed binary.
// Layout (little endian): "DALA" | u32 version=1 | u32 n | n × (u32 uniqueVerts, u32 indexCount)
//   then for each mesh: Float32[unique*7] vertices (attribute-major planes), Uint32[indexCount] delta-zigzag indices
const fs=require("fs"),zlib=require("zlib");
const [src,out]=process.argv.slice(2);
const window={};eval(fs.readFileSync(src,"utf8"));
const names=["DALA_MESH","DALA_PLAYER","DALA_HORSE","DALA_TRAVELER"];
const parts=[];const header=[];
for(const k of names){const a=Float32Array.from(window[k]);const n=a.length/7;const map=new Map();const uniq=[];const idx=new Uint32Array(n);
  const u32=new Uint32Array(a.buffer);
  for(let i=0;i<n;i++){let key="";for(let j=0;j<7;j++)key+=u32[i*7+j]+",";let id=map.get(key);if(id===undefined){id=uniq.length;map.set(key,id);uniq.push(i);}idx[i]=id;}
  const u=uniq.length;const planes=new Float32Array(u*7);
  for(let j=0;j<7;j++)for(let v=0;v<u;v++)planes[j*u+v]=a[uniq[v]*7+j];
  // byte-shuffle the float planes for better compression
  const pb=new Uint8Array(planes.buffer);const sh=new Uint8Array(pb.length);const cnt=u*7;
  for(let b=0;b<4;b++)for(let i=0;i<cnt;i++)sh[b*cnt+i]=pb[i*4+b];
  const d=new Uint32Array(n);let prev=0;for(let i=0;i<n;i++){const delta=idx[i]-prev;prev=idx[i];d[i]=(delta<<1)^(delta>>31);}
  header.push(u,n);parts.push(Buffer.from(sh.buffer),Buffer.from(d.buffer));}
const h=Buffer.alloc(12+header.length*4);h.write("DALA",0);h.writeUInt32LE(1,4);h.writeUInt32LE(names.length,8);header.forEach((v,i)=>h.writeUInt32LE(v,12+i*4));
const raw=Buffer.concat([h,...parts]);const gz=zlib.gzipSync(raw,{level:9});
fs.writeFileSync(out,gz);console.log(src,"raw",raw.length,"gz",gz.length);
