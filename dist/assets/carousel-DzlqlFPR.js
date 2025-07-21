import{_ as ie}from"./carousel1-Bss7QVmV.js";import{c as le,_ as T,I as C}from"./icon-code-D7QmxkRG.js";import{g as R,S as g,N as V,P as M,a as z}from"./pagination-BWQAOmro.js";import{d as oe,e as ne,u as pe,r as ue,o as i,c as _,a as t,h as o,i as s,j as I,V as d,w as n,C as P,F as N,z as D,E as x}from"./index-dI1uNq6t.js";import{I as de}from"./icon-bell-DigOGByS.js";function Z(G){let{swiper:e,extendParams:b,on:u,emit:p,params:w}=G;e.autoplay={running:!1,paused:!1,timeLeft:0},b({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,l,m=w&&w.autoplay?w.autoplay.delay:3e3,B=w&&w.autoplay?w.autoplay.delay:3e3,f,E=new Date().getTime(),O,A,j,H,F,y,q;function J(a){!e||e.destroyed||!e.wrapperEl||a.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",J),!(q||a.detail&&a.detail.bySwiperTouchMove)&&h())}const K=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?O=!0:O&&(B=f,O=!1);const a=e.autoplay.paused?f:E+B-new Date().getTime();e.autoplay.timeLeft=a,p("autoplayTimeLeft",a,a/m),l=requestAnimationFrame(()=>{K()})},ee=()=>{let a;return e.virtual&&e.params.virtual.enabled?a=e.slides.filter(c=>c.classList.contains("swiper-slide-active"))[0]:a=e.slides[e.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},$=a=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(l),K();let v=typeof a>"u"?e.params.autoplay.delay:a;m=e.params.autoplay.delay,B=e.params.autoplay.delay;const c=ee();!Number.isNaN(c)&&c>0&&typeof a>"u"&&(v=c,m=c,B=c),f=v;const L=e.params.speed,Y=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(L,!0,!0),p("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,L,!0,!0),p("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(L,!0,!0),p("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,L,!0,!0),p("autoplay")),e.params.cssMode&&(E=new Date().getTime(),requestAnimationFrame(()=>{$()})))};return v>0?(clearTimeout(r),r=setTimeout(()=>{Y()},v)):requestAnimationFrame(()=>{Y()}),v},Q=()=>{E=new Date().getTime(),e.autoplay.running=!0,$(),p("autoplayStart")},S=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(l),p("autoplayStop")},k=(a,v)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),a||(y=!0);const c=()=>{p("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",J):h()};if(e.autoplay.paused=!0,v){F&&(f=e.params.autoplay.delay),F=!1,c();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-E),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),c())},h=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(E=new Date().getTime(),y?(y=!1,$(f)):$(),e.autoplay.paused=!1,p("autoplayResume"))},U=()=>{if(e.destroyed||!e.autoplay.running)return;const a=R();a.visibilityState==="hidden"&&(y=!0,k(!0)),a.visibilityState==="visible"&&h()},W=a=>{a.pointerType==="mouse"&&(y=!0,q=!0,!(e.animating||e.autoplay.paused)&&k(!0))},X=a=>{a.pointerType==="mouse"&&(q=!1,e.autoplay.paused&&h())},te=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",W),e.el.addEventListener("pointerleave",X))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",W),e.el.removeEventListener("pointerleave",X))},se=()=>{R().addEventListener("visibilitychange",U)},ae=()=>{R().removeEventListener("visibilitychange",U)};u("init",()=>{e.params.autoplay.enabled&&(te(),se(),Q())}),u("destroy",()=>{re(),ae(),e.autoplay.running&&S()}),u("_freeModeStaticRelease",()=>{(j||y)&&h()}),u("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?S():k(!0,!0)}),u("beforeTransitionStart",(a,v,c)=>{e.destroyed||!e.autoplay.running||(c||!e.params.autoplay.disableOnInteraction?k(!0,!0):S())}),u("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){S();return}A=!0,j=!1,y=!1,H=setTimeout(()=>{y=!0,j=!0,k(!0)},200)}}),u("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!A)){if(clearTimeout(H),clearTimeout(r),e.params.autoplay.disableOnInteraction){j=!1,A=!1;return}j&&e.params.cssMode&&h(),j=!1,A=!1}}),u("slideChange",()=>{e.destroyed||!e.autoplay.running||(F=!0)}),Object.assign(e.autoplay,{start:Q,stop:S,pause:k,resume:h})}const me="/assets/images/carousel2.jpeg",ce="/assets/images/carousel3.jpeg",fe={class:"pt-5 space-y-8"},ve={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},ye={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},ge={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},xe={class:"panel"},be={class:"flex items-center justify-between mb-5"},we={class:"flex items-center"},he=["src"],je={href:"javascript:;",class:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},ke={href:"javascript:;",class:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},_e={class:"panel"},Ee={class:"flex items-center justify-between mb-5"},Se={class:"flex items-center"},Le=["src"],Te={href:"javascript:;",class:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Ce={href:"javascript:;",class:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},ze={class:"panel"},Ie={class:"flex items-center justify-between mb-5"},Pe={class:"flex items-center"},Ne=["src"],De={class:"panel"},Be={class:"flex items-center justify-between mb-5"},Ae={class:"flex items-center"},$e={href:"javascript:;",class:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Ve={href:"javascript:;",class:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Me={class:"panel lg:col-span-2"},Oe={class:"flex items-center justify-between mb-5"},Fe={class:"flex items-center"},qe=["src"],Re=["src"],Ge={href:"javascript:;",class:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},He={href:"javascript:;",class:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},Xe=oe({__name:"carousel",setup(G){const e=ne();pe({title:"Carousel"});const{codeArr:b,toggleCode:u}=le(),p=ue(["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"]);return(w,r)=>(i(),_("div",null,[r[27]||(r[27]=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Carousel")])],-1)),t("div",fe,[t("div",ve,[t("div",ye,[o(de)]),r[5]||(r[5]=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1)),r[6]||(r[6]=t("a",{href:"https://www.npmjs.com/package/swiper",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/swiper",-1))]),t("div",ge,[t("div",xe,[t("div",be,[r[8]||(r[8]=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1)),t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:r[0]||(r[0]=l=>s(u)("code1"))},[t("span",we,[o(C,{class:"me-2"}),r[7]||(r[7]=I(" Code "))])])]),(i(),d(s(z),{modules:[s(V),s(M)],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},class:"max-w-3xl mx-auto mb-5",id:"slider1",dir:s(e).rtlClass,key:s(e).rtlClass==="rtl"?"true":"false"},{default:n(()=>[(i(!0),_(N,null,D(p.value,(l,m)=>(i(),d(s(g),{key:m},{default:n(()=>[t("img",{src:`/assets/images/${l}`,class:"w-full max-h-80 object-cover",alt:""},null,8,he)]),_:2},1024))),128)),t("a",je,[o(x,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",ke,[o(x,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","dir"])),s(b).includes("code1")?(i(),d(T,{key:0},{default:n(()=>r[9]||(r[9]=[t("pre",null,`<!-- basic -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }"
  :pagination="{ clickable: true }"
  class="max-w-3xl mx-auto mb-5"
  id="slider1"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex1
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex1
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1)])),_:1})):P("",!0)]),t("div",_e,[t("div",Ee,[r[11]||(r[11]=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Autopaly",-1)),t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:r[1]||(r[1]=l=>s(u)("code2"))},[t("span",Se,[o(C,{class:"me-2"}),r[10]||(r[10]=I(" Code "))])])]),(i(),d(s(z),{modules:[s(V),s(Z)],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider2",dir:s(e).rtlClass,key:s(e).rtlClass==="rtl"?"true":"false"},{default:n(()=>[(i(!0),_(N,null,D(p.value,(l,m)=>(i(),d(s(g),{key:m},{default:n(()=>[t("img",{src:`/assets/images/${l}`,class:"w-full max-h-80 object-cover",alt:""},null,8,Le),r[12]||(r[12]=t("div",{class:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12"},[t("div",{class:"sm:text-3xl text-base font-bold"},"This is blog Image"),t("div",{class:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. "),t("button",{type:"button",class:"mt-4 btn btn-primary"},"Learn more")],-1))]),_:2},1024))),128)),t("a",Te,[o(x,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",Ce,[o(x,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","dir"])),s(b).includes("code2")?(i(),d(T,{key:0},{default:n(()=>r[13]||(r[13]=[t("pre",null,`<!-- autopaly -->
<swiper
  :modules="[Navigation, Autoplay]"
  :navigation="{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }"
  :autoplay="{ delay: 2000 }"
  class="max-w-3xl mx-auto mb-5"
  id="slider2"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
      <div class="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
        <div class="sm:text-3xl text-base font-bold">This is blog Image</div>
        <div class="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </div>
        <button type="button" class="mt-4 btn btn-primary">Learn more</button>
      </div>
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex2
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex2
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1)])),_:1})):P("",!0)]),t("div",ze,[t("div",Ie,[r[15]||(r[15]=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical",-1)),t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:r[2]||(r[2]=l=>s(u)("code3"))},[t("span",Pe,[o(C,{class:"me-2"}),r[14]||(r[14]=I(" Code "))])])]),o(s(z),{modules:[s(M),s(Z)],direction:"vertical",pagination:{clickable:!0},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider3"},{default:n(()=>[(i(!0),_(N,null,D(p.value,(l,m)=>(i(),d(s(g),{key:m},{default:n(()=>[t("img",{src:`/assets/images/${l}`,class:"w-full",alt:""},null,8,Ne),r[16]||(r[16]=t("div",{class:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center"},[t("div",{class:"sm:text-xl text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1))]),_:2},1024))),128))]),_:1},8,["modules"]),s(b).includes("code3")?(i(),d(T,{key:0},{default:n(()=>r[17]||(r[17]=[t("pre",null,`<!-- vertical -->
<swiper :modules="[Pagination, Autoplay]" :direction="'vertical'" :pagination="{ clickable: true }" :autoplay="{ delay: 2000 }" class="max-w-3xl mx-auto mb-5" id="slider3">
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
      <div class="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
        <div class="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
      </div>
    </swiper-slide>
  </template>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1)])),_:1})):P("",!0)]),t("div",De,[t("div",Be,[r[19]||(r[19]=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Loop",-1)),t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:r[3]||(r[3]=l=>s(u)("code4"))},[t("span",Ae,[o(C,{class:"me-2"}),r[18]||(r[18]=I(" Code "))])])]),(i(),d(s(z),{modules:[s(V),s(M)],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},pagination:{clickable:!0,type:"fraction"},class:"max-w-3xl mx-auto mb-5",id:"slider4",dir:s(e).rtlClass,key:s(e).rtlClass==="rtl"?"true":"false"},{default:n(()=>[o(s(g),null,{default:n(()=>r[20]||(r[20]=[t("img",{src:ie,class:"w-full",alt:""},null,-1),t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 1"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1)])),_:1}),o(s(g),null,{default:n(()=>r[21]||(r[21]=[t("img",{src:me,class:"w-full",alt:""},null,-1),t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 2"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1)])),_:1}),o(s(g),null,{default:n(()=>r[22]||(r[22]=[t("img",{src:ce,class:"w-full",alt:""},null,-1),t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 3"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1)])),_:1}),t("a",$e,[o(x,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",Ve,[o(x,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","dir"])),s(b).includes("code4")?(i(),d(T,{key:0},{default:n(()=>r[23]||(r[23]=[t("pre",null,`<!-- loop -->
<swiper
  :modules="[Navigation, Pagination]"
  slidesPerView="auto"
  :spaceBetween="30"
  :loop="true"
  :navigation="{ nextEl: '.swiper-button-next-ex4', prevEl: '.swiper-button-prev-ex4' }"
  :pagination="{ clickable: true, type: 'fraction' }"
  class="max-w-3xl mx-auto mb-5"
  id="slider4"
>
  <swiper-slide>
    <img src="/assets/images/carousel1.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 1</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel2.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 2</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel3.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 3</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex4
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex4
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1)])),_:1})):P("",!0)]),t("div",Me,[t("div",Oe,[r[25]||(r[25]=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Multiple Slides",-1)),t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:r[4]||(r[4]=l=>s(u)("code5"))},[t("span",Fe,[o(C,{class:"me-2"}),r[24]||(r[24]=I(" Code "))])])]),(i(),d(s(z),{modules:[s(V),s(M)],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},id:"slider5",dir:s(e).rtlClass,key:s(e).rtlClass==="rtl"?"true":"false"},{default:n(()=>[(i(!0),_(N,null,D(p.value,(l,m)=>(i(),d(s(g),{key:m},{default:n(()=>[t("img",{src:`/assets/images/${l}`,class:"w-full",alt:""},null,8,qe)]),_:2},1024))),128)),(i(!0),_(N,null,D(p.value,(l,m)=>(i(),d(s(g),{key:m},{default:n(()=>[t("img",{src:`/assets/images/${l}`,class:"w-full",alt:""},null,8,Re)]),_:2},1024))),128)),t("a",Ge,[o(x,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",He,[o(x,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","dir"])),s(b).includes("code5")?(i(),d(T,{key:0},{default:n(()=>r[26]||(r[26]=[t("pre",null,`<!-- multiple -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex5', prevEl: '.swiper-button-prev-ex5' }"
  :pagination="{ clickable: true }"
  :breakpoints="{ 1024: { slidesPerView: 3, spaceBetween: 30 }, 768: { slidesPerView: 2, spaceBetween: 40 }, 320: { slidesPerView: 1, spaceBetween: 20 } }"
  id="slider5"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex5
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex5
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1)])),_:1})):P("",!0)])])])]))}});export{Xe as default};
