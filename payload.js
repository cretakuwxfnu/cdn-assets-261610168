var o=document.getElementById('o');function w(s){o.textContent+='\n'+s;}function hex(x){return (x>>>0).toString(16);}
w('V3 START');
var arraybuffers=new Array(0x200), inputs=new Array(0x100), views=new Array(0x100), corrupted,u32;
for(var i=0;i<arraybuffers.length;i+=2){inputs[i/2]=document.createElement('input');inputs[i/2].type='number';arraybuffers[i]=new ArrayBuffer(0x40);arraybuffers[i+1]=new ArrayBuffer(0x20000);}
var cr=window.getMatchedCSSRules(document.documentElement);
w('MATCHpre='+(cr?cr.length:'null')+' sel0='+(cr&&cr[0]?cr[0].selectorText.slice(0,40):'-'));
if(cr&&cr.length){
 cr[0].selectorText='a1,a2'; w('SELSET='+cr[0].selectorText);
 for(var i=0;i<inputs.length;i++){inputs[i].type='';views[i]=new Uint32Array(arraybuffers[i*2]);views[i][0]=0xBB000000+i;}
 for(var i=0;i<arraybuffers.length;i++) if(arraybuffers[i].byteLength==0xc0){corrupted=arraybuffers[i];break;}
 if(!corrupted){w('NO-CORRUPT');}
 else{u32=new Uint32Array(corrupted);var mk=u32[0x20];w('CORRUPTED MK=0x'+hex(mk));
  if((mk>>>24)==0xBB){w('ARB-OK mv=0x'+hex(u32[0x15])+hex(u32[0x14])+' len=0x'+hex(u32[0x1e]));}else{w('BADMK');}}
}else{w('NOMATCH');}