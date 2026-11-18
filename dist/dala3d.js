(()=>{var Za="170",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Ys=2;var tu=0,ui=1,mn=2;var xl=2;var ei=100,nu=101,iu=102;var ru=200,su=201,au=202,ou=203,Ja=204,Ka=205,lu=206,cu=207,hu=208,uu=209,du=210,pu=211,mu=212,fu=213,gu=214,_u=0,vu=1,yu=2,xu=3,Mu=4,Su=5,Eu=6,bu=7;var kn=4;var fh=300,Oi=301,Fi=302,$a=303,Qa=304,Zs=306,Yt=1e3,_r=1001,eo=1002,jt=1003,Tu=1004;var Br=1005;var Mn=1006,pa=1007;var Ii=1008;var Hn=1009,gh=1010,_h=1011,vr=1012,Ml=1013,ii=1014,an=1015,Lr=1016,Sl=1017,El=1018,Bi=1020,vh=35902,yh=1021,xh=1022,on=1023,Mh=1024,Sh=1025,yr=1026,zi=1027,bl=1028,Tl=1029,Eh=1030,wl=1031;var Al=1033,_s=33776,vs=33777,ys=33778,xs=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,lo=37808,co=37809,ho=37810,uo=37811,po=37812,mo=37813,fo=37814,go=37815,_o=37816,vo=37817,yo=37818,xo=37819,Mo=37820,So=37821,Ms=36492,Eo=36494,bo=36495,bh=36283,To=36284,wo=36285,Ao=36286;var Ss=2300,Ro=2301,ma=2302,tc=2400,nc=2401,ic=2402;var Ci="",Qe="srgb",qi="srgb-linear",Js="linear",qe="srgb";var fi=7680;var wu=512,Au=513,Ru=514,Cu=515,Pu=516,Iu=517,Lu=518,Du=519,rc=35044;var sc="300 es",Hi=2e3,Es=2001,En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=1234567,Di=Math.PI/180,xr=180/Math.PI;function di(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(gt[255&i]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&t|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[255&n]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function pr(i,e,t){return(1-t)*i+t*e}function Pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Ks={DEG2RAD:Di,RAD2DEG:xr,generateUUID:di,clamp:lt,euclideanModulo:Co,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:pr,damp:function(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Co(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(ac=i);let e=ac+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Di},radToDeg:function(i){return i*xr},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:xt,denormalize:Pi},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],y=r[0],m=r[3],g=r[6],_=r[1],v=r[4],b=r[7],U=r[2],P=r[5],z=r[8];return s[0]=a*y+o*_+l*U,s[3]=a*m+o*v+l*P,s[6]=a*g+o*b+l*z,s[1]=c*y+h*_+d*U,s[4]=c*m+h*v+d*P,s[7]=c*g+h*b+d*z,s[2]=u*y+p*_+f*U,s[5]=u*m+p*v+f*P,s[8]=u*g+p*b+f*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+n*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=d*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fa=new Le;function Th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){let i=bs("canvas");return i.style.display="block",i}var oc={};function dr(i){i in oc||(oc[i]=!0,console.warn(i))}var Ve={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===qe&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===qe&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?Js:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Sn(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Ui(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var lc=[.64,.33,.3,.6,.15,.06],cc=[.2126,.7152,.0722],hc=[.3127,.329],uc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),gi;Ve.define({[qi]:{primaries:lc,whitePoint:hc,transfer:Js,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:lc,whitePoint:hc,transfer:qe,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});var Po=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=bs("canvas")),gi.width=e.width,gi.height=e.height;let n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Sn(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Sn(t[n]/255)):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nu=0,Ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ga(r[a].image)):s.push(ga(r[a]))}else s=ga(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ou=0,Et=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=di(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null,Et.DEFAULT_MAPPING=fh,Et.DEFAULT_ANISOTROPY=1;var je=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(p+1)/2,U=(g+1)/2,P=(h+u)/4,z=(d+y)/4,H=(f+m)/4;return v>b&&v>U?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=P/n,s=z/n):b>U?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=H/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=z/s,r=H/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends En{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ts(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ws=class extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ct=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],f=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(d!==y||l!==u||c!==p||h!==f){let m=1-o,g=l*u+c*p+h*f+d*y,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let U=Math.sqrt(v),P=Math.atan2(U,g*_);m=Math.sin(m*P)/U,o=Math.sin(o*P)/U}let b=o*_;if(l=l*m+u*b,c=c*m+p*b,h=h*m+f*b,d=d*m+y*b,m===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_a=new R,pc=new Ct,Zt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Hr.subVectors(this.max,nr),_i.subVectors(e.a,nr),vi.subVectors(e.b,nr),yi.subVectors(e.c,nr),Ln.subVectors(vi,_i),Dn.subVectors(yi,vi),qn.subVectors(_i,yi);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-qn.z,qn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,qn.z,0,-qn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-qn.y,qn.x,0];return!!va(t,_i,vi,yi,Hr)&&(t=[1,0,0,0,1,0,0,0,1],!!va(t,_i,vi,yi,Hr)&&(kr.crossVectors(Ln,Dn),t=[kr.x,kr.y,kr.z],va(t,_i,vi,yi,Hr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gn=[new R,new R,new R,new R,new R,new R,new R,new R],Gt=new R,zr=new Zt,_i=new R,vi=new R,yi=new R,Ln=new R,Dn=new R,qn=new R,nr=new R,Hr=new R,kr=new R,Yn=new R;function va(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Yn.fromArray(i,s);let o=r.x*Math.abs(Yn.x)+r.y*Math.abs(Yn.y)+r.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fu=new Zt,ir=new R,ya=new R,Jt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ya)),this.expandByPoint(ir.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new R,xa=new R,Gr=new R,Un=new R,Ma=new R,Vr=new R,Sa=new R,Tn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xa.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(xa);let s=.5*e.distanceTo(t),a=-this.direction.dot(Gr),o=Un.dot(this.direction),l=-Un.dot(Gr),c=Un.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xa).addScaledVector(Gr,u),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),r=_n.dot(_n)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,s){Ma.subVectors(t,e),Vr.subVectors(n,e),Sa.crossVectors(Ma,Vr);let a,o=this.direction.dot(Sa);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Un.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(Un,Vr));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(Un));if(c<0||l+c>o)return null;let h=-a*Un.dot(Sa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class i{constructor(e,t,n,r,s,a,o,l,c,h,d,u,p,f,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,p,f,y,m)}set(e,t,n,r,s,a,o,l,c,h,d,u,p,f,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,y=c*d;t[0]=u+y*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,y=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bu,e,zu)}lookAt(e,t,n){let r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Nn.crossVectors(n,At),Nn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Nn.crossVectors(n,At)),Nn.normalize(),Wr.crossVectors(At,Nn),r[0]=Nn.x,r[4]=Wr.x,r[8]=At.x,r[1]=Nn.y,r[5]=Wr.y,r[9]=At.y,r[2]=Nn.z,r[6]=Wr.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],y=n[6],m=n[10],g=n[14],_=n[3],v=n[7],b=n[11],U=n[15],P=r[0],z=r[4],H=r[8],G=r[12],X=r[1],q=r[5],k=r[9],Z=r[13],N=r[2],V=r[6],j=r[10],$=r[14],ne=r[3],he=r[7],pe=r[11],L=r[15];return s[0]=a*P+o*X+l*N+c*ne,s[4]=a*z+o*q+l*V+c*he,s[8]=a*H+o*k+l*j+c*pe,s[12]=a*G+o*Z+l*$+c*L,s[1]=h*P+d*X+u*N+p*ne,s[5]=h*z+d*q+u*V+p*he,s[9]=h*H+d*k+u*j+p*pe,s[13]=h*G+d*Z+u*$+p*L,s[2]=f*P+y*X+m*N+g*ne,s[6]=f*z+y*q+m*V+g*he,s[10]=f*H+y*k+m*j+g*pe,s[14]=f*G+y*Z+m*$+g*L,s[3]=_*P+v*X+b*N+U*ne,s[7]=_*z+v*q+b*V+U*he,s[11]=_*H+v*k+b*j+U*pe,s[15]=_*G+v*Z+b*$+U*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*d+t*o*u+r*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],y=e[13],m=e[14],g=e[15],_=d*m*c-y*u*c+y*l*p-o*m*p-d*l*g+o*u*g,v=f*u*c-h*m*c-f*l*p+a*m*p+h*l*g-a*u*g,b=h*y*c-f*d*c+f*o*p-a*y*p-h*o*g+a*d*g,U=f*d*l-h*y*l-f*o*u+a*y*u+h*o*m-a*d*m,P=t*_+n*v+r*b+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return e[0]=_*z,e[1]=(y*u*s-d*m*s-y*r*p+n*m*p+d*r*g-n*u*g)*z,e[2]=(o*m*s-y*l*s+y*r*c-n*m*c-o*r*g+n*l*g)*z,e[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*z,e[4]=v*z,e[5]=(h*m*s-f*u*s+f*r*p-t*m*p-h*r*g+t*u*g)*z,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*g-t*l*g)*z,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*z,e[8]=b*z,e[9]=(f*d*s-h*y*s-f*n*p+t*y*p+h*n*g-t*d*g)*z,e[10]=(a*y*s-f*o*s+f*n*c-t*y*c-a*n*g+t*o*g)*z,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*z,e[12]=U*z,e[13]=(h*y*r-f*d*r+f*n*u-t*y*u-h*n*m+t*d*m)*z,e[14]=(f*o*r-a*y*r-f*n*l+t*y*l+a*n*m-t*o*m)*z,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*u+t*o*u)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,y=a*h,m=a*d,g=o*d,_=l*c,v=l*h,b=l*d,U=n.x,P=n.y,z=n.z;return r[0]=(1-(y+g))*U,r[1]=(p+b)*U,r[2]=(f-v)*U,r[3]=0,r[4]=(p-b)*P,r[5]=(1-(u+g))*P,r[6]=(m+_)*P,r[7]=0,r[8]=(f+v)*z,r[9]=(m-_)*z,r[10]=(1-(u+y))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=xi.set(r[0],r[1],r[2]).length(),a=xi.set(r[4],r[5],r[6]).length(),o=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);let l=1/s,c=1/a,h=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),p,f;if(o===Hi)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Es)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*c,p=(n+r)*h,f,y;if(o===Hi)f=(a+s)*d,y=-2*d;else{if(o!==Es)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,y=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xi=new R,Vt=new Pe,Bu=new R(0,0,0),zu=new R(1,1,1),Nn=new R,Wr=new R,At=new R,mc=new Pe,fc=new Ct,ln=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Hu=0,gc=new R,Mi=new Ct,vn=new Pe,Xr=new R,rr=new R,ku=new R,Gu=new Ct,_c=new R(1,0,0),vc=new R(0,1,0),yc=new R(0,0,1),xc={type:"added"},Vu={type:"removed"},Si={type:"childadded",child:null},Ea={type:"childremoved",child:null},ft=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new ln,n=new Ct,r=new R(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Le}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(rr,Xr,this.up):vn.lookAt(Xr,rr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(vn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ft.DEFAULT_UP=new R(0,1,0),ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=new R,yn=new R,ba=new R,xn=new R,Ei=new R,bi=new R,Mc=new R,Ta=new R,wa=new R,Aa=new R,Ra=new je,Ca=new je,Pa=new je,Bn=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),yn.subVectors(n,t),ba.subVectors(e,t);let a=Wt.dot(Wt),o=Wt.dot(yn),l=Wt.dot(ba),c=yn.dot(yn),h=yn.dot(ba),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ca,s.y),a.addScaledVector(Pa,s.z),a}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),yn.subVectors(e,t),Wt.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),.5*Wt.cross(yn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ei.subVectors(r,n),bi.subVectors(s,n),Ta.subVectors(e,n);let l=Ei.dot(Ta),c=bi.dot(Ta);if(l<=0&&c<=0)return t.copy(n);wa.subVectors(e,r);let h=Ei.dot(wa),d=bi.dot(wa);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ei,a);Aa.subVectors(e,s);let p=Ei.dot(Aa),f=bi.dot(Aa);if(f>=0&&p<=f)return t.copy(s);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(bi,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Mc.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(Mc,o);let g=1/(m+y+u);return a=y*g,o=u*g,t.copy(n).addScaledVector(Ei,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=Co(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){let n=wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Ve.fromWorkingColorSpace(_t.copy(this),e),65536*Math.round(lt(255*_t.r,0,255))+256*Math.round(lt(255*_t.g,0,255))+Math.round(lt(255*_t.b,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(_t.copy(this),t);let n=_t.r,r=_t.g,s=_t.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Qe){Ve.fromWorkingColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,r=_t.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(jr);let n=pr(On.h,jr.h,t),r=pr(On.s,jr.s,t),s=pr(On.l,jr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Ae;Ae.NAMES=wh;var Wu=0,wn=class extends En{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=di(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Ka,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bt=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_m=Xu();function Xu(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new R,qr=new ce,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}};var As=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rs=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ju=0,Ut=new Pe,La=new ft,Ti=new R,Rt=new Zt,sr=new Zt,pt=new R,Ze=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Rs:As)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Rt.min,sr.min),Rt.expandByPoint(pt),pt.addVectors(Rt.max,sr.max),Rt.expandByPoint(pt)):(Rt.expandByPoint(sr.min),Rt.expandByPoint(sr.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),pt.add(Ti)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let H=0;H<n.count;H++)o[H]=new R,l[H]=new R;let c=new R,h=new R,d=new R,u=new ce,p=new ce,f=new ce,y=new R,m=new R;function g(H,G,X){c.fromBufferAttribute(n,H),h.fromBufferAttribute(n,G),d.fromBufferAttribute(n,X),u.fromBufferAttribute(s,H),p.fromBufferAttribute(s,G),f.fromBufferAttribute(s,X),h.sub(c),d.sub(c),p.sub(u),f.sub(u);let q=1/(p.x*f.y-f.x*p.y);isFinite(q)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(q),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(q),o[H].add(y),o[G].add(y),o[X].add(y),l[H].add(m),l[G].add(m),l[X].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let H=0,G=_.length;H<G;++H){let X=_[H],q=X.start;for(let k=q,Z=q+X.count;k<Z;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new R,b=new R,U=new R,P=new R;function z(H){U.fromBufferAttribute(r,H),P.copy(U);let G=o[H];v.copy(G),v.sub(U.multiplyScalar(U.dot(G))).normalize(),b.crossVectors(P,G);let X=b.dot(l[H])<0?-1:1;a.setXYZW(H,v.x,v.y,v.z,X)}for(let H=0,G=_.length;H<G;++H){let X=_[H],q=X.start;for(let k=q,Z=q+X.count;k<Z;k+=3)z(e.getX(k+0)),z(e.getX(k+1)),z(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let y=0,m=l.length;y<m;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let g=0;g<h;g++)u[f++]=c[p++]}return new vt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new Pe,Zn=new Tn,Yr=new Jt,Ec=new R,Zr=new R,Jr=new R,Kr=new R,Da=new R,$r=new R,bc=new R,Qr=new R,le=class extends ft{constructor(e=new Ze,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Da.fromBufferAttribute(d,e),a?$r.addScaledVector(Da,h):$r.addScaledVector(Da.sub(t),h))}t.add($r)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Zn.copy(e.ray).recast(e.near),Yr.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Yr,Ec)===null||Zn.origin.distanceToSquared(Ec)>(e.far-e.near)**2))return;Sc.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Sc),n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Zn)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=u.length;f<y;f++){let m=u[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)r=es(this,g,e,n,c,h,d,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);f<y;f+=3)r=es(this,a,e,n,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=u.length;f<y;f++){let m=u[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)r=es(this,g,e,n,c,h,d,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)r=es(this,a,e,n,c,h,d,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function es(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Zr),i.getVertexPosition(l,Jr),i.getVertexPosition(c,Kr);let h=function(d,u,p,f,y,m,g,_){let v;if(v=u.side===1?f.intersectTriangle(g,m,y,!0,_):f.intersectTriangle(y,m,g,u.side===0,_),v===null)return null;Qr.copy(_),Qr.applyMatrix4(d.matrixWorld);let b=p.ray.origin.distanceTo(Qr);return b<p.near||b>p.far?null:{distance:b,point:Qr.clone(),object:d}}(i,e,t,n,Zr,Jr,Kr,bc);if(h){let d=new R;Bn.getBarycoord(bc,Zr,Jr,Kr,d),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,c,d,new ce)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,d,new ce)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Bn.getNormal(Zr,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var Ke=class i extends Ze{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(y,m,g,_,v,b,U,P,z,H,G){let X=b/z,q=U/H,k=b/2,Z=U/2,N=P/2,V=z+1,j=H+1,$=0,ne=0,he=new R;for(let pe=0;pe<j;pe++){let L=pe*q-Z;for(let Q=0;Q<V;Q++){let Y=Q*X-k;he[y]=Y*_,he[m]=L*v,he[g]=N,c.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[g]=P>0?1:-1,h.push(he.x,he.y,he.z),d.push(Q/z),d.push(1-pe/H),$+=1}}for(let pe=0;pe<H;pe++)for(let L=0;L<z;L++){let Q=u+L+V*pe,Y=u+L+V*(pe+1),ie=u+(L+1)+V*(pe+1),se=u+(L+1)+V*pe;l.push(Q,Y,se),l.push(Y,ie,se),ne+=6}o.addGroup(p,ne,G),p+=ne,u+=$}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ki(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){let e={};for(let t=0;t<i.length;t++){let n=ki(i[t]);for(let r in n)e[r]=n[r]}return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var qu={clone:ki,merge:Mt},Nt=class extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Sr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new R,Tc=new ce,wc=new ce,nt=class extends Sr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*xr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Di*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*xr*Math.atan(Math.tan(.5*Di*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Tc,wc),t.subVectors(wc,Tc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Di*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wi=-90,Do=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nt(wi,1,e,t);r.layers=this.layers,this.add(r);let s=new nt(wi,1,e,t);s.layers=this.layers,this.add(s);let a=new nt(wi,1,e,t);a.layers=this.layers,this.add(a);let o=new nt(wi,1,e,t);o.layers=this.layers,this.add(o);let l=new nt(wi,1,e,t);l.layers=this.layers,this.add(l);let c=new nt(wi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Es)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Cs=class extends Et{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Oi,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uo=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ke(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new le(r,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Mn),new Do(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ua=new R,Yu=new R,Zu=new Le,Xt=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ua.subVectors(n,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zu.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new Jt,ts=new R,Gi=class{constructor(e=new Xt,t=new Xt,n=new Xt,r=new Xt,s=new Xt,a=new Xt){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],f=r[9],y=r[10],m=r[11],g=r[12],_=r[13],v=r[14],b=r[15];if(n[0].setComponents(l-s,u-c,m-p,b-g).normalize(),n[1].setComponents(l+s,u+c,m+p,b+g).normalize(),n[2].setComponents(l+a,u+h,m+f,b+_).normalize(),n[3].setComponents(l-a,u-h,m-f,b-_).normalize(),n[4].setComponents(l-o,u-d,m-y,b-v).normalize(),t===Hi)n[5].setComponents(l+o,u+d,m+y,b+v).normalize();else{if(t!==Es)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ts.x=r.normal.x>0?e.max.x:e.min.x,ts.y=r.normal.y>0?e.max.y:e.min.y,ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ju(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),d;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=i.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=i.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Ot=class i extends Ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],y=[],m=[];for(let g=0;g<h;g++){let _=g*u-a;for(let v=0;v<c;v++){let b=v*d-s;f.push(b,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let v=_+c*g,b=_+c*(g+1),U=_+1+c*(g+1),P=_+1+c*g;p.push(v,b,P),p.push(b,U,P)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ge={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},sn={basic:{uniforms:Mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Mt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Mt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Mt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Mt([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Mt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Mt([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Mt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Mt([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Mt([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Mt([ge.lights,ge.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};sn.physical={uniforms:Mt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ns={r:0,b:0,g:0},Kn=new ln,Ku=new Pe;function $u(i,e,t,n,r,s,a){let o=new Ae(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function y(m,g){m.getRGB(ns,Ah(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,y(o,h)},render:function(m){let g=!1,_=f(m);_===null?y(o,h):_&&_.isColor&&(y(_,1),g=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,g){let _=f(g);_&&(_.isCubeTexture||_.mapping===Zs)?(c===void 0&&(c=new le(new Ke(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:ki(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Kn.copy(g.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ku.makeRotationFromEuler(Kn)),c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==qe,d===_&&u===_.version&&p===i.toneMapping||(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new le(new Ot(2,2),new Nt({name:"BackgroundMaterial",uniforms:ki(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(_.colorSpace)!==qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),d===_&&u===_.version&&p===i.toneMapping||(l.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Qu(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function c(g){let _=[],v=[],b=[];for(let U=0;U<t;U++)_[U]=0,v[U]=0,b[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,v=g.length;_<v;_++)g[_]=0}function d(g){u(g,0)}function u(g,_){let v=s.newAttributes,b=s.enabledAttributes,U=s.attributeDivisors;v[g]=1,b[g]===0&&(i.enableVertexAttribArray(g),b[g]=1),U[g]!==_&&(i.vertexAttribDivisor(g,_),U[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let v=0,b=_.length;v<b;v++)_[v]!==g[v]&&(i.disableVertexAttribArray(v),_[v]=0)}function f(g,_,v,b,U,P,z){z===!0?i.vertexAttribIPointer(g,_,v,U,P):i.vertexAttribPointer(g,_,v,b,U,P)}function y(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,_,v,b,U){let P=!1,z=function(H,G,X){let q=X.wireframe===!0,k=n[H.id];k===void 0&&(k={},n[H.id]=k);let Z=k[G.id];Z===void 0&&(Z={},k[G.id]=Z);let N=Z[q];return N===void 0&&(N=c(i.createVertexArray()),Z[q]=N),N}(b,v,_);s!==z&&(s=z,o(s.object)),P=function(H,G,X,q){let k=s.attributes,Z=G.attributes,N=0,V=X.getAttributes();for(let j in V)if(V[j].location>=0){let $=k[j],ne=Z[j];if(ne===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(ne=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(ne=H.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;N++}return s.attributesNum!==N||s.index!==q}(g,b,v,U),P&&function(H,G,X,q){let k={},Z=G.attributes,N=0,V=X.getAttributes();for(let j in V)if(V[j].location>=0){let $=Z[j];$===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&($=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&($=H.instanceColor));let ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),k[j]=ne,N++}s.attributes=k,s.attributesNum=N,s.index=q}(g,b,v,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,function(H,G,X,q){h();let k=q.attributes,Z=X.getAttributes(),N=G.defaultAttributeValues;for(let V in Z){let j=Z[V];if(j.location>=0){let $=k[V];if($===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&($=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&($=H.instanceColor)),$!==void 0){let ne=$.normalized,he=$.itemSize,pe=e.get($);if(pe===void 0)continue;let L=pe.buffer,Q=pe.type,Y=pe.bytesPerElement,ie=Q===i.INT||Q===i.UNSIGNED_INT||$.gpuType===Ml;if($.isInterleavedBufferAttribute){let se=$.data,A=se.stride,M=$.offset;if(se.isInstancedInterleavedBuffer){for(let B=0;B<j.locationSize;B++)u(j.location+B,se.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let B=0;B<j.locationSize;B++)d(j.location+B);i.bindBuffer(i.ARRAY_BUFFER,L);for(let B=0;B<j.locationSize;B++)f(j.location+B,he/j.locationSize,Q,ne,A*Y,(M+he/j.locationSize*B)*Y,ie)}else{if($.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)u(j.location+se,$.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<j.locationSize;se++)d(j.location+se);i.bindBuffer(i.ARRAY_BUFFER,L);for(let se=0;se<j.locationSize;se++)f(j.location+se,he/j.locationSize,Q,ne,he*Y,he/j.locationSize*se*Y,ie)}}else if(N!==void 0){let ne=N[V];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(j.location,ne);break;case 3:i.vertexAttrib3fv(j.location,ne);break;case 4:i.vertexAttrib4fv(j.location,ne);break;default:i.vertexAttrib1fv(j.location,ne)}}}}p()}(g,_,v,b),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))},reset:y,resetDefaultState:m,dispose:function(){y();for(let g in n){let _=n[g];for(let v in _){let b=_[v];for(let U in b)l(b[U].object),delete b[U];delete _[v]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let _=n[g.id];for(let v in _){let b=_[v];for(let U in b)l(b[U].object),delete b[U];delete _[v]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let _ in n){let v=n[_];if(v[g.id]===void 0)continue;let b=v[g.id];for(let U in b)l(b[U].object),delete b[U];delete v[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function ed(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];t.update(h,n,1)}}}function td(i,e,t,n){let r;function s(u){if(u==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===on||n.convert(u)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Hn&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==an&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function nd(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Xt,o=new Le,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(y===null||y.length<m)&&(y=new Float32Array(m));for(let _=0,v=u;_!==f;++_,v+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||r;return r=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!y)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let g=s?0:n,_=4*g,v=m.clippingState||null;l.value=v,v=c(p,d,_,u);for(let b=0;b!==_;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function id(i){let e=new WeakMap;function t(r,s){return s===$a?r.mapping=Oi:s===Qa&&(r.mapping=Fi),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===$a||s===Qa){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Uo(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Ps=class extends Sr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=[.125,.215,.35,.446,.526,.582],ar=20,Na=new Ps,Rc=new Ae,Oa=null,Fa=0,Ba=0,za=!1,Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,Cc=[new R(-Qn,Ai,0),new R(Qn,Ai,0),new R(-Ai,0,Qn),new R(Ai,0,Qn),new R(0,Qn,-Ai),new R(0,Qn,Ai),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Lr,format:on,colorSpace:qi,depthBuffer:!1},r=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+Ac.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=Ac[u-a+4-1]:u===0&&(f=0),c.push(f);let y=1/(p-2),m=-y,g=1+y,_=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,b=6,U=3,P=2,z=1,H=new Float32Array(U*b*v),G=new Float32Array(P*b*v),X=new Float32Array(z*b*v);for(let k=0;k<v;k++){let Z=k%3*2/3-1,N=k>2?0:-1,V=[Z,N,0,Z+2/3,N,0,Z+2/3,N+1,0,Z,N,0,Z+2/3,N+1,0,Z,N+1,0];H.set(V,U*b*k),G.set(_,P*b*k);let j=[k,k,k,k,k,k];X.set(j,z*b*k)}let q=new Ze;q.setAttribute("position",new vt(H,U)),q.setAttribute("uv",new vt(G,P)),q.setAttribute("faceIndex",new vt(X,z)),o.push(q),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(ar),h=new R(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,r){let s=new nt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Rc),l.toneMapping=0,l.autoClear=!1;let d=new bt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new le(new Ke,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Rc),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):m===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let g=this._cubeSize;is(r,m*g,y>2?g:0,g,g),l.setRenderTarget(r),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Oi||e.mapping===Fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;is(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cc[(r-s-1)%Cc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new le(this._lodPlanes[r],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,y=isFinite(s)?1+Math.floor(3*f):ar;y>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let m=[],g=0;for(let b=0;b<ar;++b){let U=b/f,P=Math.exp(-U*U/2);m.push(P),b===0?g+=P:b<y&&(g+=2*P)}for(let b=0;b<m.length;b++)m[b]=m[b]/g;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let v=this._sizeLods[r];is(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Na)}};function Pc(i,e,t){let n=new bn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ic(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lc(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rd(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===$a||s===Qa,o=s===Oi||s===Fi;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Vi(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p}(h)?(t===null&&(t=new Vi(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function sd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ad(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let y=h.array;u=h.version;for(let m=0,g=y.length;m<g;m+=3){let _=y[m+0],v=y[m+1],b=y[m+2];c.push(_,v,v,b,b,_)}}else{if(d===void 0)return;{let y=d.array;u=d.version;for(let m=0,g=y.length/3-1;m<g;m+=3){let _=m+0,v=m+1,b=m+2;c.push(_,v,v,b,b,_)}}}let p=new(Th(c)?Rs:As)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function od(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,n,1)}}}function ld(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function cd(i,e,t){let n=new WeakMap,r=new je;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==h){let H=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;u===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let v=a.attributes.position.count*_,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let U=new Float32Array(v*b*4*h),P=new ws(U,v,b,h);P.type=an,P.needsUpdate=!0;let z=4*_;for(let G=0;G<h;G++){let X=y[G],q=m[G],k=g[G],Z=v*b*4*G;for(let N=0;N<X.count;N++){let V=N*z;u===!0&&(r.fromBufferAttribute(X,N),U[Z+V+0]=r.x,U[Z+V+1]=r.y,U[Z+V+2]=r.z,U[Z+V+3]=0),p===!0&&(r.fromBufferAttribute(q,N),U[Z+V+4]=r.x,U[Z+V+5]=r.y,U[Z+V+6]=r.z,U[Z+V+7]=0),f===!0&&(r.fromBufferAttribute(k,N),U[Z+V+8]=r.x,U[Z+V+9]=r.y,U[Z+V+10]=r.z,U[Z+V+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new ce(v,b)},n.set(a,d),a.addEventListener("dispose",H)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<l.length;f++)u+=l[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}}}function hd(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Is=class extends Et{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==yr&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yr&&(n=ii),n===void 0&&h===zi&&(n=Bi),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ch=new Et,Dc=new Is(1,1),Ph=new ws,Ih=new Lo,Lh=new Cs,Uc=[],Nc=[],Oc=new Float32Array(16),Fc=new Float32Array(9),Bc=new Float32Array(4);function Yi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $s(i,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ud(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function pd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function md(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function fd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),ht(t,n)}}function gd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),ht(t,n)}}function _d(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),ht(t,n)}}function vd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function xd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Md(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Sd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ed(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function bd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Td(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function wd(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=515,s=Dc):s=Ch,t.setTexture2D(e||s,r)}function Ad(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ih,r)}function Rd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lh,r)}function Cd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ph,r)}function Pd(i,e){i.uniform1fv(this.addr,e)}function Id(i,e){let t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ld(i,e){let t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Dd(i,e){let t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Ud(i,e){let t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nd(i,e){let t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Od(i,e){let t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fd(i,e){i.uniform1iv(this.addr,e)}function Bd(i,e){i.uniform2iv(this.addr,e)}function zd(i,e){i.uniform3iv(this.addr,e)}function Hd(i,e){i.uniform4iv(this.addr,e)}function kd(i,e){i.uniform1uiv(this.addr,e)}function Gd(i,e){i.uniform2uiv(this.addr,e)}function Vd(i,e){i.uniform3uiv(this.addr,e)}function Wd(i,e){i.uniform4uiv(this.addr,e)}function Xd(i,e,t){let n=this.cache,r=e.length,s=$s(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ch,s[a])}function jd(i,e,t){let n=this.cache,r=e.length,s=$s(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ih,s[a])}function qd(i,e,t){let n=this.cache,r=e.length,s=$s(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Lh,s[a])}function Yd(i,e,t){let n=this.cache,r=e.length,s=$s(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ph,s[a])}var No=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return ud;case 35664:return dd;case 35665:return pd;case 35666:return md;case 35674:return fd;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return vd;case 35667:case 35671:return yd;case 35668:case 35672:return xd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return Ed;case 36295:return bd;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}}(t.type)}},Oo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return Pd;case 35664:return Id;case 35665:return Ld;case 35666:return Dd;case 35674:return Ud;case 35675:return Nd;case 35676:return Od;case 5124:case 35670:return Fd;case 35667:case 35671:return Bd;case 35668:case 35672:return zd;case 35669:case 35673:return Hd;case 5125:return kd;case 36294:return Gd;case 36295:return Vd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}(t.type)}},Fo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function zc(i,e){i.seq.push(e),i.map[e.id]=e}function Zd(i,e,t){let n=i.name,r=n.length;for(Ha.lastIndex=0;;){let s=Ha.exec(n),a=Ha.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){zc(t,c===void 0?new No(o,i,e):new Oo(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Fo(o),zc(t,h)),t=h}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Zd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Hc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jd=0,kc=new Le;function Gc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(i.getShaderSource(e),a)}return r}function Kd(i,e){let t=function(n){Ve._getMatrix(kc,Ve.workingColorSpace,n);let r=`mat3( ${kc.elements.map(s=>s.toFixed(4))} )`;switch(Ve.getTransfer(n)){case Js:return[r,"LinearTransferOETF"];case qe:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}}(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $d(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rs=new R;function Qd(){return Ve.getLuminanceCoefficients(rs),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${rs.x.toFixed(4)}, ${rs.y.toFixed(4)}, ${rs.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function or(i){return i!==""}function Vc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(ep,np)}var tp=new Map;function np(i,e){let t=Ue[e];if(t===void 0){let n=tp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Bo(t)}var ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(ip,rp)}function rp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sp(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(q){let k="SHADOWMAP_TYPE_BASIC";return q.shadowMapType===1?k="SHADOWMAP_TYPE_PCF":q.shadowMapType===2?k="SHADOWMAP_TYPE_PCF_SOFT":q.shadowMapType===3&&(k="SHADOWMAP_TYPE_VSM"),k}(t),c=function(q){let k="ENVMAP_TYPE_CUBE";if(q.envMap)switch(q.envMapMode){case Oi:case Fi:k="ENVMAP_TYPE_CUBE";break;case Zs:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(q){let k="ENVMAP_MODE_REFLECTION";return q.envMap&&q.envMapMode===Fi&&(k="ENVMAP_MODE_REFRACTION"),k}(t),d=function(q){let k="ENVMAP_BLENDING_NONE";if(q.envMap)switch(q.combine){case 0:k="ENVMAP_BLENDING_MULTIPLY";break;case 1:k="ENVMAP_BLENDING_MIX";break;case 2:k="ENVMAP_BLENDING_ADD"}return k}(t),u=function(q){let k=q.envMapCubeUVHeight;if(k===null)return null;let Z=Math.log2(k)-2,N=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:N,maxMip:Z}}(t),p=function(q){return[q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}(t),f=function(q){let k=[];for(let Z in q){let N=q[Z];N!==!1&&k.push("#define "+Z+" "+N)}return k.join(`
`)}(s),y=r.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),g.length>0&&(g+=`
`)):(m=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),g=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?$d("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Kd("linearToOutputTexel",t.outputColorSpace),Qd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Bo(a),a=Vc(a,t),a=Wc(a,t),o=Bo(o),o=Vc(o,t),o=Wc(o,t),a=Xc(a),o=Xc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=_+m+a,b=_+g+o,U=Hc(r,r.VERTEX_SHADER,v),P=Hc(r,r.FRAGMENT_SHADER,b);function z(q){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(y).trim(),Z=r.getShaderInfoLog(U).trim(),N=r.getShaderInfoLog(P).trim(),V=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,U,P);else{let $=Gc(r,U,"vertex"),ne=Gc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+k+`
`+$+`
`+ne)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):Z!==""&&N!==""||(j=!1);j&&(q.diagnostics={runnable:V,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:N,prefix:g}})}r.deleteShader(U),r.deleteShader(P),H=new Ni(r,y),G=function(k,Z){let N={},V=k.getProgramParameter(Z,k.ACTIVE_ATTRIBUTES);for(let j=0;j<V;j++){let $=k.getActiveAttrib(Z,j),ne=$.name,he=1;$.type===k.FLOAT_MAT2&&(he=2),$.type===k.FLOAT_MAT3&&(he=3),$.type===k.FLOAT_MAT4&&(he=4),N[ne]={type:$.type,location:k.getAttribLocation(Z,ne),locationSize:he}}return N}(r,y)}let H,G;r.attachShader(y,U),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),this.getUniforms=function(){return H===void 0&&z(this),H},this.getAttributes=function(){return G===void 0&&z(this),G};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(y,37297)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jd++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}var ap=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ho(e),t.set(e,n)),n}},Ho=class{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}};function op(i,e,t,n,r,s,a){let o=new Mr,l=new zo,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,_,v,b){let U=v.fog,P=b.geometry,z=m.isMeshStandardMaterial?v.environment:null,H=(m.isMeshStandardMaterial?t:e).get(m.envMap||z),G=H&&H.mapping===Zs?H.image.height:null,X=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=q!==void 0?q.length:0,Z,N,V,j,$=0;if(P.morphAttributes.position!==void 0&&($=1),P.morphAttributes.normal!==void 0&&($=2),P.morphAttributes.color!==void 0&&($=3),X){let Qi=sn[X];Z=Qi.vertexShader,N=Qi.fragmentShader}else Z=m.vertexShader,N=m.fragmentShader,l.update(m),V=l.getVertexShaderID(m),j=l.getFragmentShaderID(m);let ne=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),pe=b.isInstancedMesh===!0,L=b.isBatchedMesh===!0,Q=!!m.map,Y=!!m.matcap,ie=!!H,se=!!m.aoMap,A=!!m.lightMap,M=!!m.bumpMap,B=!!m.normalMap,S=!!m.displacementMap,x=!!m.emissiveMap,w=!!m.metalnessMap,E=!!m.roughnessMap,T=m.anisotropy>0,I=m.clearcoat>0,O=m.dispersion>0,D=m.iridescence>0,J=m.sheen>0,F=m.transmission>0,W=T&&!!m.anisotropyMap,ee=I&&!!m.clearcoatMap,oe=I&&!!m.clearcoatNormalMap,de=I&&!!m.clearcoatRoughnessMap,fe=D&&!!m.iridescenceMap,Ee=D&&!!m.iridescenceThicknessMap,Se=J&&!!m.sheenColorMap,ve=J&&!!m.sheenRoughnessMap,He=!!m.specularMap,Ge=!!m.specularColorMap,Xe=!!m.specularIntensityMap,xe=F&&!!m.transmissionMap,we=F&&!!m.thicknessMap,Oe=!!m.gradientMap,Lt=!!m.alphaMap,fn=m.alphaTest>0,St=!!m.alphaHash,nn=!!m.extensions,Vn=0;m.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(Vn=i.toneMapping));let K={shaderID:X,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:N,defines:m.defines,customVertexShaderID:V,customFragmentShaderID:j,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:L,batchingColor:L&&b._colorsTexture!==null,instancing:pe,instancingColor:pe&&b.instanceColor!==null,instancingMorph:pe&&b.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qi,alphaToCoverage:!!m.alphaToCoverage,map:Q,matcap:Y,envMap:ie,envMapMode:ie&&H.mapping,envMapCubeUVHeight:G,aoMap:se,lightMap:A,bumpMap:M,normalMap:B,displacementMap:u&&S,emissiveMap:x,normalMapObjectSpace:B&&m.normalMapType===1,normalMapTangentSpace:B&&m.normalMapType===0,metalnessMap:w,roughnessMap:E,anisotropy:T,anisotropyMap:W,clearcoat:I,clearcoatMap:ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:de,dispersion:O,iridescence:D,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:J,sheenColorMap:Se,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Ge,specularIntensityMap:Xe,transmission:F,transmissionMap:xe,thicknessMap:we,gradientMap:Oe,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Lt,alphaTest:fn,alphaHash:St,combine:m.combine,mapUv:Q&&y(m.map.channel),aoMapUv:se&&y(m.aoMap.channel),lightMapUv:A&&y(m.lightMap.channel),bumpMapUv:M&&y(m.bumpMap.channel),normalMapUv:B&&y(m.normalMap.channel),displacementMapUv:S&&y(m.displacementMap.channel),emissiveMapUv:x&&y(m.emissiveMap.channel),metalnessMapUv:w&&y(m.metalnessMap.channel),roughnessMapUv:E&&y(m.roughnessMap.channel),anisotropyMapUv:W&&y(m.anisotropyMap.channel),clearcoatMapUv:ee&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(m.sheenRoughnessMap.channel),specularMapUv:He&&y(m.specularMap.channel),specularColorMapUv:Ge&&y(m.specularColorMap.channel),specularIntensityMapUv:Xe&&y(m.specularIntensityMap.channel),transmissionMapUv:xe&&y(m.transmissionMap.channel),thicknessMapUv:we&&y(m.thicknessMap.channel),alphaMapUv:Lt&&y(m.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(B||T),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!P.attributes.uv&&(Q||Lt),fog:!!U,useFog:m.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:he,skinning:b.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:$,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&_.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vn,decodeVideoTexture:Q&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===qe,decodeVideoTextureEmissive:x&&m.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(m.emissiveMap.colorSpace)===qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:nn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nn&&m.extensions.multiDraw===!0||L)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return K.vertexUv1s=c.has(1),K.vertexUv2s=c.has(2),K.vertexUv3s=c.has(3),c.clear(),K},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&(function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}(g,m),function(_,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),_.push(o.mask)}(g,m),g.push(i.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],_;if(g){let v=sn[g];_=qu.clone(v.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let v=0,b=h.length;v<b;v++){let U=h[v];if(U.cacheKey===g){_=U,++_.usedTimes;break}}return _===void 0&&(_=new sp(i,g,m,s),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function lp(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yc(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,d){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?r.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||cp),n.length>1&&n.sort(o||qc),r.length>1&&r.sort(o||qc)}}}function hp(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Yc,i.set(e,[r])):t>=n.length?(r=new Yc,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function up(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ae};break;case"SpotLight":t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R}}return i[e.id]=t,t}}}var dp=0;function pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mp(i){let e=new up,t=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new R);let r=new R,s=new Pe,a=new Pe;return{setup:function(o){let l=0,c=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,u=0,p=0,f=0,y=0,m=0,g=0,_=0,v=0,b=0,U=0;o.sort(pp);for(let z=0,H=o.length;z<H;z++){let G=o[z],X=G.color,q=G.intensity,k=G.distance,Z=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)l+=X.r*q,c+=X.g*q,h+=X.b*q;else if(G.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(G.sh.coefficients[N],q);U++}else if(G.isDirectionalLight){let N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let V=G.shadow,j=t.get(G);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=G.shadow.matrix,m++}n.directional[d]=N,d++}else if(G.isSpotLight){let N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(X).multiplyScalar(q),N.distance=k,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,n.spot[p]=N;let V=G.shadow;if(G.map&&(n.spotLightMap[v]=G.map,v++,V.updateMatrices(G),G.castShadow&&b++),n.spotLightMatrix[p]=V.matrix,G.castShadow){let j=t.get(G);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=Z,_++}p++}else if(G.isRectAreaLight){let N=e.get(G);N.color.copy(X).multiplyScalar(q),N.halfWidth.set(.5*G.width,0,0),N.halfHeight.set(0,.5*G.height,0),n.rectArea[f]=N,f++}else if(G.isPointLight){let N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){let V=G.shadow,j=t.get(G);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[u]=j,n.pointShadowMap[u]=Z,n.pointShadowMatrix[u]=G.shadow.matrix,g++}n.point[u]=N,u++}else if(G.isHemisphereLight){let N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(q),N.groundColor.copy(G.groundColor).multiplyScalar(q),n.hemi[y]=N,y++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let P=n.hash;P.directionalLength===d&&P.pointLength===u&&P.spotLength===p&&P.rectAreaLength===f&&P.hemiLength===y&&P.numDirectionalShadows===m&&P.numPointShadows===g&&P.numSpotShadows===_&&P.numSpotMaps===v&&P.numLightProbes===U||(n.directional.length=d,n.spot.length=p,n.rectArea.length=f,n.point.length=u,n.hemi.length=y,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=U,P.directionalLength=d,P.pointLength=u,P.spotLength=p,P.rectAreaLength=f,P.hemiLength=y,P.numDirectionalShadows=m,P.numPointShadows=g,P.numSpotShadows=_,P.numSpotMaps=v,P.numLightProbes=U,n.version=dp++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,f=l.matrixWorldInverse;for(let y=0,m=o.length;y<m;y++){let g=o[y];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),c++}else if(g.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let _=n.rectArea[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),p++}}},state:n}}function Zc(i){let e=new mp(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function fp(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Zc(i),e.set(t,[s])):n>=r.length?(s=new Zc(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var ko=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gp(i,e,t){let n=new Gi,r=new ce,s=new ce,a=new je,o=new ko({depthPacking:3201}),l=new Go,c={},h=t.maxTextureSize,d={[tu]:1,[ui]:0,[mn]:2},u=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ze;f.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function _(P,z){let H=e.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new bn(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(z,null,H,u,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(z,null,H,p,y,null)}function v(P,z,H,G){let X=null,q=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)X=q;else if(X=H.isPointLight===!0?l:o,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){let k=X.uuid,Z=z.uuid,N=c[k];N===void 0&&(N={},c[k]=N);let V=N[Z];V===void 0&&(V=X.clone(),N[Z]=V,z.addEventListener("dispose",U)),X=V}return X.visible=z.visible,X.wireframe=z.wireframe,X.side=G===3?z.shadowSide!==null?z.shadowSide:z.side:z.shadowSide!==null?z.shadowSide:d[z.side],X.alphaMap=z.alphaMap,X.alphaTest=z.alphaTest,X.map=z.map,X.clipShadows=z.clipShadows,X.clippingPlanes=z.clippingPlanes,X.clipIntersection=z.clipIntersection,X.displacementMap=z.displacementMap,X.displacementScale=z.displacementScale,X.displacementBias=z.displacementBias,X.wireframeLinewidth=z.wireframeLinewidth,X.linewidth=z.linewidth,H.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(i.properties.get(X).light=H),X}function b(P,z,H,G,X){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===3)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);let k=e.update(P),Z=P.material;if(Array.isArray(Z)){let N=k.groups;for(let V=0,j=N.length;V<j;V++){let $=N[V],ne=Z[$.materialIndex];if(ne&&ne.visible){let he=v(P,ne,G,X);P.onBeforeShadow(i,P,z,H,k,he,$),i.renderBufferDirect(H,null,k,he,P,$),P.onAfterShadow(i,P,z,H,k,he,$)}}}else if(Z.visible){let N=v(P,Z,G,X);P.onBeforeShadow(i,P,z,H,k,N,null),i.renderBufferDirect(H,null,k,N,P,null),P.onAfterShadow(i,P,z,H,k,N,null)}}let q=P.children;for(let k=0,Z=q.length;k<Z;k++)b(q[k],z,H,G,X)}function U(P){P.target.removeEventListener("dispose",U);for(let z in c){let H=c[z],G=P.target.uuid;G in H&&(H[G].dispose(),delete H[G])}}this.render=function(P,z,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let G=i.getRenderTarget(),X=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),k=i.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Z=g!==3&&this.type===3,N=g===3&&this.type!==3;for(let V=0,j=P.length;V<j;V++){let $=P[V],ne=$.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);let he=ne.getFrameExtents();if(r.multiply(he),s.copy(ne.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/he.x),r.x=s.x*he.x,ne.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/he.y),r.y=s.y*he.y,ne.mapSize.y=s.y)),ne.map===null||Z===!0||N===!0){let L=this.type!==3?{minFilter:jt,magFilter:jt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new bn(r.x,r.y,L),ne.map.texture.name=$.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let pe=ne.getViewportCount();for(let L=0;L<pe;L++){let Q=ne.getViewport(L);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),k.viewport(a),ne.updateMatrices($,L),n=ne.getFrustum(),b(z,H,ne.camera,$,this.type)}ne.isPointLightShadow!==!0&&this.type===3&&_(ne,H),ne.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(G,X,q)}}var _p={[_u]:1,[yu]:6,[Mu]:7,[xu]:5,[vu]:0,[Eu]:2,[bu]:4,[Su]:3};function vp(i,e){let t=new function(){let E=!1,T=new je,I=null,O=new je(0,0,0,0);return{setMask:function(D){I===D||E||(i.colorMask(D,D,D,D),I=D)},setLocked:function(D){E=D},setClear:function(D,J,F,W,ee){ee===!0&&(D*=W,J*=W,F*=W),T.set(D,J,F,W),O.equals(T)===!1&&(i.clearColor(D,J,F,W),O.copy(T))},reset:function(){E=!1,I=null,O.set(-1,0,0,0)}}},n=new function(){let E=!1,T=!1,I=null,O=null,D=null;return{setReversed:function(J){if(T!==J){let F=e.get("EXT_clip_control");T?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT);let W=D;D=null,this.setClear(W)}T=J},getReversed:function(){return T},setTest:function(J){J?ie(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(J){I===J||E||(i.depthMask(J),I=J)},setFunc:function(J){if(T&&(J=_p[J]),O!==J){switch(J){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}O=J}},setLocked:function(J){E=J},setClear:function(J){D!==J&&(T&&(J=1-J),i.clearDepth(J),D=J)},reset:function(){E=!1,I=null,O=null,D=null,T=!1}}},r=new function(){let E=!1,T=null,I=null,O=null,D=null,J=null,F=null,W=null,ee=null;return{setTest:function(oe){E||(oe?ie(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(oe){T===oe||E||(i.stencilMask(oe),T=oe)},setFunc:function(oe,de,fe){I===oe&&O===de&&D===fe||(i.stencilFunc(oe,de,fe),I=oe,O=de,D=fe)},setOp:function(oe,de,fe){J===oe&&F===de&&W===fe||(i.stencilOp(oe,de,fe),J=oe,F=de,W=fe)},setLocked:function(oe){E=oe},setClear:function(oe){ee!==oe&&(i.clearStencil(oe),ee=oe)},reset:function(){E=!1,T=null,I=null,O=null,D=null,J=null,F=null,W=null,ee=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,y=null,m=null,g=null,_=null,v=null,b=new Ae(0,0,0),U=0,P=!1,z=null,H=null,G=null,X=null,q=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,N=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=N>=2);let j=null,$={},ne=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),pe=new je().fromArray(ne),L=new je().fromArray(he);function Q(E,T,I,O){let D=new Uint8Array(4),J=i.createTexture();i.bindTexture(E,J),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<I;F++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(T,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,D):i.texImage2D(T+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,D);return J}let Y={};function ie(E){o[E]!==!0&&(i.enable(E),o[E]=!0)}function se(E){o[E]!==!1&&(i.disable(E),o[E]=!1)}Y[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ie(i.DEPTH_TEST),n.setFunc(3),S(!1),x(1),ie(i.CULL_FACE),B(0);let A={[ei]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};A[103]=i.MIN,A[104]=i.MAX;let M={[ru]:i.ZERO,[su]:i.ONE,[au]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(E,T,I,O,D,J,F,W,ee,oe){if(E!==0){if(u===!1&&(ie(i.BLEND),u=!0),E===5)D=D||T,J=J||I,F=F||O,T===f&&D===g||(i.blendEquationSeparate(A[T],A[D]),f=T,g=D),I===y&&O===m&&J===_&&F===v||(i.blendFuncSeparate(M[I],M[O],M[J],M[F]),y=I,m=O,_=J,v=F),W.equals(b)!==!1&&ee===U||(i.blendColor(W.r,W.g,W.b,ee),b.copy(W),U=ee),p=E,P=!1;else if(E!==p||oe!==P){if(f===ei&&g===ei||(i.blendEquation(i.FUNC_ADD),f=ei,g=ei),oe)switch(E){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}y=null,m=null,_=null,v=null,b.set(0,0,0),U=0,p=E,P=oe}}else u===!0&&(se(i.BLEND),u=!1)}function S(E){z!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),z=E)}function x(E){E!==0?(ie(i.CULL_FACE),E!==H&&(E===1?i.cullFace(i.BACK):E===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),H=E}function w(E,T,I){E?(ie(i.POLYGON_OFFSET_FILL),X===T&&q===I||(i.polygonOffset(T,I),X=T,q=I)):se(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ie,disable:se,bindFramebuffer:function(E,T){return l[E]!==T&&(i.bindFramebuffer(E,T),l[E]=T,E===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=T),E===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=T),!0)},drawBuffers:function(E,T){let I=h,O=!1;if(E){I=c.get(T),I===void 0&&(I=[],c.set(T,I));let D=E.textures;if(I.length!==D.length||I[0]!==i.COLOR_ATTACHMENT0){for(let J=0,F=D.length;J<F;J++)I[J]=i.COLOR_ATTACHMENT0+J;I.length=D.length,O=!0}}else I[0]!==i.BACK&&(I[0]=i.BACK,O=!0);O&&i.drawBuffers(I)},useProgram:function(E){return d!==E&&(i.useProgram(E),d=E,!0)},setBlending:B,setMaterial:function(E,T){E.side===2?se(i.CULL_FACE):ie(i.CULL_FACE);let I=E.side===1;T&&(I=!I),S(I),E.blending===1&&E.transparent===!1?B(0):B(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),n.setFunc(E.depthFunc),n.setTest(E.depthTest),n.setMask(E.depthWrite),t.setMask(E.colorWrite);let O=E.stencilWrite;r.setTest(O),O&&(r.setMask(E.stencilWriteMask),r.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),r.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),w(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:x,setLineWidth:function(E){E!==G&&(Z&&i.lineWidth(E),G=E)},setPolygonOffset:w,setScissorTest:function(E){E?ie(i.SCISSOR_TEST):se(i.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=i.TEXTURE0+k-1),j!==E&&(i.activeTexture(E),j=E)},bindTexture:function(E,T,I){I===void 0&&(I=j===null?i.TEXTURE0+k-1:j);let O=$[I];O===void 0&&(O={type:void 0,texture:void 0},$[I]=O),O.type===E&&O.texture===T||(j!==I&&(i.activeTexture(I),j=I),i.bindTexture(E,T||Y[E]),O.type=E,O.texture=T)},unbindTexture:function(){let E=$[j];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,T){let I=a.get(T);I===void 0&&(I=new WeakMap,a.set(T,I));let O=I.get(E);O===void 0&&(O=i.getUniformBlockIndex(T,E.name),I.set(E,O))},uniformBlockBinding:function(E,T){let I=a.get(T).get(E);s.get(T)!==I&&(i.uniformBlockBinding(T,I,E.__bindingPointIndex),s.set(T,I))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){pe.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),pe.copy(E))},viewport:function(E){L.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),L.copy(E))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},j=null,$={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,y=null,m=null,g=null,_=null,v=null,b=new Ae(0,0,0),U=0,P=!1,z=null,H=null,G=null,X=null,q=null,pe.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function Jc(i,e,t,n){let r=function(s){switch(s){case Hn:case gh:return{byteLength:1,components:1};case vr:case _h:case Lr:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case ii:case Ml:case an:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(n);switch(t){case yh:case Mh:return i*e;case Sh:return i*e*2;case bl:case Tl:return i*e/r.components*r.byteLength;case Eh:case wl:return i*e*2/r.components*r.byteLength;case xh:return i*e*3/r.components*r.byteLength;case on:case Al:return i*e*4/r.components*r.byteLength;case _s:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case so:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ms:case Eo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bh:case To:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yp(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,M){return p?new OffscreenCanvas(A,M):bs("canvas")}function y(A,M,B){let S=1,x=se(A);if((x.width>B||x.height>B)&&(S=B/Math.max(x.width,x.height)),S<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let w=Math.floor(S*x.width),E=Math.floor(S*x.height);d===void 0&&(d=f(w,E));let T=M?f(w,E):d;return T.width=w,T.height=E,T.getContext("2d").drawImage(A,0,0,w,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+w+"x"+E+")."),T}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),A}return A}function m(A){return A.generateMipmaps}function g(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,M,B,S,x=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let w=M;if(M===i.RED&&(B===i.FLOAT&&(w=i.R32F),B===i.HALF_FLOAT&&(w=i.R16F),B===i.UNSIGNED_BYTE&&(w=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(w=i.R8UI),B===i.UNSIGNED_SHORT&&(w=i.R16UI),B===i.UNSIGNED_INT&&(w=i.R32UI),B===i.BYTE&&(w=i.R8I),B===i.SHORT&&(w=i.R16I),B===i.INT&&(w=i.R32I)),M===i.RG&&(B===i.FLOAT&&(w=i.RG32F),B===i.HALF_FLOAT&&(w=i.RG16F),B===i.UNSIGNED_BYTE&&(w=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(w=i.RG8UI),B===i.UNSIGNED_SHORT&&(w=i.RG16UI),B===i.UNSIGNED_INT&&(w=i.RG32UI),B===i.BYTE&&(w=i.RG8I),B===i.SHORT&&(w=i.RG16I),B===i.INT&&(w=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(w=i.RGB8UI),B===i.UNSIGNED_SHORT&&(w=i.RGB16UI),B===i.UNSIGNED_INT&&(w=i.RGB32UI),B===i.BYTE&&(w=i.RGB8I),B===i.SHORT&&(w=i.RGB16I),B===i.INT&&(w=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),B===i.UNSIGNED_INT&&(w=i.RGBA32UI),B===i.BYTE&&(w=i.RGBA8I),B===i.SHORT&&(w=i.RGBA16I),B===i.INT&&(w=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),M===i.RGBA){let E=x?Js:Ve.getTransfer(S);B===i.FLOAT&&(w=i.RGBA32F),B===i.HALF_FLOAT&&(w=i.RGBA16F),B===i.UNSIGNED_BYTE&&(w=E===qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return w!==i.R16F&&w!==i.R32F&&w!==i.RG16F&&w!==i.RG32F&&w!==i.RGBA16F&&w!==i.RGBA32F||e.get("EXT_color_buffer_float"),w}function b(A,M){let B;return A?M===null||M===ii||M===Bi?B=i.DEPTH24_STENCIL8:M===an?B=i.DEPTH32F_STENCIL8:M===vr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ii||M===Bi?B=i.DEPTH_COMPONENT24:M===an?B=i.DEPTH_COMPONENT32F:M===vr&&(B=i.DEPTH_COMPONENT16),B}function U(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=A.target;M.removeEventListener("dispose",P),function(B){let S=n.get(B);if(S.__webglInit===void 0)return;let x=B.source,w=u.get(x);if(w){let E=w[S.__cacheKey];E.usedTimes--,E.usedTimes===0&&H(B),Object.keys(w).length===0&&u.delete(x)}n.remove(B)}(M),M.isVideoTexture&&h.delete(M)}function z(A){let M=A.target;M.removeEventListener("dispose",z),function(B){let S=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(S.__webglFramebuffer[w]))for(let E=0;E<S.__webglFramebuffer[w].length;E++)i.deleteFramebuffer(S.__webglFramebuffer[w][E]);else i.deleteFramebuffer(S.__webglFramebuffer[w]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[w])}else{if(Array.isArray(S.__webglFramebuffer))for(let w=0;w<S.__webglFramebuffer.length;w++)i.deleteFramebuffer(S.__webglFramebuffer[w]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let w=0;w<S.__webglColorRenderbuffer.length;w++)S.__webglColorRenderbuffer[w]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[w]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let x=B.textures;for(let w=0,E=x.length;w<E;w++){let T=n.get(x[w]);T.__webglTexture&&(i.deleteTexture(T.__webglTexture),a.memory.textures--),n.remove(x[w])}n.remove(B)}(M)}function H(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let B=A.source;delete u.get(B)[M.__cacheKey],a.memory.textures--}let G=0;function X(A,M){let B=n.get(A);if(A.isVideoTexture&&function(S){let x=a.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let S=A.image;if(S===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(S.complete!==!1)return void j(B,A,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}let q={[Yt]:i.REPEAT,[_r]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},k={[jt]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},Z={[wu]:i.NEVER,[Du]:i.ALWAYS,[Au]:i.LESS,[Cu]:i.LEQUAL,[Ru]:i.EQUAL,[Lu]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function N(A,M){if(M.type!==an||e.has("OES_texture_float_linear")!==!1||M.magFilter!==Mn&&M.magFilter!==pa&&M.magFilter!==Br&&M.magFilter!==Ii&&M.minFilter!==Mn&&M.minFilter!==pa&&M.minFilter!==Br&&M.minFilter!==Ii||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[M.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,k[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,k[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Br&&M.minFilter!==Ii||M.type===an&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function V(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));let S=M.source,x=u.get(S);x===void 0&&(x={},u.set(S,x));let w=function(E){let T=[];return T.push(E.wrapS),T.push(E.wrapT),T.push(E.wrapR||0),T.push(E.magFilter),T.push(E.minFilter),T.push(E.anisotropy),T.push(E.internalFormat),T.push(E.format),T.push(E.type),T.push(E.generateMipmaps),T.push(E.premultiplyAlpha),T.push(E.flipY),T.push(E.unpackAlignment),T.push(E.colorSpace),T.join()}(M);if(w!==A.__cacheKey){x[w]===void 0&&(x[w]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),x[w].usedTimes++;let E=x[A.__cacheKey];E!==void 0&&(x[A.__cacheKey].usedTimes--,E.usedTimes===0&&H(M)),A.__cacheKey=w,A.__webglTexture=x[w].texture}return B}function j(A,M,B){let S=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(S=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(S=i.TEXTURE_3D);let x=V(A,M),w=M.source;t.bindTexture(S,A.__webglTexture,i.TEXTURE0+B);let E=n.get(w);if(w.version!==E.__version||x===!0){t.activeTexture(i.TEXTURE0+B);let T=Ve.getPrimaries(Ve.workingColorSpace),I=M.colorSpace===Ci?null:Ve.getPrimaries(M.colorSpace),O=M.colorSpace===Ci||T===I?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let D=y(M.image,!1,r.maxTextureSize);D=ie(M,D);let J=s.convert(M.format,M.colorSpace),F=s.convert(M.type),W,ee=v(M.internalFormat,J,F,M.colorSpace,M.isVideoTexture);N(S,M);let oe=M.mipmaps,de=M.isVideoTexture!==!0,fe=E.__version===void 0||x===!0,Ee=w.dataReady,Se=U(M,D);if(M.isDepthTexture)ee=b(M.format===zi,M.type),fe&&(de?t.texStorage2D(i.TEXTURE_2D,1,ee,D.width,D.height):t.texImage2D(i.TEXTURE_2D,0,ee,D.width,D.height,0,J,F,null));else if(M.isDataTexture)if(oe.length>0){de&&fe&&t.texStorage2D(i.TEXTURE_2D,Se,ee,oe[0].width,oe[0].height);for(let ve=0,He=oe.length;ve<He;ve++)W=oe[ve],de?Ee&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,W.width,W.height,J,F,W.data):t.texImage2D(i.TEXTURE_2D,ve,ee,W.width,W.height,0,J,F,W.data);M.generateMipmaps=!1}else de?(fe&&t.texStorage2D(i.TEXTURE_2D,Se,ee,D.width,D.height),Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,J,F,D.data)):t.texImage2D(i.TEXTURE_2D,0,ee,D.width,D.height,0,J,F,D.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){de&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ee,oe[0].width,oe[0].height,D.depth);for(let ve=0,He=oe.length;ve<He;ve++)if(W=oe[ve],M.format!==on)if(J!==null)if(de){if(Ee)if(M.layerUpdates.size>0){let Ge=Jc(W.width,W.height,M.format,M.type);for(let Xe of M.layerUpdates){let xe=W.data.subarray(Xe*Ge/W.data.BYTES_PER_ELEMENT,(Xe+1)*Ge/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Xe,W.width,W.height,1,J,xe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,W.width,W.height,D.depth,J,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,ee,W.width,W.height,D.depth,0,W.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,W.width,W.height,D.depth,J,F,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,ee,W.width,W.height,D.depth,0,J,F,W.data)}else{de&&fe&&t.texStorage2D(i.TEXTURE_2D,Se,ee,oe[0].width,oe[0].height);for(let ve=0,He=oe.length;ve<He;ve++)W=oe[ve],M.format!==on?J!==null?de?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,W.width,W.height,J,W.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,ee,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Ee&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,W.width,W.height,J,F,W.data):t.texImage2D(i.TEXTURE_2D,ve,ee,W.width,W.height,0,J,F,W.data)}else if(M.isDataArrayTexture)if(de){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ee,D.width,D.height,D.depth),Ee)if(M.layerUpdates.size>0){let ve=Jc(D.width,D.height,M.format,M.type);for(let He of M.layerUpdates){let Ge=D.data.subarray(He*ve/D.data.BYTES_PER_ELEMENT,(He+1)*ve/D.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,D.width,D.height,1,J,F,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,J,F,D.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,D.width,D.height,D.depth,0,J,F,D.data);else if(M.isData3DTexture)de?(fe&&t.texStorage3D(i.TEXTURE_3D,Se,ee,D.width,D.height,D.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,J,F,D.data)):t.texImage3D(i.TEXTURE_3D,0,ee,D.width,D.height,D.depth,0,J,F,D.data);else if(M.isFramebufferTexture){if(fe)if(de)t.texStorage2D(i.TEXTURE_2D,Se,ee,D.width,D.height);else{let ve=D.width,He=D.height;for(let Ge=0;Ge<Se;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,ee,ve,He,0,J,F,null),ve>>=1,He>>=1}}else if(oe.length>0){if(de&&fe){let ve=se(oe[0]);t.texStorage2D(i.TEXTURE_2D,Se,ee,ve.width,ve.height)}for(let ve=0,He=oe.length;ve<He;ve++)W=oe[ve],de?Ee&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,J,F,W):t.texImage2D(i.TEXTURE_2D,ve,ee,J,F,W);M.generateMipmaps=!1}else if(de){if(fe){let ve=se(D);t.texStorage2D(i.TEXTURE_2D,Se,ee,ve.width,ve.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,F,D)}else t.texImage2D(i.TEXTURE_2D,0,ee,J,F,D);m(M)&&g(S),E.__version=w.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,B,S,x,w){let E=s.convert(B.format,B.colorSpace),T=s.convert(B.type),I=v(B.internalFormat,E,T,B.colorSpace),O=n.get(M),D=n.get(B);if(D.__renderTarget=M,!O.__hasExternalTextures){let J=Math.max(1,M.width>>w),F=Math.max(1,M.height>>w);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,w,I,J,F,M.depth,0,E,T,null):t.texImage2D(x,w,I,J,F,0,E,T,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Y(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,S,x,D.__webglTexture,0,Q(M)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,S,x,D.__webglTexture,w),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let S=M.depthTexture,x=S&&S.isDepthTexture?S.type:null,w=b(M.stencilBuffer,x),E=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=Q(M);Y(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T,w,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,T,w,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,w,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,E,i.RENDERBUFFER,A)}else{let S=M.textures;for(let x=0;x<S.length;x++){let w=S[x],E=s.convert(w.format,w.colorSpace),T=s.convert(w.type),I=v(w.internalFormat,E,T,w.colorSpace),O=Q(M);B&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,I,M.width,M.height):Y(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,I,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,I,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(A){let M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let S=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),S){let x=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,S.removeEventListener("dispose",x)};S.addEventListener("dispose",x),M.__depthDisposeCallback=x}M.__boundDepthTexture=S}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!x.depthTexture||!x.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let w=n.get(x.depthTexture);w.__renderTarget=x,w.__webglTexture&&x.depthTexture.image.width===x.width&&x.depthTexture.image.height===x.height||(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let E=w.__webglTexture,T=Q(x);if(x.depthTexture.format===yr)Y(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,E,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,E,0);else{if(x.depthTexture.format!==zi)throw new Error("Unknown depthTexture format");Y(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,E,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,E,0)}})(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let S=0;S<6;S++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[S]),M.__webglDepthbuffer[S]===void 0)M.__webglDepthbuffer[S]=i.createRenderbuffer(),ne(M.__webglDepthbuffer[S],A,!1);else{let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=M.__webglDepthbuffer[S];i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,w)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ne(M.__webglDepthbuffer,A,!1);else{let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,x),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,x)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let pe=[],L=[];function Q(A){return Math.min(r.maxSamples,A.samples)}function Y(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(A,M){let B=A.colorSpace,S=A.format,x=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==qi&&B!==Ci&&(Ve.getTransfer(B)===qe?S===on&&x===Hn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=G;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),G+=1,A},this.resetTextureUnits=function(){G=0},this.setTexture2D=X,this.setTexture2DArray=function(A,M){let B=n.get(A);A.version>0&&B.__version!==A.version?j(B,A,M):t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)},this.setTexture3D=function(A,M){let B=n.get(A);A.version>0&&B.__version!==A.version?j(B,A,M):t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)},this.setTextureCube=function(A,M){let B=n.get(A);A.version>0&&B.__version!==A.version?function(S,x,w){if(x.image.length!==6)return;let E=V(S,x),T=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+w);let I=n.get(T);if(T.version!==I.__version||E===!0){t.activeTexture(i.TEXTURE0+w);let O=Ve.getPrimaries(Ve.workingColorSpace),D=x.colorSpace===Ci?null:Ve.getPrimaries(x.colorSpace),J=x.colorSpace===Ci||O===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let F=x.isCompressedTexture||x.image[0].isCompressedTexture,W=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let xe=0;xe<6;xe++)ee[xe]=F||W?W?x.image[xe].image:x.image[xe]:y(x.image[xe],!0,r.maxCubemapSize),ee[xe]=ie(x,ee[xe]);let oe=ee[0],de=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),Ee=v(x.internalFormat,de,fe,x.colorSpace),Se=x.isVideoTexture!==!0,ve=I.__version===void 0||E===!0,He=T.dataReady,Ge,Xe=U(x,oe);if(N(i.TEXTURE_CUBE_MAP,x),F){Se&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Ee,oe.width,oe.height);for(let xe=0;xe<6;xe++){Ge=ee[xe].mipmaps;for(let we=0;we<Ge.length;we++){let Oe=Ge[we];x.format!==on?de!==null?Se?He&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Oe.width,Oe.height,de,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,Ee,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Oe.width,Oe.height,de,fe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,Ee,Oe.width,Oe.height,0,de,fe,Oe.data)}}}else{if(Ge=x.mipmaps,Se&&ve){Ge.length>0&&Xe++;let xe=se(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Ee,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(W){Se?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ee[xe].width,ee[xe].height,de,fe,ee[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,ee[xe].width,ee[xe].height,0,de,fe,ee[xe].data);for(let we=0;we<Ge.length;we++){let Oe=Ge[we].image[xe].image;Se?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Oe.width,Oe.height,de,fe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,Ee,Oe.width,Oe.height,0,de,fe,Oe.data)}}else{Se?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de,fe,ee[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,de,fe,ee[xe]);for(let we=0;we<Ge.length;we++){let Oe=Ge[we];Se?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,de,fe,Oe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,Ee,de,fe,Oe.image[xe])}}}m(x)&&g(i.TEXTURE_CUBE_MAP),I.__version=T.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}(B,A,M):t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)},this.rebindTextures=function(A,M,B){let S=n.get(A);M!==void 0&&$(S.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&he(A)},this.setupRenderTarget=function(A){let M=A.texture,B=n.get(A),S=n.get(M);A.addEventListener("dispose",z);let x=A.textures,w=A.isWebGLCubeRenderTarget===!0,E=x.length>1;if(E||(S.__webglTexture===void 0&&(S.__webglTexture=i.createTexture()),S.__version=M.version,a.memory.textures++),w){B.__webglFramebuffer=[];for(let T=0;T<6;T++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[T]=[];for(let I=0;I<M.mipmaps.length;I++)B.__webglFramebuffer[T][I]=i.createFramebuffer()}else B.__webglFramebuffer[T]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let T=0;T<M.mipmaps.length;T++)B.__webglFramebuffer[T]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(E)for(let T=0,I=x.length;T<I;T++){let O=n.get(x[T]);O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Y(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let T=0;T<x.length;T++){let I=x[T];B.__webglColorRenderbuffer[T]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[T]);let O=s.convert(I.format,I.colorSpace),D=s.convert(I.type),J=v(I.internalFormat,O,D,I.colorSpace,A.isXRRenderTarget===!0),F=Q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.RENDERBUFFER,B.__webglColorRenderbuffer[T])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(w){t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture),N(i.TEXTURE_CUBE_MAP,M);for(let T=0;T<6;T++)if(M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)$(B.__webglFramebuffer[T][I],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+T,I);else $(B.__webglFramebuffer[T],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);m(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(E){for(let T=0,I=x.length;T<I;T++){let O=x[T],D=n.get(O);t.bindTexture(i.TEXTURE_2D,D.__webglTexture),N(i.TEXTURE_2D,O),$(B.__webglFramebuffer,A,O,i.COLOR_ATTACHMENT0+T,i.TEXTURE_2D,0),m(O)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let T=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(T=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(T,S.__webglTexture),N(T,M),M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)$(B.__webglFramebuffer[I],A,M,i.COLOR_ATTACHMENT0,T,I);else $(B.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,T,0);m(M)&&g(T),t.unbindTexture()}A.depthBuffer&&he(A)},this.updateRenderTargetMipmap=function(A){let M=A.textures;for(let B=0,S=M.length;B<S;B++){let x=M[B];if(m(x)){let w=_(A),E=n.get(x).__webglTexture;t.bindTexture(w,E),g(w),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(Y(A)===!1){let M=A.textures,B=A.width,S=A.height,x=i.COLOR_BUFFER_BIT,w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,E=n.get(A),T=M.length>1;if(T)for(let I=0;I<M.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let I=0;I<M.length;I++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),T){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,E.__webglColorRenderbuffer[I]);let O=n.get(M[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,B,S,0,0,B,S,x,i.NEAREST),l===!0&&(pe.length=0,L.length=0,pe.push(i.COLOR_ATTACHMENT0+I),A.depthBuffer&&A.resolveDepthBuffer===!1&&(pe.push(w),L.push(w),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),T)for(let I=0;I<M.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,E.__webglColorRenderbuffer[I]);let O=n.get(M[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Y}function xp(i,e){return{convert:function(t,n=""){let r,s=Ve.getTransfer(n);if(t===Hn)return i.UNSIGNED_BYTE;if(t===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===El)return i.UNSIGNED_SHORT_5_5_5_1;if(t===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===gh)return i.BYTE;if(t===_h)return i.SHORT;if(t===vr)return i.UNSIGNED_SHORT;if(t===Ml)return i.INT;if(t===ii)return i.UNSIGNED_INT;if(t===an)return i.FLOAT;if(t===Lr)return i.HALF_FLOAT;if(t===yh)return i.ALPHA;if(t===xh)return i.RGB;if(t===on)return i.RGBA;if(t===Mh)return i.LUMINANCE;if(t===Sh)return i.LUMINANCE_ALPHA;if(t===yr)return i.DEPTH_COMPONENT;if(t===zi)return i.DEPTH_STENCIL;if(t===bl)return i.RED;if(t===Tl)return i.RED_INTEGER;if(t===Eh)return i.RG;if(t===wl)return i.RG_INTEGER;if(t===Al)return i.RGBA_INTEGER;if(t===_s||t===vs||t===ys||t===xs)if(s===qe){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===_s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===_s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===to||t===no||t===io||t===ro){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===so||t===ao||t===oo){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===so||t===ao)return s===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===oo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===lo||t===co||t===ho||t===uo||t===po||t===mo||t===fo||t===go||t===_o||t===vo||t===yo||t===xo||t===Mo||t===So){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===lo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===co)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ho)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===uo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===po)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===mo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===fo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===go)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===_o)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===vo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===yo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===xo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Mo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===So)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ms||t===Eo||t===bo){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Ms)return s===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===bh||t===To||t===wo||t===Ao){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Ms)return r.COMPRESSED_RED_RGTC1_EXT;if(t===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Bi?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Vo=class extends nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Et;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xo=class extends En{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,y=new Wo,m=t.getContextAttributes(),g=null,_=null,v=[],b=[],U=new ce,P=null,z=new nt;z.viewport=new je;let H=new nt;H.viewport=new je;let G=[z,H],X=new Vo,q=null,k=null;function Z(L){let Q=b.indexOf(L.inputSource);if(Q===-1)return;let Y=v[Q];Y!==void 0&&(Y.update(L.inputSource,L.frame,c||a),Y.dispatchEvent({type:L.type,data:L.inputSource}))}function N(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",V);for(let L=0;L<v.length;L++){let Q=b[L];Q!==null&&(b[L]=null,v[L].disconnect(Q))}q=null,k=null,y.reset(),e.setRenderTarget(g),p=null,u=null,d=null,r=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}function V(L){for(let Q=0;Q<L.removed.length;Q++){let Y=L.removed[Q],ie=b.indexOf(Y);ie>=0&&(b[ie]=null,v[ie].disconnect(Y))}for(let Q=0;Q<L.added.length;Q++){let Y=L.added[Q],ie=b.indexOf(Y);if(ie===-1){for(let A=0;A<v.length;A++){if(A>=b.length){b.push(Y),ie=A;break}if(b[A]===null){b[A]=Y,ie=A;break}}if(ie===-1)break}let se=v[ie];se&&se.connect(Y)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Q=v[L];return Q===void 0&&(Q=new mr,v[L]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(L){let Q=v[L];return Q===void 0&&(Q=new mr,v[L]=Q),Q.getGripSpace()},this.getHand=function(L){let Q=v[L];return Q===void 0&&(Q=new mr,v[L]=Q),Q.getHandSpace()},this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,Y=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?zi:yr,Y=m.stencil?Bi:ii);let se={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(se),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new bn(u.textureWidth,u.textureHeight,{format:on,type:Hn,depthTexture:new Is(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let j=new R,$=new R;function ne(L,Q){Q===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Q.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let Q=L.near,Y=L.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(Y=y.depthFar)),X.near=H.near=z.near=Q,X.far=H.far=z.far=Y,q===X.near&&k===X.far||(r.updateRenderState({depthNear:X.near,depthFar:X.far}),q=X.near,k=X.far),z.layers.mask=2|L.layers.mask,H.layers.mask=4|L.layers.mask,X.layers.mask=z.layers.mask|H.layers.mask;let ie=L.parent,se=X.cameras;ne(X,ie);for(let A=0;A<se.length;A++)ne(se[A],ie);se.length===2?function(A,M,B){j.setFromMatrixPosition(M.matrixWorld),$.setFromMatrixPosition(B.matrixWorld);let S=j.distanceTo($),x=M.projectionMatrix.elements,w=B.projectionMatrix.elements,E=x[14]/(x[10]-1),T=x[14]/(x[10]+1),I=(x[9]+1)/x[5],O=(x[9]-1)/x[5],D=(x[8]-1)/x[0],J=(w[8]+1)/w[0],F=E*D,W=E*J,ee=S/(-D+J),oe=ee*-D;if(M.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(oe),A.translateZ(ee),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),x[10]===-1)A.projectionMatrix.copy(M.projectionMatrix),A.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let de=E+ee,fe=T+ee,Ee=F-oe,Se=W+(S-oe),ve=I*T/fe*de,He=O*T/fe*de;A.projectionMatrix.makePerspective(Ee,Se,ve,He,de,fe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}(X,z,H):X.projectionMatrix.copy(z.projectionMatrix),function(A,M,B){B===null?A.matrix.copy(M.matrixWorld):(A.matrix.copy(B.matrixWorld),A.matrix.invert(),A.matrix.multiply(M.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(M.projectionMatrix),A.projectionMatrixInverse.copy(M.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*xr*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}(L,X,ie)},this.getCamera=function(){return X},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(L){l=L,u!==null&&(u.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)};let he=null,pe=new Rh;pe.setAnimationLoop(function(L,Q){if(h=Q.getViewerPose(c||a),f=Q,h!==null){let Y=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ie=!1;Y.length!==X.cameras.length&&(X.cameras.length=0,ie=!0);for(let A=0;A<Y.length;A++){let M=Y[A],B=null;if(p!==null)B=p.getViewport(M);else{let x=d.getViewSubImage(u,M);B=x.viewport,A===0&&(e.setRenderTargetTextures(_,x.colorTexture,u.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(_))}let S=G[A];S===void 0&&(S=new nt,S.layers.enable(A),S.viewport=new je,G[A]=S),S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(M.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(B.x,B.y,B.width,B.height),A===0&&(X.matrix.copy(S.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ie===!0&&X.cameras.push(S)}let se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){let A=d.getDepthInformation(Y[0]);A&&A.isValid&&A.texture&&y.init(e,A,r.renderState)}}for(let Y=0;Y<v.length;Y++){let ie=b[Y],se=v[Y];ie!==null&&se!==void 0&&se.update(ie,Q,c||a)}he&&he(L,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),f=null}),this.setAnimationLoop=function(L){he=L},this.dispose=function(){}}},$n=new ln,Sp=new Pe;function Ep(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,$n.copy(l),$n.x*=-1,$n.y*=-1,$n.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),r.envMapRotation.value.setFromMatrix4(Sp.makeRotationFromEuler($n)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Ah(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(n(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(n(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function bp(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,f){let y=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let g=f[m];if(typeof y=="number"||typeof y=="boolean"){if(g!==y)return f[m]=y,!0}else if(g.equals(y)===!1)return g.copy(y),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&(function(m){let g=m.uniforms,_=0,v=16;for(let U=0,P=g.length;U<P;U++){let z=Array.isArray(g[U])?g[U]:[g[U]];for(let H=0,G=z.length;H<G;H++){let X=z[H],q=Array.isArray(X.value)?X.value:[X.value];for(let k=0,Z=q.length;k<Z;k++){let N=c(q[k]),V=_%v,j=V%N.boundary,$=V+j;_+=j,$!==0&&v-$<N.storage&&(_+=v-$),X.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=N.storage}}}let b=_%v;b>0&&(_+=v-b),m.__size=_,m.__cache={}}(d),p=function(m){let g=function(){for(let U=0;U<o;U++)if(a.indexOf(U)===-1)return a.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=g;let _=i.createBuffer(),v=m.__size,b=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,_),_}(d),r[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let y=e.render.frame;s[d.id]!==y&&(function(m){let g=r[m.id],_=m.uniforms,v=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let b=0,U=_.length;b<U;b++){let P=Array.isArray(_[b])?_[b]:[_[b]];for(let z=0,H=P.length;z<H;z++){let G=P[z];if(l(G,b,z,v)===!0){let X=G.__offset,q=Array.isArray(G.value)?G.value:[G.value],k=0;for(let Z=0;Z<q.length;Z++){let N=q[Z],V=c(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,X+k,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,k),k+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}(d),s[d.id]=y)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}var cn=class{constructor(e={}){let{canvas:t=Uu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),y=new Int32Array(4),m=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=0,this.toneMappingExposure=1;let b=this,U=!1,P=0,z=0,H=null,G=-1,X=null,q=new je,k=new je,Z=null,N=new Ae(0),V=0,j=t.width,$=t.height,ne=1,he=null,pe=null,L=new je(0,0,j,$),Q=new je(0,0,j,$),Y=!1,ie=new Gi,se=!1,A=!1,M=new Pe,B=new Pe,S=new R,x=new je,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E=!1;function T(){return H===null?ne:1}let I,O,D,J,F,W,ee,oe,de,fe,Ee,Se,ve,He,Ge,Xe,xe,we,Oe,Lt,fn,St,nn,Vn,K=n;function Qi(C,te){return t.getContext(C,te)}try{let C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",zl,!1),t.addEventListener("webglcontextrestored",Hl,!1),t.addEventListener("webglcontextcreationerror",kl,!1),K===null){let te="webgl2";if(K=Qi(te,C),K===null)throw Qi(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function Bl(){I=new sd(K),I.init(),St=new xp(K,I),O=new td(K,I,e,St),D=new vp(K,I),O.reverseDepthBuffer&&u&&D.buffers.depth.setReversed(!0),J=new ld(K),F=new lp,W=new yp(K,I,D,F,O,St,J),ee=new id(b),oe=new rd(b),de=new Ju(K),nn=new Qu(K,de),fe=new ad(K,de,J,nn),Ee=new hd(K,fe,de,J),Oe=new cd(K,O,W),Xe=new nd(F),Se=new op(b,ee,oe,I,O,nn,Xe),ve=new Ep(b,F),He=new hp,Ge=new fp(I),we=new $u(b,ee,oe,D,Ee,p,l),xe=new gp(b,Ee,O),Vn=new bp(K,J,O,D),Lt=new ed(K,I,J),fn=new od(K,I,J),J.programs=Se.programs,b.capabilities=O,b.extensions=I,b.properties=F,b.renderLists=He,b.shadowMap=xe,b.state=D,b.info=J}Bl();let dt=new Xo(b,K);function zl(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Hl(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let C=J.autoReset,te=xe.enabled,ae=xe.autoUpdate,ue=xe.needsUpdate,re=xe.type;Bl(),J.autoReset=C,xe.enabled=te,xe.autoUpdate=ae,xe.needsUpdate=ue,xe.type=re}function kl(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gl(C){let te=C.target;te.removeEventListener("dispose",Gl),function(ae){(function(ue){let re=F.get(ue).programs;re!==void 0&&(re.forEach(function(me){Se.releaseProgram(me)}),ue.isShaderMaterial&&Se.releaseShaderCache(ue))})(ae),F.remove(ae)}(te)}function Vl(C,te,ae){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=1,C.needsUpdate=!0,Fr(C,te,ae),C.side=0,C.needsUpdate=!0,Fr(C,te,ae),C.side=2):Fr(C,te,ae)}this.xr=dt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let C=I.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=I.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(j,$,!1))},this.getSize=function(C){return C.set(j,$)},this.setSize=function(C,te,ae=!0){dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(j=C,$=te,t.width=Math.floor(C*ne),t.height=Math.floor(te*ne),ae===!0&&(t.style.width=C+"px",t.style.height=te+"px"),this.setViewport(0,0,C,te))},this.getDrawingBufferSize=function(C){return C.set(j*ne,$*ne).floor()},this.setDrawingBufferSize=function(C,te,ae){j=C,$=te,ne=ae,t.width=Math.floor(C*ae),t.height=Math.floor(te*ae),this.setViewport(0,0,C,te)},this.getCurrentViewport=function(C){return C.copy(q)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,te,ae,ue){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,te,ae,ue),D.viewport(q.copy(L).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,te,ae,ue){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,te,ae,ue),D.scissor(k.copy(Q).multiplyScalar(ne).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){D.setScissorTest(Y=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){pe=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(C=!0,te=!0,ae=!0){let ue=0;if(C){let re=!1;if(H!==null){let me=H.texture.format;re=me===Al||me===wl||me===Tl}if(re){let me=H.texture.type,ye=me===Hn||me===ii||me===vr||me===Bi||me===Sl||me===El,Me=we.getClearColor(),be=we.getClearAlpha(),Ie=Me.r,De=Me.g,Te=Me.b;ye?(f[0]=Ie,f[1]=De,f[2]=Te,f[3]=be,K.clearBufferuiv(K.COLOR,0,f)):(y[0]=Ie,y[1]=De,y[2]=Te,y[3]=be,K.clearBufferiv(K.COLOR,0,y))}else ue|=K.COLOR_BUFFER_BIT}te&&(ue|=K.DEPTH_BUFFER_BIT),ae&&(ue|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",zl,!1),t.removeEventListener("webglcontextrestored",Hl,!1),t.removeEventListener("webglcontextcreationerror",kl,!1),He.dispose(),Ge.dispose(),F.dispose(),ee.dispose(),oe.dispose(),Ee.dispose(),nn.dispose(),Vn.dispose(),Se.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Wl),dt.removeEventListener("sessionend",Xl),Wn.stop()},this.renderBufferDirect=function(C,te,ae,ue,re,me){te===null&&(te=w);let ye=re.isMesh&&re.matrixWorld.determinant()<0,Me=function(ze,yt,mt,Ne,Ce){yt.isScene!==!0&&(yt=w),W.resetTextureUnits();let zt=yt.fog,oa=Ne.isMeshStandardMaterial?yt.environment:null,er=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:qi,mi=(Ne.isMeshStandardMaterial?oe:ee).get(Ne.envMap||oa),la=Ne.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ca=!!mt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),ha=!!mt.morphAttributes.position,Pn=!!mt.morphAttributes.normal,$h=!!mt.morphAttributes.color,Kl=0;Ne.toneMapped&&(H!==null&&H.isXRRenderTarget!==!0||(Kl=b.toneMapping));let $l=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Qh=$l!==void 0?$l.length:0,Be=F.get(Ne),eu=g.state.lights;if(se===!0&&(A===!0||ze!==X)){let Dt=ze===X&&Ne.id===G;Xe.setState(Ne,ze,Dt)}let Ht=!1;Ne.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==eu.state.version||Be.outputColorSpace!==er||Ce.isBatchedMesh&&Be.batching===!1?Ht=!0:Ce.isBatchedMesh||Be.batching!==!0?Ce.isBatchedMesh&&Be.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Be.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Be.instancing===!1?Ht=!0:Ce.isInstancedMesh||Be.instancing!==!0?Ce.isSkinnedMesh&&Be.skinning===!1?Ht=!0:Ce.isSkinnedMesh||Be.skinning!==!0?Ce.isInstancedMesh&&Be.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Be.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Be.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Be.instancingMorph===!1&&Ce.morphTexture!==null||Be.envMap!==mi||Ne.fog===!0&&Be.fog!==zt?Ht=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===Xe.numPlanes&&Be.numIntersection===Xe.numIntersection?(Be.vertexAlphas!==la||Be.vertexTangents!==ca||Be.morphTargets!==ha||Be.morphNormals!==Pn||Be.morphColors!==$h||Be.toneMapping!==Kl||Be.morphTargetsCount!==Qh)&&(Ht=!0):Ht=!0:Ht=!0:Ht=!0:Ht=!0:(Ht=!0,Be.__version=Ne.version);let Xn=Be.currentProgram;Ht===!0&&(Xn=Fr(Ne,yt,Ce));let Ql=!1,tr=!1,ua=!1,st=Xn.getUniforms(),In=Be.uniforms;if(D.useProgram(Xn.program)&&(Ql=!0,tr=!0,ua=!0),Ne.id!==G&&(G=Ne.id,tr=!0),Ql||X!==ze){D.buffers.depth.getReversed()?(M.copy(ze.projectionMatrix),function(jn){let et=jn.elements;et[2]=.5*et[2]+.5*et[3],et[6]=.5*et[6]+.5*et[7],et[10]=.5*et[10]+.5*et[11],et[14]=.5*et[14]+.5*et[15]}(M),function(jn){let et=jn.elements;et[11]===-1?(et[10]=-et[10]-1,et[14]=-et[14]):(et[10]=-et[10],et[14]=1-et[14])}(M),st.setValue(K,"projectionMatrix",M)):st.setValue(K,"projectionMatrix",ze.projectionMatrix),st.setValue(K,"viewMatrix",ze.matrixWorldInverse);let Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(K,S.setFromMatrixPosition(ze.matrixWorld)),O.logarithmicDepthBuffer&&st.setValue(K,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&st.setValue(K,"isOrthographic",ze.isOrthographicCamera===!0),X!==ze&&(X=ze,tr=!0,ua=!0)}if(Ce.isSkinnedMesh){st.setOptional(K,Ce,"bindMatrix"),st.setOptional(K,Ce,"bindMatrixInverse");let Dt=Ce.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),st.setValue(K,"boneTexture",Dt.boneTexture,W))}Ce.isBatchedMesh&&(st.setOptional(K,Ce,"batchingTexture"),st.setValue(K,"batchingTexture",Ce._matricesTexture,W),st.setOptional(K,Ce,"batchingIdTexture"),st.setValue(K,"batchingIdTexture",Ce._indirectTexture,W),st.setOptional(K,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&st.setValue(K,"batchingColorTexture",Ce._colorsTexture,W));let da=mt.morphAttributes;da.position===void 0&&da.normal===void 0&&da.color===void 0||Oe.update(Ce,mt,Xn),(tr||Be.receiveShadow!==Ce.receiveShadow)&&(Be.receiveShadow=Ce.receiveShadow,st.setValue(K,"receiveShadow",Ce.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(In.envMap.value=mi,In.flipEnvMap.value=mi.isCubeTexture&&mi.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&yt.environment!==null&&(In.envMapIntensity.value=yt.environmentIntensity),tr&&(st.setValue(K,"toneMappingExposure",b.toneMappingExposure),Be.needsLights&&(kt=ua,(rn=In).ambientLightColor.needsUpdate=kt,rn.lightProbe.needsUpdate=kt,rn.directionalLights.needsUpdate=kt,rn.directionalLightShadows.needsUpdate=kt,rn.pointLights.needsUpdate=kt,rn.pointLightShadows.needsUpdate=kt,rn.spotLights.needsUpdate=kt,rn.spotLightShadows.needsUpdate=kt,rn.rectAreaLights.needsUpdate=kt,rn.hemisphereLights.needsUpdate=kt),zt&&Ne.fog===!0&&ve.refreshFogUniforms(In,zt),ve.refreshMaterialUniforms(In,Ne,ne,$,g.state.transmissionRenderTarget[ze.id]),Ni.upload(K,Zl(Be),In,W));var rn,kt;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(Ni.upload(K,Zl(Be),In,W),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&st.setValue(K,"center",Ce.center),st.setValue(K,"modelViewMatrix",Ce.modelViewMatrix),st.setValue(K,"normalMatrix",Ce.normalMatrix),st.setValue(K,"modelMatrix",Ce.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Dt=Ne.uniformsGroups;for(let jn=0,et=Dt.length;jn<et;jn++){let ec=Dt[jn];Vn.update(ec,Xn),Vn.bind(ec,Xn)}}return Xn}(C,te,ae,ue,re);D.setMaterial(ue,ye);let be=ae.index,Ie=1;if(ue.wireframe===!0){if(be=fe.getWireframeAttribute(ae),be===void 0)return;Ie=2}let De=ae.drawRange,Te=ae.attributes.position,Fe=De.start*Ie,rt=(De.start+De.count)*Ie;me!==null&&(Fe=Math.max(Fe,me.start*Ie),rt=Math.min(rt,(me.start+me.count)*Ie)),be!==null?(Fe=Math.max(Fe,0),rt=Math.min(rt,be.count)):Te!=null&&(Fe=Math.max(Fe,0),rt=Math.min(rt,Te.count));let Je=rt-Fe;if(Je<0||Je===1/0)return;let ot;nn.setup(re,ue,Me,ae,be);let $e=Lt;if(be!==null&&(ot=de.get(be),$e=fn,$e.setIndex(ot)),re.isMesh)ue.wireframe===!0?(D.setLineWidth(ue.wireframeLinewidth*T()),$e.setMode(K.LINES)):$e.setMode(K.TRIANGLES);else if(re.isLine){let ze=ue.linewidth;ze===void 0&&(ze=1),D.setLineWidth(ze*T()),re.isLineSegments?$e.setMode(K.LINES):re.isLineLoop?$e.setMode(K.LINE_LOOP):$e.setMode(K.LINE_STRIP)}else re.isPoints?$e.setMode(K.POINTS):re.isSprite&&$e.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)$e.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))$e.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let ze=re._multiDrawStarts,yt=re._multiDrawCounts,mt=re._multiDrawCount,Ne=be?de.get(be).bytesPerElement:1,Ce=F.get(ue).currentProgram.getUniforms();for(let zt=0;zt<mt;zt++)Ce.setValue(K,"_gl_DrawID",zt),$e.render(ze[zt]/Ne,yt[zt])}else if(re.isInstancedMesh)$e.renderInstances(Fe,Je,re.count);else if(ae.isInstancedBufferGeometry){let ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,yt=Math.min(ae.instanceCount,ze);$e.renderInstances(Fe,Je,yt)}else $e.render(Fe,Je)},this.compile=function(C,te,ae=null){ae===null&&(ae=C),g=Ge.get(ae),g.init(te),v.push(g),ae.traverseVisible(function(re){re.isLight&&re.layers.test(te.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))}),C!==ae&&C.traverseVisible(function(re){re.isLight&&re.layers.test(te.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))}),g.setupLights();let ue=new Set;return C.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let me=re.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){let Me=me[ye];Vl(Me,ae,re),ue.add(Me)}else Vl(me,ae,re),ue.add(me)}),v.pop(),g=null,ue},this.compileAsync=function(C,te,ae=null){let ue=this.compile(C,te,ae);return new Promise(re=>{function me(){ue.forEach(function(ye){F.get(ye).currentProgram.isReady()&&ue.delete(ye)}),ue.size!==0?setTimeout(me,10):re(C)}I.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let sa=null;function Wl(){Wn.stop()}function Xl(){Wn.start()}let Wn=new Rh;function aa(C,te,ae,ue){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){ue&&x.setFromMatrixPosition(C.matrixWorld).applyMatrix4(B);let me=Ee.update(C),ye=C.material;ye.visible&&m.push(C,me,ye,ae,x.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){let me=Ee.update(C),ye=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),x.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),x.copy(me.boundingSphere.center)),x.applyMatrix4(C.matrixWorld).applyMatrix4(B)),Array.isArray(ye)){let Me=me.groups;for(let be=0,Ie=Me.length;be<Ie;be++){let De=Me[be],Te=ye[De.materialIndex];Te&&Te.visible&&m.push(C,me,Te,ae,x.z,De)}}else ye.visible&&m.push(C,me,ye,ae,x.z,null)}}let re=C.children;for(let me=0,ye=re.length;me<ye;me++)aa(re[me],te,ae,ue)}function jl(C,te,ae,ue){let re=C.opaque,me=C.transmissive,ye=C.transparent;g.setupLightsView(ae),se===!0&&Xe.setGlobalState(b.clippingPlanes,ae),ue&&D.viewport(q.copy(ue)),re.length>0&&Or(re,te,ae),me.length>0&&Or(me,te,ae),ye.length>0&&Or(ye,te,ae),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function ql(C,te,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new bn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Lr:Hn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let re=g.state.transmissionRenderTarget[ue.id],me=ue.viewport||q;re.setSize(me.z,me.w);let ye=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(N),V=b.getClearAlpha(),V<1&&b.setClearColor(16777215,.5),b.clear(),E&&we.render(ae);let Me=b.toneMapping;b.toneMapping=0;let be=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),se===!0&&Xe.setGlobalState(b.clippingPlanes,ue),Or(C,ae,ue),W.updateMultisampleRenderTarget(re),W.updateRenderTargetMipmap(re),I.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let De=0,Te=te.length;De<Te;De++){let Fe=te[De],rt=Fe.object,Je=Fe.geometry,ot=Fe.material,$e=Fe.group;if(ot.side===2&&rt.layers.test(ue.layers)){let ze=ot.side;ot.side=1,ot.needsUpdate=!0,Yl(rt,ae,ue,Je,ot,$e),ot.side=ze,ot.needsUpdate=!0,Ie=!0}}Ie===!0&&(W.updateMultisampleRenderTarget(re),W.updateRenderTargetMipmap(re))}b.setRenderTarget(ye),b.setClearColor(N,V),be!==void 0&&(ue.viewport=be),b.toneMapping=Me}function Or(C,te,ae){let ue=te.isScene===!0?te.overrideMaterial:null;for(let re=0,me=C.length;re<me;re++){let ye=C[re],Me=ye.object,be=ye.geometry,Ie=ue===null?ye.material:ue,De=ye.group;Me.layers.test(ae.layers)&&Yl(Me,te,ae,be,Ie,De)}}function Yl(C,te,ae,ue,re,me){C.onBeforeRender(b,te,ae,ue,re,me),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(b,te,ae,ue,C,me),re.transparent===!0&&re.side===2&&re.forceSinglePass===!1?(re.side=1,re.needsUpdate=!0,b.renderBufferDirect(ae,te,ue,re,C,me),re.side=0,re.needsUpdate=!0,b.renderBufferDirect(ae,te,ue,re,C,me),re.side=2):b.renderBufferDirect(ae,te,ue,re,C,me),C.onAfterRender(b,te,ae,ue,re,me)}function Fr(C,te,ae){te.isScene!==!0&&(te=w);let ue=F.get(C),re=g.state.lights,me=g.state.shadowsArray,ye=re.state.version,Me=Se.getParameters(C,re.state,me,te,ae),be=Se.getProgramCacheKey(Me),Ie=ue.programs;ue.environment=C.isMeshStandardMaterial?te.environment:null,ue.fog=te.fog,ue.envMap=(C.isMeshStandardMaterial?oe:ee).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,Ie===void 0&&(C.addEventListener("dispose",Gl),Ie=new Map,ue.programs=Ie);let De=Ie.get(be);if(De!==void 0){if(ue.currentProgram===De&&ue.lightsStateVersion===ye)return Jl(C,Me),De}else Me.uniforms=Se.getUniforms(C),C.onBeforeCompile(Me,b),De=Se.acquireProgram(Me,be),Ie.set(be,De),ue.uniforms=Me.uniforms;let Te=ue.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Te.clippingPlanes=Xe.uniform),Jl(C,Me),ue.needsLights=function(Fe){return Fe.isMeshLambertMaterial||Fe.isMeshToonMaterial||Fe.isMeshPhongMaterial||Fe.isMeshStandardMaterial||Fe.isShadowMaterial||Fe.isShaderMaterial&&Fe.lights===!0}(C),ue.lightsStateVersion=ye,ue.needsLights&&(Te.ambientLightColor.value=re.state.ambient,Te.lightProbe.value=re.state.probe,Te.directionalLights.value=re.state.directional,Te.directionalLightShadows.value=re.state.directionalShadow,Te.spotLights.value=re.state.spot,Te.spotLightShadows.value=re.state.spotShadow,Te.rectAreaLights.value=re.state.rectArea,Te.ltc_1.value=re.state.rectAreaLTC1,Te.ltc_2.value=re.state.rectAreaLTC2,Te.pointLights.value=re.state.point,Te.pointLightShadows.value=re.state.pointShadow,Te.hemisphereLights.value=re.state.hemi,Te.directionalShadowMap.value=re.state.directionalShadowMap,Te.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Te.spotShadowMap.value=re.state.spotShadowMap,Te.spotLightMatrix.value=re.state.spotLightMatrix,Te.spotLightMap.value=re.state.spotLightMap,Te.pointShadowMap.value=re.state.pointShadowMap,Te.pointShadowMatrix.value=re.state.pointShadowMatrix),ue.currentProgram=De,ue.uniformsList=null,De}function Zl(C){if(C.uniformsList===null){let te=C.currentProgram.getUniforms();C.uniformsList=Ni.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function Jl(C,te){let ae=F.get(C);ae.outputColorSpace=te.outputColorSpace,ae.batching=te.batching,ae.batchingColor=te.batchingColor,ae.instancing=te.instancing,ae.instancingColor=te.instancingColor,ae.instancingMorph=te.instancingMorph,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphColors=te.morphColors,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents,ae.toneMapping=te.toneMapping}Wn.setAnimationLoop(function(C){sa&&sa(C)}),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){sa=C,dt.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},dt.addEventListener("sessionstart",Wl),dt.addEventListener("sessionend",Xl),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(U===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(te),te=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,te,H),g=Ge.get(C,v.length),g.init(te),v.push(g),B.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ie.setFromProjectionMatrix(B),A=this.localClippingEnabled,se=Xe.init(this.clippingPlanes,A),m=He.get(C,_.length),m.init(),_.push(m),dt.enabled===!0&&dt.isPresenting===!0){let me=b.xr.getDepthSensingMesh();me!==null&&aa(me,te,-1/0,b.sortObjects)}aa(C,te,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(he,pe),E=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,E&&we.addToRenderList(m,C),this.info.render.frame++,se===!0&&Xe.beginShadows();let ae=g.state.shadowsArray;xe.render(ae,C,te),se===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,re=m.transmissive;if(g.setupLights(),te.isArrayCamera){let me=te.cameras;if(re.length>0)for(let ye=0,Me=me.length;ye<Me;ye++)ql(ue,re,C,me[ye]);E&&we.render(C);for(let ye=0,Me=me.length;ye<Me;ye++){let be=me[ye];jl(m,C,be,be.viewport)}}else re.length>0&&ql(ue,re,C,te),E&&we.render(C),jl(m,C,te);H!==null&&(W.updateMultisampleRenderTarget(H),W.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(b,C,te),nn.resetDefaultState(),G=-1,X=null,v.pop(),v.length>0?(g=v[v.length-1],se===!0&&Xe.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,_.pop(),m=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,te,ae){F.get(C.texture).__webglTexture=te,F.get(C.depthTexture).__webglTexture=ae;let ue=F.get(C);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ae===void 0,ue.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,te){let ae=F.get(C);ae.__webglFramebuffer=te,ae.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(C,te=0,ae=0){H=C,P=te,z=ae;let ue=!0,re=null,me=!1,ye=!1;if(C){let Me=F.get(C);if(Me.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(K.FRAMEBUFFER,null),ue=!1;else if(Me.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Me.__hasExternalTextures)W.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let De=C.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&F.has(De)&&(C.width!==De.image.width||C.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}let be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ye=!0);let Ie=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(re=Array.isArray(Ie[te])?Ie[te][ae]:Ie[te],me=!0):re=C.samples>0&&W.useMultisampledRTT(C)===!1?F.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[ae]:Ie,q.copy(C.viewport),k.copy(C.scissor),Z=C.scissorTest}else q.copy(L).multiplyScalar(ne).floor(),k.copy(Q).multiplyScalar(ne).floor(),Z=Y;if(D.bindFramebuffer(K.FRAMEBUFFER,re)&&ue&&D.drawBuffers(C,re),D.viewport(q),D.scissor(k),D.setScissorTest(Z),me){let Me=F.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me.__webglTexture,ae)}else if(ye){let Me=F.get(C.texture),be=te||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Me.__webglTexture,ae||0,be)}G=-1},this.readRenderTargetPixels=function(C,te,ae,ue,re,me,ye){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){D.bindFramebuffer(K.FRAMEBUFFER,Me);try{let be=C.texture,Ie=be.format,De=be.type;if(!O.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");te>=0&&te<=C.width-ue&&ae>=0&&ae<=C.height-re&&K.readPixels(te,ae,ue,re,St.convert(Ie),St.convert(De),me)}finally{let be=H!==null?F.get(H).__webglFramebuffer:null;D.bindFramebuffer(K.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,te,ae,ue,re,me,ye){if(!C||!C.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){let be=C.texture,Ie=be.format,De=be.type;if(!O.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=C.width-ue&&ae>=0&&ae<=C.height-re){D.bindFramebuffer(K.FRAMEBUFFER,Me);let Te=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Te),K.bufferData(K.PIXEL_PACK_BUFFER,me.byteLength,K.STREAM_READ),K.readPixels(te,ae,ue,re,St.convert(Ie),St.convert(De),0);let Fe=H!==null?F.get(H).__webglFramebuffer:null;D.bindFramebuffer(K.FRAMEBUFFER,Fe);let rt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await function(Je,ot,$e){return new Promise(function(ze,yt){setTimeout(function mt(){switch(Je.clientWaitSync(ot,Je.SYNC_FLUSH_COMMANDS_BIT,0)){case Je.WAIT_FAILED:yt();break;case Je.TIMEOUT_EXPIRED:setTimeout(mt,$e);break;default:ze()}},$e)})}(K,rt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Te),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,me),K.deleteBuffer(Te),K.deleteSync(rt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,te=null,ae=0){C.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1]);let ue=Math.pow(2,-ae),re=Math.floor(C.image.width*ue),me=Math.floor(C.image.height*ue),ye=te!==null?te.x:0,Me=te!==null?te.y:0;W.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ae,0,0,ye,Me,re,me),D.unbindTexture()},this.copyTextureToTexture=function(C,te,ae=null,ue=null,re=0){let me,ye,Me,be,Ie,De,Te,Fe,rt;C.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,C=arguments[1],te=arguments[2],re=arguments[3]||0,ae=null);let Je=C.isCompressedTexture?C.mipmaps[re]:C.image;ae!==null?(me=ae.max.x-ae.min.x,ye=ae.max.y-ae.min.y,Me=ae.isBox3?ae.max.z-ae.min.z:1,be=ae.min.x,Ie=ae.min.y,De=ae.isBox3?ae.min.z:0):(me=Je.width,ye=Je.height,Me=Je.depth||1,be=0,Ie=0,De=0),ue!==null?(Te=ue.x,Fe=ue.y,rt=ue.z):(Te=0,Fe=0,rt=0);let ot=St.convert(te.format),$e=St.convert(te.type),ze;te.isData3DTexture?(W.setTexture3D(te,0),ze=K.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(W.setTexture2DArray(te,0),ze=K.TEXTURE_2D_ARRAY):(W.setTexture2D(te,0),ze=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment);let yt=K.getParameter(K.UNPACK_ROW_LENGTH),mt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Ne=K.getParameter(K.UNPACK_SKIP_PIXELS),Ce=K.getParameter(K.UNPACK_SKIP_ROWS),zt=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,Je.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Je.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,be),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ie),K.pixelStorei(K.UNPACK_SKIP_IMAGES,De);let oa=C.isDataArrayTexture||C.isData3DTexture,er=te.isDataArrayTexture||te.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let mi=F.get(C),la=F.get(te),ca=F.get(mi.__renderTarget),ha=F.get(la.__renderTarget);D.bindFramebuffer(K.READ_FRAMEBUFFER,ca.__webglFramebuffer),D.bindFramebuffer(K.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Pn=0;Pn<Me;Pn++)oa&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,F.get(C).__webglTexture,re,De+Pn),C.isDepthTexture?(er&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,F.get(te).__webglTexture,re,rt+Pn),K.blitFramebuffer(be,Ie,me,ye,Te,Fe,me,ye,K.DEPTH_BUFFER_BIT,K.NEAREST)):er?K.copyTexSubImage3D(ze,re,Te,Fe,rt+Pn,be,Ie,me,ye):K.copyTexSubImage2D(ze,re,Te,Fe,rt+Pn,be,Ie,me,ye);D.bindFramebuffer(K.READ_FRAMEBUFFER,null),D.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else er?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(ze,re,Te,Fe,rt,me,ye,Me,ot,$e,Je.data):te.isCompressedArrayTexture?K.compressedTexSubImage3D(ze,re,Te,Fe,rt,me,ye,Me,ot,Je.data):K.texSubImage3D(ze,re,Te,Fe,rt,me,ye,Me,ot,$e,Je):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,re,Te,Fe,me,ye,ot,$e,Je.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,re,Te,Fe,Je.width,Je.height,ot,Je.data):K.texSubImage2D(K.TEXTURE_2D,re,Te,Fe,me,ye,ot,$e,Je);K.pixelStorei(K.UNPACK_ROW_LENGTH,yt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,mt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Ne),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ce),K.pixelStorei(K.UNPACK_SKIP_IMAGES,zt),re===0&&te.generateMipmaps&&K.generateMipmap(ze),D.unbindTexture()},this.copyTextureToTexture3D=function(C,te,ae=null,ue=null,re=0){return C.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ue=arguments[1]||null,C=arguments[2],te=arguments[3],re=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,te,ae,ue,re)},this.initRenderTarget=function(C){F.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),D.unbindTexture()},this.resetState=function(){P=0,z=0,H=null,D.reset(),nn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var hn=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pt=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var vm=new R;var ym=new R,xm=new R,Mm=new R,Sm=new ce,Em=new ce,bm=new Pe,Tm=new R,wm=new R,Am=new R,Rm=new ce,Cm=new ce,Pm=new ce;var Im=new R,Lm=new R;var Dm=new R,Um=new je,Nm=new je,Om=new R,Fm=new Pe,Bm=new R,zm=new Jt,Hm=new Pe,km=new Tn;var jo=class extends Et{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gm=new Pe,Vm=new Pe;var Ls=class extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ri=new Pe,Kc=new Pe,ss=[],$c=new Zt,Tp=new Pe,lr=new le,cr=new Jt,Ds=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),$c.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union($c)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),cr.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ri),Kc.multiplyMatrices(n,Ri),lr.matrixWorld=Kc,lr.raycast(e,ss);for(let a=0,o=ss.length;a<o;a++){let l=ss[a];l.instanceId=s,l.object=this,t.push(l)}ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(r*this.count),r,this.count,bl,an));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Wm=new Pe,Xm=new Ae(1,1,1),jm=new Gi,qm=new Zt,Ym=new Jt,Zm=new R,Jm=new R,Km=new R,$m=new qo,Qm=new le;var Wi=class extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Us=new R,Ns=new R,Qc=new Pe,hr=new Tn,as=new Jt,ka=new R,eh=new R,Xi=class extends ft{constructor(e=new Ze,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Us.fromBufferAttribute(t,r-1),Ns.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Us.distanceTo(Ns);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;Qc.copy(r).invert(),hr.copy(e.ray).applyMatrix4(Qc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=u,y=p-1;f<y;f+=c){let m=h.getX(f),g=h.getX(f+1),_=os(this,e,hr,l,m,g);_&&t.push(_)}if(this.isLineLoop){let f=h.getX(p-1),y=h.getX(u),m=os(this,e,hr,l,f,y);m&&t.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,y=p-1;f<y;f+=c){let m=os(this,e,hr,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=os(this,e,hr,l,p-1,u);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function os(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(Us.fromBufferAttribute(a,r),Ns.fromBufferAttribute(a,s),t.distanceSqToSegment(Us,Ns,ka,eh)>n)return;ka.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(ka);return o<e.near||o>e.far?void 0:{distance:o,point:eh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var ef=new R,tf=new R;var Er=class extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},th=new Pe,Yo=new Tn,ls=new Jt,cs=new R,Os=class extends ft{constructor(e=new Ze,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;th.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(th);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);cs.fromBufferAttribute(h,p),nh(cs,p,l,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)cs.fromBufferAttribute(h,d),nh(cs,d,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nh(i,e,t,n,r,s,a){let o=Yo.distanceSqToPoint(i);if(o<t){let l=new R;Yo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Kt=class extends Et{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ft=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ce:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,r=[],s=[],a=[],o=new R,l=new Pe;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends Ft{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends br{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cl(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var hs=new R,Ga=new Cl,Va=new Cl,Wa=new Cl,un=class extends Ft{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(hs.subVectors(r[0],r[1]).add(r[0]),o=hs);let d=r[c%s],u=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(hs.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=hs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),m<1e-4&&(m=y),Ga.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,y,m),Va.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,y,m),Wa.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,y,m)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Va.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),Wa.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(Ga.calc(h),Va.calc(h),Wa.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ih(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function fr(i,e,t,n){return function(r,s){let a=1-r;return a*a*s}(i,e)+function(r,s){return 2*(1-r)*r*s}(i,t)+function(r,s){return r*r*s}(i,n)}function gr(i,e,t,n,r){return function(s,a){let o=1-s;return o*o*o*a}(i,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(i,t)+function(s,a){return 3*(1-s)*s*s*a}(i,n)+function(s,a){return s*s*s*a}(i,r)}var Fs=class extends Ft{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,r.x,s.x,a.x,o.x),gr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Ft{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,r.x,s.x,a.x,o.x),gr(e,r.y,s.y,a.y,o.y),gr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bs=class extends Ft{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Ft{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends Ft{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(fr(e,r.x,s.x,a.x),fr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends Ft{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(fr(e,r.x,s.x,a.x),fr(e,r.y,s.y,a.y),fr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ks=class extends Ft{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(ih(o,l.x,c.x,h.x,d.x),ih(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},Gs=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:un,CubicBezierCurve:Fs,CubicBezierCurve3:Jo,EllipseCurve:br,LineCurve:Bs,LineCurve3:Ko,QuadraticBezierCurve:zs,QuadraticBezierCurve3:Hs,SplineCurve:ks}),$o=class extends Ft{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Gs[r.type]().fromJSON(r))}return this}},ri=class extends $o{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bs(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new zs(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Fs(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ks(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new br(e,t,n,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bt=class i extends Ze{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=lt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new R,u=new ce,p=new R,f=new R,y=new R,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let _=0;_<=t;_++){let v=n+_*h*r,b=Math.sin(v),U=Math.cos(v);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*b,d.y=e[P].y,d.z=e[P].x*U,a.push(d.x,d.y,d.z),u.x=_/t,u.y=P/(e.length-1),o.push(u.x,u.y);let z=l[3*P+0]*b,H=l[3*P+1],G=l[3*P+0]*U;c.push(z,H,G)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let b=v+_*e.length,U=b,P=b+e.length,z=b+e.length+1,H=b+1;s.push(U,P,H),s.push(z,H,P)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Qo=class i extends Bt{constructor(e=1,t=1,n=4,r=8){let s=new ri;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},dn=class i extends Ze{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},We=class i extends Ze{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,y=[],m=n/2,g=0;function _(v){let b=f,U=new ce,P=new R,z=0,H=v===!0?e:t,G=v===!0?1:-1;for(let q=1;q<=r;q++)d.push(0,m*G,0),u.push(0,G,0),p.push(.5,.5),f++;let X=f;for(let q=0;q<=r;q++){let k=q/r*l+o,Z=Math.cos(k),N=Math.sin(k);P.x=H*N,P.y=m*G,P.z=H*Z,d.push(P.x,P.y,P.z),u.push(0,G,0),U.x=.5*Z+.5,U.y=.5*N*G+.5,p.push(U.x,U.y),f++}for(let q=0;q<r;q++){let k=b+q,Z=X+q;v===!0?h.push(Z,Z+1,k):h.push(Z+1,Z,k),z+=3}c.addGroup(g,z,v===!0?1:2),g+=z}(function(){let v=new R,b=new R,U=0,P=(t-e)/n;for(let z=0;z<=s;z++){let H=[],G=z/s,X=G*(t-e)+e;for(let q=0;q<=r;q++){let k=q/r,Z=k*l+o,N=Math.sin(Z),V=Math.cos(Z);b.x=X*N,b.y=-G*n+m,b.z=X*V,d.push(b.x,b.y,b.z),v.set(N,P,V).normalize(),u.push(v.x,v.y,v.z),p.push(k,1-G),H.push(f++)}y.push(H)}for(let z=0;z<r;z++)for(let H=0;H<s;H++){let G=y[H][z],X=y[H+1][z],q=y[H+1][z+1],k=y[H][z+1];(e>0||H!==0)&&(h.push(G,X,k),U+=3),(t>0||H!==s-1)&&(h.push(X,q,k),U+=3)}c.addGroup(g,U,0),g+=U})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class i extends We{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends Ze{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(u,p,f,y){let m=y+1,g=[];for(let _=0;_<=m;_++){g[_]=[];let v=u.clone().lerp(f,_/m),b=p.clone().lerp(f,_/m),U=m-_;for(let P=0;P<=U;P++)g[_][P]=P===0&&_===m?v:v.clone().lerp(b,P/U)}for(let _=0;_<m;_++)for(let v=0;v<2*(m-_)-1;v++){let b=Math.floor(v/2);v%2==0?(l(g[_][b+1]),l(g[_+1][b]),l(g[_][b])):(l(g[_][b+1]),l(g[_+1][b+1]),l(g[_+1][b]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,y){y<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=y/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new R,f=new R,y=new R;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],y),o(p,f,y,u)})(r),function(u){let p=new R;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let u=new R;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let y=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-m)}var p;(function(){let f=new R,y=new R,m=new R,g=new R,_=new ce,v=new ce,b=new ce;for(let U=0,P=0;U<s.length;U+=9,P+=6){f.set(s[U+0],s[U+1],s[U+2]),y.set(s[U+3],s[U+4],s[U+5]),m.set(s[U+6],s[U+7],s[U+8]),_.set(a[P+0],a[P+1]),v.set(a[P+2],a[P+3]),b.set(a[P+4],a[P+5]),g.copy(f).add(y).add(m).divideScalar(3);let z=d(g);h(_,P+0,f,z),h(v,P+2,y,z),h(b,P+4,m,z)}})(),function(){for(let f=0;f<a.length;f+=6){let y=a[f+0],m=a[f+2],g=a[f+4],_=Math.max(y,m,g),v=Math.min(y,m,g);_>.9&&v<.1&&(y<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Tr=class i extends si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},us=new R,ds=new R,Xa=new R,ps=new Bn,el=class extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Di*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:m,c:g}=ps;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ps.getNormal(Xa),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let _=0;_<3;_++){let v=(_+1)%3,b=d[_],U=d[v],P=ps[h[_]],z=ps[h[v]],H=`${b}_${U}`,G=`${U}_${b}`;G in u&&u[G]?(Xa.dot(u[G].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(z.x,z.y,z.z)),u[G]=null):H in u||(u[H]={index0:c[_],index1:c[v],normal:Xa.clone()})}}for(let f in u)if(u[f]){let{index0:y,index1:m}=u[f];us.fromBufferAttribute(o,y),ds.fromBufferAttribute(o,m),p.push(us.x,us.y,us.z),p.push(ds.x,ds.y,ds.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Tt=class extends ri{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ri().fromJSON(r))}return this}},wp=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=rh(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=function(f,y,m,g){let _=[],v,b,U,P,z;for(v=0,b=y.length;v<b;v++)U=y[v]*g,P=v<b-1?y[v+1]*g:f.length,z=rh(f,U,P,g,!1),z===z.next&&(z.steiner=!0),_.push(Up(z));for(_.sort(Ip),v=0;v<_.length;v++)m=Lp(_[v],m);return m}(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)d=i[f],u=i[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return wr(s,a,t,o,l,p,0),a};function rh(i,e,t,n,r){let s,a;if(r===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(i,e,t,n)>0)for(s=e;s<t;s+=n)a=sh(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=sh(s,i[s],i[s+1],a);return a&&Qs(a,a.next)&&(Rr(a),a=a.next),a}function ai(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Qs(n,n.next)&&it(n.prev,n,n.next)!==0)n=n.next;else{if(Rr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function wr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=tl(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(y){let m,g,_,v,b,U,P,z,H=1;do{for(g=y,y=null,b=null,U=0;g;){for(U++,_=g,P=0,m=0;m<H&&(P++,_=_.nextZ,_);m++);for(z=H;P>0||z>0&&_;)P!==0&&(z===0||!_||g.z<=_.z)?(v=g,g=g.nextZ,P--):(v=_,_=_.nextZ,z--),b?b.nextZ=v:y=v,v.prevZ=b,b=v;g=_}b.nextZ=null,H*=2}while(U>1)}(f)}(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Rp(i,n,r,s):Ap(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Rr(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?wr(i=Cp(ai(i),e,t),e,t,n,r,s,2):a===2&&Pp(i,e,t,n,r,s):wr(ai(i),e,t,n,r,s,1);break}}function Ap(i){let e=i.prev,t=i,n=i.next;if(it(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Li(r,o,s,l,a,c,f.x,f.y)&&it(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Rp(i,e,t,n){let r=i.prev,s=i,a=i.next;if(it(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=tl(p,f,e,t,n),_=tl(y,m,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=g&&b&&b.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==r&&v!==a&&Li(o,h,l,d,c,u,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=p&&b.x<=y&&b.y>=f&&b.y<=m&&b!==r&&b!==a&&Li(o,h,l,d,c,u,b.x,b.y)&&it(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==r&&v!==a&&Li(o,h,l,d,c,u,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=_;){if(b.x>=p&&b.x<=y&&b.y>=f&&b.y<=m&&b!==r&&b!==a&&Li(o,h,l,d,c,u,b.x,b.y)&&it(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cp(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Qs(r,s)&&Dh(r,n,n.next,s)&&Ar(r,s)&&Ar(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Rr(n),Rr(n.next),n=i=s),n=n.next}while(n!==i);return ai(n)}function Pp(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Np(a,o)){let l=Uh(a,o);return a=ai(a,a.next),l=ai(l,l.next),wr(a,e,t,n,r,s,0),void wr(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Ip(i,e){return i.x-e.x}function Lp(i,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,y=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&Li(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Ar(o,r)&&(f<y||f===y&&(o.x>a.x||o.x===a.x&&Dp(a,o)))&&(a=o,y=f)),o=o.next;while(o!==d);return a}(i,e);if(!t)return e;let n=Uh(t,i);return ai(n,n.next),ai(t,t.next)}function Dp(i,e){return it(i.prev,i,e.prev)<0&&it(e.next,i,i.next)<0}function tl(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Up(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Li(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Np(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Dh(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(i,e)&&(Ar(i,e)&&Ar(e,i)&&function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(i,e)&&(it(i.prev,i,e.prev)||it(i,e.prev,e))||Qs(i,e)&&it(i.prev,i,i.next)>0&&it(e.prev,e,e.next)>0)}function it(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qs(i,e){return i.x===e.x&&i.y===e.y}function Dh(i,e,t,n){let r=fs(it(i,e,t)),s=fs(it(i,e,n)),a=fs(it(t,n,i)),o=fs(it(t,n,e));return r!==s&&a!==o||!(r!==0||!ms(i,t,e))||!(s!==0||!ms(i,n,e))||!(a!==0||!ms(t,i,n))||!(o!==0||!ms(t,e,n))}function ms(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fs(i){return i>0?1:i<0?-1:0}function Ar(i,e){return it(i.prev,i,i.next)<0?it(i,e,i.next)>=0&&it(i,i.prev,e)>=0:it(i,e,i.prev)<0||it(i,i.next,e)<0}function Uh(i,e){let t=new nl(i.i,i.x,i.y),n=new nl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sh(i,e,t,n){let r=new nl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var zn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ah(e),oh(n,e);let a=e.length;t.forEach(ah);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,oh(n,t[l]);let o=wp(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ah(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function oh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rn=class i extends Ze{constructor(e=new Tt([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Op,v,b,U,P,z,H=!1;g&&(v=g.getSpacedPoints(h),H=!0,u=!1,b=g.computeFrenetFrames(h,!1),U=new R,P=new R,z=new R),u||(m=0,p=0,f=0,y=0);let G=o.extractPoints(c),X=G.shape,q=G.holes;if(!zn.isClockWise(X)){X=X.reverse();for(let S=0,x=q.length;S<x;S++){let w=q[S];zn.isClockWise(w)&&(q[S]=w.reverse())}}let k=zn.triangulateShape(X,q),Z=X;for(let S=0,x=q.length;S<x;S++){let w=q[S];X=X.concat(w)}function N(S,x,w){return x||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(x,w)}let V=X.length,j=k.length;function $(S,x,w){let E,T,I,O=S.x-x.x,D=S.y-x.y,J=w.x-S.x,F=w.y-S.y,W=O*O+D*D,ee=O*F-D*J;if(Math.abs(ee)>Number.EPSILON){let oe=Math.sqrt(W),de=Math.sqrt(J*J+F*F),fe=x.x-D/oe,Ee=x.y+O/oe,Se=((w.x-F/de-fe)*F-(w.y+J/de-Ee)*J)/(O*F-D*J);E=fe+O*Se-S.x,T=Ee+D*Se-S.y;let ve=E*E+T*T;if(ve<=2)return new ce(E,T);I=Math.sqrt(ve/2)}else{let oe=!1;O>Number.EPSILON?J>Number.EPSILON&&(oe=!0):O<-Number.EPSILON?J<-Number.EPSILON&&(oe=!0):Math.sign(D)===Math.sign(F)&&(oe=!0),oe?(E=-D,T=O,I=Math.sqrt(W)):(E=O,T=D,I=Math.sqrt(W/2))}return new ce(E/I,T/I)}let ne=[];for(let S=0,x=Z.length,w=x-1,E=S+1;S<x;S++,w++,E++)w===x&&(w=0),E===x&&(E=0),ne[S]=$(Z[S],Z[w],Z[E]);let he=[],pe,L=ne.concat();for(let S=0,x=q.length;S<x;S++){let w=q[S];pe=[];for(let E=0,T=w.length,I=T-1,O=E+1;E<T;E++,I++,O++)I===T&&(I=0),O===T&&(O=0),pe[E]=$(w[E],w[I],w[O]);he.push(pe),L=L.concat(pe)}for(let S=0;S<m;S++){let x=S/m,w=p*Math.cos(x*Math.PI/2),E=f*Math.sin(x*Math.PI/2)+y;for(let T=0,I=Z.length;T<I;T++){let O=N(Z[T],ne[T],E);ie(O.x,O.y,-w)}for(let T=0,I=q.length;T<I;T++){let O=q[T];pe=he[T];for(let D=0,J=O.length;D<J;D++){let F=N(O[D],pe[D],E);ie(F.x,F.y,-w)}}}let Q=f+y;for(let S=0;S<V;S++){let x=u?N(X[S],L[S],Q):X[S];H?(P.copy(b.normals[0]).multiplyScalar(x.x),U.copy(b.binormals[0]).multiplyScalar(x.y),z.copy(v[0]).add(P).add(U),ie(z.x,z.y,z.z)):ie(x.x,x.y,0)}for(let S=1;S<=h;S++)for(let x=0;x<V;x++){let w=u?N(X[x],L[x],Q):X[x];H?(P.copy(b.normals[S]).multiplyScalar(w.x),U.copy(b.binormals[S]).multiplyScalar(w.y),z.copy(v[S]).add(P).add(U),ie(z.x,z.y,z.z)):ie(w.x,w.y,d/h*S)}for(let S=m-1;S>=0;S--){let x=S/m,w=p*Math.cos(x*Math.PI/2),E=f*Math.sin(x*Math.PI/2)+y;for(let T=0,I=Z.length;T<I;T++){let O=N(Z[T],ne[T],E);ie(O.x,O.y,d+w)}for(let T=0,I=q.length;T<I;T++){let O=q[T];pe=he[T];for(let D=0,J=O.length;D<J;D++){let F=N(O[D],pe[D],E);H?ie(F.x,F.y+v[h-1].y,v[h-1].x+w):ie(F.x,F.y,d+w)}}}function Y(S,x){let w=S.length;for(;--w>=0;){let E=w,T=w-1;T<0&&(T=S.length-1);for(let I=0,O=h+2*m;I<O;I++){let D=V*I,J=V*(I+1);A(x+E+D,x+T+D,x+T+J,x+E+J)}}}function ie(S,x,w){l.push(S),l.push(x),l.push(w)}function se(S,x,w){M(S),M(x),M(w);let E=r.length/3,T=_.generateTopUV(n,r,E-3,E-2,E-1);B(T[0]),B(T[1]),B(T[2])}function A(S,x,w,E){M(S),M(x),M(E),M(x),M(w),M(E);let T=r.length/3,I=_.generateSideWallUV(n,r,T-6,T-3,T-2,T-1);B(I[0]),B(I[1]),B(I[3]),B(I[1]),B(I[2]),B(I[3])}function M(S){r.push(l[3*S+0]),r.push(l[3*S+1]),r.push(l[3*S+2])}function B(S){s.push(S.x),s.push(S.y)}(function(){let S=r.length/3;if(u){let x=0,w=V*x;for(let E=0;E<j;E++){let T=k[E];se(T[2]+w,T[1]+w,T[0]+w)}x=h+2*m,w=V*x;for(let E=0;E<j;E++){let T=k[E];se(T[0]+w,T[1]+w,T[2]+w)}}else{for(let x=0;x<j;x++){let w=k[x];se(w[2],w[1],w[0])}for(let x=0;x<j;x++){let w=k[x];se(w[0]+V*h,w[1]+V*h,w[2]+V*h)}}n.addGroup(S,r.length/3-S,0)})(),function(){let S=r.length/3,x=0;Y(Z,x),x+=Z.length;for(let w=0,E=q.length;w<E;w++){let T=q[w];Y(T,x),x+=T.length}n.addGroup(S,r.length/3-S,1)}()}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gs[r.type]().fromJSON(r)),new i(n,e.options)}},Op={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new ce(s,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*r],p=e[3*r+1],f=e[3*r+2],y=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-d),new ce(u,1-f),new ce(y,1-g)]:[new ce(o,1-l),new ce(h,1-d),new ce(p,1-f),new ce(m,1-g)]}},il=class i extends si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},rl=class i extends si{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cr=class i extends Ze{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new R,f=new ce;for(let y=0;y<=r;y++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let y=0;y<r;y++){let m=y*(n+1);for(let g=0;g<n;g++){let _=g+m,v=_,b=_+n+1,U=_+n+2,P=_+1;o.push(v,b,P),o.push(b,U,P)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oi=class i extends Ze{constructor(e=new Tt([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;zn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];zn.isClockWise(_)===!0&&(f[m]=_.reverse())}let y=zn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=y.length;m<g;m++){let _=y[m],v=_[0]+d,b=_[1]+d,U=_[2]+d;n.push(v,b,U),l+=3}}this.setIndex(n),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},It=class i extends Ze{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,p=[],f=[],y=[],m=[];for(let g=0;g<=n;g++){let _=[],v=g/n,b=0;g===0&&a===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){let P=U/t;d.x=-e*Math.cos(r+P*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+P*s)*Math.sin(a+v*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(P+b,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let v=h[g][_+1],b=h[g][_],U=h[g+1][_],P=h[g+1][_+1];(g!==0||a>0)&&p.push(v,b,P),(g!==n-1||l<Math.PI)&&p.push(b,U,P)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sl=class i extends si{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},pn=class i extends Ze{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let y=f/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let y=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,_=(r+1)*p+f;a.push(y,m,_),a.push(m,g,_)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},al=class i extends Ze{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=new R,u=new R,p=new R,f=new R,y=new R,m=new R,g=new R;for(let v=0;v<=n;++v){let b=v/n*s*Math.PI*2;_(b,s,a,e,p),_(b+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),y.crossVectors(m,g),g.crossVectors(y,m),y.normalize(),g.normalize();for(let U=0;U<=r;++U){let P=U/r*Math.PI*2,z=-t*Math.cos(P),H=t*Math.sin(P);d.x=p.x+(z*g.x+H*y.x),d.y=p.y+(z*g.y+H*y.y),d.z=p.z+(z*g.z+H*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(U/r)}}for(let v=1;v<=n;v++)for(let b=1;b<=r;b++){let U=(r+1)*(v-1)+(b-1),P=(r+1)*v+(b-1),z=(r+1)*v+b,H=(r+1)*(v-1)+b;o.push(U,P,H),o.push(P,z,H)}function _(v,b,U,P,z){let H=Math.cos(v),G=Math.sin(v),X=U/b*v,q=Math.cos(X);z.x=P*(2+q)*.5*H,z.y=P*(2+q)*G*.5,z.z=P*Math.sin(X)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$t=class i extends Ze{constructor(e=new Hs(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ce,h=new R,d=[],u=[],p=[],f=[];function y(m){h=e.getPointAt(m/t,h);let g=a.normals[m],_=a.binormals[m];for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,U=Math.sin(b),P=-Math.cos(b);l.x=P*g.x+U*_.x,l.y=P*g.y+U*_.y,l.z=P*g.z+U*_.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)y(m);y(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let g=0;g<=r;g++)c.x=m/t,c.y=g/r,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let g=1;g<=r;g++){let _=(r+1)*(m-1)+(g-1),v=(r+1)*m+(g-1),b=(r+1)*m+g,U=(r+1)*(m-1)+g;f.push(_,v,U),f.push(v,b,U)}}()})(),this.setIndex(f),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Gs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ol=class extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let y=0;y<3;y++){let m=o.getX(p+y),g=o.getX(p+(y+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function lh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var nf=Object.freeze({__proto__:null,BoxGeometry:Ke,CapsuleGeometry:Qo,CircleGeometry:dn,ConeGeometry:An,CylinderGeometry:We,DodecahedronGeometry:Tr,EdgesGeometry:el,ExtrudeGeometry:Rn,IcosahedronGeometry:il,LatheGeometry:Bt,OctahedronGeometry:rl,PlaneGeometry:Ot,PolyhedronGeometry:si,RingGeometry:Cr,ShapeGeometry:oi,SphereGeometry:It,TetrahedronGeometry:sl,TorusGeometry:pn,TorusKnotGeometry:al,TubeGeometry:$t,WireframeGeometry:ol});var _e=class extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function gs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends ji{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:s=e,o=2*t-n;break;case ic:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=e,l=2*n-t;break;case ic:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),y=f*f,m=y*f,g=-u*m+2*u*y-u*f,_=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*f+1,v=(-1-p)*m+(1.5+p)*y+.5*f,b=p*m-p*y;for(let U=0;U!==o;++U)s[U]=g*a[h+U]+_*a[c+U]+v*a[l+U]+b*a[d+U];return s}},cl=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},hl=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Fp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ma,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};qt.prototype.TimeBufferType=Float32Array,qt.prototype.ValueBufferType=Float32Array,qt.prototype.DefaultInterpolation=Ro;var ti=class extends qt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool",ti.prototype.ValueBufferType=Array,ti.prototype.DefaultInterpolation=Ss,ti.prototype.InterpolantFactoryMethodLinear=void 0,ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends qt{};ul.prototype.ValueTypeName="color";var dl=class extends qt{};dl.prototype.ValueTypeName="number";var pl=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ct.slerpFlat(s,0,a,c-o,a,c,l);return s}},Vs=class extends qt{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion",Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends qt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string",ni.prototype.ValueBufferType=Array,ni.prototype.DefaultInterpolation=Ss,ni.prototype.InterpolantFactoryMethodLinear=void 0,ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends qt{};ml.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Bp=new fl,gl=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qt=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ja=new Pe,ch=new R,hh=new R,Ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hh),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var uh=new Pe,ur=new R,qa=new R,_l=class extends Ws{constructor(){super(new nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),r.makeTranslation(-ur.x,-ur.y,-ur.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}},li=class extends Pr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _l}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vl=class extends Ws{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},en=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rf=new Pe,sf=new Pe,af=new Pe;var Xs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dh(){return performance.now()}var of=new R,lf=new Ct,cf=new R,hf=new R;var uf=new R,df=new Ct,pf=new R,mf=new R;var Pl="\\[\\]\\.:\\/",zp=new RegExp("["+Pl+"]","g"),Ya="[^"+Pl+"]",Hp="[^"+Pl.replace("\\.","")+"]",kp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ya)+/(WCOD+)?/.source.replace("WCOD",Hp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ya)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ya)+"$"),Gp=["material","materials","bones","map"],tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(e){let t=kp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Gp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=class{constructor(i,e,t){let n=t||tt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ff=new Float32Array(1);var ph=new Pe,js=class{constructor(e,t,n=0,r=1/0){this.ray=new Tn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(mh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yl(e[r],this,n,t);return n.sort(mh),n}};function mh(i,e){return i.distance-e.distance}function yl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)yl(s[a],e,t,!0)}}var Ir=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gf=new ce;var _f=new R,vf=new R;var yf=new R;var xf=new R,Mf=new Pe,Sf=new Pe;var Ef=new R,bf=new Ae,Tf=new Ae;var wf=new R,Af=new R,Rf=new R;var Cf=new R,Pf=new Sr;var If=new Zt;var Lf=new R;var qs=class extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);var Nh={type:"change"},Ll={type:"start"},Fh={type:"end"},ta=new Tn,Oh=new Xt,Vp=Math.cos(70*Ks.DEG2RAD),ut=new R,wt=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6,Zi=class extends qs{constructor(e,t=null){super(e,t),this.state=Ye.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ct,this._lastTargetPosition=new R,this._quat=new Ct().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ir,this._sphericalDelta=new Ir,this._scale=1,this._panOffset=new R,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new R,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xp.bind(this),this._onPointerDown=Wp.bind(this),this._onPointerUp=jp.bind(this),this._onContextMenu=Qp.bind(this),this._onMouseWheel=Zp.bind(this),this._onKeyDown=Jp.bind(this),this._onTouchStart=Kp.bind(this),this._onTouchMove=$p.bind(this),this._onMouseDown=qp.bind(this),this._onMouseMove=Yp.bind(this),this._interceptControlDown=em.bind(this),this._interceptControlUp=tm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nh),this.update(),this.state=Ye.NONE}update(e=null){let t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=wt:n>Math.PI&&(n-=wt),r<-Math.PI?r+=wt:r>Math.PI&&(r-=wt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ut.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<Vp?this.object.lookAt(this.target):(Oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(Oh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(Nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wt/60*this.autoRotateSpeed*e:wt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ut.copy(r).sub(this.target);let s=ut.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Wp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Xp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=Ye.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qp(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ye.DOLLY;break;case ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}break;case ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Ll)}function Yp(i){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zp(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(i.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fh))}function Jp(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Kp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ye.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ye.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Ll)}function $p(i){switch(this._trackPointer(i),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ye.NONE}}function Qp(i){this.enabled!==!1&&i.preventDefault()}function em(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var na=class extends Pt{constructor(){super();let e=new Ke;e.deleteAttribute("uv");let t=new _e({side:ui}),n=new _e,r=new li(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new le(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new le(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new le(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new le(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new le(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new le(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new le(e,Ji(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let p=new le(e,Ji(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let f=new le(e,Ji(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let y=new le(e,Ji(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new le(e,Ji(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let g=new le(e,Ji(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ji(i){let e=new bt;return e.color.setScalar(i),e}var ia=matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("reduce-motion"),Gn={wood:9067059,woodLight:12158290,red:10629675,felt:15195334,feltDark:5981750,gold:14262582,blue:1918310,ink:1323596};function zh(i){let e;try{e=new cn({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch{return null}return e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=kn,e.toneMappingExposure=1.05,e.outputColorSpace=Qe,e.shadowMap.enabled=!0,e.shadowMap.type=Ys,e}function Hh(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(n))}catch{return!1}}function kh(i,e){let t=i.domElement,n=t.clientWidth,r=t.clientHeight;!n||!r||(t.width!==Math.floor(n*i.getPixelRatio())||t.height!==Math.floor(r*i.getPixelRatio()))&&(i.setSize(n,r,!1),e.aspect=n/r,e.updateProjectionMatrix())}function Cn(i,e,t,n){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let s=new Kt(r);return s.colorSpace=Qe,s.anisotropy=4,n&&(s.wrapS=s.wrapT=Yt,s.repeat.set(...n)),s}function Dr(i,e,t,n,r,s){i.save(),i.translate(e,t),i.scale(n,n),i.strokeStyle=r,i.lineWidth=s/n,i.lineCap="round";for(let a of[-1,1])i.beginPath(),i.moveTo(0,10),i.bezierCurveTo(a*3,-2,a*16,-8,a*22,2),i.bezierCurveTo(a*26,10,a*18,17,a*13,12),i.bezierCurveTo(a*9,8,a*13,4,a*16,7),i.stroke();i.beginPath(),i.moveTo(0,10),i.lineTo(0,22),i.stroke(),i.restore()}var Gh=()=>Cn(512,64,(i,e,t)=>{i.fillStyle="#a2322b",i.fillRect(0,0,e,t),i.fillStyle="#14324c",i.fillRect(0,0,e,8),i.fillRect(0,t-8,e,8);for(let n=32;n<e;n+=64)Dr(i,n,18,1.15,"#f1d9a6",3.2)},[8,1]),Ur=(i,e)=>Cn(256,256,(t,n,r)=>{t.fillStyle=i,t.fillRect(0,0,n,r);for(let s=0;s<2600;s++)t.fillStyle=e[s%e.length],t.globalAlpha=.08+Math.random()*.1,t.fillRect(Math.random()*n,Math.random()*r,1+Math.random()*2,1+Math.random()*2);t.globalAlpha=1},[4,2]),Ki=()=>Cn(256,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#9b6738"),n.addColorStop(1,"#7a4c2a"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#5e3a1f",i.globalAlpha=.35;for(let r=0;r<18;r++){i.beginPath();let s=Math.random()*t;i.moveTo(0,s),i.bezierCurveTo(e*.3,s+6*Math.random()-3,e*.6,s+6*Math.random()-3,e,s+4*Math.random()-2),i.stroke()}i.globalAlpha=1},[2,1]),Vh=()=>Cn(256,128,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="#b07a45",i.lineWidth=7,i.lineCap="round";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n+t,t),i.stroke(),i.beginPath(),i.moveTo(n+t,0),i.lineTo(n,t),i.stroke();i.fillStyle="#6b3f20";for(let n=0;n<e+t;n+=32)for(let r=0;r<=t;r+=32)i.beginPath(),i.arc((n+r)%(e+32),r,2.6,0,7),i.fill()},[10,1]);function Ul(i=.62,e){let t=new ke,n=e||new _e({color:Gn.woodLight,roughness:.6,map:Ki()}),r=new le(new pn(i,i*.085,14,80),n);r.rotation.x=Math.PI/2,r.castShadow=!0,t.add(r);let s=new le(new pn(i*1.12,i*.05,10,80),n);s.rotation.x=Math.PI/2,t.add(s);for(let a of[0,Math.PI/2])for(let o of[-.42,0,.42]){let l=Math.sqrt(Math.max(.01,1-o*o))*i,c=[];for(let d=0;d<=24;d++){let u=d/24,p=-l+u*l*2;c.push(new R(p,Math.sin(u*Math.PI)*i*.55,o*i))}let h=new le(new $t(new un(c),30,i*.04,8),n);h.rotation.y=a,h.castShadow=!0,t.add(h)}return t}function Wh(i,e,t,n,r){let s=Math.cos(r),a=Math.sin(r),o=(l,c)=>new R(s*l,c,a*l);return new un([o(i,e),o(i+(t-i)*.55,e-(e-n)*.5),o(t-.05,n+.18),o(t,n)])}function nm(i){let e=zh(i);if(!e)return;if(Hh(e)){e.dispose();return}e.shadowMap.enabled=!1;let t=new Pt,n=new nt(62,1,.05,200),r=3.1,s=3.2,a=1.45,o=.66,l=new Nt({side:ui,depthWrite:!1,uniforms:{t:{value:0}},vertexShader:"varying vec3 v; void main(){ v = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 v; uniform float t;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p*=2.03;a*=.5;}return s;}
      void main(){
        vec3 d=normalize(v); float up=clamp(d.y,0.,1.);
        vec3 col=mix(vec3(.62,.80,.93),vec3(.13,.42,.72),pow(up,.8));
        vec2 uv=d.xz/max(d.y,.12)*1.3+vec2(t*.02,t*.008);
        float c=smoothstep(.48,.78,fbm(uv*1.4));
        col=mix(col,vec3(1.,.98,.95),c*.85);
        vec3 sun=normalize(vec3(.25,.95,.15)); float s=max(dot(d,sun),0.);
        col+=vec3(1.,.9,.7)*pow(s,40.)*.8+vec3(1.,.95,.85)*smoothstep(.997,.999,s);
        gl_FragColor=vec4(col,1.);
      }`});t.add(new le(new It(80,32,16),l));let c=[];for(let L=0;L<=16;L++){let Q=L/16;c.push(new ce(o*1.16+(s-o*1.16)*Q,r+.03-(r-a)*Math.pow(Q,1.15)+.04))}let h=new le(new Bt(c,96),new _e({color:14273456,map:Ur("#d2c3a6",["#8e7f63","#eadfca"]),side:mn,roughness:1,emissive:1314054}));t.add(h);let d=new le(new We(s+.02,s+.02,a,96,1,!0),new _e({color:8084029,side:ui,roughness:1,map:Ur("#6d4c33",["#3f2a1b","#8b6a4a"])}));d.position.y=a/2,t.add(d);let u=new le(new We(s-.03,s-.03,a,96,1,!0),new _e({map:Vh(),transparent:!0,alphaTest:.4,side:mn,roughness:.8}));u.position.y=a/2,t.add(u);let p=new le(new We(s-.06,s-.06,.26,96,1,!0),new _e({map:Gh(),side:ui,roughness:.9}));p.position.y=a-.05,t.add(p);let f=new _e({color:Gn.red,roughness:.55}),y=new _e({color:Gn.woodLight,roughness:.6,map:Ki()}),m=72;for(let L=0;L<m;L++){let Q=L/m*Math.PI*2;t.add(new le(new $t(Wh(o*1.12,r-.02,s-.05,a,Q),10,.028,6),L%2?y:f))}let g=Ul(o);g.position.y=r,t.add(g);let _=new le(new We(o*.95,o*1.6,r+1,48,1,!0),new bt({color:16773583,transparent:!0,opacity:.07,blending:xl,depthWrite:!1,side:mn}));_.position.set(.18,(r-1)/2,.08),_.rotation.z=-.06,t.add(_);let v=new Ze,b=380,U=new Float32Array(b*3);for(let L=0;L<b;L++){let Q=Math.random()*6.28,Y=Math.random()*o*1.2;U.set([Math.cos(Q)*Y,1.5+Math.random()*(r-1.5),Math.sin(Q)*Y],L*3)}v.setAttribute("position",new vt(U,3));let P=Cn(32,32,L=>{let Q=L.createRadialGradient(16,16,0,16,16,16);Q.addColorStop(0,"#fff"),Q.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=Q,L.fillRect(0,0,32,32)}),z=new Os(v,new Er({color:16774102,map:P,size:.03,transparent:!0,opacity:.8,blending:xl,depthWrite:!1}));t.add(z),t.add(new Qt(14478591,9069632,1.25));let H=new en(16773328,1.6);H.position.set(.6,10,.4),t.add(H);let G=new li(16763274,12,9,1.4);G.position.set(0,.9,0),t.add(G);let X=!1,q=0,k=0,Z=0,N=0,V=0,j=0,$=!1;e.setPixelRatio(Math.min(window.devicePixelRatio||1,matchMedia("(max-width: 700px)").matches?1.5:1.75)),i.parentElement.addEventListener("pointermove",L=>{let Q=i.getBoundingClientRect();Z=(L.clientX-Q.left)/Q.width-.5,N=(L.clientY-Q.top)/Q.height-.5});function ne(L){if(!X)return;let Q=performance.now(),Y=Math.min(.05,(L-q)/1e3||0);q=L,kh(e,n),k+=Y*(ia?0:.045),l.uniforms.t.value=L/1e3;let ie=z.geometry.attributes.position;if(!ia){for(let A=0;A<b;A++){let M=ie.getY(A)+Y*.05;M>r&&(M=1.5),ie.setY(A,M)}ie.needsUpdate=!0}n.position.set(Math.sin(k)*.35,.55,Math.cos(k)*.35),n.lookAt(Z*.9+Math.sin(k*.6)*.15,r,-N*.9),e.render(t,n),V===1&&i.closest(".hero")?.classList.add("live");let se=L-(ne.prev||L);if(ne.prev=L,++V>2&&V<60&&(se>70||performance.now()-Q>45)&&(j+=se>250?3:1),j>=3&&!$){$=!0,X=!1,i.closest(".hero")?.classList.add("still");return}requestAnimationFrame(ne)}let he=new IntersectionObserver(([L])=>{if($)return;let Q=X;X=L.isIntersecting&&!document.hidden,X&&!Q&&requestAnimationFrame(ne)});document.addEventListener("visibilitychange",()=>{if($)return;let L=X;X=!document.hidden&&i.getBoundingClientRect().bottom>0,X&&!L&&requestAnimationFrame(ne)});let pe=()=>he.observe(i);document.readyState==="complete"?window.requestIdleCallback?requestIdleCallback(pe,{timeout:800}):setTimeout(pe,200):addEventListener("load",()=>window.requestIdleCallback?requestIdleCallback(pe,{timeout:800}):setTimeout(pe,200))}function im(i){let e=zh(i),t=document.getElementById("stage-fallback");if(!e){t&&(t.hidden=!1);return}let n=new Pt;n.background=new Ae(926258),n.fog=new hn(926258,9,20);let r=new Vi(e);n.environment=r.fromScene(new na,.04).texture;let s=new nt(40,1,.05,100),a=new Zi(s,i);a.enableDamping=!0,a.dampingFactor=.07,a.minDistance=1.2,a.maxDistance=14,a.maxPolarAngle=Math.PI*.52;let o=Hh(e);a.autoRotate=!ia&&!o,a.autoRotateSpeed=.8;let l=!0;a.addEventListener("change",()=>{l=!0});let c=new en(16773596,2.4);c.position.set(4,7,5),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),Object.assign(c.shadow.camera,{left:-5,right:5,top:5,bottom:-5}),n.add(c),n.add(new Qt(12572912,3811868,.7));let h=new le(new dn(7,64),new _e({color:1915474,roughness:.95}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,n.add(h);let d=new le(new dn(2.9,64),new _e({map:Cn(512,512,(N,V)=>{N.fillStyle="#7a2621",N.fillRect(0,0,V,V),N.strokeStyle="#e7c27a",N.lineWidth=10,N.beginPath(),N.arc(V/2,V/2,V*.46,0,7),N.stroke(),N.lineWidth=4,N.beginPath(),N.arc(V/2,V/2,V*.41,0,7),N.stroke();for(let j=0;j<16;j++){let $=j/16*Math.PI*2;Dr(N,V/2+Math.cos($)*V*.435,V/2+Math.sin($)*V*.435,1.2,"#f1d9a6",3)}for(let j=0;j<4;j++){let $=j/4*Math.PI*2+Math.PI/4;Dr(N,V/2+Math.cos($)*V*.2,V/2+Math.sin($)*V*.2,3.4,"#14324c",5)}}),roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=.002,d.receiveShadow=!0,n.add(d);let u=null,p=null,f=!1,y=new Xs,m=!1,g={},_={yurt:[5.2,3.1,5.8,1.1],shanyrak:[2.2,2.4,2.4,.9],dombyra:[1.5,1.2,2.05,.85],toguz:[2.6,2.6,2.8,.2],ornament:[0,1.5,5,1.45],balbal:[2.2,1.6,3.2,1],tamgaly:[.6,1.5,6.2,1.2],kobyz:[1.3,1.15,2.5,.8]};function v(N){let[V,j,$,ne]=_[N]||[4,3,5,1];s.position.set(V,j,$),a.target.set(0,ne,0),a.update()}function b(N){U[N]&&(u&&n.remove(u.group),g[N]||(g[N]=U[N]()),u=g[N],n.add(u.group),u.reset?.(),f=!1,p=null,v(N),document.getElementById("museum-play").textContent=window.DALA_I18N?.t("museum.play")||"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F\u043D\u044B \u049B\u043E\u0441\u0443")}document.getElementById("museum-play").addEventListener("click",()=>{u?.play&&(f=!0,p=0,u.play(),z())}),document.getElementById("museum-reset").addEventListener("click",()=>{u&&(v(Object.keys(g).find(N=>g[N]===u)),z())});let U={yurt(){let N=new ke,V=2.2,j=1.15,$=2.45,ne=.5,he=[],pe=new _e({map:Vh(),transparent:!0,alphaTest:.4,side:mn,roughness:.8}),L=new le(new We(V,V,j,96,1,!0,.35,Math.PI*2-.7),pe);L.position.y=j/2,L.castShadow=!0,N.add(L),he.push([L,0,"grow"]);let Q=new _e({map:Cn(128,192,(O,D,J)=>{O.fillStyle="#a2322b",O.fillRect(0,0,D,J),O.strokeStyle="#e7c27a",O.lineWidth=6,O.strokeRect(10,10,D-20,J-20),Dr(O,D/2,J*.32,2,"#f1d9a6",4),Dr(O,D/2,J*.68,2,"#f1d9a6",4)}),roughness:.7}),Y=new le(new Ke(.7,j*.95,.06),Q);Y.position.set(V*Math.cos(0)-.02,j*.475,0),Y.rotation.y=Math.PI/2,Y.castShadow=!0,N.add(Y),he.push([Y,.12,"grow"]);let ie=new ke,se=new _e({color:Gn.red,roughness:.55}),A=48;for(let O=0;O<A;O++){let D=new le(new $t(Wh(ne*1.12,$,V-.03,j,O/A*Math.PI*2),8,.024,5),se);D.castShadow=!0,ie.add(D)}N.add(ie),he.push([ie,.32,"uyk"]);let M=Ul(ne);M.position.y=$,N.add(M),he.push([M,.25,"lift"]);let B=new _e({map:Ur("#ece3d0",["#b9ab8f","#fff8ea"]),roughness:1,side:mn,transparent:!0}),S=new le(new We(V+.03,V+.03,j,96,1,!0,.35,Math.PI*2-.7),B);S.position.y=j/2,S.castShadow=!0,N.add(S),he.push([S,.62,"fade"]);let x=[];for(let O=0;O<=12;O++){let D=O/12;x.push(new ce(V+.05-(V+.05-ne*1.2)*D,j+($-j+.06)*Math.pow(D,.85)))}let w=new le(new Bt(x,96),B.clone());w.castShadow=!0,N.add(w),he.push([w,.74,"fade"]);let E=new le(new We(V+.045,V+.045,.16,96,1,!0),new _e({map:Gh(),roughness:.9,transparent:!0}));E.position.y=j*.72,N.add(E),he.push([E,.86,"fade"]);let T=E.clone();T.position.y=j+.1,T.scale.set(.93,1,.93),T.material=E.material.clone(),N.add(T),he.push([T,.9,"fade"]);let I=O=>{for(let[D,J,F]of he){let W=Ks.smoothstep(O,J,J+.14);D.visible=W>.001,F==="grow"&&(D.scale.y=Math.max(.001,W)),F==="lift"&&(D.position.y=.2+($-.2)*W),F==="uyk"&&ie.children.forEach((ee,oe)=>{ee.visible=O>J+oe/A*.14}),F==="fade"&&(D.material.opacity=W,D.userData.y??=D.position.y,D.position.y=D.userData.y+(1-W)*.5)}};return{group:N,reset:()=>I(1),play:()=>{},update:O=>(I(Math.min(1,O/11)),O<12.5)}},shanyrak(){let N=new ke,V=Ul(.9);V.position.y=.9,N.add(V);let j=new _e({color:Gn.red,roughness:.5});for(let $=0;$<24;$++){let ne=$/24*Math.PI*2,he=new le(new We(.025,.025,.5,6),j);he.position.set(Math.cos(ne)*1.15,.78,Math.sin(ne)*1.15),he.rotation.z=Math.cos(ne)*-1.1,he.rotation.x=Math.sin(ne)*1.1,he.castShadow=!0,N.add(he)}return{group:N,play:()=>{},update:$=>(V.rotation.y=$*.9,V.position.y=.9+Math.sin($*2)*.05,$<7),reset:()=>{V.rotation.y=0,V.position.y=.9}}},dombyra(){let N=new ke,V=new _e({color:10117172,roughness:.42,map:Ki()}),j=new _e({color:13210720,roughness:.5,map:Ki()}),$=[];for(let O=0;O<=30;O++){let D=O/30,J=D*.62,F=Math.sin(Math.PI*Math.pow(D,.82))*(.24-.1*D)+.012;$.push(new ce(F,J))}let ne=new le(new Bt($,64),V);ne.scale.z=.5,ne.castShadow=!0;let he=new Tt;$.forEach((O,D)=>D?he.lineTo(O.x,O.y):he.moveTo(O.x,O.y)),[...$].reverse().forEach(O=>he.lineTo(-O.x,O.y));let pe=new le(new Rn(he,{depth:.008,bevelEnabled:!1}),j);pe.position.z=0,pe.castShadow=!0;let L=new le(new Ke(.05,.78,.035),V);L.position.set(0,.62+.39,0),L.castShadow=!0;let Q=new le(new Ke(.06,.16,.045),V);Q.position.set(0,1.47,-.01),Q.rotation.x=-.18;let Y=new _e({color:5912608,roughness:.5});for(let O of[1.43,1.5]){let D=new le(new We(.012,.012,.14,8),Y);D.rotation.z=Math.PI/2,D.position.set(0,O,-.01),N.add(D)}let ie=new _e({color:14206885,roughness:.8});for(let O=0;O<12;O++){let D=.66+.74*(1-Math.pow(.86,O+1))/(1-Math.pow(.86,12)),J=new le(new pn(.034,.004,6,16),ie);J.scale.set(1,1,.6),J.position.set(0,D,0),J.rotation.x=Math.PI/2,N.add(J)}let se=new le(new Ke(.07,.015,.02),Y);se.position.set(0,.14,.018),N.add(se);let A=new le(new dn(.05,32),new _e({color:Gn.gold,metalness:.8,roughness:.3}));A.position.set(0,.4,.0095),N.add(A);let M=[-.012,.012].map((O,D)=>{let J=new Float32Array(120),F=new Ze;F.setAttribute("position",new vt(J,3));let W=new Xi(F,new Wi({color:16183264}));return W.userData={x:O,amp:0,freq:D?196:146.8},N.add(W),W}),B=O=>M.forEach(D=>{let J=D.userData.amp,F=D.geometry.attributes.position;for(let W=0;W<40;W++){let ee=W/39,oe=.14+ee*1.26,de=Math.sin(ee*Math.PI)*J*Math.sin(O*90+W*.2);F.setXYZ(W,D.userData.x+de,oe,.032+(ee>.38?0:(.38-ee)*.01))}F.needsUpdate=!0,D.userData.amp*=.965});B(0);let S=new ke;S.add(ne,pe,L,Q),N.add(S),N.rotation.z=-.32,N.position.y=.35;let x,w=(O,D=0)=>{x||=new(window.AudioContext||window.webkitAudioContext),x.resume();let J=Math.floor(x.sampleRate*1.6),F=x.createBuffer(1,J,x.sampleRate),W=F.getChannelData(0),ee=Math.round(x.sampleRate/O),oe=new Float32Array(ee);for(let Ee=0;Ee<ee;Ee++)oe[Ee]=Math.random()*2-1;for(let Ee=0,Se=0;Ee<J;Ee++){let ve=(Se+1)%ee;W[Ee]=oe[Se],oe[Se]=.996*.5*(oe[Se]+oe[ve]),Se=ve}let de=x.createBufferSource(),fe=x.createGain();fe.gain.value=.35,de.buffer=F,de.connect(fe).connect(x.destination),de.start(x.currentTime+D)},E=new js;E.params.Line.threshold=.03,i.addEventListener("click",O=>{if(u?.group!==N)return;let D=i.getBoundingClientRect();E.setFromCamera({x:(O.clientX-D.left)/D.width*2-1,y:-(O.clientY-D.top)/D.height*2+1},s);let J=E.intersectObjects([...M,ne,pe,L])[0];if(!J)return;let F=M.includes(J.object)?J.object:M[J.point.x>0?1:0];F.userData.amp=.012,w(F.userData.freq)});let T=[[0,0],[.18,1],[.36,0],[.54,1],[.72,0],[.9,0],[1.08,1],[1.26,1]],I=[];return{group:N,reset:()=>{I=[]},play:()=>{I=[]},update:O=>{for(let D=0;D<T.length;D++)if(!I[D]&&O>=T[D][0]){I[D]=1;let J=M[T[D][1]];J.userData.amp=.01,w(J.userData.freq*(D===5?1.335:1))}return O<3},tick:O=>B(O)}},toguz(){let N=new ke,V=new _e({color:8079910,roughness:.55,map:Ki()}),j=new le(new Ke(3.6,.18,1.9),V);j.position.y=.09,j.castShadow=!0,j.receiveShadow=!0,N.add(j);let $=new _e({color:3809811,roughness:.9}),ne=(x,w)=>{let E=new le(new We(.15,.13,.02,24),$);E.position.set(x,.181,w),N.add(E)},he=x=>-1.6+x*.4;for(let x=0;x<9;x++)ne(he(x),.65),ne(he(x),-.65);let pe=x=>{let w=new le(new Ke(3.2,.02,.28),$);w.position.set(0,.181,x),N.add(w)};pe(.2),pe(-.2);let L=new Ds(new It(.035,12,8),new _e({color:15261903,roughness:.5}),162);L.castShadow=!0,N.add(L);let Q=x=>x<9?[he(x),.65]:[he(17-x),-.65],Y=new Pe,ie=(x,w)=>{let[E,T]=Q(x),I=w*2.39996,O=.022*Math.sqrt(w)+(w?.02:0);return new R(E+Math.cos(I)*O,.22+Math.floor(w/9)*.04,T+Math.sin(I)*O)},se,A,M=()=>{let x=0;for(let w=0;w<18;w++)for(let E=0;E<se[w];E++)L.setMatrixAt(x++,Y.makeTranslation(ie(w,E)));L.count=x,L.instanceMatrix.needsUpdate=!0},B=()=>{se=Array(18).fill(9),M()};B();let S;return{group:N,reset:B,play:()=>{B();let x=2,w=se[x];S={from:x,n:w,targets:Array.from({length:w},(E,T)=>(x+T)%18)},se[x]=0,M()},update:x=>{if(!S)return!1;let w=.45,E=Math.floor(x/w),T=x%w/w,I=Math.min(E,S.n),O=se.slice();for(let F=0;F<I;F++)O[S.targets[F]]++;let D=0;for(let F=0;F<18;F++)for(let W=0;W<O[F];W++)L.setMatrixAt(D++,Y.makeTranslation(ie(F,W)));let J=ie(S.from,0);for(let F=I;F<S.n;F++){let W=J.clone().add(new R(0,.55,0));if(F===I&&E<S.n){let ee=ie(S.targets[F],O[S.targets[F]]);W=(F?ie(S.targets[F-1],0).add(new R(0,.55,0)):W).clone().lerp(ee,T),W.y+=Math.sin(T*Math.PI)*.25*(1-T)+(1-T)*.35}else W.add(new R((F-I)*.02,(F-I)*.04,0));L.setMatrixAt(D++,Y.makeTranslation(W))}return L.count=D,L.instanceMatrix.needsUpdate=!0,E>=S.n?(se=O,S=null,!1):!0}}},ornament(){let N=new ke,V=new Tt,j=se=>{let A=new ri,M=[];for(let B=0;B<=80;B++){let S=B/80,x=S*Math.PI*2.3,w=.62*(1-S*.78);M.push([se*(.18+w*Math.cos(x)+.55-S*.2),.2+w*Math.sin(x)*.95+S*.1])}return M},$=(se,A)=>{let M=[],B=[];for(let x=0;x<se.length;x++){let w=se[Math.max(0,x-1)],E=se[Math.min(se.length-1,x+1)],T=E[0]-w[0],I=E[1]-w[1],O=Math.hypot(T,I)||1,D=A*(1-x/se.length*.55);M.push([se[x][0]-I/O*D,se[x][1]+T/O*D]),B.push([se[x][0]+I/O*D,se[x][1]-T/O*D])}let S=new Tt;return M.forEach((x,w)=>w?S.lineTo(...x):S.moveTo(...x)),B.reverse().forEach(x=>S.lineTo(...x)),S.closePath(),S},ne=new _e({color:Gn.gold,metalness:1,roughness:.28}),he={depth:.08,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelSegments:3,curveSegments:6},pe=new ke;for(let se of[-1,1])pe.add(new le(new Rn($(j(se),.07),he),ne));let L=new Tt;L.moveTo(-.07,-.9),L.lineTo(.07,-.9),L.lineTo(.07,.25),L.lineTo(0,.38),L.lineTo(-.07,.25),L.closePath(),pe.add(new le(new Rn(L,he),ne));for(let se of[-1,1]){let A=new Tt;A.moveTo(0,-.55),A.quadraticCurveTo(se*.5,-.6,se*.55,-.95),A.quadraticCurveTo(se*.25,-.8,0,-.7),pe.add(new le(new Rn(A,he),ne))}pe.children.forEach(se=>{se.castShadow=!0}),pe.position.set(0,1.5,.1);let Q=new le(new We(1.45,1.45,.1,80),new _e({color:Gn.red,roughness:.8,map:Ur("#9e2f28",["#6d1d18","#c24c40"])}));Q.rotation.x=Math.PI/2,Q.position.set(0,1.5,-.02),Q.receiveShadow=!0;let Y=new le(new pn(1.45,.05,12,96),ne);Y.position.set(0,1.5,.03);let ie=new le(new Ke(.4,.1,.3),new _e({color:3809811}));return ie.position.set(0,.05,0),N.add(Q,Y,pe,ie),{group:N,reset:()=>{pe.rotation.y=0},play:()=>{},update:se=>(pe.rotation.y=Math.sin(se*1.4)*.6*Math.max(0,1-se/6),pe.position.z=.1+Math.sin(se*3)*.03,se<6)}},balbal(){let N=new ke,V=Cn(512,1024,(L,Q,Y)=>{L.fillStyle="#8d8a80",L.fillRect(0,0,Q,Y);for(let se=0;se<9e3;se++){let A=100+Math.random()*90|0;L.fillStyle=`rgba(${A},${A-4},${A-12},.35)`,L.fillRect(Math.random()*Q,Math.random()*Y,2+Math.random()*3,2+Math.random()*3)}for(let se=0;se<40;se++)L.fillStyle=`rgba(${150+Math.random()*40|0},${140+Math.random()*30|0},90,.25)`,L.beginPath(),L.arc(Math.random()*Q,Math.random()*Y,6+Math.random()*26,0,7),L.fill();L.strokeStyle="#4b4740",L.lineCap="round",L.lineJoin="round";let ie=Q*.25;L.lineWidth=6,L.beginPath(),L.ellipse(ie,Y*.2,70,92,0,0,7),L.stroke(),L.lineWidth=7,L.beginPath(),L.moveTo(ie-52,Y*.17),L.quadraticCurveTo(ie-30,Y*.155,ie-10,Y*.17),L.moveTo(ie+10,Y*.17),L.quadraticCurveTo(ie+30,Y*.155,ie+52,Y*.17),L.stroke(),L.lineWidth=5,L.beginPath(),L.ellipse(ie-30,Y*.185,12,5,0,0,7),L.ellipse(ie+30,Y*.185,12,5,0,0,7),L.stroke(),L.beginPath(),L.moveTo(ie,Y*.18),L.lineTo(ie-6,Y*.225),L.lineTo(ie+6,Y*.228),L.stroke(),L.lineWidth=6,L.beginPath(),L.moveTo(ie-34,Y*.245),L.quadraticCurveTo(ie,Y*.232,ie+34,Y*.245),L.stroke(),L.lineWidth=7,L.beginPath(),L.moveTo(ie-95,Y*.44),L.quadraticCurveTo(ie-40,Y*.5,ie-8,Y*.47),L.stroke(),L.beginPath(),L.moveTo(ie-8,Y*.43),L.lineTo(ie+18,Y*.43),L.lineTo(ie+14,Y*.5),L.lineTo(ie-4,Y*.5),L.closePath(),L.stroke(),L.beginPath(),L.moveTo(ie+95,Y*.44),L.quadraticCurveTo(ie+70,Y*.55,ie+60,Y*.6),L.stroke(),L.lineWidth=9,L.beginPath(),L.moveTo(ie-100,Y*.6),L.lineTo(ie+100,Y*.6),L.stroke(),L.lineWidth=6,L.beginPath(),L.moveTo(ie+50,Y*.6),L.lineTo(ie+62,Y*.78),L.stroke()}),j=[];for(let L=0;L<=40;L++){let Q=L/40,Y=Q*1.9,ie=.34;Q>.72&&(ie=.34*Math.sqrt(Math.max(0,1-Math.pow((Q-.72)/.28,2)))+.02),Q>.66&&Q<.72&&(ie=.3),j.push(new ce(ie*(1-Q*.08),Y))}let $=new Bt(j,48,-Math.PI/2,Math.PI*2),ne=new le($,new _e({map:V,bumpMap:V,bumpScale:6,roughness:.95}));ne.scale.z=.62,ne.castShadow=!0,ne.receiveShadow=!0,N.add(ne);let he=new ke,pe=new _e({color:7301728,roughness:1,flatShading:!0});for(let L=0;L<22;L++){let Q=L/22*Math.PI*2,Y=.55+Math.random()*.25,ie=new le(new Tr(.07+Math.random()*.07,0),pe);ie.position.set(Math.cos(Q)*Y,.05,Math.sin(Q)*Y),ie.rotation.set(Math.random()*3,Math.random()*3,0),ie.castShadow=!0,he.add(ie)}return N.add(he),{group:N,reset:()=>{ne.rotation.y=0},play:()=>{},update:L=>(ne.rotation.y=Math.sin(L*1.2)*.9*Math.max(0,1-L/6),L<6)}},tamgaly(){let N=new ke,V=Cn(1024,768,(Y,ie,se)=>{let A=Y.createLinearGradient(0,0,ie,se);A.addColorStop(0,"#3d2a1d"),A.addColorStop(1,"#24170f"),Y.fillStyle=A,Y.fillRect(0,0,ie,se);for(let T=0;T<14e3;T++){let I=40+Math.random()*50|0;Y.fillStyle=`rgba(${I+20},${I},${I-10},.35)`,Y.fillRect(Math.random()*ie,Math.random()*se,2,2)}let M=(T,I=7)=>{Y.fillStyle="#c9a37a";for(let O=1;O<T.length;O++){let[D,J]=T[O-1],[F,W]=T[O],ee=Math.max(1,Math.hypot(F-D,W-J)/I);for(let oe=0;oe<=ee;oe++){let de=D+(F-D)*oe/ee+(Math.random()-.5)*3,fe=J+(W-J)*oe/ee+(Math.random()-.5)*3;Y.beginPath(),Y.arc(de,fe,3.2+Math.random()*1.6,0,7),Y.fill()}}},B=(T,I,O)=>{let D=[];for(let J=0;J<=40;J++)D.push([T+Math.cos(J/40*6.283)*O,I+Math.sin(J/40*6.283)*O]);M(D)},S=ie*.5,x=se*.28;B(S,x,58),B(S,x,30);for(let T=0;T<16;T++){let I=T/16*6.283;M([[S+Math.cos(I)*66,x+Math.sin(I)*66],[S+Math.cos(I)*100,x+Math.sin(I)*100]])}M([[S,x+60],[S,x+210]]),M([[S-70,x+110],[S,x+95],[S+70,x+110]]),M([[S-70,x+110],[S-90,x+70]]),M([[S+70,x+110],[S+90,x+70]]),M([[S,x+210],[S-40,x+300],[S-70,x+300]]),M([[S,x+210],[S+40,x+300],[S+70,x+300]]);let w=(T,I,O)=>{M([[T,I],[T+120*O,I],[T+150*O,I-20*O],[T+170*O,I-10*O]]),M([[T+150*O,I-20*O],[T+165*O,I-60*O]]),M([[T+150*O,I-20*O],[T+130*O,I-62*O]]),M([[T,I],[T-20*O,I+10*O]]),M([[T+10*O,I],[T+5*O,I+70*O]]),M([[T+40*O,I],[T+38*O,I+70*O]]),M([[T+100*O,I],[T+100*O,I+70*O]]),M([[T+125*O,I],[T+130*O,I+70*O]]),M([[T,I+30*O],[T+130*O,I+30*O]])};w(ie*.1,se*.62,1),w(ie*.66,se*.72,.85),((T,I,O)=>{M([[T,I],[T+110*O,I],[T+140*O,I-50*O],[T+160*O,I-45*O]]),M([[T,I],[T-25*O,I+30*O]]);for(let D of[5,30,90,110])M([[T+D*O,I],[T+D*O+5,I+65*O]])})(ie*.7,se*.3,.8)}),j=new Tt,$=14;for(let Y=0;Y<=$;Y++){let ie=Y/$*Math.PI*2,se=1+(Math.sin(Y*2.7)*.12+Math.cos(Y*1.3)*.08),A=Math.cos(ie)*se*1.6,M=Math.sin(ie)*se*1.1;Y?j.lineTo(A,M):j.moveTo(A,M)}let ne=new Rn(j,{depth:.5,bevelEnabled:!0,bevelThickness:.25,bevelSize:.22,bevelSegments:4,curveSegments:4}),he=ne.attributes.position,pe=ne.attributes.uv;for(let Y=0;Y<he.count;Y++)pe.setXY(Y,(he.getX(Y)+1.85)/3.7,(he.getY(Y)+1.35)/2.7);let L=new le(ne,new _e({map:V,bumpMap:V,bumpScale:3,roughness:.9}));L.position.set(0,1.25,-.3),L.rotation.x=-.12,L.castShadow=!0,L.receiveShadow=!0,N.add(L);let Q=new li(16756848,0,9,1.2);return N.add(Q),{group:N,reset:()=>{Q.intensity=0},play:()=>{},update:Y=>{let ie=Math.min(1,Y/7);return Q.intensity=30*Math.sin(ie*Math.PI),Q.position.set(-3+6*ie,.6+1.6*Math.sin(ie*Math.PI),1.6),Y<7.5}}},kobyz(){let N=new ke,V=new _e({color:8013092,roughness:.45,map:Ki()}),j=new _e({color:14271642,roughness:.9,map:Ur("#d8c39a",["#b59d6f","#efe0bd"])}),$=[];for(let T=0;T<=24;T++){let I=T/24;$.push(new ce(Math.sin(I*Math.PI)*.2+.01,I*.62))}let ne=new le(new Bt($,40,Math.PI,Math.PI),V);ne.scale.z=.7,ne.castShadow=!0;let he=new Tt;$.slice(0,13).forEach((T,I)=>I?he.lineTo(T.x,T.y):he.moveTo(T.x,T.y)),[...$.slice(0,13)].reverse().forEach(T=>he.lineTo(-T.x,T.y));let pe=new le(new oi(he),j);pe.position.z=.001;let L=new le(new Ke(.06,.4,.05),V);L.position.set(0,.8,-.02);let Q=new un([new R(0,.98,-.02),new R(0,1.12,-.06),new R(0,1.2,-.16),new R(0,1.17,-.24)]),Y=new le(new $t(Q,16,.035,8),V),ie=new Wi({color:15262422}),se=[-.015,.015].map(T=>{let I=new Ze().setFromPoints([new R(T,.08,.03),new R(T,1,.015)]);return new Xi(I,ie)}),A=new le(new Ke(.07,.02,.03),new _e({color:3809811}));A.position.set(0,.2,.02);let M=new ke;M.add(ne,pe,L,Y,A,...se),M.rotation.set(0,Math.PI,.12),M.position.y=.2,N.add(M);let B=new un([new R(-.45,0,0),new R(0,.07,0),new R(.45,0,0)]),S=new ke;S.add(new le(new $t(B,20,.012,6),V)),S.add(new Xi(new Ze().setFromPoints([new R(-.45,0,0),new R(.45,0,0)]),ie)),S.position.set(.05,.52,.08),S.rotation.z=-.15,N.add(S);let x,w,E=()=>{x||=new(window.AudioContext||window.webkitAudioContext),x.resume();let T=x.currentTime,I=x.createGain();I.gain.setValueAtTime(0,T),I.gain.linearRampToValueAtTime(.16,T+.3),I.gain.setValueAtTime(.16,T+4.2),I.gain.linearRampToValueAtTime(0,T+5);let O=x.createBiquadFilter();O.type="lowpass",O.frequency.value=1800,O.Q.value=2;let D=x.createBiquadFilter();D.type="peaking",D.frequency.value=650,D.gain.value=8,O.connect(D).connect(I).connect(x.destination);let J=[[0,196],[1.2,220],[2.2,196],[3.2,174.6]];for(let ee of[1,1.004]){let oe=x.createOscillator();oe.type="sawtooth",J.forEach(([Ee,Se])=>oe.frequency.setValueAtTime(Se*ee,T+Ee));let de=x.createOscillator(),fe=x.createGain();de.frequency.value=5.2,fe.gain.value=2.2,de.connect(fe).connect(oe.frequency),oe.connect(O),oe.start(T),oe.stop(T+5.1),de.start(T),de.stop(T+5.1)}let F=x.createOscillator();F.type="sawtooth",F.frequency.value=146.8;let W=x.createGain();W.gain.value=.5,F.connect(W).connect(O),F.start(T),F.stop(T+5.1),w=!0};return{group:N,reset:()=>{S.position.x=.05,w=!1},play:()=>E(),update:T=>(S.position.x=.05+Math.sin(T*2.2)*.28,S.position.y=.52+Math.sin(T*4.4)*.01,T<5)}}};function P(){if(!m)return;kh(e,s);let N=y.getDelta(),V=Math.min(.05,N);if(a.update(V),u&&(f&&(p+=Math.min(.25,N),u.update(p)||(f=!1,u.reset?.(),u===g.toguz&&u.update(0))),u.tick?.(y.elapsedTime)),(!o||l||f||a.autoRotate)&&(e.render(n,s),l=!1),o&&!f){m=!1,clearTimeout(P.idle),P.idle=setTimeout(()=>{H&&(l=!0,m=!0,requestAnimationFrame(P))},1e3);return}requestAnimationFrame(P)}let z=()=>{l=!0,!m&&H&&(m=!0,y.getDelta(),requestAnimationFrame(P))};o&&(i.addEventListener("pointermove",N=>{N.buttons&&z()}),i.addEventListener("wheel",z,{passive:!0}),i.addEventListener("pointerdown",z),i.addEventListener("pointerup",z));let H=!1,G=i.parentElement,X=N=>{if(N===H)return;H=N;let V=m;m=H,m&&!V&&(l=!0,y.getDelta(),requestAnimationFrame(P))},q=()=>{let N=G.getBoundingClientRect();X(N.bottom>-200&&N.top<innerHeight+200)};new IntersectionObserver(()=>q(),{rootMargin:"200px"}).observe(G);let Z=0;addEventListener("scroll",()=>{Z||(Z=requestAnimationFrame(()=>{Z=0,q()}))},{passive:!0}),addEventListener("resize",q),q(),document.addEventListener("dala:exhibit",N=>{b(N.detail),z()}),b(window.DALA_PENDING_EXHIBIT||"yurt"),!ia&&!o&&(window.DALA_PENDING_EXHIBIT||"yurt")==="yurt"&&(f=!0,p=0),window.DALA_MUSEUM3D={show:b,play:()=>document.getElementById("museum-play").click()}}var Bh=document.getElementById("hero-canvas");Bh&&nm(Bh);var Dl=document.getElementById("museum-canvas");if(Dl){let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(i.disconnect(),im(Dl))},{rootMargin:"400px"});i.observe(Dl)}var Nl=3,Ol=5.4,rm=.27,sm=.34;function am(){try{let i=document.createElement("canvas").getContext("webgl"),e=i&&i.getExtension("WEBGL_debug_renderer_info");return!i||/swiftshader|llvmpipe|software/i.test(e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):"")}catch{return!0}}function om(){let i=new It(1,40,28),e=i.attributes.position,t=new R,n=(r,s)=>Math.sign(r)*Math.pow(Math.abs(r),s);for(let r=0;r<e.count;r++){t.fromBufferAttribute(e,r);let s=n(t.x,.62)*.52,a=n(t.y,.72)*.3,o=n(t.z,.7)*.36;a*=1+.35*Math.pow(Math.abs(t.x),3),t.z>0&&(o-=.13*Math.exp(-(t.x*t.x*5+t.y*t.y*7))),t.z<0&&(o+=.06*Math.exp(-(t.x*t.x*9+t.y*t.y*4))),t.y>0&&(a-=.05*Math.exp(-(t.x*t.x*20))),e.setXYZ(r,s,a,o)}return i.computeVertexNormals(),i}function lm(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d");e.fillStyle="#b99b74",e.fillRect(0,0,512,512);for(let n=0;n<9e3;n++){let r=50+Math.random()*30;e.fillStyle=`hsla(${28+Math.random()*10},${25+Math.random()*15}%,${r}%,${.15+Math.random()*.25})`;let s=Math.random()*3+.5;e.fillRect(Math.random()*512,Math.random()*512,s,s)}let t=new Kt(i);return t.wrapS=t.wrapT=Yt,t.repeat.set(10,10),t.colorSpace=Qe,t}function cm(){let i=document.createElement("canvas");i.width=4,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#5e95b8"),t.addColorStop(.55,"#a9cbd9"),t.addColorStop(1,"#ead9b9"),e.fillStyle=t,e.fillRect(0,0,4,256);let n=new Kt(i);return n.colorSpace=Qe,n}function Xh({canvas:i,hud:e,msg:t,tools:n,btn:r,finish:s,unlock:a,toast:o}){let l=am(),c=new cn({canvas:i,antialias:!l,powerPreference:"high-performance"});c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:1.75)),c.outputColorSpace=Qe,c.toneMapping=kn,c.shadowMap.enabled=!l,c.shadowMap.type=Ys;let h=new Pt;h.background=cm(),h.fog=new hn(14273972,22,60);let d=new nt(42,1,.1,100);d.position.set(0,3.3,9.4),d.lookAt(0,0,-.6),h.add(new Qt(15004159,9071176,1.1));let u=new en(16773334,2.2);u.position.set(-5,9,4),u.castShadow=!l,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),h.add(u);let p=new le(new Ot(80,80),new _e({map:lm(),roughness:1}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,h.add(p);let f=new le(new Cr(Nl-.05,Nl+.05,128),new bt({color:16181970}));f.rotation.x=-Math.PI/2,f.position.y=.005,h.add(f);let y=new le(new Ot(7,.07),new bt({color:16181970}));y.rotation.x=-Math.PI/2,y.position.set(0,.005,Ol+.55),h.add(y);let m=new _e({color:15722198,roughness:.95}),g=new _e({color:14207406,roughness:.95});[[-14,-24,1.6],[-7,-28,1.2],[9,-26,1.7],[17,-21,1.1]].forEach(([F,W,ee])=>{let oe=new ke,de=new le(new We(1.6,1.6,1.2,24),m);de.position.y=.6;let fe=new le(new An(1.75,1,24),g);fe.position.y=1.7,oe.add(de,fe),oe.position.set(F,0,W),oe.scale.setScalar(ee),h.add(oe)});let _=om(),v=new _e({color:15391936,roughness:.55}),b=new _e({color:10824228,roughness:.4,metalness:.05}),U=(F,W)=>{let ee=new le(_,F);return ee.scale.setScalar(W),ee.castShadow=!l,ee.position.y=.3*W,ee},P=new Tt;P.moveTo(-.06,0),P.lineTo(.06,0),P.lineTo(.06,.82),P.lineTo(.2,.82),P.lineTo(0,1.1),P.lineTo(-.2,.82),P.lineTo(-.06,.82);let z=new le(new oi(P),new bt({color:14262582,transparent:!0,opacity:.9,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.y=.02,h.add(z);let H=[],G,X=1,q=0,k=0,Z=0,N=0,V=.55,j=!1,$=!1,ne=0;function he(F,W,ee){let oe=F==="saka"?sm:rm,de=U(F==="saka"?b:v,F==="saka"?.66:.54);return de.rotation.y=Math.random()*Math.PI,h.add(de),{kind:F,x:W,z:ee,vx:0,vz:0,r:oe,m:F==="saka"?2.2:1,mesh:de,out:!1,gone:!1}}function pe(){H.forEach(oe=>h.remove(oe.mesh)),H=[];let F=Math.min(4+X*2,14),W=F>8?2:1,ee=Math.ceil(F/W);for(let oe=0;oe<F;oe++){let de=Math.floor(oe/ee),Ee=(oe%ee-(ee-1)/2)*.62+(Math.random()-.5)*.05;H.push(he("asyk",Ee,(de-(W-1)/2)*.7))}G=he("saka",Z,Ol),H.push(G),q=3+X,Q()}function L(){X=1,k=0,$=!1,t.textContent="",pe()}function Q(){let F=H.filter(W=>W.kind==="asyk"&&!W.out).length;e.textContent=`\u0414\u0435\u04A3\u0433\u0435\u0439 ${X} \xB7 \u0410\u0442\u0443: ${q} \xB7 \u0428\u0435\u04A3\u0431\u0435\u0440\u0434\u0435: ${F} \u0430\u0441\u044B\u049B \xB7 \u04B0\u043F\u0430\u0439: ${k}`,z.visible=!j&&!$,z.position.x=G.x,z.position.z=G.z,z.rotation.z=-N,z.scale.set(1,.6+V*2.2,1),J()}let Y=null;function ie(F){try{Y=Y||new(window.AudioContext||window.webkitAudioContext);let W=Y.sampleRate*.06,ee=Y.createBuffer(1,W,Y.sampleRate),oe=ee.getChannelData(0);for(let Se=0;Se<W;Se++)oe[Se]=(Math.random()*2-1)*Math.pow(1-Se/W,6);let de=Y.createBufferSource(),fe=Y.createBiquadFilter(),Ee=Y.createGain();fe.type="bandpass",fe.frequency.value=1800+Math.random()*900,fe.Q.value=4,Ee.gain.value=Math.min(1,F*.25),de.buffer=ee,de.connect(fe).connect(Ee).connect(Y.destination),de.start()}catch{}}let se=new R;function A(F){let W=!1;for(let ee of H){if(ee.gone)continue;let oe=Math.hypot(ee.vx,ee.vz);if(oe>0){let de=ee.kind==="saka"?2.3:3.1,fe=Math.max(0,oe-de*F);ee.vx*=fe/oe,ee.vz*=fe/oe,ee.x+=ee.vx*F,ee.z+=ee.vz*F,(Math.abs(ee.x)>14||Math.abs(ee.z)>14)&&(ee.vx=ee.vz=0),fe>.01?W=!0:ee.vx=ee.vz=0,se.set(ee.vz,0,-ee.vx).normalize(),fe>.01&&ee.mesh.rotateOnWorldAxis(se,fe*F/ee.r*.55)}}for(let ee=0;ee<H.length;ee++)for(let oe=ee+1;oe<H.length;oe++){let de=H[ee],fe=H[oe];if(de.gone||fe.gone)continue;let Ee=fe.x-de.x,Se=fe.z-de.z,ve=Math.hypot(Ee,Se),He=de.r+fe.r;if(ve>=He||ve===0)continue;let Ge=Ee/ve,Xe=Se/ve,xe=He-ve,we=1/de.m,Oe=1/fe.m;de.x-=Ge*xe*we/(we+Oe),de.z-=Xe*xe*we/(we+Oe),fe.x+=Ge*xe*Oe/(we+Oe),fe.z+=Xe*xe*Oe/(we+Oe);let Lt=(fe.vx-de.vx)*Ge+(fe.vz-de.vz)*Xe;if(Lt<0){let fn=-1.8199999999999998*Lt/(we+Oe);de.vx-=fn*we*Ge,de.vz-=fn*we*Xe,fe.vx+=fn*Oe*Ge,fe.vz+=fn*Oe*Xe;let St=(Math.random()-.5)*.15*Math.abs(Lt);fe.vx+=-Xe*St,fe.vz+=Ge*St,Math.abs(Lt)>.4&&ie(Math.abs(Lt)),W=!0}}return W}function M(){j=!1;let F=0;for(let ee of H)ee.kind!=="asyk"||ee.out||Math.hypot(ee.x,ee.z)>Nl+.02&&(ee.out=!0,F++);ne=F,k+=F*10+(F>=2?F*5:0),F>=2&&a("asyk-double"),q--,H.filter(ee=>ee.out&&!ee.gone).forEach(ee=>{ee.gone=!0,B(ee.mesh)});let W=H.filter(ee=>ee.kind==="asyk"&&!ee.out).length;if(t.textContent=F?`${F} \u0430\u0441\u044B\u049B \u0448\u044B\u049B\u0442\u044B! +${F*10+(F>=2?F*5:0)}`:"\u0411\u04B1\u043B \u0436\u043E\u043B\u044B \u0435\u0448\u0442\u0435\u04A3\u0435 \u0448\u044B\u049B\u043F\u0430\u0434\u044B.",Z=Math.max(-2.6,Math.min(2.6,G.x)),!W)k+=q*15,X++,X>=3&&a("asyk-level3"),t.textContent=`\u0414\u0435\u04A3\u0433\u0435\u0439 \u04E9\u0442\u0442\u0456! \u049A\u0430\u043B\u0493\u0430\u043D \u04D9\u0440 \u0430\u0442\u0443 \u04AF\u0448\u0456\u043D +15. ${X}-\u0434\u0435\u04A3\u0433\u0435\u0439 \u0431\u0430\u0441\u0442\u0430\u043B\u0434\u044B.`,setTimeout(pe,900);else if(q<=0){$=!0;let ee=s("asyk",k);t.textContent=`\u041E\u0439\u044B\u043D \u0430\u044F\u049B\u0442\u0430\u043B\u0434\u044B: ${k} \u04B1\u043F\u0430\u0439.${ee?" \u0416\u0430\u04A3\u0430 \u0440\u0435\u043A\u043E\u0440\u0434!":""} \xAB\u0416\u0430\u04A3\u0430 \u043E\u0439\u044B\u043D\xBB \u0431\u0430\u0442\u044B\u0440\u043C\u0430\u0441\u044B\u043D \u0431\u0430\u0441.`}else G.x=Z,G.z=Ol,G.vx=G.vz=0;Q()}function B(F){F.material=F.material.clone(),F.material.transparent=!0;let W=performance.now(),ee=()=>{let oe=(performance.now()-W)/600;F.material.opacity=1-oe,F.position.y+=.01,J(),oe<1?requestAnimationFrame(ee):h.remove(F)};requestAnimationFrame(ee)}let S=0;function x(F){if(!j)return;let W=Math.min(.05,(F-(S||F))/1e3);S=F;let ee=!1,oe=6;for(let de=0;de<oe;de++)ee=A(W/oe)||ee;for(let de of H)de.mesh.position.x=de.x,de.mesh.position.z=de.z;J(),ee?requestAnimationFrame(x):M()}function w(){if(j||$||q<=0)return;let F=5+V*11;G.vx=Math.sin(N)*F,G.vz=-Math.cos(N)*F,j=!0,S=0,t.textContent="",Q(),requestAnimationFrame(x)}let E=null;i.addEventListener("pointerdown",F=>{j||$||(E={x:F.clientX,y:F.clientY},i.setPointerCapture(F.pointerId))}),i.addEventListener("pointermove",F=>{if(!E)return;let W=F.clientX-E.x,ee=F.clientY-E.y,oe=Math.hypot(W,ee);oe<6||ee<=0||(N=Math.max(-.9,Math.min(.9,Math.atan2(-W,ee))),V=Math.min(1,oe/(i.clientHeight*.4)),Q())});let T=F=>{if(!E)return;let W=Math.hypot(F.clientX-E.x,F.clientY-E.y);E=null,W>12&&F.clientY>0&&w()};i.addEventListener("pointerup",T),i.addEventListener("pointercancel",()=>{E=null}),i.addEventListener("keydown",F=>{let W=F.key;if(W==="ArrowLeft")N=Math.max(-.9,N-.05);else if(W==="ArrowRight")N=Math.min(.9,N+.05);else if(W==="ArrowUp")V=Math.min(1,V+.05);else if(W==="ArrowDown")V=Math.max(.05,V-.05);else if(W==="a"||W==="A"||W==="\u0444"||W==="\u0424")I(-.3);else if(W==="d"||W==="D"||W==="\u0432"||W==="\u0412")I(.3);else if(W===" "||W==="Enter")w();else return;F.preventDefault(),j||Q()});function I(F){j||$||(Z=Math.max(-2.6,Math.min(2.6,Z+F)),G.x=Z,Q())}n.append(r("\u0416\u0430\u04A3\u0430 \u043E\u0439\u044B\u043D",L),r("\u25C0 \u0421\u0430\u049B\u0430\u043D\u044B \u0441\u043E\u043B\u0493\u0430",()=>I(-.4)),r("\u0421\u0430\u049B\u0430\u043D\u044B \u043E\u04A3\u0493\u0430 \u25B6",()=>I(.4)),r("\u0410\u0442\u0443",w,"btn btn-gold"));function O(){let F=i.clientWidth,W=i.clientHeight;!F||!W||(c.setSize(F,W,!1),d.aspect=F/W,d.fov=F/W<.9?62:46,d.updateProjectionMatrix(),J())}let D=!1;function J(){D||(D=!0,requestAnimationFrame(()=>{D=!1;for(let F of H)F.gone||(F.mesh.position.x=F.x,F.mesh.position.z=F.z);c.render(h,d)}))}return new ResizeObserver(O).observe(i),L(),O(),t.textContent="\u0421\u0430\u049B\u0430\u043D\u044B \u0430\u0440\u0442\u049B\u0430 \u0442\u0430\u0440\u0442\u044B\u043F \u0436\u0456\u0431\u0435\u0440!",{newGame:L}}var tn=320,pi=6,$i=2.4,hm=[["\u0422\u0430\u0439\u0431\u0443\u0440\u044B\u043B",7027999,"\u049A\u043E\u0431\u044B\u043B\u0430\u043D\u0434\u044B \u0431\u0430\u0442\u044B\u0440\u0434\u044B\u04A3 \u0442\u04B1\u043B\u043F\u0430\u0440\u044B"],["\u0411\u0430\u0439\u0448\u04B1\u0431\u0430\u0440",11569764,"\u0410\u043B\u043F\u0430\u043C\u044B\u0441 \u0431\u0430\u0442\u044B\u0440\u0434\u044B\u04A3 \u0430\u0442\u044B"],["\u0422\u0430\u0440\u043B\u0430\u043D",9408399,""],["\u0410\u049B\u0431\u043E\u0437",15262422,""],["\u041A\u04E9\u043A\u0431\u0435\u0441\u0442\u0456",4869975,""],["\u041A\u04AF\u0440\u0435\u04A3\u0448\u0435",9059100,""]],um=[10629675,1929090,14262582,3108184,8018598,1323596];function dm(){try{let i=document.createElement("canvas").getContext("webgl"),e=i&&i.getExtension("WEBGL_debug_renderer_info");return!i||/swiftshader|llvmpipe|software/i.test(e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):"")}catch{return!0}}function ra(i,e,t,n){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let s=new Kt(r);return s.colorSpace=Qe,n&&(s.wrapS=s.wrapT=Yt,s.repeat.set(...n)),s}function pm(i,e){let t=new ke,n=new _e({color:i,roughness:.55}),r=new _e({color:1905678,roughness:.8}),s=new le(new It(1,20,14),n);s.scale.set(1.05,.5,.42),s.position.y=1.55,t.add(s);let a=new le(new We(.2,.32,1.05,12),n);a.position.set(.95,2.05,0),a.rotation.z=-.75,t.add(a);let o=new le(new Ke(.72,.28,.26),n);o.position.set(1.42,2.42,0),o.rotation.z=-.55,t.add(o);let l=new le(new Ke(.9,.14,.06),r);l.position.set(.86,2.25,0),l.rotation.z=-.75,t.add(l);let c=new le(new We(.03,.12,.9,8),r);c.position.set(-1.2,1.35,0),c.rotation.z=-.5,t.add(c);let h=[];[[.7,.2],[.7,-.2],[-.7,.2],[-.7,-.2]].forEach(([_,v],b)=>{let U=new ke;U.position.set(_,1.4,v);let P=new le(new We(.09,.07,1.25,8),n);P.position.y=-.62;let z=new le(new We(.09,.11,.12,8),r);z.position.y=-1.25,U.add(P,z),t.add(U),h.push({hip:U,phase:[0,.5,.25,.75][b]})});let d=new ke,u=new _e({color:e,roughness:.7}),p=new le(new We(.2,.26,.7,10),u);p.position.y=.35,p.rotation.z=-.5;let f=new le(new It(.16,12,10),new _e({color:13211762,roughness:.7}));f.position.set(.25,.78,0);let y=new le(new An(.17,.22,10),u);y.position.set(.25,.95,0);let m=new le(new We(.08,.08,.5,8),new _e({color:2763306}));m.position.set(.05,.05,.3),m.rotation.x=.5;let g=m.clone();return g.position.z=-.3,g.rotation.x=-.5,d.add(p,f,y,m,g),d.position.set(.05,2,0),t.add(d),t.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),{group:t,legs:h,rider:d,body:s,neck:a,head:o}}function jh({canvas:i,hud:e,msg:t,tools:n,btn:r,finish:s,unlock:a,toast:o,rhythm:l}){let c=dm(),h=new cn({canvas:i,antialias:!c});h.setPixelRatio(Math.min(devicePixelRatio||1,c?1:1.75)),h.outputColorSpace=Qe,h.toneMapping=kn,h.shadowMap.enabled=!c;let d=new Pt;d.background=ra(4,256,S=>{let x=S.createLinearGradient(0,0,0,256);x.addColorStop(0,"#4f8db5"),x.addColorStop(.6,"#a8cfe0"),x.addColorStop(1,"#efe2c4"),S.fillStyle=x,S.fillRect(0,0,4,256)}),d.fog=new hn(14210752,60,230);let u=new nt(50,1,.1,500);d.add(new Qt(15135487,8219203,1.1));let p=new en(16773592,2.1);p.position.set(30,50,20),p.castShadow=!c,p.shadow.mapSize.set(1024,1024),Object.assign(p.shadow.camera,{left:-20,right:20,top:20,bottom:-20,far:120}),d.add(p,p.target);let f=ra(512,512,S=>{S.fillStyle="#a6a35f",S.fillRect(0,0,512,512);for(let x=0;x<14e3;x++)S.fillStyle=`hsla(${50+Math.random()*30},${30+Math.random()*25}%,${35+Math.random()*25}%,.5)`,S.fillRect(Math.random()*512,Math.random()*512,1.5,3+Math.random()*3)},[60,60]),y=new le(new Ot(800,800),new _e({map:f,roughness:1}));y.rotation.x=-Math.PI/2,y.receiveShadow=!0,d.add(y);let m=ra(256,256,S=>{S.fillStyle="#b8986c",S.fillRect(0,0,256,256);for(let x=0;x<4e3;x++)S.fillStyle=`rgba(${90+Math.random()*60},${70+Math.random()*40},40,.35)`,S.fillRect(Math.random()*256,Math.random()*256,2,2)},[3,80]),g=new le(new Ot(pi*$i+2,tn+60),new _e({map:m,roughness:1}));g.rotation.x=-Math.PI/2,g.position.set(0,.01,-(tn/2)),g.receiveShadow=!0,d.add(g);let _=new _e({color:15985368}),v=new _e({color:10629675});for(let S=0;S<=tn;S+=20)for(let x of[-1,1]){let w=new le(new We(.08,.08,1.3,6),S%100===0?v:_);w.position.set(x*(pi*$i/2+1.4),.65,-S),d.add(w)}let b=new ke,U=new le(new Ke(.5,6,.5),v),P=U.clone();U.position.set(-(pi*$i/2+1.5),3,0),P.position.x=-U.position.x;let z=new le(new Ke(pi*$i+3.5,1.1,.2),new _e({map:ra(1024,96,(S,x,w)=>{S.fillStyle="#14324c",S.fillRect(0,0,x,w),S.fillStyle="#d9a136",S.font="bold 58px Philosopher, sans-serif",S.textAlign="center",S.textBaseline="middle",S.fillText("\u041C\u04D8\u0420\u0415",x/2,w/2+3),S.strokeStyle="#d9a136",S.lineWidth=4,S.strokeRect(8,8,x-16,w-16)})}));z.position.y=5.6,b.add(U,P,z),b.position.z=-tn,d.add(b);let H=new le(new Ot(pi*$i+2,.5),new bt({color:16777215}));H.rotation.x=-Math.PI/2,H.position.set(0,.02,-tn),d.add(H);let G=new _e({color:9144942,roughness:1,flatShading:!0});for(let S=0;S<18;S++){let x=new le(new An(30+Math.random()*40,12+Math.random()*20,7),G);x.position.set((Math.random()-.5)*500,0,-tn-80-Math.random()*120),d.add(x)}let X=new _e({color:15722198,roughness:.95});for(let S=0;S<8;S++){let x=S%2?1:-1,w=new ke,E=new le(new We(2.2,2.2,1.8,20),X);E.position.y=.9;let T=new le(new An(2.4,1.5,20),X);T.position.y=2.55,w.add(E,T),w.position.set(x*(14+Math.random()*10),0,-40*S-30),d.add(w)}let q=hm.map(([S,x],w)=>{let E=pm(x,um[w]);return E.group.rotation.y=Math.PI/2,E.group.position.x=(w-(pi-1)/2)*$i,d.add(E.group),{...E,name:S,i:w,z:0,v:0,stamina:100,gait:0,done:!1,time:0,target:0,kick:.6+Math.random()*.3}}),k=q[0],Z="ready",N=0,V=0,j=0,$=0,ne=[];function he(){q.forEach(S=>{S.z=0,S.v=0,S.stamina=100,S.done=!1,S.time=0,S.target=16.2+Math.random()*3,S.kick=.55+Math.random()*.3}),ne=[],$=0,Z="ready",t.textContent="\xAB\u0411\u0430\u0441\u0442\u0430\u0443\xBB \u0431\u0430\u0441, \u0441\u043E\u0441\u044B\u043D \u0431\u0435\u043B\u0433\u0456 \u0436\u0430\u0441\u044B\u043B \u0430\u0439\u043C\u0430\u049B\u049B\u0430 \u0436\u0435\u0442\u043A\u0435\u043D\u0434\u0435 \u049B\u0430\u043C\u0448\u044B\u043B\u0430!",ie(0),M()}function pe(){if(Z==="count"||Z==="run")return;he(),Z="count",V=3,t.textContent="3";let S=setInterval(()=>{if(V--,V>0){t.textContent=String(V);return}clearInterval(S),t.textContent="\u0428\u0430\u043F!",Z="run",N=performance.now(),j=0,setTimeout(()=>{Z==="run"&&(t.textContent="")},900),requestAnimationFrame(A)},800)}function L(){if(Z!=="run"||k.done)return;let S=k.gait%1>.72,x=k.stamina<15;k.v=Math.min(25,k.v+(S?3.3:2)*(x?.4:1)),k.stamina=Math.max(0,k.stamina-9),l.flash(S)}function Q(S,x){for(let w of q){if(w.done){w.v=Math.max(0,w.v-8*S),w.z+=w.v*S;continue}if(w===k)w.v+=(10-w.v)*.6*S,w.stamina=Math.min(100,w.stamina+18*S);else{let E=1-w.z/tn,T=w.target+(E<.3?w.kick*4:0)+Math.sin(x/900+w.i*2)*.6;w.v+=(Math.min(T,w.v+9*S*4)-w.v)*1.4*S}w.z+=w.v*S,w.gait+=w.v*S*.085,w.z>=tn&&(w.done=!0,w.time=(x-N)/1e3,ne.push(w),w===k&&($=ne.length))}k.done&&Z==="run"&&Y()}function Y(){Z="end";let S=[60,40,25,15,10,5][$-1],x=s("bayge",+k.time.toFixed(2),!1,{place:$,points:S});$===1&&a("bayge-win"),t.textContent=`${$}-\u043E\u0440\u044B\u043D! \u0423\u0430\u049B\u044B\u0442: ${k.time.toFixed(2)} \u0441. +${S} \u04B1\u043F\u0430\u0439.${x?" \u0416\u0430\u04A3\u0430 \u0440\u0435\u043A\u043E\u0440\u0434!":""}`,$===1&&o("\u0411\u04D9\u0439\u0433\u0435\u043D\u0456\u04A3 \u0431\u0430\u0441 \u0436\u04AF\u043B\u0434\u0435\u0441\u0456!","\u0422\u0430\u0439\u0431\u0443\u0440\u044B\u043B \u0431\u0456\u0440\u0456\u043D\u0448\u0456 \u043A\u0435\u043B\u0434\u0456.")}function ie(S){for(let w of q){let E=Math.min(1,w.v/18);w.group.position.z=-w.z,w.legs.forEach(({hip:I,phase:O})=>{I.rotation.z=Math.sin((w.gait+O)*Math.PI*2)*.75*E});let T=Math.abs(Math.sin(w.gait*Math.PI*2))*.16*E;w.body.position.y=1.55+T,w.rider.position.y=2+T*1.4,w.neck.rotation.z=-.75+Math.sin(w.gait*Math.PI*2)*.08*E}let x=-k.z+9.5;u.position.set(k.group.position.x+4.2,4.2,x),u.lookAt(k.group.position.x-1.2,1.6,-k.z-6),p.position.set(k.group.position.x+30,50,-k.z+20),p.target.position.set(k.group.position.x,0,-k.z)}function se(){let S=q.filter(x=>x!==k&&x.z>k.z).length+1;e.textContent=Z==="run"||Z==="end"?`\u041E\u0440\u044B\u043D: ${k.done?$:S}/${pi} \xB7 \u049A\u0430\u0448\u044B\u049B\u0442\u044B\u049B: ${Math.min(tn,Math.round(k.z))}/${tn} \u043C \xB7 \u0416\u044B\u043B\u0434\u0430\u043C\u0434\u044B\u049B: ${Math.round(k.v*3.6)} \u043A\u043C/\u0441\u0430\u0493`:`\u0421\u0435\u043D\u0456\u04A3 \u0430\u0442\u044B\u04A3 \u2014 \u0422\u0430\u0439\u0431\u0443\u0440\u044B\u043B (\u049B\u044B\u0437\u044B\u043B \u0448\u0430\u043F\u0430\u043D) \xB7 \u049A\u0430\u0448\u044B\u049B\u0442\u044B\u049B ${tn} \u043C`,l.set(k.gait%1,k.stamina/100)}function A(S){let x=Math.min(.05,(S-(j||S))/1e3);j=S,Q(x,S),ie(S),se(),h.render(d,u),(Z==="run"||q.some(w=>w.v>.2))&&requestAnimationFrame(A)}function M(){se(),h.render(d,u)}i.addEventListener("pointerdown",S=>{S.preventDefault(),Z==="run"?L():Z!=="count"&&pe()}),i.addEventListener("keydown",S=>{(S.key===" "||S.key==="ArrowUp"||S.key==="Enter")&&(S.preventDefault(),Z==="run"?L():Z!=="count"&&pe())}),n.append(r("\u0411\u0430\u0441\u0442\u0430\u0443",()=>{pe(),i.focus()},"btn btn-line"),r("\u049A\u0430\u043C\u0448\u044B",L,"btn btn-gold bayge-whip"));function B(){let S=i.clientWidth,x=i.clientHeight;!S||!x||(h.setSize(S,x,!1),u.aspect=S/x,u.fov=S/x<.9?66:50,u.updateProjectionMatrix(),Z!=="run"&&M())}return new ResizeObserver(B).observe(i),he(),B(),{begin:pe,whip:L}}var qh=[["\u0410\u049B \u043A\u0438\u0456\u0437","#efe6d4"],["\u0421\u04B1\u0440 \u043A\u0438\u0456\u0437","#b9b0a2"],["\u0421\u0430\u0440\u0493\u044B\u0448 \u043A\u0438\u0456\u0437","#dcc39a"],["\u049A\u043E\u04A3\u044B\u0440 \u043A\u0438\u0456\u0437","#8a6f55"]],Yh=[["\u049A\u044B\u0437\u044B\u043B","#a2322b"],["\u041A\u04E9\u043A","#1d4566"],["\u0416\u0430\u0441\u044B\u043B","#2f6d58"],["\u049A\u0430\u0440\u0430","#2a2522"]],Zh=[["\u049A\u044B\u0437\u044B\u043B","#9c2f28"],["\u041A\u04E9\u043A","#1d4f73"],["\u0421\u0430\u0440\u044B","#c58b22"],["\u0410\u0493\u0430\u0448","#7a4b2a"]],Jh=[["\u049A\u043E\u0448\u049B\u0430\u0440 \u043C\u04AF\u0439\u0456\u0437","horn"],["\u0421\u044B\u043D\u044B\u049B \u043C\u04AF\u0439\u0456\u0437","zigzag"],["\u0422\u04E9\u0440\u0442 \u049B\u04B1\u043B\u0430\u049B","cross"],["\u041C\u0435\u043D\u0456\u04A3 \u043E\u044E\u044B\u043C","mine"]];function mm(){try{let i=document.createElement("canvas").getContext("webgl"),e=i&&i.getExtension("WEBGL_debug_renderer_info");return!i||/swiftshader|llvmpipe|software/i.test(e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):"")}catch{return!0}}function Nr(i,e,t,n,r){i.lineWidth=r,i.lineCap="round",i.beginPath(),i.moveTo(e,t+n*.9),i.lineTo(e,t),i.bezierCurveTo(e,t-n*.55,e+n*.75,t-n*.55,e+n*.7,t-n*.05),i.bezierCurveTo(e+n*.66,t+n*.3,e+n*.3,t+n*.25,e+n*.35,t),i.moveTo(e,t),i.bezierCurveTo(e,t-n*.55,e-n*.75,t-n*.55,e-n*.7,t-n*.05),i.bezierCurveTo(e-n*.66,t+n*.3,e-n*.3,t+n*.25,e-n*.35,t),i.stroke()}function fm(i,e,t,n){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d");if(s.fillStyle=e,s.fillRect(0,0,512,128),s.strokeStyle=t,s.fillStyle=t,s.fillRect(0,6,512,6),s.fillRect(0,116,512,6),i==="mine"&&n)for(let a=0;a<512;a+=112)s.drawImage(n,a,14,100,100);else if(i==="zigzag"){s.lineWidth=9,s.lineJoin="round",s.beginPath();for(let a=-32,o=0;a<=544;a+=32,o++)s.lineTo(a,o%2?34:94);s.stroke();for(let a=0;a<512;a+=64)s.beginPath(),s.arc(a+16,64,7,0,Math.PI*2),s.fill()}else if(i==="cross")for(let a=32;a<512;a+=64){s.save(),s.translate(a,64);for(let o=0;o<4;o++)s.rotate(Math.PI/2),Nr(s,0,-10,22,5);s.restore()}else for(let a=32;a<512;a+=64)Nr(s,a,70,40,7);return r}function gm(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},${Math.random()*.06})`,t.fillRect(Math.random()*256,Math.random()*256,2,2);return e}var Fl=(i,e=1,t=1)=>{let n=new Kt(i);return n.colorSpace=Qe,n.wrapS=n.wrapT=Yt,n.repeat.set(e,t),n.anisotropy=4,n};function Kh({host:i,make:e,btn:t}){let n=mm(),r={felt:0,band:0,door:0,pattern:0},s=e("div",null,"yd"),a=e("div",null,"yd-stage"),o=e("canvas",null,null,{role:"img","aria-label":"\u0411\u0435\u0437\u0435\u043D\u0434\u0456\u0440\u0456\u043B\u0433\u0435\u043D \u043A\u0438\u0456\u0437 \u04AF\u0439\u0434\u0456\u04A3 3D \u043A\u04E9\u0440\u0456\u043D\u0456\u0441\u0456. \u0422\u044B\u0448\u049B\u0430\u043D\u043C\u0435\u043D \u0430\u0439\u043D\u0430\u043B\u0434\u044B\u0440\u0443\u0493\u0430 \u0431\u043E\u043B\u0430\u0434\u044B."});a.append(o);let l=e("div",null,"yd-panel"),c=(M,B,S,x)=>{let w=e("fieldset",null,"yd-group");return w.append(e("legend",M)),B.forEach(([E,T],I)=>{let O=t(E,()=>{r[S]=I,w.querySelectorAll("button").forEach((D,J)=>D.setAttribute("aria-pressed",String(J===I))),Y()},"yd-opt",{"aria-pressed":String(I===r[S])});if(x){let D=e("i",null,null,{"aria-hidden":"true"});D.style.background=T,O.prepend(D)}w.append(O)}),w},h=e("p","\xAB\u041C\u0435\u043D\u0456\u04A3 \u043E\u044E\u044B\u043C\xBB \u2014 \u0436\u043E\u0493\u0430\u0440\u044B\u0434\u0430\u0493\u044B \u043E\u044E \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0493\u044B\u0448\u0442\u0430 \u0441\u0430\u043B\u0493\u0430\u043D \u04E9\u0440\u043D\u0435\u0433\u0456\u04A3.","yd-note");l.append(c("\u041A\u0438\u0456\u0437",qh,"felt",!0),c("\u0411\u0430\u0441\u049B\u04B1\u0440 \u043C\u0435\u043D \u0442\u0443\u044B\u0440\u043B\u044B\u049B \u0436\u0438\u0435\u0433\u0456",Yh,"band",!0),c("\u041E\u044E",Jh,"pattern",!1),h,c("\u0415\u0441\u0456\u043A",Zh,"door",!0));let d=t("\u0421\u0443\u0440\u0435\u0442\u043A\u0435 \u0441\u0430\u049B\u0442\u0430\u0443",()=>{u.render(p,f),o.toBlob(M=>{let B=e("a",null,null,{href:URL.createObjectURL(M),download:"Dala-murasy-kiiz-ui.png"});document.body.append(B),B.click(),B.remove()})},"btn btn-gold");l.append(d),s.append(a,l),i.append(s);let u=new cn({canvas:o,antialias:!n,preserveDrawingBuffer:!0});u.setPixelRatio(Math.min(devicePixelRatio||1,n?1:1.75)),u.outputColorSpace=Qe,u.toneMapping=kn,u.shadowMap.enabled=!n;let p=new Pt;p.background=new Ae(13229027),p.fog=new hn(13229027,30,70);let f=new nt(40,1,.1,200);f.position.set(8.5,4.2,9.5);let y=new Zi(f,o);y.target.set(0,1.7,0),y.enableDamping=!n,y.minDistance=6,y.maxDistance=22,y.maxPolarAngle=Math.PI*.48,y.enablePan=!1,y.update(),p.add(new Qt(15398143,9073488,1.15));let m=new en(16773336,2.2);m.position.set(8,12,6),m.castShadow=!n,m.shadow.mapSize.set(1024,1024),Object.assign(m.shadow.camera,{left:-8,right:8,top:8,bottom:-8}),p.add(m);let g=new le(new dn(40,48),new _e({color:10330218,roughness:1}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,p.add(g);let _=3,v=1.9,b=new _e({roughness:.95,side:mn}),U=new _e({roughness:.8}),P=new _e({roughness:.6}),z=new le(new We(_,_,v,64,1,!0),b);z.position.y=v/2,z.castShadow=z.receiveShadow=!0;let H=new le(new We(_+.02,_+.02,.42,64,1,!0),U);H.position.y=v-.32;let G=new le(new We(_+.025,_+.025,.26,64,1,!0),U);G.position.y=.14;let X=[];for(let M=0;M<=16;M++){let B=M/16;X.push(new ce(_+.05-B*(_-.55),v+Math.sin(B*Math.PI/2)*1.55-B*.05))}let q=new le(new Bt(X,64),b);q.castShadow=!0;let k=new le(new pn(.55,.07,10,40),new _e({color:8014634,roughness:.6}));k.rotation.x=Math.PI/2,k.position.y=v+1.52;let Z=new le(new dn(.56,32),b);Z.rotation.x=-Math.PI/2,Z.position.y=v+1.5;let N=new _e({color:7031338}),V=new ke;for(let M=0;M<8;M++){let B=M/8*Math.PI*2,S=new un(X.filter((x,w)=>w%3===0).map(x=>new R(Math.cos(B)*(x.x+.03),x.y+.03,Math.sin(B)*(x.x+.03))));V.add(new le(new $t(S,20,.025,5),N))}let j=new ke,$=new le(new Ke(1.05,1.55,.08),P);$.position.y=.78;let ne=new le(new Ke(1.25,1.7,.06),new _e({color:5911580}));ne.position.set(0,.85,-.02),j.add(ne,$),j.position.set(0,0,_+.03);let he=new ke;he.add(z,H,G,q,k,Z,V,j),p.add(he);let pe=new le(new We(.07,.09,1.6,8),new _e({color:7031338}));pe.position.set(4.6,.8,-2.2),pe.castShadow=!0;let L=new le(new It(.45,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new _e({color:2829099,metalness:.6,roughness:.4,side:mn}));L.position.set(-4.2,.45,3),L.rotation.x=Math.PI,p.add(pe,L);function Q(){let M=document.querySelector(".oyu-canvas");return M||null}function Y(){let M=qh[r.felt][1],B=Yh[r.band][1],S=Zh[r.door][1],x=Jh[r.pattern][1],w=x==="mine"?Q():null;h.hidden=x!=="mine",x==="mine"&&!w?h.textContent="\u041E\u044E \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0493\u044B\u0448 \u04D9\u043B\u0456 \u0430\u0448\u044B\u043B\u043C\u0430\u0493\u0430\u043D: \u0430\u043B\u0434\u044B\u043C\u0435\u043D \u0436\u043E\u0493\u0430\u0440\u044B\u0434\u0430\u0493\u044B \xAB\u041E\u044E-\u04E9\u0440\u043D\u0435\u043A \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0493\u044B\u0448\u0442\u0430\xBB \u04E9\u0440\u043D\u0435\u043A \u0441\u0430\u043B.":h.textContent="\xAB\u041C\u0435\u043D\u0456\u04A3 \u043E\u044E\u044B\u043C\xBB \u2014 \u0436\u043E\u0493\u0430\u0440\u044B\u0434\u0430\u0493\u044B \u043E\u044E \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0493\u044B\u0448\u0442\u0430 \u0441\u0430\u043B\u0493\u0430\u043D \u04E9\u0440\u043D\u0435\u0433\u0456\u04A3.",b.map?.dispose(),b.map=Fl(gm(M),6,2),b.needsUpdate=!0;let E=fm(x,B,"#f1e3c6",w);U.map?.dispose(),U.map=Fl(E,8,1),U.needsUpdate=!0;let T=document.createElement("canvas");T.width=256,T.height=384;let I=T.getContext("2d");I.fillStyle=S,I.fillRect(0,0,256,384),I.strokeStyle="#f1d9a6",I.lineWidth=8,I.strokeRect(18,18,220,348),w?I.drawImage(w,48,112,160,160):(I.strokeStyle="#f1d9a6",Nr(I,128,200,90,10),Nr(I,128,90,45,6),Nr(I,128,320,45,6)),P.map?.dispose(),P.map=Fl(T),P.needsUpdate=!0,se()}let ie=0;function se(){ie||(ie=requestAnimationFrame(()=>{ie=0,u.render(p,f)}))}if(y.addEventListener("change",se),y.enableDamping){let M=!1,B=()=>{y.update()&&se(),M&&requestAnimationFrame(B)};o.addEventListener("pointerdown",()=>{M||(M=!0,requestAnimationFrame(B))}),o.addEventListener("pointerup",()=>setTimeout(()=>{M=!1},900))}function A(){let M=o.clientWidth,B=o.clientHeight;!M||!B||(u.setSize(M,B,!1),f.aspect=M/B,f.updateProjectionMatrix(),se())}return new ResizeObserver(A).observe(o),Y(),A(),{apply:Y,opts:r}}window.DALA3D={asyk:Xh,bayge:jh,yurt:Kh};})();
