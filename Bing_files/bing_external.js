//<![CDATA[
si_ST=new Date
//]]>//<![CDATA[
sb_gh=function(){return location.hash},sb_sh=function(n){location.hash=n};function _ge(n){return _d.getElementById(n)}_w=window,_d=document,sb_de=_d.documentElement,sb_ie=!!_w.ActiveXObject,sb_i6=sb_ie&&!_w.XMLHttpRequest,sb_st=_w.setTimeout,sb_ct=_w.clearTimeout,sb_gt=function(){return+new Date};sj_evt=new function(){function i(n){return t[n]||(t[n]=[])}var t={},n=this;n.fire=function(n){for(var r=i(n),u=r.e=arguments,t=0;t<r.length;t++)r[t].d?sb_st(sj_wf(r[t],u),r[t].d):r[t](u)},n.bind=function(n,t,r,u){var f=i(n);t.d=u,f.push(t),r&&f.e&&t(f.e)},n.unbind=function(n,i){for(var u=0,r=t[n];r&&u<r.length;u++)if(r[u]==i){r.splice(u,1);break}}};_G={ST:(si_ST?si_ST:new Date),Mkt:"en-US",RTL:false,Ver:"9_00_0_2878447",IG:"daed9001b5744ec882b64efece7467d0",EventID:"6bbf1e6b61214f7388648883da9e8d63",V:"homepage",P:"SERP",DA:"CHGr2v2",SUIH:"XaPR5cNmR5rxlqP4h1LbyQ",gpUrl:"\/fd\/ls\/GLinkPing.aspx?"};_G.lsUrl="/fd/ls/l?IG="+_G.IG;curUrl="http:\/\/www.bing.com\/";function si_T(a){if(document.images){_G.GPImg=new Image;_G.GPImg.src=_G.gpUrl+'IG='+_G.IG+'&'+a;}return true;};function si_PP(n,t){var u,r,i;if(!_G.PPS){for(u='"',r=["PC","FC","BC","BS","H","FE","LE","C1","C2","BP","KP"],i=0;i<r.length;i++)u+=',"'+r[i]+'":'+(_G[r[i]+"T"]?_G[r[i]+"T"]-_G.ST:-1);_G.PPImg=new Image,_G.PPImg.src=_G.lsUrl+'&Type=Event.CPT&DATA={"pp":{"S":"'+(t?t:"L")+u+',"CT":'+(n-_G.ST)+',"IL":'+_d.images.length+(_w.sb_ppCPL?',"CP":1':"")+"}}"+(_G.P?"&P="+_G.P:"")+(_G.DA?"&DA="+_G.DA:""),_G.PPS=1,sb_st(function(){sj_evt.fire("onPP")},1)}}_w.onbeforeunload=function(){si_PP(new Date,"A")};
//]]>//<![CDATA[
function sj_wf(n){var t=arguments;return function(){n.apply(null,[].slice.apply(t).slice(1))}};function sj_be(n,t,i,r){if((n==_w||n==_d.body)&&t=="load"&&"undefined"!=typeof _d.readyState&&"complete"===_d.readyState){i();return}n.addEventListener?n.addEventListener(t,i,r):n.attachEvent?n.attachEvent("on"+t,i):n["on"+t]=i}function sj_ue(n,t,i,r){n.removeEventListener?n.removeEventListener(t,i,r):n.detachEvent?n.detachEvent("on"+t,i):n["on"+t]=null};function si_ct(n,t){var u="getAttribute",r,i,e;try{for(;n!==_d.body;n=n.parentNode){if(r=n.tagName=="A"&&n[u]("h")||n[u]("_ct"),r){i=n[u]("_ctf")||"si_T",_w[i]&&_w[i]("&"+r);break}if(t)break}}catch(f){}return!0}(function(){sj_be(_d,"mousedown",function(n){si_ct(sb_ie?event.srcElement:n.target)},0)})();function sf_fbPce(n){sj_evt.fire("xd:fba:proxyCheck",n)};function sj_ce(n,t,i){var r=_d.createElement(n);return t&&(r.id=t),i&&(r.className=i),r};function sj_gx(){return sb_i6?new ActiveXObject("MSXML2.XMLHTTP"):new XMLHttpRequest};function sj_pd(n){sb_ie?event.returnValue=!1:n.preventDefault()};function sj_go(n,t,i){for(var r=0;n.offsetParent&&n!=(i||sj_b);)r+=n["offset"+t],n=n.offsetParent;return r};function sj_we(n,t,i){while(n&&n!=(i||sj_b)){if(n==t)return!0;n=n.parentNode}return!1};_w.sched=_w.sched||function(){function f(n){i.push(n)}function e(n){return function(){_w.sched.schedule(n)}}function r(n){t.push(n)}function u(t,i){n[t]=i}var i=[],t=[],n={};return{register:f,wrapSchedule:e,schedule:r,reportCustomMetric:u,_ns:i,_reg:t,_cm:n}}();function sj_anim(n){var t=this,s,u,h,o,r,f,c,i,e;t.init=function(n,o,h,l,a){s=n,r=o,f=h,c=l,e=a,i||(i=r),u||t.start()},t.start=function(){h=sb_gt(),o=Math.abs(f-r-i)/c*25,u=setInterval(t.next,25)},t.stop=function(){clearInterval(u),u=0},t.next=function(){var u=sb_gt()-h;i=r+(f-r)*u/o,u>=o&&(t.stop(),i=f,e&&e()),n(s,i)}};function sj_so(n,t){n.style.filter=t>=100?"":"alpha(opacity="+t+")",n.style.opacity=t/100};function sj_fader(){return new sj_anim(function(n,t){sj_so(n,t)})};function sj_jb(n,t){function r(n,t,i,u){i&&sj_ue(i,u,r),sj_evt.bind("onP1",function(){if(!n.l){n.l=1;var i=sj_ce("script");i.src=(t?"/fd/sa/"+_G.Ver:"/sa/"+_G.AppVer)+"/"+n.n+".js",sj_b.appendChild(i)}},1,5)}for(var f=arguments,e,u,i=2,o={n:n};i<f.length;i+=2)e=f[i],u=f[i+1],sj_be(e,u,sj_wf(r,o,t,e,u));i<3&&r(o,t)};function sj_ev(n){return sb_ie?event:n}function sj_et(n){return sb_ie?event.srcElement:n.target}function sj_mi(n){return sb_ie?event.fromElement:n.relatedTarget}function sj_mo(n){return sb_ie?event.toElement:n.relatedTarget};function sj_sp(n){sb_ie?n.cancelBubble=!0:n.stopPropagation()};Log=new function(){function c(u,f,o,h,c){var p="",v,a,l;if(c)for(v=0;v<c.length;v+=2)a=c[v],l=c[v+1],(typeof a!="string"||a[e]('"')<0)&&(a='"'+a+'"'),typeof l=="string"&&l[e]("{")<0&&l[e]('"')<0&&(l='"'+l+'"'),p+=n(a+":"+l+",");p+='"T":"CI.'+u+'",'+(typeof f=="number"?'"K":'+f:'"FID":"'+f+'"')+',"Name":"'+o+'","TS":'+sb_gt(),y[s]+r[s]+p[s]>=2048&&t(),r+=(i?",":"")+n("{")+p+n("}"),i=1,h&&t()}function t(){f&&sb_ct(f),i&&(u.ping.src=v+y+r+n("]"),i=0,r=n("[")),f=sb_st(t,l)}var u=this,n=escape,s="length",e="indexOf",o="apply",l=2e3,r=n("["),i=0,a=0,f,v="",y=_G.lsUrl+"&TYPE=Event.ClientInst&DATA=",h=location.hostname.match(/([^.]+\.[^.]*)$/);h&&(v="http://a4."+h[0]),u.ping=new Image,u.Log=function(n,i,r,u){a||(c("Init","CI","Base",!1),f=sb_st(t,l),a=1,sj_be(_w,"beforeunload",t,!1)),c(n,i,r,u,[].slice.apply(arguments).slice(4))},u.Wrap=function(n,t,i,r){var u=n[t];n[t]=function(){var f=arguments,e,n,t;if(r&&i[o](this,f),e=u[o](this,f),!r){for(n=[],t=0;t<f.length;t++)n.push(f[t]);n.push(e),i[o](this,n)}return e}}};var sw_={insertShareToggle:function(n,t,i){var f,u,s,r,o,h,e;n!=null&&(f=_ge("sb_form_q"),f&&(u=f.parentNode,u&&(n.style.position="absolute",s=f.offsetWidth,r="px",n.style.right=u.offsetWidth-s+3+r,u.appendChild(n),o=t&&n.offsetWidth==0?t:n.offsetWidth,h=i&&n.offsetHeight==0?i:n.offsetHeight,n.style.top=(u.offsetHeight-h)/2+r,e=f.style,e.width=s-o-20+r,e.marginRight=o+6+r)))},isNarrow:function(){return sb_de.clientWidth<1140}};(function(){function i(){--r<1&&u.fire("onP1")}var r,n=0,u=sj_evt,t=[];for(_w.si_PP&&t.push("onPP");n<t.length;n++)u.bind(t[r=n],i,1);n||i()})();function lb(){function e(n){i=n[1],u.unbind(f,e)}var u=sj_evt,f="onSbBusy",i,n,r,t;for(u.bind(f,e,1),n=1;n<4;++n)r="sb_form"+(n>1?n:""),t=_ge(r),!t||i&&_ge(r+"_q")==i||!t.reset||t.reset();_w.si_sendCReq&&sb_st(si_sendCReq,800),_w.lbc&&lbc()}function init(){}(function(){var n=sj_evt,i="onSbBusy",t=null;n.bind(i,function(){sb_ct(t),t=sb_st(sj_wf(n.fire,"onSbIdle"),1100)}),sj_be(_d,"keydown",function(t){n.fire(i,sj_et(t))})})(),sj_evt.bind("onHTML",function(){var n=_ge("sb_form");n&&sj_be(n,"submit",sj_wf(sj_evt.fire,"onSearch",n))});
//]]>//<![CDATA[
function sj_ev(n){return sb_i8l?event:n}function sj_et(n){return sb_i8l?event.srcElement:n.target}function sj_mi(n){return sb_i8l?event.fromElement:n.relatedTarget}function sj_mo(n){return sb_i8l?event.toElement:n.relatedTarget}function sj_so(n,t){if(sb_i8l&&n.filters&&n.filters.item)try{n.filters.item("DXImageTransform.Microsoft.Alpha").opacity=t}catch(i){n.style.filter="alpha(opacity="+t+")"}n.style.opacity=t/100}function hp_pushparams(n){return _w.location.search.length>1&&n.push&&n.push(_w.location.search.substring(1)),n}function hp_defined(n){return typeof n!="undefined"}var sb_i9p=sb_ie&&typeof sb_de.style.opacity!="undefined",sb_i8l=sb_ie&&!sb_i9p;function hasQuery(n){return n.value.replace(/\s+/gi,"")!=""}function qs(n){if(_w.encodeURIComponent){var t=n.href.replace(/&amp;/g,"&"),i=encodeURIComponent(_ge("sb_form_q").value);n.href=t.indexOf("q=")!=-1?t.replace(new RegExp("q=[^&$]*"),"q="+i):t.indexOf("where1=")!=-1?t.replace(new RegExp("where1=[^&$]*"),"where1="+i):t+(t.indexOf("?")<0?"?":"&")+"q="+i}return 1}function selectScope(n,t){hasQuery(_ge("sb_form_q"))&&(n.href=_scopeUrls[t],qs(n))}_scopeUrls=[];
//]]>//<![CDATA[
var Bnp=Bnp||{};Bnp.Events=Bnp.Events||{Render:function(n){sj_evt.fire("onBnpRender",n)},Close:function(n){sj_evt.fire("onBnpClose",n)}};var Bnp=Bnp||{};Bnp.Common=Bnp.Common||function(){function n(n,t,i){var o,s,f,h;if(i){var r=sj_ev(i),u=sj_et(i),e=!1,c=r.ctrlKey||r.metaKey;c||("which"in r?e=r.which==1:"button"in r&&(e=r.button==0)),e&&(o=function(n){sj_pd(n),sj_ue(u,"click",o)},sj_be(u,"click",o)),s=u.href||u.parentNode&&u.parentNode.href,n==1&&s&&e&&sj_evt.bind("bnpLogComplete",function(n){n[1]==1&&n[2]==t&&_w.open(s,"_self")},1)}return typeof sj_gx!="undefined"&&(f=sj_gx(),h="/notifications/handle?action="+n+"&nid="+t,f.open("GET",h,!0),f.onreadystatechange=function(){f.readyState==4&&sj_evt.fire("bnpLogComplete",n,t)},f.send()),!0}function t(t,i){n(1,t,i)}function i(t,i){if(i){var r=_ge("bnp.nid."+t);r&&(r.style.display="none")}n(2,t)}function r(t){n(3,t)}return{Click:t,Close:i,RecordImpression:r}}();var Bnp=Bnp||{};Bnp.Embed=Bnp.Embed||function(){function i(i){i.initE?t(i.initE,function(){n(i)}):n(i)}function t(n,t){for(var r,i=0,u=n.length;i<u;i++)r=n[i],sj_evt.unbind(r,t),sj_evt.bind(r,t,1)}function n(n){var i=_ge(n.vid),t=_ge(n.tar.substring(1));if(t&&i){if(n.clear)while(t.hasChildNodes())t.removeChild(t.lastChild);n.first?t.insertBefore(i,t.firstChild):t.appendChild(i),sj_evt.fire("bnp.embed.ready"),n.isFromCachedImpression&&Bnp.Common.RecordImpression(n.id)}}return{Show:i}}();var _w = _w || {};_w.upsellBubble ={"notificationId":"9000","embeddedContainerId":"bnp.nid.9000","hasTou":true};;var ClassUtil=ClassUtil||function(){function n(n,t){if(n&&n.className){var i=" "+n.className+" ";return i.indexOf(" "+t+" ")!==-1}return!1}function t(t,i){t&&!n(t,i)&&(t.className+=" "+i)}function i(t,i){if(n(t,i)){var r=new RegExp("(\\s|^)"+i+"(\\s|$)","g");t.className=t.className.replace(r," ")}}return{addClass:t,removeClass:i}}();var _anim=function(n,t,i,r,u,f,e,o){var a="ease-in",v="ease-in-out",y="ease",s=function(n){return typeof n!="undefined"},h=function(){var n=function(n,t,i,r,u){var f=t/i;return r+u*f*f*f},t=function(n,t,i,r,u){var f=t/i-1;return r+u*(f*f*f+1)},i=function(n,t,i,r,u){var f=t/(i/2);return f<1?r+u/2*f*f*f:(f-=2,r+u/2*(f*f*f+2))};return{In:{css3TransitionName:a,fallbackScript:n},Out:{css3TransitionName:v,fallbackScript:i},InOut:{css3TransitionName:y,fallbackScript:t}}}(),l=function(u,f,o,l,a){var st=a.unit||"",d=a.duration||500,v=d,bt="string",wt="transition",b="Transition",ft="End",w=a.easing||h.InOut,p=wt,ot,et,ut=typeof f===bt&&f,yt=typeof f=="function"&&f,nt=u.style,rt,it,tt,y,k,g=ut&&ut.replace(/-(\w)/g,function(n,t){return t.toUpperCase()}),kt=function(){at(),ht(1),rt&&rt()},ht=function(i){var r=i?t:n;r(u,et,kt)},ct=function(n){it=n,g?nt[g]=n+st:yt&&yt(u,n)},lt=function(){var n;if(!g||!w.css3TransitionName)return!1;var u=i||r,f=u.style,e="ms "+w.css3TransitionName+" 0s",t=["ms","Webkit","O"],o=["MS"+b+ft,"webkit"+b+ft,"o"+b+ft];for(n=0;n<t.length;n++)if(p=t[n]+b,s(f[p]))return ot=ut+" "+v+e,et=o[n],!0;return!1},at=function(){nt[p]=""},dt=function(){nt[p]=ot},vt=function(n,t){rt=n,dt(),ht(),c(function(){nt[g]=t+st},1)},pt=function(){function h(u,s){f!==s&&(t&&it?(v=e()-i,y=it,k=s===n?l:o):(v=d,s===n?(y=o,k=l):(y=l,k=o)),tt=k-y,f=s,r=u,i=e(),c(a,5),t=!0)}function a(){var n=e()-i;n>=v?(ct(w.fallbackScript(u,v,v,y,tt)),t=!1,r&&r()):(ct(w.fallbackScript(u,n,v,y,tt)),c(a,5))}var n=1,p=2,f=0,t=!1,i,r;return{start:function(t){h(t,n)},revert:function(n){h(n,p)},updateDur:function(n){s(n)&&(v=d=n)}}},gt={start:function(n){vt(n,l)},revert:function(n){vt(n,o)},updateDur:function(n){at(),s(n)&&(v=d=n),lt()}};return lt()?gt:pt()},c=function(){return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||_w.oRequestAnimationFrame||_w.msRequestAnimationFrame||function(n){f(n,16.7)}}(),p=function(n,t,i,f,e){function a(t){n&&n.style&&(n.style.visibility=t?"hidden":"visible")}var p=o&&!s(r.style.opacity)?function(n,t){u(n,t*100)}:"opacity",v=s(f)&&f||0,y=s(e)&&e||1,w=s(i)&&i||s(t)&&t,c=l(n,p,v,y,{duration:t,ease:h.In});return{up:function(n){v===0&&a(!1),c.updateDur(t),c.start(function(){y===0&&a(!0),n&&n()})},down:function(n){y===0&&a(!1),c.updateDur(w),c.revert(function(){v===0&&a(!0),n&&n()})},updateDur:c.updateDur}};return{animE:l,fadeE:p,ease:h}}(sj_be,sj_ue,sj_b,sb_de,sj_so,sb_st,sb_gt,sb_ie);(function(n,t,i,r,u){function st(){ut(),u(f,93),g(),it(),rt(),ot()}function o(){var o=y.offsetWidth==0?ht:y.offsetWidth,e,r,n,u,l,t,i,a;p||(h=ft-o,p=!0),r=vt(),e=r>1115&&r<=1366?r:c.offsetWidth,n=f.style,parseFloat(n.paddingLeft)?(l=f.offsetWidth==0?w:f.offsetWidth,u=l-parseFloat(n.paddingLeft)):u=f.offsetWidth==0?w:f.offsetWidth,t=e-u-55,i=h>=t?t:h,n.width=u+i-20+"px",y.style.width=o+i+"px",t-=i,h-=i,n.paddingLeft=t>0?t+55+"px":"55px",a=c.offsetHeight-v.offsetHeight,n.top=a-s+"px"}function ot(){if(sj_be(_w,"resize",o),sj_be(_w,"scroll",o),e.hasTou){var n=_ge("upsellmore");n&&sj_be(n,"click",at)}}function et(){sj_ue(_w,"resize",o),sj_ue(_w,"scroll",o)}function at(){var n,t;d||(n=_ge("tou"),n&&(i.removeClass(n,"b_hide"),t=_ge("upsellmore"),t&&i.addClass(t,"b_hide"),f.style.height="auto",s=f.offsetHeight,o(),d=!0))}function ut(){var n=_ge("hp_tbar");n&&i.addClass(n,"b_hide")}function g(){var r=_ge("upsellCloseIcon"),n,t,i;r&&sj_be(r,"click",function(){a(),Bnp.Common.Close(e.notificationId)}),n=_ge("noti_cta"),n&&sj_be(n,"click",function(){a(),Bnp.Common.Click(e.notificationId)}),t=_ge("noti_join"),t&&sj_be(t,"click",function(){a(),Bnp.Common.Click(e.notificationId)}),i=_ge("noti_login"),i&&sj_be(i,"click",function(){a(),Bnp.Common.Click(e.notificationId)})}function it(){var n=c.offsetHeight-v.offsetHeight;f.style.height=s+"px",b=_anim.animE(f,nt,n,n-s,{duration:300,unit:"px"}),k=_anim.animE(f,tt,0,s,{duration:300,unit:"px"})}function nt(n,t){n.style.top=t+"px"}function tt(n,t){n.style.height=t+"px"}function rt(){i.removeClass(l,"b_hide"),o(),b.start(),k.start()}function a(){i.addClass(l,"b_hide"),_d&&_d.documentMode&&_d.documentMode=="7"&&(l.style.display="none"),et()}function vt(){var n;return _w.innerWidth?n=_w.innerWidth:_d.documentElement&&_d.documentElement.clientWidth?n=_d.documentElement.clientWidth:_d.body&&(n=_d.body.clientWidth),n}var lt="sb_foot",ct="hp_container";if(_w&&_w.upsellBubble){var e=_w.upsellBubble,l=_ge(e.embeddedContainerId),f=_ge("UpsellBubble"),v=_ge(lt),c=_ge(ct);if(l&&f&&v&&c){var b,k,s=e.hasTou?186:155,d=!1,y=_ge("cta"),ft=e.hasTou?635:405,h,p=!1,ht=e.hasTou?494:265,w=1060;n.bind("onP1",st,1,100)}}})(sj_evt,sj_be,ClassUtil,sj_go,sj_so);(function () {var n = {"vid":"bnp.nid.9000","tar":"#hp_container","clear":false,"first":false,"isFromCachedImpression":false,"id":"9000"};Bnp.Embed.Show(n);})();;
//]]>//<![CDATA[
_G.PCT=new Date
//]]>//<![CDATA[
_G.BCT=new Date
//]]>//<![CDATA[
sj_b=_d.body;var wlc_d = 1500,wlc_t = 63536891592;;
//]]>//<![CDATA[
_G.AppVer="8_01_1_2921113";var g_vidOn=1;var g_hasVid=0;var g_hasTb=1;var g_HPRMSAOL = 0;var g_IMVL = 0;var g_NPLE = 0;var g_hptse = 1;;
//]]>//<![CDATA[
_G.BST=new Date
//]]>//<![CDATA[
sj_cook=new function(){var n=this;n.get=function(n,t){var i=_d.cookie.match(new RegExp("\\b"+n+"=[^;]+")),r;return t&&i?(r=i[0].match(new RegExp("\\b"+t+"=([^&]*)")),r?r[1]:null):i?i[0]:null},n.set=function(t,i,r,u,f,e){var c,l=i+"="+r,h=n.get(t),o,s,a;h?(o=n.get(t,i),c=o?h.replace(i+"="+o,l):h+"&"+l):c=t+"="+l,s=location.hostname.match(/([^.]+\.[^.]*)$/),a=e&&e>0?e*6e4:63072e6,_d.cookie=c+(s?";domain="+s[0]:"")+(u?";expires="+new Date(+new Date+Math.min(a,63072e6)).toGMTString():"")+(f?";path="+f:"")}};var Identity=Identity||{};(function(n,t,i,r,u,f,e,o,s,h){s.fbProfile=function(){var e="FBS",f=n(e,"N"),u=n(e,"FN"),r=n(e,"I"),i=n(e,"IB"),o;return f?(f=t(f),u&&(u=t(u)),r&&(r=t(r)),i&&(i=t(i)),o="/fd/s/a/anon.png",r||(r=o),i||(i=o),u||(u=f),{displayName:f,name:u,img:r,imgL:i,idp:"FB"}):null},s.wlProfile=function(){var u="WLS",r=n(u,"N"),i=n(u,"C");return r&&i&&s.wlImgSm&&s.wlImgLg?{displayName:t(r),name:t(r),img:s.wlImgSm.replace(/\{0\}/g,o(i)),imgL:s.wlImgLg.replace(/\{0\}/g,o(i)),idp:"WL"}:null},s.headerLoginMode=0,s.popupAuthenticate=function(n,t,r){var e,h,u,f;return(e=s.popupLoginUrls)&&(h=e[n]+(t?"&perms="+o(t):"")+(r?"&src="+o(r):""))&&(u=s.pop(h))&&(f=setInterval(function(){u.closed&&(i.fire("id:popup:close"),clearInterval(f))},100))},s.pop=function(n){return f.open(n,"idl","location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=no,toolbar=no,width=1000,height=620")};var y=0,c=e("id_h"),a=e("id_d"),p=e("id_l"),w=e("hp_sw_hdr"),k=e("id_la"),b="click",l="px",v=function(){if(c&&a)if(w)a.style.top=y+w.clientHeight+l;else{var n=_d.body.clientWidth-c.clientWidth;h?c.style.right=n+l:c.style.left=n+l,h?a.style.right=n+5+l:a.style.left=n+5+l,a.style.top=y+85+l}};i.bind("onP1",function(){setTimeout(function(){c&&p&&(u("FdNetIdentityDropdown_c",1,c,"mouseover",p,b,k,"focus"),r(p,b,function(n){s.hdrClk=n})),r(f,"resize",v),r(f,"scroll",v),i.bind("sw_width:top_changed",function(n){y=n[1],v()},1),c.style.display="block",v()},50)})})(sj_cook.get,decodeURIComponent,sj_evt,sj_be,sj_jb,_w,_ge,encodeURIComponent,Identity,_G.RTL);sj_evt.bind("onHTML",function(){var n=sj_gx(),i="web",r=_ge("sw_meFlt"),t;r&&(i=r.getAttribute("_V")),t="url="+escape(document.URL)+"&V="+i,n.open("POST","/rewardsapp/reportActivity",!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("Content-length",t.length),n.setRequestHeader("Connection","close"),n.onreadystatechange=function(){n.readyState==4&&n.status==200&&eval(n.responseText)},n.send(t)},!0,0);sj_cook.set('_SS', 'C', 20, false, '/');;(function(){if(sj_evt&&Identity){var n=function(){var r=_ge("id_n"),n=_ge("id_p"),u=_ge("id_s"),i,t,e,f;r&&u&&((i=Identity.fbProfile())||(i=Identity.wlProfile())||(i=Identity.twProfile()))?(t=i.displayName,e=i.img,n&&(n.title=t,n.src=e,n.style.display="inline"),t.length>10&&(t=t.substring(0,10).replace(/\s+$/,"")+"��"),r.textContent=t,r.innerText=t,r.style.display="inline",u.style.display="none",i.idp=="WL"&&(f="url(/fd/s/a/anon.png)",n&&(n.style.backgroundImage=f))):r&&u&&(r.style.display="none",n&&(n.style.display="none"),u.style.display="inline")};sj_evt.bind("fb:connected",n,1),sj_evt.bind("wl:auth",n,1),sj_evt.bind("fb:auth",n,1)}})();var Identity = Identity || {};(function(i){i.twProfile = function (){return null;};i.wlImgSm = "http\x3a\x2f\x2fcid-\x7b0\x7d.users.storage.live.com\x2fusers\x2f0x\x7b0\x7d\x2fmyprofile\x2fexpressionprofile\x2fprofilephoto\x3aUserTileStatic\x2fp\x3fck\x3d1\x26ex\x3d720\x26fofoff\x3d1\x26sid\x3dCA6781A8300D407EA65E713AF5E4951A";i.wlImgLg = "http\x3a\x2f\x2fcid-\x7b0\x7d.users.storage.live.com\x2fusers\x2f0x\x7b0\x7d\x2fmyprofile\x2fexpressionprofile\x2fprofilephoto\x3aUserTileMedium\x2fp\x3fck\x3d1\x26ex\x3d720\x26fofoff\x3d1\x26sid\x3dCA6781A8300D407EA65E713AF5E4951A";i.popupLoginUrls ={"WindowsLiveId":"https\x3a\x2f\x2flogin.live.com\x2flogin.srf\x3fwa\x3dwsignin1.0\x26rpsnv\x3d12\x26ct\x3d1401294792\x26rver\x3d6.0.5286.0\x26wp\x3dMBI\x26wreply\x3dhttps\x3a\x252F\x252Fssl.bing.com\x252Fsecure\x252FPassport.aspx\x253Fpopup\x253D1\x26lc\x3d1033\x26id\x3d264960","Facebook":"http\x3a\x2f\x2fwww.bing.com\x2ffd\x2fauth\x2fsignin\x3faction\x3dinteractive\x26provider\x3dfacebook\x26sig\x3dCA6781A8300D407EA65E713AF5E4951A\x26return_url\x3dhttp\x253a\x252f\x252fwww.bing.com\x252f\x26cancel_url\x3dhttp\x253a\x252f\x252fwww.bing.com\x252f"};})(Identity);;(function(n,t){if(t){var r=!1,i=function(){!r&&(r=!0)&&sj_jb("WindowsLiveConnect_c",1)};n.bind("onP1",function(){var r=setTimeout(i,t);n.bind("fb:connecting",function(){clearTimeout(r),n.bind("fb:connected",i,1)},1)},1)}})(sj_evt,wlc_d);sf_fbCfg={sId:"6",wt:100};sj_evt.bind("xd:fba:checkbar",function(n){var t,i;n&&n.length>=2&&(t=sj_ce("iframe"),t.id="sw_tfbbi",i=_ge("sw_tfbb"),i&&(t.height="0",t.scrolling=t.frameBorder="no",t.src="/fd/fb/b?fv="+_G.Ver+"#"+n[1],i.appendChild(t)))});sj_evt.bind("onP1",function(){var n=sj_ce("iframe");n.height=n.width=0,n.frameBorder=n.scrolling="no",sj_b.appendChild(n),n.src="/fd/fb/r?v="+_G.Ver+"&sId="+sf_fbCfg.sId+(/&testhooks=1/.test(location.search)?"&testhooks=1":""),_w.logfb&&logfb("rr",+new Date)},1,_w.sf_fbCfg&&sf_fbCfg.wt?sf_fbCfg.wt:100);function sj_ic(n){var t=sj_ce("style");_d.getElementsByTagName("head")[0].appendChild(t),t.textContent!==undefined?t.textContent=n:t.styleSheet.cssText=n};_w.RmsLoaderConfig={name:"rmsloaderdelayed"};(function(){_w.rms=_w.rms||function(){var t=[],n=[],u=function(){return t.push(arguments),_w.rms},r=function(){return n.push(arguments),_w.rms},i=function(){var n=sj_ce("script");n.src="/fd/sa/"+_G.Ver+"/"+_w.RmsLoaderConfig.name+".js",sj_b.appendChild(n)};return{onload:u,js:r,start:i,onloadargs:t,jsargs:n}}()})();sj_evt.bind("onP1",function(){_w.rms.start()},1,50);sj_evt.fire("onHTML");
//]]>//<![CDATA[
var _anim=function(n,t,i,r,u,f,e,o){var a="ease-in",v="ease-in-out",y="ease",s=function(n){return typeof n!="undefined"},h=function(){var n=function(n,t,i,r,u){var f=t/i;return r+u*f*f*f},t=function(n,t,i,r,u){var f=t/i-1;return r+u*(f*f*f+1)},i=function(n,t,i,r,u){var f=t/(i/2);return f<1?r+u/2*f*f*f:(f-=2,r+u/2*(f*f*f+2))};return{In:{css3TransitionName:a,fallbackScript:n},Out:{css3TransitionName:v,fallbackScript:i},InOut:{css3TransitionName:y,fallbackScript:t}}}(),l=function(u,f,o,l,a){var st=a.unit||"",d=a.duration||500,v=d,bt="string",wt="transition",b="Transition",ft="End",w=a.easing||h.InOut,p=wt,ot,et,ut=typeof f===bt&&f,yt=typeof f=="function"&&f,nt=u.style,rt,it,tt,y,k,g=ut&&ut.replace(/-(\w)/g,function(n,t){return t.toUpperCase()}),kt=function(){at(),ht(1),rt&&rt()},ht=function(i){var r=i?t:n;r(u,et,kt)},ct=function(n){it=n,g?nt[g]=n+st:yt&&yt(u,n)},lt=function(){var n;if(!g||!w.css3TransitionName)return!1;var u=i||r,f=u.style,e="ms "+w.css3TransitionName+" 0s",t=["ms","Webkit","O"],o=["MS"+b+ft,"webkit"+b+ft,"o"+b+ft];for(n=0;n<t.length;n++)if(p=t[n]+b,s(f[p]))return ot=ut+" "+v+e,et=o[n],!0;return!1},at=function(){nt[p]=""},dt=function(){nt[p]=ot},vt=function(n,t){rt=n,dt(),ht(),c(function(){nt[g]=t+st},1)},pt=function(){function h(u,s){f!==s&&(t&&it?(v=e()-i,y=it,k=s===n?l:o):(v=d,s===n?(y=o,k=l):(y=l,k=o)),tt=k-y,f=s,r=u,i=e(),c(a,5),t=!0)}function a(){var n=e()-i;n>=v?(ct(w.fallbackScript(u,v,v,y,tt)),t=!1,r&&r()):(ct(w.fallbackScript(u,n,v,y,tt)),c(a,5))}var n=1,p=2,f=0,t=!1,i,r;return{start:function(t){h(t,n)},revert:function(n){h(n,p)},updateDur:function(n){s(n)&&(v=d=n)}}},gt={start:function(n){vt(n,l)},revert:function(n){vt(n,o)},updateDur:function(n){at(),s(n)&&(v=d=n),lt()}};return lt()?gt:pt()},c=function(){return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||_w.oRequestAnimationFrame||_w.msRequestAnimationFrame||function(n){f(n,16.7)}}(),p=function(n,t,i,f,e){function a(t){n&&n.style&&(n.style.visibility=t?"hidden":"visible")}var p=o&&!s(r.style.opacity)?function(n,t){u(n,t*100)}:"opacity",v=s(f)&&f||0,y=s(e)&&e||1,w=s(i)&&i||s(t)&&t,c=l(n,p,v,y,{duration:t,ease:h.In});return{up:function(n){v===0&&a(!1),c.updateDur(t),c.start(function(){y===0&&a(!0),n&&n()})},down:function(n){y===0&&a(!1),c.updateDur(w),c.revert(function(){v===0&&a(!0),n&&n()})},updateDur:c.updateDur}};return{animE:l,fadeE:p,ease:h}}(sj_be,sj_ue,sj_b,sb_de,sj_so,sb_st,sb_gt,sb_ie);(function(n,t,i){function f(){!u.end&&s===h&&s>0&&i(b,0)}function o(n){if(n&&n.length)return r[n]||(r[n]={start:0,end:0,actual:0,done:0},s++),r[n]}function y(){var t=[],n;for(n in r)r.hasOwnProperty(n)&&(t.push(n),u.actual+=r[n].actual);return t.sort(function(n,t){return r[t].actual-r[n].actual}),t}function p(){var f=[],e=0,t=y(),i,n,u;if(t.length>0)do if(i=t.shift(),n=r[i],!(n.start<_G.ST)){if(u='"'+i+'":{"S":'+(n.start-_G.ST)+',"E":'+(n.end-_G.ST)+',"T":'+n.actual+"}",e+=u.length+1,e>=v)break;f.push(u)}while(t.length>0);return f.join(",")}function w(){function r(n){return n=n.toString().replace(/\"/g,"'"),'"'+n+'"'}var i=[],t,n;for(t in e)e.hasOwnProperty(t)&&(n=e[t],typeof n!="number"&&(n=r(n)),i.push(r(t)+":"+n));return i.join(",")}function b(){u.end||(u.end=new Date,(new Image).src=_G.lsUrl+'&Type=Event.PPT&DATA={"S":'+(u.start-_G.ST)+',"E":'+(u.end-_G.ST)+',"T":'+u.actual+',"I":'+u.numInvalid+',"N":{'+p()+'},"M":{'+w()+"}}"+(_G.P?"&P="+_G.P:"")+(_G.DA?"&DA="+_G.DA:""))}function k(n){var t=r[n];t&&!t.done&&(t.done=1,h++,f())}function l(n){var r=n.task;if(r){var u=r,t=n.ns,f=n.delay||0;if(t&&t.length>0){c(t);function e(){var i=new Date,n;r(),n=new Date,a(t,i,n)}u=e}f>0?i(u,f):u()}}function a(n,t,i){var r,e;(f(),r=o(n),r)&&(e=i-t,(e<0||i<r.end||r.start&&t<r.start)&&++u.numInvalid,r.actual+=e,r.start||(r.start=t),r.end=i)}function c(n){f(),o(n)}function d(n,t){f(),e[n]=t}var u={start:new Date,end:0,actual:0,numInvalid:0},r={},s=0,h=0,e=t._cm||{},v=600;n("onP1",function(){var r,i,n;for(t.register=c,t.schedule=l,t.complete=k,t.recordTimings=a,t.reportCustomMetric=d,i=t._ns||[];r=i.shift();)o(r);for(n=t._reg||[];n.length>0;)l(n.shift());f()},1)})(sj_evt.bind,sched,sb_st);(function(){var n=_ge("sb_form_q"),t=function(t){var i=t.keyCode,r,u;(i===32||i>47&&i<91||i>95&&i<106||i>185&&i<223)&&n&&("createTextRange"in n?_d.activeElement!==n&&(r=n.createTextRange(),r.collapse(!1),r.select(),n.focus()):"getSelection"in _w&&(r=_w.getSelection(),r.rangeCount===0&&(u=_d.createRange(),u.selectNode(n),r.addRange(u),r.collapse(n,0)),n.focus()))};sj_be(_d,"keydown",t)})();function sc_bgL(){function l(){function k(){var t="hp_orientation",n=_ge("hp_container");a=n&&n.className.indexOf(t)!=-1}function p(){f(o,p),y||(sb_ct(l),f(r,w),i(s,v))}function v(){i(r,w,1),f(s,v),i(o,p)}function w(i){function r(){a||(t.style.backgroundImage="url('"+u.src+"')",sb_i8l&&(t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+u.src+"', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=0);"),t.className+=" sw_imLd",e("onBgSet"))}y=1,u.onerror=u.onload=null,i[2]>n.d?(sj_so(t,0),r(),l=sb_st(sj_wf(_anim.fadeE(t).up,sc_fadeCb),h)):(r(),sj_so(t,100),sc_fadeCb()),sj_cook.set(n.cN,n.crN,n.hash,0,"/")}var u=new Image,y=0,c=0,l,a=k(),b;i("onSearch",function(){n.x=!0,u=null,sb_ct(l)}),v(),u.onload=function(){c=sb_gt()-b,e(r,u,c)},typeof g_rbBypass!="undefined"&&g_rbBypass&&(u.onerror=function(){e(r,u,c)}),b=sb_gt(),a||(u.src=n.url)}var n=g_img,t=_ge(n.id),u=sj_evt,i=u.bind,f=u.unbind,e=u.fire,r="onBgLoad",o="onSbBusy",s="onSbIdle",h=typeof n.del!="undefined"?n.del:500,c=_w.sched;_w.g_hptse&&c?c.schedule({ns:"H",task:l}):i("onP1",l,1,h)}function hpResize(n,t,i,r){function h(){var r,h;if(b){f&&w&&f.getAttribute(k)==null&&sj_evt.fire("onDeviceOrientationInit");return}var n=f.getBoundingClientRect(),t=Math.min(Math.round(n.right-n.left),s),i=Math.min(Math.round(n.bottom-n.top),o);t/s>i/o?(r=Math.ceil(o*t/s),u[a]=t+e,u[v]=r+e,u[y]=(i-r)/2+e,u[c]=0):(h=Math.ceil(s*i/o),u[v]=i+e,u[a]=h+e,u[y]=0,u[c]=(t-h)/2+e)}var v="height",a="width",l="resize",p="unload",e="px",y="top",c="left",s=i||1366,o=r||768,u=n&&n.style,f=t||_ge("hp_container"),w=_ge("bgDiv"),b=f&&f.className.indexOf("hp_orientation")!=-1,k="data-orientationinit";f&&u&&(h(),sj_be(_w,l,h),sj_be(_w,p,sj_wf(sj_ue,_w,l,h)))}sc_fadeCb=function(){},function(n){function t(){_w.g_img&&g_img.cN&&(typeof g_rbBypass=="undefined"||!g_rbBypass)||sj_evt.fire("onBgSet")}_w.g_hptse&&n?n.schedule({ns:"H",task:t}):sj_evt.bind("onP1",t,1)}(_w.sched);(function(){sb_ie&&sj_evt.bind("onP1",function(){sj_jb("UpdateDefaults",0)},1,50)})();(function() {var events = 0;sj_evt.bind("onBgSet", WaitEvent, 1, 0);sj_evt.bind("onP1", function() { sj_jb("notifications", 0) }, 1, 0);sj_evt.bind("OnBnpLoaded", WaitEvent, 1, 0);function WaitEvent(){if (++events == 2) SendRequest()}function SendRequest(){if (typeof Bnp === 'undefined') return;if (Bnp.Global){Bnp.Global.RawRequestURL = "/";Bnp.Global.Referer = "http://www.bing.com/account/general?ru=http%3a%2f%2fwww.bing.com%2f&amp;FORM=SEFD";}var request = new Bnp.Partner.Request("HomePage");request.IID = "SERP.2000";request.Submit();}})();;(function(){function n(){var n="SRCHHPGUSR",i=sj_cook.get(n,"CW"),t;i&&i==sj_b.clientWidth||sj_cook.set(n,"CW",sb_de.clientWidth||sj_b.clientWidth,1,"/"),t=sj_cook.get(n,"CH"),t&&t==sb_de.clientHeight||sj_cook.set(n,"CH",sb_de.clientHeight,1,"/")}sj_be(_w,"load",n),sj_be(_w,"resize",n)})();hpResize(_ge('vid'));;g_img={url:'/az/hprichbg/rb/PrintingPressLetters_EN-US12734362114_1366x768.jpg'};fadeComplete();;var g_hot={1:{0:"These letters were once the height of communications technology...",1:"The internet of their time"},2:{0:"A fierce competition rages in Washington, D.C., this week.",1:"Children are going head-to-head in ruthless combat"},3:{0:"Have you made a copy recently, or printed a document at work?",1:"Think about how easy that was, then watch this"},4:{0:"The Chinese had a system for printing with movable type by 1040 A.D., but to most Westerners...",1:"One name is synonymous with the process"}};;function fadeComplete(){var i,u,t,r,n;_G.KPT=new Date,i=_w.g_HPRMSAOL,_ge("sc_hs1")&&(i||(g_NPLE++,sj_jb("homepageHotspotsLarge_c"))),u=_ge("sw_filt"),u||(t=_ge("sb_sl"),r=_ge("sb_form"),t&&r&&(t.style.width=r.offsetWidth+"px",t.style.display="block")),n="",_ge("hp_pgbar")?n="HpProgrambar":g_hasTb&&(n="HpModules"),n&&(g_NPLE++,i||(_G&&_G.RTL===!0&&(n+="_rtl"),sj_jb(n))),g_NPLE||sj_evt.fire("onRBComplete")}sc_fadeCb=fadeComplete,function(){var f=1085,i=1366,e=16,r="px",u=_ge("sw_footL"),t=_ge("hp_container"),n;u&&t&&(n=u.offsetWidth+e,n>i&&(n=i),n>f&&(t.style.minWidth=n+r,sj_b.clientWidth>sj_b.clientHeight&&(!_w.navigator.userAgent.match(/iPad/)||(t.style.minHeight=parseInt(n*_d.body.offsetHeight/_d.body.offsetWidth)+r))))}();sa_config={"u":"%2fAS%2fSuggestions%3fpt%3dPage.Home%26qry%3d","mkt":"en-US","f":"sb_form","i":"sb_form_q","c":"sw_as","sid":"CA6781A8300D407EA65E713AF5E4951A","asf":1,"ePN":1,"t":1,"ol":1,"eHS":1,"eHC":1,"d":100,"SCT":1500,"SBW":811};sa_loc={"PE":"See Bing results for"};;sa_loader=function(){_w.rms.js({'rms:answers:AutoSuggest:AutoSugPreviewBlue':'\/s\/as\/0925133342\/AutoSuggest\/AutoSugSnRBluePP.js',d:1});};;var sa_eL=!1,sj_evas,sj_etas,_iframeWindow;if(function(){function e(t,i,r,f){t&&sj_ue(t,i,e),sa_eL=sa_eL||n.eAI?r&&f.keyCode!==27:r,u||(u=!0,sa_loader())}function r(n,t,i){sj_be(n,t,function(r){e(n,t,i,sj_ev(r))})}var f=_ge("sa_qs"),n,t,i,u;f.value="bs",n=sa_config,t=_ge(n.i),t.setAttribute("autocomplete","off"),i=_ge(n.c),i||(i=sj_ce("div"),i.id=n.c,f.parentNode.appendChild(i)),u=!1,r(t,"click",!0),r(t,"keydown",!0),n.eAI&&r(t,"keyup",!0),n.ol&&r(_w,"load")}(),sj_evas=sj_ev,sj_etas=sj_et,sa_config.ic&&sb_ie){function getIframeWindow(){return _iframeWindow||(_iframeWindow=_ge("sa_con").contentWindow),_iframeWindow}sj_evas=function(){return getIframeWindow().event},sj_etas=function(){var n=getIframeWindow().event;return n?n.srcElement:null}};var _scopeRef = new Array();_scopeUrls['images']='/images/search?q=&amp;FORM=BILH1';_scopeRef['images']='0';_scopeUrls['video']='/videos/search?q=&amp;FORM=BVLH1';_scopeRef['video']='1';_scopeUrls['local']='/maps/default.aspx?q=&amp;mkt=en&amp;FORM=BYLH1';_scopeRef['local']='2';_scopeUrls['news']='/news/search?q=&amp;FORM=BNLH1';_scopeRef['news']='3';_scopeUrls['history']='/profile/history?FORM=ZZLH1';_scopeRef['history']='4';_scopeUrls['seeall']='/explore?q=&amp;FORM=BXLH1';_scopeRef['seeall']='5';var _scpIID = 'SERP.1000';;
//]]>//<![CDATA[
var hpl={ref:{FORM:'HPFBLK',ssd:'20140528_0700',mkt:'en-US'},dt:false,sl:true};;_w.g_vidOn && !_w.g_hasVid ? sj_jb("HPImgVidViewer_c") : sj_jb("homepageImgViewer_c");;var g_prefetch ={};var hpWall=new function(){function n(){if(hpWall.hash){var n="/hpwp/"+hpWall.hash,t=hp_pushparams([]);t.length&&(n+="?"+t.join("&")),_w.location.href=n}}var t="wpb",i="_UR",r="DWP",u="1";this.enabled=!0,this.hash=null,this.bEnabled=!0,this.tB=function(n){var i=_ge(t);i&&(i.style.display=n===!0?"block":"none")},this.dL=function(){var f,e;hpWall.enabled&&(f=sj_cook.get(i,r)==u,f?n():(e=_ge(t),hpWall.bEnabled&&e&&hpWall.tB(!0)))},this.dLB=function(){hpWall.tB(!1),sj_cook.set(i,r,u),n()},this.dLFree=function(){n()},sj_evt&&sj_evt.bind&&(sj_evt.bind("hpwpd",function(){var n=_ge("sh_igw");n&&n.click&&(si_ct&&si_ct(n),n.click(n))},1),sj_evt.bind("onBnpRender",function(n){n&&n.length>1&&n[1]==="Bubble"&&(hpWall.bEnabled=!1)},1))};var fbpkgiid = fbpkgiid || {};fbpkgiid.page = 'SERP.5056';;var Feedback;(function(n){(function(){var t=_ge("sb_feedback");t!==null&&sj_be(t,"click",function(n){sj_jb("Feedback/Core",!0),sj_sp(n),function t(){var n={page:!0};if(typeof feedback=="undefined"||typeof jQuery=="undefined"){sb_st(t,50);return}feedback.core.load(n)}()})})(n.Footer||(n.Footer={}));var t=n.Footer})(Feedback||(Feedback={}));_w.rms.js({'A:0':0});;
//]]>//<![CDATA[
(function(n,t,i){function b(){sj_be(u,f,sj_wf(g,u)),k(),u.style.display=o}function k(){for(var r=c.length,n,i,t=0;t<r;t++)n=c[t],n&&(i=n.getAttribute(l),i&&i.indexOf(p)!=-1?sj_be(n,f,sj_wf(it,n)):sj_be(n,f,sj_wf(d,n)))}function d(n){var r=n.getAttribute(l),t=n.getAttribute(a);h&&(t+="&ssd="+i.ssd),window.open(r+encodeURIComponent(t),"_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=550, height=420")}function g(){r.style.display!=o?tt():e()}function s(n){if(n){var t=sj_et(n),i=sj_we(t,u,v),f=sj_we(t,r,v);i||f||r.style.display!=o||e()}}function tt(){n(y,e),sj_be(_d,f,s),r.style.display=o}function e(){t(y,e),sj_ue(_d,f,s),r.style.display=w}function it(n){var t=n.getAttribute(a);h&&(t+="&ssd="+i.ssd),_w.clipboardData&&(_w.clipboardData.setData("Text",t),e())}var r=_ge("hp_share_menu"),u=_ge("hp_share"),nt=_ge("hp_share_options"),v=_ge("hp_container"),o="block",w="none",f="click",y="hpsbact",a="data-shareurl",l="data-baseurl",p="clipboard:",c=[_ge("hp_fb_share"),_ge("hp_twitter_share"),_ge("hp_link_share")],h=i&&hp_defined(i.ssd)&&i.ssd;u&&r&&nt&&n!=null&&n("onRBComplete",b,1)})(sj_evt&&sj_evt.bind,sj_evt&&sj_evt.unbind,hp_defined(hpl)&&hpl&&hpl.ref);
//]]>//<![CDATA[
(function(){function t(){_w.sb_ppCPL||sb_st(function(){si_PP(new Date)},0)}var n=_w.onload||function(){};onload=function(i){_G.BPT=new Date,n(i),t()},_G.HT=new Date})()
//]]>//<![CDATA[
(function(n,t,i){function b(){sj_be(u,f,sj_wf(g,u)),k(),u.style.display=o}function k(){for(var r=c.length,n,i,t=0;t<r;t++)n=c[t],n&&(i=n.getAttribute(l),i&&i.indexOf(p)!=-1?sj_be(n,f,sj_wf(it,n)):sj_be(n,f,sj_wf(d,n)))}function d(n){var r=n.getAttribute(l),t=n.getAttribute(a);h&&(t+="&ssd="+i.ssd),window.open(r+encodeURIComponent(t),"_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=550, height=420")}function g(){r.style.display!=o?tt():e()}function s(n){if(n){var t=sj_et(n),i=sj_we(t,u,v),f=sj_we(t,r,v);i||f||r.style.display!=o||e()}}function tt(){n(y,e),sj_be(_d,f,s),r.style.display=o}function e(){t(y,e),sj_ue(_d,f,s),r.style.display=w}function it(n){var t=n.getAttribute(a);h&&(t+="&ssd="+i.ssd),_w.clipboardData&&(_w.clipboardData.setData("Text",t),e())}var r=_ge("hp_share_menu"),u=_ge("hp_share"),nt=_ge("hp_share_options"),v=_ge("hp_container"),o="block",w="none",f="click",y="hpsbact",a="data-shareurl",l="data-baseurl",p="clipboard:",c=[_ge("hp_fb_share"),_ge("hp_twitter_share"),_ge("hp_link_share")],h=i&&hp_defined(i.ssd)&&i.ssd;u&&r&&nt&&n!=null&&n("onRBComplete",b,1)})(sj_evt&&sj_evt.bind,sj_evt&&sj_evt.unbind,hp_defined(hpl)&&hpl&&hpl.ref);
//]]>
var element_0 = document.getElementById("0");
element_0.addEventListener("click", function(){selectScope(this, 'images');}, false);
var element_1 = document.getElementById("1");
element_1.addEventListener("click", function(){selectScope(this, 'video');}, false);
var element_2 = document.getElementById("2");
element_2.addEventListener("click", function(){selectScope(this, 'local');}, false);
var element_3 = document.getElementById("3");
element_3.addEventListener("click", function(){selectScope(this, 'news');}, false);
var element_4 = document.getElementById("4");
element_4.addEventListener("click", function(){selectScope(this, 'history');}, false);
var element_5 = document.getElementById("5");
element_5.addEventListener("click", function(){selectScope(this, 'seeall');}, false);
var element_dhp = document.getElementById("dhp");
element_dhp.addEventListener("click", function(){sj_cook && sj_cook.set('_UR', 'DHP', '1', 1, '/')&& sj_cook.set('_UR', 'DHP', '1', 1, '/')}, false);
var element_7 = document.getElementById("7");
element_7.addEventListener("click", function(){VM.pauseAction()}, false);
var element_8 = document.getElementById("8");
element_8.addEventListener("click", function(){VM.playAction()}, false);
var element_9 = document.getElementById("9");
element_9.addEventListener("click", function(){hpWall.tB(0)}, false);
var element_10 = document.getElementById("10");
element_10.addEventListener("click", function(){hpWall.dLB()}, false);
var element_0 = document.getElementById("0");
element_0.addEventListener("load", function(){hpResize(_ge('bgDiv'));_ge('sb_form_q').focus();if(_w.lb)lb();}, false);
var element_sb_form = document.getElementById("sb_form");