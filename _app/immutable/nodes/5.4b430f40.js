import{s as t0,f as G,n as O,h as Z,j as i0,e as n0}from"../chunks/scheduler.6ca4a442.js";import{S as l0,i as a0,z as o0,H as T,A as c0,j as P,B as L,f as _,C as K,a as H,g as D,s as y,m as J,h as B,c as C,n as R,k as b,x as g,o as q,d as M,b as r0,t as I,E as d0,p as s0,r as f0,u as h0,v as m0,w as p0}from"../chunks/index.6125f7a5.js";import{e as U,q as _0}from"../chunks/qr.2e757d70.js";import{a as b0}from"../chunks/locale.af764fd4.js";import{g as v0}from"../chunks/spread.84d39b6c.js";function g0(a){let u,t,i='<path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"/>',r=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},a[0]],s={};for(let n=0;n<r.length;n+=1)s=G(s,r[n]);return{c(){u=o0("svg"),t=new T(!0),this.h()},l(n){u=c0(n,"svg",{viewBox:!0,width:!0,height:!0});var p=P(u);t=L(p,!0),p.forEach(_),this.h()},h(){t.a=null,K(u,s)},m(n,p){H(n,u,p),t.m(i,u)},p(n,[p]){K(u,s=v0(r,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},p&1&&n[0]]))},i:O,o:O,d(n){n&&_(u)}}}function E0(a,u,t){return a.$$set=i=>{t(0,u=G(G({},u),Z(i)))},u=Z(u),[u]}class k0 extends l0{constructor(u){super(),a0(this,u,E0,g0,t0,{})}}function X(a,u,t){const i=a.slice();return i[2]=u[t],i[4]=t,i}function Y(a){let u,t=a[2].skills.join(", ")+"",i;return{c(){u=D("div"),i=J(t),this.h()},l(r){u=B(r,"DIV",{class:!0});var s=P(u);i=R(s,t),s.forEach(_),this.h()},h(){b(u,"class","font-medium text-zinc-500 dark:text-zinc-400 print:text-sm print:font-normal")},m(r,s){H(r,u,s),g(u,i)},p(r,s){s&1&&t!==(t=r[2].skills.join(", ")+"")&&q(i,t)},d(r){r&&_(u)}}}function u0(a){let u,t=a[0].learnMore+"",i,r,s,n,p;return s=new k0({props:{class:"ml-2 h-3 w-3","aria-hidden":"true"}}),{c(){u=D("a"),i=J(t),r=y(),f0(s.$$.fragment),this.h()},l(f){u=B(f,"A",{href:!0,class:!0});var v=P(u);i=R(v,t),r=C(v),h0(s.$$.fragment,v),v.forEach(_),this.h()},h(){b(u,"href",n=a[2].link),b(u,"class","inline-flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white dark:focus:ring-zinc-700 print:hidden")},m(f,v){H(f,u,v),g(u,i),g(u,r),m0(s,u,null),p=!0},p(f,v){(!p||v&1)&&t!==(t=f[0].learnMore+"")&&q(i,t),(!p||v&1&&n!==(n=f[2].link))&&b(u,"href",n)},i(f){p||(M(s.$$.fragment,f),p=!0)},o(f){I(s.$$.fragment,f),p=!1},d(f){f&&_(u),p0(s)}}}function e0(a){let u,t,i,r,s,n=a[2].date+"",p,f,v,k=a[2].title+"",F,x,S,j=a[2].desc+"",w,z,E,A,h="skills"in a[2]&&a[2].skills&&Y(a),o="link"in a[2]&&a[2].link&&u0(a);return{c(){u=D("li"),t=D("div"),i=y(),r=D("time"),s=new T(!1),p=y(),f=D("h3"),v=new T(!1),F=y(),x=D("p"),S=new T(!1),w=y(),h&&h.c(),z=y(),o&&o.c(),E=y(),this.h()},l(e){u=B(e,"LI",{class:!0});var m=P(u);t=B(m,"DIV",{class:!0,"data-selected":!0}),P(t).forEach(_),i=C(m),r=B(m,"TIME",{class:!0});var l=P(r);s=L(l,!1),l.forEach(_),p=C(m),f=B(m,"H3",{class:!0});var c=P(f);v=L(c,!1),c.forEach(_),F=C(m),x=B(m,"P",{class:!0});var d=P(x);S=L(d,!1),d.forEach(_),w=C(m),h&&h.l(m),z=C(m),o&&o.l(m),E=C(m),m.forEach(_),this.h()},h(){b(t,"class","absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-200 data-[selected=true]:bg-zinc-800 dark:border-zinc-900 dark:bg-zinc-700 dark:data-[selected=true]:bg-zinc-300 print:border-[6px] print:border-zinc-300"),b(t,"data-selected",a[4]===0),s.a=null,b(r,"class","mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500 print:text-xs"),v.a=null,b(f,"class","text-lg font-semibold text-zinc-900 dark:text-white print:text-base"),S.a=null,b(x,"class","mb-2 text-base font-normal text-zinc-500 dark:text-zinc-400 print:mb-0 print:text-sm"),b(u,"class","mb-10 ml-4 print:mb-2")},m(e,m){H(e,u,m),g(u,t),g(u,i),g(u,r),s.m(n,r),g(u,p),g(u,f),v.m(k,f),g(u,F),g(u,x),S.m(j,x),g(u,w),h&&h.m(u,null),g(u,z),o&&o.m(u,null),g(u,E),A=!0},p(e,m){(!A||m&1)&&n!==(n=e[2].date+"")&&s.p(n),(!A||m&1)&&k!==(k=e[2].title+"")&&v.p(k),(!A||m&1)&&j!==(j=e[2].desc+"")&&S.p(j),"skills"in e[2]&&e[2].skills?h?h.p(e,m):(h=Y(e),h.c(),h.m(u,z)):h&&(h.d(1),h=null),"link"in e[2]&&e[2].link?o?(o.p(e,m),m&1&&M(o,1)):(o=u0(e),o.c(),M(o,1),o.m(u,E)):o&&(s0(),I(o,1,1,()=>{o=null}),r0())},i(e){A||(M(o),A=!0)},o(e){I(o),A=!1},d(e){e&&_(u),h&&h.d(),o&&o.d()}}}function D0(a){let u,t,i,r=a[0].info.title+"",s,n,p,f=a[0].info.subtitle+"",v,k,F,x=a[0].title+"",S,j,w,z,E,A,h,o=U(a[0].jobs),e=[];for(let l=0;l<o.length;l+=1)e[l]=e0(X(a,o,l));const m=l=>I(e[l],1,1,()=>{e[l]=null});return{c(){u=D("div"),t=D("h1"),i=new T(!1),s=y(),n=D("p"),p=new T(!1),v=y(),k=D("div"),F=D("h1"),S=J(x),j=y(),w=D("ol");for(let l=0;l<e.length;l+=1)e[l].c();z=y(),E=D("img"),this.h()},l(l){u=B(l,"DIV",{class:!0});var c=P(u);t=B(c,"H1",{class:!0});var d=P(t);i=L(d,!1),d.forEach(_),s=C(c),n=B(c,"P",{class:!0});var V=P(n);p=L(V,!1),V.forEach(_),c.forEach(_),v=C(l),k=B(l,"DIV",{class:!0});var Q=P(k);F=B(Q,"H1",{class:!0});var N=P(F);S=R(N,x),N.forEach(_),j=C(Q),w=B(Q,"OL",{class:!0});var $=P(w);for(let W=0;W<e.length;W+=1)e[W].l($);$.forEach(_),Q.forEach(_),z=C(l),E=B(l,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),this.h()},h(){i.a=null,b(t,"class","text-lg font-medium"),p.a=null,b(n,"class","text-xs"),b(u,"class","hidden px-4 print:block"),b(F,"class","mt-8 text-center text-4xl font-semibold print:mt-0 print:text-left print:text-base"),b(w,"class","relative mx-auto mt-8 max-w-screen-md -translate-x-1.5 border-l border-zinc-200 dark:border-zinc-700 print:mt-2"),b(k,"class","p-4"),i0(E.src,A=_0)||b(E,"src",A),b(E,"width",128),b(E,"height",128),b(E,"alt","QR Code"),b(E,"class","mt-2 hidden w-16 print:block")},m(l,c){H(l,u,c),g(u,t),i.m(r,t),g(u,s),g(u,n),p.m(f,n),H(l,v,c),H(l,k,c),g(k,F),g(F,S),g(k,j),g(k,w);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(w,null);H(l,z,c),H(l,E,c),h=!0},p(l,[c]){if((!h||c&1)&&r!==(r=l[0].info.title+"")&&i.p(r),(!h||c&1)&&f!==(f=l[0].info.subtitle+"")&&p.p(f),(!h||c&1)&&x!==(x=l[0].title+"")&&q(S,x),c&1){o=U(l[0].jobs);let d;for(d=0;d<o.length;d+=1){const V=X(l,o,d);e[d]?(e[d].p(V,c),M(e[d],1)):(e[d]=e0(V),e[d].c(),M(e[d],1),e[d].m(w,null))}for(s0(),d=o.length;d<e.length;d+=1)m(d);r0()}},i(l){if(!h){for(let c=0;c<o.length;c+=1)M(e[c]);h=!0}},o(l){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)I(e[c]);h=!1},d(l){l&&(_(u),_(v),_(k),_(z),_(E)),d0(e,l)}}}function B0(a,u,t){let i,r;return n0(a,b0,s=>t(1,r=s)),a.$$.update=()=>{a.$$.dirty&2&&t(0,i={ru:{title:"История работы",info:{title:'Привет<span class="print:hidden"> 👋</span>, Я Адам',subtitle:'Реальное имя - Богдан<span class="hidden print:inline"> Парфенов</span>. Я full-stack веб разработчик, в основном состредоточенный на бекенде.'},jobs:[{date:"с 2020, Тольятти",title:'Full-stack разработчик в <a href="https://cifrazia.com" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cifrazia</a>',desc:"Разработал и поддерживаю облачные сервисы на Python, Node.js, Go; веб-сайт на Nuxt2, Svelte. Ответственен за системное администрирование бекенд серверов.",skills:["Go","Svelte","Python3.10","Typescript","Docker swarm","PostgreSQL","Minio","Django","Tornado","Nuxt2"]},{date:"2019-2020, Palo Alto",title:'Full-stack разработчик в <a href="https://cherryhome.ai" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cherry Labs</a>',desc:"В партнёрстве с 4taps.me, разрабатывал и поддерживал облачный сервис системы умных камер на Python, а также создал и поддерживал админ. панель на Vue",skills:["Python3.6","Tornado","MongoDB","AWS S3","AWS Gateway","Docker","Vue","Vuetify","crossbar.io"]},{date:"2019-2020, Тольятти",title:'Python разработчик в <a href="https://4taps.me" rel="noopener noreferrer" class="text-blue-500 print:text-black">4taps</a>',desc:"Разрабатывал и поддерживал веб-сервисы партнёров на Python",skills:["Python3.6","Django2","Django REST","MongoDB","PostgreSQL","Celery","Vue"]},{date:"2018-2019, Санкт-Петербург",title:'Служба в <a href="https://mil.ru/commemoration/memorial/90_batallion.htm" rel="noopener noreferrer" class="text-blue-500 print:text-black">90 ОСПБ</a>',desc:"Участвовал в мероприятиях, направленных на поиск пропавших без вести солдат и их последующую идентификацию на основе медальонов, именных личных вещей и архивных документов",link:"https://ru.wikipedia.org/wiki/Поисковое_движение"},{date:"2016-2018, Тольятти",title:"PHP разработчик, фриланс",desc:"Разрабатывал сайты под различные системы на PHP, изучал JavaScript",skills:["PHP5","Symfony","Rarchet","Joomla","Wordpress","Drupal","HostCMS","jQuery","Bootstrap"]},{date:"2014-2016, Тольятти",title:'PHP разработчик в <a href="https://vk.com/surov.marketing" rel="noopener noreferrer" class="text-blue-500 print:text-black">Суровый Маркетинг</a>',desc:"Вёрстка сайтов под различные CMS, разработка уникальных решений на PHP",skills:["PHP5","Symfony","Joomla","Wordpress","jQuery","Bootstrap"]}],learnMore:"Узнать больше"},en:{title:"Job history",info:{title:`Hi<span class="print:hidden"> 👋</span>, I'm Adam!`,subtitle:`Real name is Bogdan<span class="hidden print:inline"> Parfenov</span> <i class="text-xs">(He/him)</i>. I'm a full-stack web developer, primarily focused on backend.`},jobs:[{date:"Since 2020, Tolyatti",title:'Full-stack developer at в <a href="https://cifrazia.com" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cifrazia</a>',desc:"Created and maintaining cloud services on Python, Node.js, Go; website on Nuxt2, Svelte. Responsible for system administration of a backend servers.",skills:["Go","Svelte","Python3.10","Typescript","Docker swarm","PostgreSQL","Minio","Django","Tornado","Nuxt2"]},{date:"2019-2020, Palo Alto",title:'Full-stack developer at <a href="https://cherryhome.ai" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cherry Labs</a>',desc:"In partnership with 4taps.me, developed and maintained cloud services for smart cameras on Python, also created and maintained admin panel on Vue",skills:["Python3.6","Tornado","MongoDB","AWS S3","AWS Gateway","Docker","Vue","Vuetify","crossbar.io"]},{date:"2019-2020, Tolyatti",title:'Python deverloper at <a href="https://4taps.me" rel="noopener noreferrer" class="text-blue-500 print:text-black">4taps</a>',desc:"Developed and maintained partners Python web services",skills:["Python3.6","Django2","Django REST","MongoDB","PostgreSQL","Celery","Vue"]},{date:"2018-2019, Saint-Petersburg",title:'Served at <a href="https://mil.ru/commemoration/memorial/90_batallion.htm" rel="noopener noreferrer" class="text-blue-500 print:text-black">90 ОСПБ</a>',desc:"Participated in events aimed at searching for missing soldiers and their subsequent identification based on coins, nominal personal items and archival documents.",link:"https://ru.wikipedia.org/wiki/Поисковое_движение"},{date:"2016-2018, Tolyatti",title:"PHP developer, freelance",desc:"Developed websited for different PHP CMS, learned JavaScript",skills:["PHP5","Symfony","Rarchet","Joomla","Wordpress","Drupal","HostCMS","jQuery","Bootstrap"]},{date:"2014-2016, Tolyatti",title:'PHP developer at <a href="https://vk.com/surov.marketing" rel="noopener noreferrer" class="text-blue-500 print:text-black">Суровый Маркетинг</a>',desc:"Website markup for CMS, development of unique soltions with PHP",skills:["PHP5","Symfony","Joomla","Wordpress","jQuery","Bootstrap"]}],learnMore:"Learn more"}}[r])},[i,r]}class F0 extends l0{constructor(u){super(),a0(this,u,B0,D0,t0,{})}}export{F0 as component};
