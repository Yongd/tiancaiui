jQuery(document).ready(function($){var ssc_framerate=50;var ssc_animtime=400;var ssc_stepsize=120;var ssc_pulseAlgorithm=true;var ssc_pulseScale=6;var ssc_pulseNormalize=1;var ssc_keyboardsupport=true;var ssc_arrowscroll=60;var ssc_frame=false;var ssc_direction={x:0,y:0};var ssc_initdone=false;var ssc_fixedback=true;var ssc_root=document.documentElement;var ssc_activeElement;var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function ssc_init(){if(!document.body)return;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;ssc_root=(document.compatMode.indexOf('CSS')>=0)?html:body;ssc_activeElement=body;ssc_initdone=true;if(top!=self){ssc_frame=true;}
else if(scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){ssc_root.style.height="auto";if(ssc_root.offsetHeight<=windowHeight){var underlay=document.createElement("div");underlay.style.clear="both";body.appendChild(underlay);}}
if(!ssc_fixedback){body.style.backgroundAttachment="scroll";html.style.backgroundAttachment="scroll";}
if(ssc_keyboardsupport){ssc_addEvent("keydown",ssc_keydown);}}
var ssc_que=[];var ssc_pending=false;function ssc_scrollArray(elem,left,top,delay){delay||(delay=1000);ssc_directionCheck(left,top);ssc_que.push({x:left,y:top,lastX:(left<0)?0.99:-0.99,lastY:(top<0)?0.99:-0.99,start:+new Date});if(ssc_pending){return;}
var step=function(){var now=+new Date;var scrollX=0;var scrollY=0;for(var i=0;i<ssc_que.length;i++){var item=ssc_que[i];var elapsed=now-item.start;var finished=(elapsed>=ssc_animtime);var position=(finished)?1:elapsed/ssc_animtime;if(ssc_pulseAlgorithm){position=ssc_pulse(position);}
var x=(item.x*position-item.lastX)>>0;var y=(item.y*position-item.lastY)>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){ssc_que.splice(i,1);i--;}}
if(left){var lastLeft=elem.scrollLeft;elem.scrollLeft+=scrollX;if(scrollX&&elem.scrollLeft===lastLeft){left=0;}}
if(top){var lastTop=elem.scrollTop;elem.scrollTop+=scrollY;if(scrollY&&elem.scrollTop===lastTop){top=0;}}
if(!left&&!top){ssc_que=[];}
if(ssc_que.length){setTimeout(step,delay/ssc_framerate+1);}else{ssc_pending=false;}}
setTimeout(step,0);ssc_pending=true;}
function ssc_wheel(event){if(!ssc_initdone){ssc_init();}
var target=event.target;var overflowing=ssc_overflowingAncestor(target);if(!overflowing||event.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||(ssc_isNodeName(target,"embed")&&/\.pdf/i.test(target.src))){return true;}
var deltaX=event.wheelDeltaX||0;var deltaY=event.wheelDeltaY||0;if(!deltaX&&!deltaY){deltaY=event.wheelDelta||0;}
if(Math.abs(deltaX)>1.2){deltaX*=ssc_stepsize/120;}
if(Math.abs(deltaY)>1.2){deltaY*=ssc_stepsize/120;}
ssc_scrollArray(overflowing,-deltaX,-deltaY);event.preventDefault();}
function ssc_keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey;if(/input|textarea|embed/i.test(target.nodeName)||target.isContentEditable||event.defaultPrevented||modifier){return true;}
if(ssc_isNodeName(target,"button")&&event.keyCode===ssc_key.spacebar){return true;}
var shift,x=0,y=0;var elem=ssc_overflowingAncestor(ssc_activeElement);var clientHeight=elem.clientHeight;if(elem==document.body){clientHeight=window.innerHeight;}
switch(event.keyCode){case ssc_key.up:y=-ssc_arrowscroll;break;case ssc_key.down:y=ssc_arrowscroll;break;case ssc_key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case ssc_key.pageup:y=-clientHeight*0.9;break;case ssc_key.pagedown:y=clientHeight*0.9;break;case ssc_key.home:y=-elem.scrollTop;break;case ssc_key.end:var damt=elem.scrollHeight-elem.scrollTop-clientHeight;y=(damt>0)?damt+10:0;break;case ssc_key.left:x=-ssc_arrowscroll;break;case ssc_key.right:x=ssc_arrowscroll;break;default:return true;}
ssc_scrollArray(elem,x,y);event.preventDefault();}
function ssc_mousedown(event){ssc_activeElement=event.target;}
var ssc_cache={};setInterval(function(){ssc_cache={};},10*1000);var ssc_uniqueID=(function(){var i=0;return function(el){return el.ssc_uniqueID||(el.ssc_uniqueID=i++);};})();function ssc_setCache(elems,overflowing){for(var i=elems.length;i--;)
ssc_cache[ssc_uniqueID(elems[i])]=overflowing;return overflowing;}
function ssc_overflowingAncestor(el){var elems=[];var ssc_rootScrollHeight=ssc_root.scrollHeight;do{var cached=ssc_cache[ssc_uniqueID(el)];if(cached){return ssc_setCache(elems,cached);}
elems.push(el);if(ssc_rootScrollHeight===el.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<ssc_rootScrollHeight){return ssc_setCache(elems,document.body);}}else if(el.clientHeight+10<el.scrollHeight){overflow=getComputedStyle(el,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return ssc_setCache(elems,el);}}}while(el=el.parentNode);}
function ssc_addEvent(type,fn,bubble){window.addEventListener(type,fn,(bubble||false));}
function ssc_removeEvent(type,fn,bubble){window.removeEventListener(type,fn,(bubble||false));}
function ssc_isNodeName(el,tag){return el.nodeName.toLowerCase()===tag.toLowerCase();}
function ssc_directionCheck(x,y){x=(x>0)?1:-1;y=(y>0)?1:-1;if(ssc_direction.x!==x||ssc_direction.y!==y){ssc_direction.x=x;ssc_direction.y=y;ssc_que=[];}}
function ssc_pulse_(x){var val,start,expx;x=x*ssc_pulseScale;if(x<1){val=x-(1-Math.exp(-x));}else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+(expx*(1-start));}
return val*ssc_pulseNormalize;}
function ssc_pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(ssc_pulseNormalize==1){ssc_pulseNormalize/=ssc_pulse_(1);}
return ssc_pulse_(x);}
$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome){ssc_addEvent("mousedown",ssc_mousedown);ssc_addEvent("mousewheel",ssc_wheel);ssc_addEvent("load",ssc_init);}});