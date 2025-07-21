import{c as D,_ as h,I as f}from"./icon-code-D7QmxkRG.js";import{d as j,u as M,r as x,x as C,o as i,c as T,a as e,i as n,h as b,j as v,A as l,V as w,w as _,C as y}from"./index-dI1uNq6t.js";const I={class:"pt-5 grid grid-cols-1 xl:grid-cols-2 gap-6"},S={class:"panel"},V={class:"flex items-center justify-between mb-5"},B={class:"flex items-center"},F={class:"mb-5 grid grid-cols-4 justify-items-center gap-3"},H={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},N={class:"text-primary sm:text-3xl text-xl text-center"},Y={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},$={class:"text-primary sm:text-3xl text-xl text-center"},A={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},E={class:"text-primary sm:text-3xl text-xl text-center"},P={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},q={class:"text-primary sm:text-3xl text-xl text-center"},z={class:"panel"},G={class:"flex items-center justify-between mb-5"},J={class:"flex items-center"},K={class:"mb-5 grid grid-cols-4 justify-items-center gap-3"},L={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},O={class:"text-primary sm:text-3xl text-xl text-center"},Q={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},R={class:"text-primary sm:text-3xl text-xl text-center"},U={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},W={class:"text-primary sm:text-3xl text-xl text-center"},X={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},Z={class:"text-primary sm:text-3xl text-xl text-center"},re=j({__name:"countdown",setup(ee){M({title:"Countdown"});const{codeArr:c,toggleCode:m}=D(),u=x(null),r=x({days:null,hours:null,minutes:null,seconds:null}),p=x(null),d=x({days:null,hours:null,minutes:null,seconds:null});C(()=>{k(),g()});const k=()=>{let o=new Date;o.setDate(o.getDate()+3);let t=o.getTime();u.value=setInterval(()=>{let a=new Date().getTime(),s=t-a;r.value.days=Math.floor(s/(1e3*60*60*24)),r.value.hours=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),r.value.minutes=Math.floor(s%(1e3*60*60)/(1e3*60)),r.value.seconds=Math.floor(s%(1e3*60)/1e3),s<0&&clearInterval(u.value)},500)},g=()=>{let o=new Date;o.setFullYear(o.getFullYear()+1);let t=o.getTime();p.value=setInterval(()=>{let a=new Date().getTime(),s=t-a;d.value.days=Math.floor(s/(1e3*60*60*24)),d.value.hours=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),d.value.minutes=Math.floor(s%(1e3*60*60)/(1e3*60)),d.value.seconds=Math.floor(s%(1e3*60)/1e3),s<0&&clearInterval(p.value)},500)};return(o,t)=>(i(),T("div",null,[t[16]||(t[16]=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Countdown")])],-1)),e("div",I,[e("div",S,[e("div",V,[t[3]||(t[3]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Countdown",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=a=>n(m)("code1"))},[e("span",B,[b(f,{class:"me-2"}),t[2]||(t[2]=v(" Code "))])])]),e("div",F,[e("div",null,[e("div",H,[e("h1",N,l(r.value.days),1)]),t[4]||(t[4]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Days",-1))]),e("div",null,[e("div",Y,[e("h1",$,l(r.value.hours),1)]),t[5]||(t[5]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Hours",-1))]),e("div",null,[e("div",A,[e("h1",E,l(r.value.minutes),1)]),t[6]||(t[6]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Mins",-1))]),e("div",null,[e("div",P,[e("h1",q,l(r.value.seconds),1)]),t[7]||(t[7]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Sec",-1))])]),n(c).includes("code1")?(i(),w(h,{key:0},{default:_(()=>t[8]||(t[8]=[e("pre",null,`<!-- simple countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.days }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.hours }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.minutes }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.seconds }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const timer1: any = ref(null);
const demo1: any = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

onMounted(() => {
  setTimerDemo1();
});

const setTimerDemo1 = () => {
  let date = new Date();
  date.setDate(date.getDate() + 3);
  let countDownDate = date.getTime();

  timer1.value = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    demo1.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    demo1.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    demo1.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    demo1.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(timer1.value);
    }
  }, 500);
};
<\/script>
`,-1)])),_:1})):y("",!0)]),e("div",z,[e("div",G,[t[10]||(t[10]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Circle Countdown",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=a=>n(m)("code2"))},[e("span",J,[b(f,{class:"me-2"}),t[9]||(t[9]=v(" Code "))])])]),e("div",K,[e("div",null,[e("div",L,[e("h1",O,l(d.value.days),1)]),t[11]||(t[11]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Days",-1))]),e("div",null,[e("div",Q,[e("h1",R,l(d.value.hours),1)]),t[12]||(t[12]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Hours",-1))]),e("div",null,[e("div",U,[e("h1",W,l(d.value.minutes),1)]),t[13]||(t[13]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Mins",-1))]),e("div",null,[e("div",X,[e("h1",Z,l(d.value.seconds),1)]),t[14]||(t[14]=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Sec",-1))])]),n(c).includes("code2")?(i(),w(h,{key:0},{default:_(()=>t[15]||(t[15]=[e("pre",null,`<!-- circle countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.days }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.hours }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.minutes }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.seconds }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>
<!-- script -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const timer2: any = ref(null);
const demo2: any = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

onMounted(() => {
  setTimerDemo2();
});

const setTimerDemo2 = () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  let countDownDate = date.getTime();

  timer2.value = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    demo2.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    demo2.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    demo2.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    demo2.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(timer2.value);
    }
  }, 500);
};
<\/script>
`,-1)])),_:1})):y("",!0)])])]))}});export{re as default};
