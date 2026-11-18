import bpy, math, random, json, sys
from pathlib import Path
from mathutils import Vector

project = Path(__file__).resolve().parent
dist = project / "dist"
out = Path(sys.argv[sys.argv.index("--")+1]) if "--" in sys.argv else project / "blender"
episode = sys.argv[sys.argv.index("--")+2] if "--" in sys.argv and len(sys.argv)>sys.argv.index("--")+2 else "1465"
if episode not in {"1465","1643","1723"}:
    raise ValueError("Episode must be 1465, 1643 or 1723")
slug = {"1465":"qozybasy","1643":"orbulak","1723":"karatau"}[episode]
dist = dist / slug  # әр 3D саяхаттың өз бумасы: dist/qozybasy, dist/orbulak, dist/karatau
dist.mkdir(parents=True, exist_ok=True)
out.mkdir(parents=True, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
rng = random.Random(1465)
materials = {}
def mat(name, color):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1)
    m.use_nodes = True
    shader = m.node_tree.nodes.get("Principled BSDF")
    shader.inputs["Base Color"].default_value = (*color, 1)
    shader.inputs["Roughness"].default_value = .84
    materials[name] = m
    return m

def textured(material, dark, light, scale, bump=.10):
    nodes=material.node_tree.nodes
    links=material.node_tree.links
    bsdf=nodes.get("Principled BSDF")
    coords=nodes.new("ShaderNodeTexCoord")
    noise=nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value=scale
    noise.inputs["Detail"].default_value=3.0
    ramp=nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color=(*dark,1)
    ramp.color_ramp.elements[1].color=(*light,1)
    relief=nodes.new("ShaderNodeBump")
    relief.inputs["Strength"].default_value=bump
    relief.inputs["Distance"].default_value=.13
    links.new(coords.outputs["Object"],noise.inputs["Vector"])
    links.new(noise.outputs["Fac"],ramp.inputs["Fac"])
    links.new(ramp.outputs["Color"],bsdf.inputs["Base Color"])
    links.new(noise.outputs["Fac"],relief.inputs["Height"])
    links.new(relief.outputs["Normal"],bsdf.inputs["Normal"])

base_land = {"1465":(.28,.245,.131),"1643":(.19,.228,.161),"1723":(.34,.245,.142)}[episode]
land = [(base_land[0]+i*.017,base_land[1]+i*.012,base_land[2]+i*.008) for i in range(11)]
sand = [mat("Дала " + str(i), c) for i,c in enumerate(land)]
for material,color in zip(sand,land):
    textured(material,tuple(v*.58 for v in color),tuple(v*1.24 for v in color),5.0,.24)
cream = mat("Ақ киіз",(.69,.59,.43))
roof = mat("Үзік",(.77,.68,.51))
trim = mat("Өрнек",(.29,.111,.062))
wood = mat("Ағаш",(.16,.085,.043))
felt = mat("Өңделген ағаш",(.22,.30,.25))
gold = mat("Белгі",(.70,.42,.16))
water = mat("Шу өзені",(.048,.20,.20))
grass = mat("Жусан",(.20,.245,.104))
dry_grass = mat("Боз",(.36,.31,.141))
stone = mat("Тас",(.33,.29,.23))
hills = [mat("Тау "+str(i), c) for i,c in enumerate([(.27,.30,.258),(.34,.36,.31),(.36,.36,.318),(.285,.31,.29)])]
for material,color,scale in [(cream,(.69,.59,.43),37),(roof,(.77,.68,.51),43),(wood,(.16,.085,.043),15),(stone,(.33,.29,.23),7)]:
    textured(material,tuple(v*.59 for v in color),tuple(v*1.19 for v in color),scale,.16)
textured(water,(.025,.09,.087),(.13,.26,.22),3.1,.13)
water.node_tree.nodes.get("Principled BSDF").inputs["Roughness"].default_value=.23

def apply(obj, name, material):
    obj.name = name
    obj.data.materials.append(material)
    return obj
def cone(name,x,y,z,r1,r2,depth,material,n=16):
    bpy.ops.mesh.primitive_cone_add(vertices=n,radius1=r1,radius2=r2,depth=depth,location=(x,y,z))
    return apply(bpy.context.object,name,material)
def box(name,x,y,z,sx,sy,sz,material,rotation=0):
    bpy.ops.mesh.primitive_cube_add(size=1,location=(x,y,z),rotation=(0,0,rotation))
    o = bpy.context.object
    o.scale = (sx,sy,sz)
    return apply(o,name,material)
def mesh(name,verts,faces,palette):
    data = bpy.data.meshes.new(name)
    data.from_pydata(verts,[],faces)
    data.update()
    o = bpy.data.objects.new(name,data)
    bpy.context.collection.objects.link(o)
    for material in palette: data.materials.append(material)
    return o

def height(x,y):
    t = max(0,min(1,(abs(x)-13)/25 + max(0,(y-9)/26)))
    return .12*math.sin(x*.33)*math.cos(y*.25)+t*(.3+1.9*math.sin(x*.25+y*.19)**2)
def river_x(y):
    return 15+3*math.sin(y*.11)
def earth(x,y):
    depth=max(0,min(1,(2.95-abs(x-river_x(y)))/.95))
    elevation=height(x,y)*(1-depth)-.46*depth
    if episode=="1643":
        elevation -= .82*math.exp(-((y-(10.2+.18*x))/.73)**4)*max(0,min(1,(9-abs(x))/2))
    return elevation
def smooth(obj):
    for polygon in obj.data.polygons: polygon.use_smooth=True
    return obj
def surface():
    width=101
    verts=[(x*.8,y*.8,earth(x*.8,y*.8)) for y in range(-35,61) for x in range(-50,51)]
    faces=[(j*width+i,j*width+i+1,(j+1)*width+i+1,(j+1)*width+i)
        for j in range(95) for i in range(100)]
    o=smooth(mesh("Дала бедері",verts,faces,sand))
    for polygon in o.data.polygons:
        x,y,_=polygon.center
        pattern=1.55*math.sin(x*.41+y*.16)+1.32*math.cos(y*.51-x*.22)+.48*math.sin(x*1.4+y*.72)
        trail=1.65*math.exp(-((y-(-.58*x+2.6))/1.02)**2)*max(0,1-abs(x-4)/14)
        polygon.material_index=max(0,min(10,round(5+pattern+trail)))
surface()

river=[]
for i in range(153):
    y=-28+i*.5
    x=river_x(y)
    width=2.45+.12*math.sin(y*.43)
    river += [(x-width,y,.105),(x+width,y,.105)]
mesh("Шу өзені",river,[(i,i+1,i+3,i+2) for i in range(0,304,2)],[water])

profiles={"1465":[(39,8.5),(54,13.0),(72,15.6),(90,19.5)],
          "1643":[(36,16.8),(47,21.1),(66,26.8),(87,31.0)],
          "1723":[(46,6.5),(60,8.1),(79,11.8),(96,16.5)]}
for row, (distance, amplitude) in enumerate(profiles[episode]):
    verts=[]
    for i in range(97):
        x=-86+i*1.8
        crest=distance+3.5*math.sin(x*.082+row*1.7)+1.4*math.sin(x*.23)
        ridge=amplitude*(.46+.28*math.sin(x*.10+row)+.16*math.sin(x*.22+row*.7)+.09*math.sin(x*.49))
        for j in range(9):
            f=j/8
            y=crest+(f-.53)*25
            z=.35+ridge*math.sin(math.pi*f)**1.3+(math.sin(x*.8+f*15)*.55+math.sin(x*.25+f*11)*.47)*math.sin(math.pi*f)
            verts.append((x,y,z))
    faces=[(i*9+j,(i+1)*9+j,(i+1)*9+j+1,i*9+j+1) for i in range(96) for j in range(8)]
    smooth(mesh("Тау жотасы",verts,faces,[hills[row]]))

def shell(name,x,y,levels,palette,angle,door=False):
    n=64
    vertices=[]
    for radius,z in levels:
        for i in range(n):
            a=angle+(i+.5)*math.tau/n
            ripple=1+.006*math.sin(i*1.41)
            vertices.append((x+math.sin(a)*radius*ripple,y-math.cos(a)*radius*ripple,z+.012*math.sin(i*.67)))
    faces=[]
    sections=[]
    for j in range(len(levels)-1):
        for i in range(n):
            if door and (i <= 1 or i >= n-3): continue
            k=(i+1)%n
            faces.append((j*n+i,j*n+k,(j+1)*n+k,(j+1)*n+i))
            sections.append(j)
    o=smooth(mesh(name,vertices,faces,palette))
    if len(palette)>1:
        for polygon,idx in zip(o.data.polygons,sections):
            polygon.material_index=idx%len(palette)
    return o

def rope(name,points,radius,material):
    curve=bpy.data.curves.new(name,"CURVE")
    curve.dimensions="3D"
    curve.bevel_depth=radius
    curve.bevel_resolution=0
    spline=curve.splines.new("POLY")
    spline.points.add(len(points)-1)
    for point,co in zip(spline.points,points): point.co=(*co,1)
    obj=bpy.data.objects.new(name,curve)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(material)
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active=obj
    bpy.ops.object.convert(target="MESH")
    return bpy.context.object

def furnished_yurt(x,y,r,g):
    russet=mat("Текемет · қызыл жүн",(.32,.077,.045))
    wheat=mat("Текемет · ашық жүн",(.64,.45,.22))
    midnight=mat("Басқұр · қара көк",(.065,.135,.125))
    leather=mat("Торсық · иленген тері",(.24,.104,.047))
    brass=mat("Сандық · жез ілгек",(.53,.32,.102))
    for material,color in [(russet,(.32,.077,.045)),(wheat,(.64,.45,.22)),(leather,(.24,.104,.047))]:
        textured(material,tuple(v*.68 for v in color),tuple(v*1.24 for v in color),43,.12)

    cone("Киіз төсеніш",x,y,g+.089,r*.965,r*.965,.034,cream,48)
    box("Текемет · жиек",x,y-.22,g+.121,1.52,1.48,.025,midnight)
    box("Текемет · өріс",x,y-.22,g+.138,1.39,1.34,.016,russet)
    for i in (-1,0,1):
        for j in (-1,0,1):
            ox,oy=x+.37*i,y-.22+.36*j
            box("Текемет · ромб",ox,oy,g+.148,.214,.214,.006,wheat,math.pi/4)
            box("Текемет · өзек",ox,oy,g+.152,.095,.095,.005,midnight,math.pi/4)
    for side in (-1,1):
        for i in range(10):
            box("Текемет · шашақ",x+.14*(i-4.5),y-.22+side*.76,g+.123,.032,.15,.011,wheat)

    cx,cy=x-.92,y+.84
    box("Ағаш сандық · қорап",cx,cy,g+.31,.86,.48,.40,wood,.16)
    box("Ағаш сандық · қақпақ",cx,cy,g+.529,.92,.54,.08,leather,.16)
    for side in (-1,1):
        box("Сандықтың жиегі",cx+.32*side,cy-.249+.051*side,g+.319,.062,.04,.39,brass,.16)
    box("Сандықтың ілгегі",cx,cy-.274,g+.435,.097,.041,.118,brass,.16)
    box("Сандықтың астындағы жүкаяқ",cx,cy,g+.112,.97,.60,.091,wood,.16)
    for i in range(3):
        box("Жиналған көрпе",cx+.02*i,cy,g+.59+i*.075,.76-.06*i,.42,.079,(midnight,russet,wheat)[i],.15)

    tx,ty=x+1.15,y+.43
    cone("Аласа ағаш тұғыр",tx,ty,g+.14,.37,.40,.10,wood,24)
    for xx,yy in ((tx,ty),(tx+.29,ty-.17)):
        shell("Торсық",xx,yy,[(.075,g+.192),(.125,g+.219),(.16,g+.34),(.138,g+.47),(.067,g+.56),(.047,g+.645),(.038,g+.652)],[leather],0)
        cone("Торсық тығыны",xx,yy,g+.665,.041,.047,.047,wood,14)
        rope("Торсық бауы",[(xx+.035,yy,g+.627),(xx+.16,yy+.028,g+.60),(xx+.22,yy+.03,g+.49),(xx+.153,yy+.025,g+.37)],.013,wheat)
    for i in range(2):
        xx=tx-.13+i*.22
        shell("Ағаш тостаған",xx,ty-.45,[(.071,g+.118),(.104,g+.148),(.13,g+.205),(.108,g+.206),(.073,g+.149),(.008,g+.147)],[wood],0)

    for i in range(19):
        a=.44+i*math.tau/20
        rope("Иілген уық",[(x+math.sin(a)*r*f,y-math.cos(a)*r*f,g+z) for f,z in [(0.965,1.27),(.91,1.57),(.76,1.77),(.53,1.95),(.274,2.103)]],.020,wood)
    shell("Басқұр · ішкі жиек",x,y,[(r*.955,g+1.20),(r*.954,g+1.33)],[midnight],.12,True)
    for i in range(29):
        a=.12+(i+2)*math.tau/33
        box("Басқұр өрнегі",x+math.sin(a)*r*.949,y-math.cos(a)*r*.949,g+1.264,.085,.024,.066,wheat,a)

def yurt(x,y,r,angle):
    g=height(x,y)
    opened=r>2
    shell("Туырлық · жүн киіз",x,y,[(r*.98,g-.12),(r,g+.22),(r*1.013,g+1.19),(r*.99,g+1.42)],[cream],angle,opened)
    shell("Үзік · күмбез",x,y,[(r*1.016,g+1.38),(r*.925,g+1.63),(r*.79,g+1.83),(r*.55,g+2.01),(r*.28,g+2.14)],[roof],angle)
    shell("Шаңырақ шеңбері",x,y,[(r*.28,g+2.13),(r*.282,g+2.22),(r*.241,g+2.22),(r*.241,g+2.13)],[wood],angle)
    for i in range(-1,2):
        offset=i*r*.125
        half=r*.235
        rope("Шаңырақ күлдіреуіші",[(x+offset,y-half,g+2.19),(x+offset,y,g+2.29),(x+offset,y+half,g+2.19)],.022,wood)
    shell("Туырлық бауы",x,y,[(r*1.014,g+.44),(r*1.017,g+.47)],[trim],angle,opened)
    shell("Туырлықтың жоғарғы бауы",x,y,[(r*1.017,g+1.04),(r*1.02,g+1.071)],[trim],angle,opened)
    for i in range(5):
        a=angle+.74+i*math.tau/5
        rope("Бас арқан",[(x+math.sin(a)*r*f,y-math.cos(a)*r*f,g+z) for f,z in [(1,.11),(1.022,1.41),(.935,1.64),(.80,1.84),(.56,2.02),(.29,2.15)]],.014,trim)
    dx,dy=math.sin(angle)*r,-math.cos(angle)*r
    ox,oy=math.cos(angle),math.sin(angle)
    for side in (-1,1):
        edge=r*.236
        box("Босаға",x+dx+side*ox*edge,y+dy+side*oy*edge,g+.62,.078,.17,1.32,wood,angle)
    box("Маңдайша",x+dx,y+dy,g+1.26,r*.51,.18,.115,wood,angle)
    box("Табалдырық",x+dx,y+dy,g+.05,r*.50,.21,.115,wood,angle)
    if opened:
        for side in (-1,1):
            box("Ашық сықырлауық",x+dx+side*ox*r*.23+dx*.10,y+dy+side*oy*r*.23+dy*.10,g+.61,.43,.045,1.11,felt,angle+side*1.1)
        furnished_yurt(x,y,r,g)
        for i in range(12):
            a=i*math.tau/12+.48
            b=a+.30
            if math.cos(a-angle)>.88: continue
            for start,end in [(a,b),(b,a)]:
                rope("Кереге көзі",[(x+r*.958*math.sin(start),y-r*.958*math.cos(start),g+.13),(x+r*.958*math.sin(end),y-r*.958*math.cos(end),g+1.28)],.021,wood)
    else:
        for i in range(6):
            t=(i-2.5)*r*.074
            box("Сықырлауық тақтайы",x+dx*1.02+t*ox,y+dy*1.02+t*oy,g+.64,r*.070,.054,1.13,felt if i%2==0 else wood,angle)

yurts = {
    "1465":[(-4,4,2.1,.12),(3,7,1.8,-.23),(-10,10,1.52,.22),(1,14,1.6,.19),(7,12,1.5,-.36),(5,-4,1.35,-.35),(-9,-4,1.45,.28)],
    "1643":[(3,7,1.8,-.23),(5,-4,1.35,-.35)],
    "1723":[(-4,4,2.1,.12),(-10,10,1.52,.22),(7,12,1.5,-.36),(-9,-4,1.45,.28)]
}[episode]
for entry in yurts:
    yurt(*entry)

if episode=="1643":
    for i in range(22):
        x=-7.7+i*.69
        y=10.2+.18*x-.94
        z=height(x,y)
        box("Ор жиегіндегі шым",x,y,z+.11,.71,.50,.24,sand[2],.18)
        if i%2==0:
            cone("Бекініс қазығы",x,y-.22,z+.35,.048,.034,.69,wood,7).rotation_euler.x=.16
    for side in (-1,1):
        for i in range(26):
            y=-7+i*1.54
            x=side*(20+.23*i+1.7*math.sin(i*.45))
            radius=3.1+1.8*math.sin(i*.82)**2
            bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2,radius=radius,location=(x,y,1.3+2*math.sin(i*.4)**2))
            rock=apply(bpy.context.object,"Шатқалдың жартасы",hills[i%4])
            rock.scale=(1.15,1.12,1.45)
            rock.rotation_euler.z=i*.73

if episode=="1723":
    for x,y,angle in [(-7.9,4.7,.18),(4.4,-2.2,-.36),(6.1,7.2,.30),(-.9,13.0,-.2)]:
        z=height(x,y)
        box("Арба едені",x,y,z+.63,1.18,1.75,.12,wood,angle)
        for side in (-1,1):
            dx,dy=side*.68*math.cos(angle),side*.68*math.sin(angle)
            wheel=cone("Арба дөңгелегі",x+dx,y+dy,z+.46,.45,.45,.09,wood,20)
            wheel.rotation_euler=(0,math.pi/2,angle)
            hub=cone("Арба күпшегі",x+dx*1.08,y+dy*1.08,z+.46,.12,.12,.14,stone,12)
            hub.rotation_euler=(0,math.pi/2,angle)
            box("Арба ернеуі",x+dx*.84,y+dy*.84,z+.81,.11,1.67,.25,wood,angle)
        for i in range(3):
            box("Арбадағы буылған жүк",x+.08*i,y-.41+i*.40,z+.89,.88,.41,.30,(cream,roof,trim)[i],angle)
        for side in (-1,1):
            box("Арба жетегі",x+side*.40,y-1.26,z+.54,.09,1.09,.08,wood,angle)


for x,y in ([(-5.6,2.1),(2.8,4.6),(10.1,8.5)] if episode=="1465" else [(4.6,3.7),(7.3,5.4),(9.4,6.9)]):
    g=height(x,y)
    cone("Белгі тұғыры",x,y,g+.09,.38,.31,.18,stone,9)
    cone("Жалау бағанасы",x,y,g+1.03,.055,.05,2.05,wood,9)
    box("Бағыт жалауы",x+.29,y,g+1.78,.61,.065,.45,felt)
    box("Жалау өрнегі",x+.31,y-.038,g+1.78,.19,.018,.21,gold)
    cone("Бағана ұшы",x,y,g+2.08,.10,0,.19,gold,8)

tufts=[]
blades=[]
for i in range(3000):
    x,y=rng.uniform(-36,37),rng.uniform(-25,38)
    bank=abs(x-river_x(y))
    if bank<2.78 or (abs(x)<12 and -8<y<15 and rng.random()<.64): continue
    if any(math.hypot(x-cx,y-cy)<r+.28 for cx,cy,r in [(-4,4,2.1),(3,7,1.8),(-10,10,1.52),(1,14,1.6),(7,12,1.5),(5,-4,1.35),(-9,-4,1.45)]): continue
    g=earth(x,y)
    for _ in range(rng.randint(3,5)):
        a=rng.random()*math.tau
        dx,dy=math.cos(a),math.sin(a)
        tall=rng.uniform(.15,.34)*(1.7 if bank<3.9 else 1)
        spread=rng.uniform(.04,.19)
        k=len(tufts)
        tufts.extend([(x-dy*.021,y+dx*.021,g-.024),(x+dy*.021,y-dx*.021,g-.024),(x+dx*spread,y+dy*spread,g+tall)])
        blades.append((k,k+1,k+2))
o=mesh("Жусан, боз және жағалау қамысы",tufts,blades,[grass,dry_grass])
for polygon in o.data.polygons: polygon.material_index=rng.randrange(2)
for i in range(30):
    x,y=rng.uniform(-25,28),rng.uniform(-19,25)
    if abs(x-15-3*math.sin(y*.11))<3: continue
    size=rng.uniform(.16,.54)
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1,radius=size,location=(x,y,height(x,y)+.025))
    o=apply(bpy.context.object,"Малта тас",stone)
    o.scale=(1,.7,.48)
    o.rotation_euler=(rng.random()*.45,rng.random()*.4,rng.random()*math.tau)

for rock in list(bpy.context.scene.objects):
    if rock.name.startswith("Малта тас") and math.hypot(rock.location.x+4,rock.location.y-4)<2.08:
        bpy.data.objects.remove(rock,do_unlink=True)

skin = [mat("Адам терісі "+str(i), c) for i,c in enumerate([(.67,.41,.23),(.74,.49,.29),(.59,.35,.21),(.78,.52,.32)])]
cloth = [mat("Шапан "+str(i), c) for i,c in enumerate([(.16,.36,.33),(.47,.18,.13),(.18,.26,.42),(.45,.30,.13),(.25,.37,.20),(.46,.29,.36),(.59,.43,.19)])]
lining = mat("Кесте",(.80,.61,.34))
hair = mat("Шаш",(.15,.092,.060))
silver = mat("Ақ сақал",(.55,.49,.40))

def ellipsoid(name,x,y,z,sx,sy,sz,material):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=8,radius=1,location=(x,y,z))
    obj=apply(bpy.context.object,name,material)
    obj.scale=(sx,sy,sz)
    return smooth(obj)

def limb(name,start,end,wide,narrow,material):
    start,end=Vector(start),Vector(end)
    middle=(start+end)/2
    obj=cone(name,*middle,wide,narrow,(end-start).length,material,9)
    obj.rotation_euler=(end-start).to_track_quat("Z","Y").to_euler()
    return smooth(obj)

def person(name,x,y,index,angle=0,elder=False,hat="cap",scale=1):
    before=set(bpy.context.scene.objects)
    g=height(x,y)
    coat=cloth[index%len(cloth)]
    face=skin[index%4]
    cone(name+" · шапан етегі",0,0,.67,.33,.245,.55,coat,12)
    torso=cone(name+" · шапан",0,0,1.06,.245,.315,.45,coat,12)
    torso.scale.y=.72
    cone(name+" · белдік",0,0,.91,.249,.247,.076,lining,12).scale.y=.84
    box(name+" · өңір",0,-.186,1.08,.035,.039,.40,lining)
    box(name+" · белдік тоғасы",0,-.211,.91,.10,.045,.067,wood)
    if index in (0,2,6):
        box(name+" · былғары дорба",.222,-.079,.79,.135,.16,.22,wood,.14)
    cone(name+" · мойын",0,0,1.35,.088,.09,.15,face,10)
    ellipsoid(name+" · бас",0,-.012,1.53,.163,.143,.202,face)
    ellipsoid(name+" · мұрын",0,-.155,1.52,.036,.037,.047,face)
    ellipsoid(name+" · ерін",0,-.148,1.463,.046,.012,.011,trim)
    ellipsoid(name+" · иек",0,-.086,1.405,.085,.063,.045,face)
    # Layered collar, coat edging and fasteners keep every character fully dressed.
    limb(name+" · жаға сол",(-.09,-.115,1.32),(-.028,-.208,1.12),.025,.021,lining)
    limb(name+" · жаға оң",(.09,-.115,1.32),(.028,-.208,1.12),.025,.021,lining)
    for row in range(4):
        ellipsoid(name+" · ілгек "+str(row),.045,-.211,1.22-row*.065,.012,.012,.012,gold)
    for side in (-1,1):
        ellipsoid(name+" · бет",side*.096,-.106,1.50,.060,.040,.053,face)
        ellipsoid(name+" · көз ағы",side*.058,-.144,1.568,.021,.012,.014,lining)
        ellipsoid(name+" · иық",side*.235,0,1.225,.107,.107,.114,coat)
        limb(name+" · аяқ шалбар",(side*.14,0,.57),(side*.14,-.012,.31),.095,.083,coat)
        cone(name+" · етік қонышы",side*.14,0,.24,.087,.091,.22,hair,12)
        box(name+" · етік табаны",side*.14,-.065,.035,.194,.29,.035,wood)
        cone(name+" · жең білезік",side*.366,-.045,.83,.083,.084,.055,lining,12)
        ellipsoid(name+" · қол бас бармақ",side*.315,-.084,.77,.025,.034,.045,face)
        for finger in range(4):
            ellipsoid(name+" · қол саусақ "+str(finger),side*(.335+finger*.019),-.067,.697,.010,.019,.033,face)
    for row in range(7):
        for side in (-1,1):
            ellipsoid(name+" · етек өрнегі",side*(.07+row*.025),-.244,.46,.008,.012,.013,lining)
    for side in (-1,1):
        ellipsoid(name+" · көз",side*.058,-.143,1.568,.018,.011,.011,hair)
        box(name+" · қас",side*.058,-.146,1.592,.036,.013,.010,hair,.1*side)
        ellipsoid(name+" · құлақ",side*.151,-.01,1.52,.032,.032,.05,face)
        limb(name+" · жең",(side*.245,0,1.225),(side*.366,-.045,.80),.118,.079,coat)
        ellipsoid(name+" · қол",side*.367,-.05,.76,.066,.062,.09,face)
        limb(name+" · аяқ",(side*.14,0,.54),(side*.14,0,.14),.106,.081,wood)
        ellipsoid(name+" · етік",side*.14,-.061,.10,.101,.165,.096,hair)
    if elder:
        ellipsoid(name+" · сақал",0,-.102,1.432,.125,.079,.122,silver if index==1 else hair)
    if hat=="scarf":
        ellipsoid(name+" · бас орамал",0,.019,1.635,.177,.161,.139,lining)
        ellipsoid(name+" · жаулық",0,.1,1.44,.18,.106,.24,lining)
    else:
        cone(name+" · бөрік жиегі",0,0,1.665,.185,.182,.092,hair,12)
        cone(name+" · бөрік",0,0,1.773,.18,.063,.17,coat,12)
        ellipsoid(name+" · төбе",0,0,1.86,.069,.067,.04,lining)
    group=bpy.data.objects.new(name,None)
    bpy.context.collection.objects.link(group)
    for obj in set(bpy.context.scene.objects)-before-{group}: obj.parent=group
    # Photographic face projection is stored in both the Blender file and browser mesh.
    photo_index=0 if "шабарман" in name.lower() else 1 if hat=="scarf" else 2 if elder else 4
    if any(n in name for n in ("Керей","Жәнібек","Жәңгір")): photo_index=3
    if any(n in name for n in ("Күләй","Зере","Жолаушы")): photo_index=5
    group["photo_index"]=photo_index
    face_path=project/"dist/assets/cinema/portraits.jpg"
    if face_path.exists():
        photo=bpy.data.images.load(str(face_path),check_existing=True)
        photo.pack()
        photo_material=bpy.data.materials.get("Кино бет "+str(photo_index))
        if not photo_material:
            photo_material=mat("Кино бет "+str(photo_index),tuple(face.diffuse_color[:3]))
            tex=photo_material.node_tree.nodes.new("ShaderNodeTexImage");tex.image=photo
            photo_material.node_tree.links.new(tex.outputs["Color"],photo_material.node_tree.nodes.get("Principled BSDF").inputs["Base Color"])
        for obj in group.children:
            part=obj.name.split(" · ")[-1]
            if part.startswith(("көз","қас","мұрын","бет","иек","ерін","сақал")):obj.hide_render=True
            if not part.startswith(("бас","мұрын","бет","иек","ерін")) or part.startswith("бас орамал"): continue
            if obj.type!="MESH":continue
            obj["photo_face"]=True
            uv=obj.data.uv_layers.new(name="Кино бет UV")
            for loop in obj.data.loops:
                local=obj.matrix_local @ obj.data.vertices[loop.vertex_index].co
                u=max(0,min(1,(local.x+.163)/.326));v=max(0,min(1,(local.z-1.328)/.404))
                uv.data[loop.index].uv=((photo_index%3+.36+u*.32)/3,1-(photo_index//3+.10+(1-v)*.50)/2)
            obj.data.materials.append(photo_material)
            for polygon in obj.data.polygons:
                center=obj.matrix_local @ polygon.center
                if center.y < -.035:polygon.material_index=len(obj.data.materials)-1
    group.location=(x,y,g)
    group.rotation_euler.z=angle
    group.scale=(scale,)*3
    return group

if episode=="1465":
    person("Айша · қоныс тұрғыны",-1.6,-3.0,5,.34,hat="scarf")
    person("Мерген · жол бастаушы",-6.1,1.7,0,.17,elder=True)
    person("Сәуле · қоныс тұрғыны",2.6,4.3,4,-.25,hat="scarf")
    person("Ержан · өзен қарауылы",10.0,8.2,2,.58)
    person("Керей сұлтан",-2.3,10.0,1,-.30,elder=True,scale=1.12)
    person("Жәнібек сұлтан",2.2,11.0,2,.21,elder=True,scale=1.08)
else:
    lead_names={
        "1465":["Айша","Мерген","Сәуле","Ержан","Керей сұлтан","Жәнібек сұлтан"],
        "1643":["Қарауыл","Жолшы","Жасақ басы","Бақылаушы","Жәңгір хан","Көмек хабаршысы"],
        "1723":["Күләй","Жол бастаушы","Шебер","Су қараушы","Зере","Жолаушы"]
    }[episode]
    for i,(x,y,color,angle) in enumerate([(-1.6,-3,5,.34),(-6.1,1.7,0,.17),(2.6,4.3,4,-.25),(10,8.2,2,.58),(-2.3,10,1,-.30),(2.2,11,2,.21)]):
        actor=person(lead_names[i],x,y,color,angle,elder=i in (1,4,5),hat="scarf" if episode!="1643" and i in (0,2) else "cap")
        if episode=="1643":
            g=earth(x,y)
            actor.location.z=g
            for k in range(5):
                box("Қорғаныс киімінің қабаты",x,y-.145,g+.82+k*.086,.40-k*.014,.09,.075,stone,angle)
            spear=cone("Сапты найза",x+.54,y,g+1.11,.022,.019,2.22,wood,8)
            cone("Найза ұшы",x+.54,y,g+2.28,.064,0,.20,stone,8)
if episode!="1643":
    person("Шебер",-8.6,7.3,3,.30)
    person("Малшы",7.6,4.0,4,-.65)
    person("Бала",.1,5.0,6,.2,scale=.68)
    person("Киіз басушы",-6.7,8.4,5,-.45,hat="scarf")
    person("Жолаушы",1.5,-2.1,3,-.5)
player = person("Жас шабарман · ойыншы",0,-7,6,math.pi)

def pack_horse():
    before=set(bpy.context.scene.objects)
    horse=mat("Жылқы",(.34,.19,.11))
    mane=mat("Жал",(.12,.085,.06))
    saddle=mat("Қоржын",(.25,.34,.28))
    ellipsoid("Жылқының денесі",0,0,1.12,.37,.76,.39,horse)
    limb("Мойын",(0,-.40,1.19),(0,-.77,1.85),.29,.17,horse)
    ellipsoid("Жылқының басы",0,-.83,1.81,.177,.29,.17,horse).rotation_euler.x=.29
    ellipsoid("Тұмсық",0,-1.02,1.71,.14,.16,.112,mane)
    for side in (-1,1):
        ellipsoid("Жылқының көзі",side*.157,-.84,1.85,.024,.025,.022,mane)
        limb("Құлақ",(side*.10,-.74,1.93),(side*.13,-.76,2.12),.068,.025,horse)
        for y in (-.48,.47):
            limb("Жылқының аяғы",(side*.22,y,.98),(side*.23,y,.39),.14,.072,horse)
            limb("Тұяқ",(side*.23,y,.39),(side*.23,y-.025,.09),.077,.079,mane)
        box("Жүк салынған қоржын",side*.34,.03,1.16,.28,.62,.43,saddle)
        box("Қоржын бауы",side*.49,.02,1.17,.035,.07,.43,lining)
    limb("Жал",(0,-.40,1.49),(0,-.64,1.96),.14,.09,mane)
    limb("Құйрық",(0,.65,1.19),(0,1.01,.48),.095,.035,mane)
    group=bpy.data.objects.new("Көштің жүк аты",None)
    bpy.context.collection.objects.link(group)
    for obj in set(bpy.context.scene.objects)-before-{group}: obj.parent=group
    group.location=(11.1,7.0,height(11.1,7.0))
    group.rotation_euler.z=-1.25
    return group
horse=pack_horse()
traveler=person("Көш жолаушысы",11.0,6.5,4,-1.25,hat="scarf")

for x,y in [(-1,3.0),(-7.0,7.3),(6.7,7.7)]:
    g=height(x,y)
    for i in range(8):
        a=math.tau*i/8
        cone("Ошақ тасы",x+.4*math.cos(a),y+.4*math.sin(a),g+.08,.13,.10,.15,stone,6)
    for a in (.3,1.4,2.4): box("Отын",x,y,g+.09,.54,.11,.10,wood,a)
    cone("От",x,y,g+.29,.21,0,.47,trim,6)
    cone("Жалын",x+.05,y-.02,g+.24,.14,0,.37,gold,6)

bpy.context.view_layer.update()
vertices=[]
player_vertices=[]
horse_vertices=[]
traveler_vertices=[]
actors={player:player_vertices,horse:horse_vertices,traveler:traveler_vertices}
sun_dir=Vector((-.58,-.57,.59)).normalized()
for o in bpy.context.scene.objects:
    if o.type!="MESH": continue
    if o.parent and "photo_index" in o.parent and o.name.split(" · ")[-1].startswith(("көз","қас","мұрын","бет","иек","ерін","сақал")): continue
    parent=o.parent
    output=actors.get(parent,vertices)
    matrix=parent.matrix_world.inverted() @ o.matrix_world if parent in actors else o.matrix_world
    normal_matrix=matrix.to_3x3().inverted().transposed()
    o.data.calc_loop_triangles()
    for tri in o.data.loop_triangles:
        material=o.data.materials[tri.material_index]
        c=material.diffuse_color
        polygon=o.data.polygons[tri.polygon_index]
        for i in tri.vertices:
            p=matrix @ o.data.vertices[i].co
            normal=(normal_matrix @ (o.data.vertices[i].normal if polygon.use_smooth else tri.normal)).normalized()
            light=.52+.48*max(0,normal.dot(sun_dir))
            tag=0
            if o.name=="Дала бедері": tag=1
            elif o.name=="Шу өзені": tag=2
            elif material in (cream,roof,wood,trim): tag=3
            if parent in (player,traveler):
                name=o.name.split(" · ")[-1]
                if name.startswith(("аяқ","етік")): tag=10 if p.x>0 else -10
                if name.startswith(("жең","қол")): tag=11 if p.x>0 else -11
            elif parent==horse and o.name.startswith(("Жылқының аяғы","Тұяқ")):
                tag=12 if (p.x>0)==(p.y>0) else -12
            if parent and o.get("photo_face"):
                local_matrix=o.matrix_local
                center=local_matrix @ polygon.center
                if center.y < -.035:
                    local=local_matrix @ o.data.vertices[i].co
                    u=round(max(0,min(1,(local.x+.163)/.326))*511)
                    v=round(max(0,min(1,(local.z-1.328)/.404))*511)
                    tag=1000+int(parent.get("photo_index",0))*262144+u*512+v
            output.extend(round(a,3) for a in (p.x,p.z,-p.y,c[0]*light,c[1]*light,c[2]*light,tag))
sys.path.insert(0, str(project / "tools"))
from pack_mesh import pack
pack([vertices, player_vertices, horse_vertices, traveler_vertices], str(dist / "dala-mesh.bin"))

bpy.context.preferences.filepaths.save_version=0
scene=bpy.context.scene
camera_location,camera_target,camera_lens={
    "1465":((13.1,-19.6,6.9),(2.25,4,1.6),33),
    "1643":((-9.5,-5.3,4.25),(1.6,9.4,1.10),28),
    "1723":((9.0,-9.8,3.15),(-.55,2.3,1.15),28)
}[episode]
bpy.ops.object.camera_add(location=camera_location)
cam=bpy.context.object
cam.name={"1465":"Қозыбасы","1643":"Орбұлақ","1723":"Қаратау"}[episode]+" · көрініс"
cam.rotation_euler=(Vector(camera_target)-cam.location).to_track_quat('-Z','Y').to_euler()
cam.data.lens=camera_lens
scene.camera=cam
scene.render.engine='CYCLES'
scene.cycles.samples=18
scene.cycles.use_denoising=True
scene.cycles.adaptive_threshold=.10
scene.cycles.max_bounces=5
scene.render.threads_mode="FIXED"
scene.render.threads=4
bpy.ops.object.light_add(type="SUN",location=(-25,-24,27))
sun=bpy.context.object
sun.name="Батар күн"
sun.rotation_euler=Vector((.58,.57,-.59)).to_track_quat("-Z","Y").to_euler()
sun.data.energy=3.7
sun.data.angle=.085
sun.data.color={"1465":(1,.82,.62),"1643":(.86,.92,1),"1723":(1,.73,.49)}[episode]
if not scene.world: scene.world=bpy.data.worlds.new("Дала аспаны")
scene.world.use_nodes=True
background=scene.world.node_tree.nodes.get("Background")
sky=scene.world.node_tree.nodes.new("ShaderNodeTexSky")
sky.sky_type="MULTIPLE_SCATTERING"
sky.sun_disc=False
sky.sun_elevation=math.radians(23)
sky.sun_rotation=math.radians(235)
sky.air_density=.90
scene.world.node_tree.links.new(sky.outputs["Color"],background.inputs["Color"])
background.inputs["Strength"].default_value=.077
bpy.ops.mesh.primitive_plane_add(size=240,location=(0,47,-.55))
floor=bpy.context.object
floor.name="Алыстағы дала"
floor.data.materials.append(hills[0])
scene.view_settings.view_transform='AgX'
scene.render.resolution_x=1120
scene.render.resolution_y=700
scene.render.resolution_percentage=100
scene.render.image_settings.file_format='JPEG'
scene.render.image_settings.quality=90
scene.render.filepath=str(dist/(slug+".jpg"))
for screen in bpy.data.screens:
    for area in screen.areas:
        if area.type=="VIEW_3D":
            area.spaces.active.region_3d.view_perspective='CAMERA'
            area.spaces.active.shading.color_type='MATERIAL'
bpy.ops.wm.save_as_mainfile(filepath=str(out/({"1465":"Qozybasy","1643":"Orbulak","1723":"Karatau"}[episode]+"-"+episode+".blend")))
if "--mesh-only" not in sys.argv:
    bpy.ops.render.render(write_still=True)
