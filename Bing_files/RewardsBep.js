var bepns=bepns||function(){function p(){var c=_ge("id_l"),a=_ge("id_lt"),y,p,g,w,t,f;n=_ge("bep"),i=_ge("bepfo"),r=_ge("bepfm"),u=_ge("bep_cnt"),o=!1,c&&n&&(o=n.className=="bephpoff",y=c.parentNode,p=n.parentNode,p!=y&&(o&&a&&p!=a?(g=a.insertCell(0),g.appendChild(n)):(y.insertBefore(n,c.nextSibling),sb_st(b,500)),w=_ge("id_d_u"),w&&(t=sj_ce("div"),t.className=w.className,t.id="beparrow",n.insertBefore(t,n.firstChild),f=_ge("id_p"),f&&f.style&&f.style.display=="none"&&(t.style.left="65px"))),sj_be(n,h,k,0),sj_be(r,d,nt,0),sj_evt.bind(v,function(n){n[1]!=l&&e()}),sj_evt.fire("bepready",s))}function w(n){n.className="bepidon"}function b(){var n=_ge("id_h"),t;n&&n.style.pixelLeft>0&&n.clientWidth>0&&n.clientWidth<=240&&(t=50,n.style.left=n.style.pixelLeft-t+a,n.style.width=n.clientWidth+t+a)}function k(n){i&&(i.style.display!="block"?g(n):e(n))}function f(n){n&&(n.style.display="none")}function c(n){n&&(n.style.display="block")}function s(t){w(n),(!t||t<=0)&&(t="");var i=_ge("bep_gleam"),r=t?"gleamon":"gleamoff";u&&i&&(u.innerHTML=t,t&&(u.className="cnton"),i.className=r)}function g(o){r.src="/rewardsapp/bepflyoutpage",y&&(r.height=0,t=sj_ce("div"),t.id="bepfl",t.innerText=t.textContent="Loading...",i.appendChild(t),c(t),y=!1),c(i),c(_ge("beparrow")),n&&(n.className="openfo"),u&&u.firstChild&&s(),sj_sp(o),sj_be(_d,h,e,0),sj_evt.fire(v,l),f(_ge("id_d")),f(_ge("id_d_u")),f(_ge("id_d_uc"))}function e(n){f(i),f(_ge("beparrow")),sj_ue(_d,h,e),n&&sj_sp(n)}function nt(){f(t),r.height=Math.min(r.contentWindow.document.body.scrollHeight,549)}var l="bepfo",v="onPopTR",n,i,t,r,u,h="click",d="load",a="px",o=!1,y=!0;return p(),{sg:s}}()