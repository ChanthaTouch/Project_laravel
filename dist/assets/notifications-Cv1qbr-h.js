import{c as w,_ as b,I as c}from"./icon-code-D7QmxkRG.js";import{S as g}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{d as C,u as B,e as h,o as i,c as E,a as o,h as l,i as e,j as m,V as p,w as f,C as x}from"./index-dI1uNq6t.js";import{I as $}from"./icon-bell-DigOGByS.js";const j={class:"pt-5 space-y-8"},T={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},S={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},M={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},N={class:"panel"},D={class:"flex items-center justify-between mb-5"},I={class:"flex items-center"},A={class:"mb-5"},H={class:"flex items-center justify-center"},P={class:"panel lg:row-span-2"},V={class:"flex items-center justify-between mb-5"},L={class:"flex items-center"},R={class:"mb-5"},O={class:"flex items-center justify-center mb-10 gap-2"},W={class:"flex items-center justify-center gap-2"},q={class:"panel"},z={class:"flex items-center justify-between mb-5"},F={class:"flex items-center"},G={class:"mb-5"},J={class:"flex items-center justify-center"},K={class:"panel"},Q={class:"flex items-center justify-between mb-5"},U={class:"flex items-center"},X={class:"mb-5"},Y={class:"flex items-center justify-center"},Z={class:"panel"},_={class:"flex items-center justify-between mb-5"},tt={class:"flex items-center"},ot={class:"mb-5"},st={class:"flex items-center justify-center"},et={class:"panel lg:col-span-2"},nt={class:"flex items-center justify-between mb-5"},it={class:"flex items-center"},lt={class:"mb-5"},rt={class:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast"},ft=C({__name:"notifications",setup(at){B({title:"Notification"});const v=h(),{codeArr:r,toggleCode:a}=w(),n=(u="Example notification text.",t="bottom-start",s=!0,dt="",k=3e3)=>{g.mixin({toast:!0,position:t||"bottom-start",showConfirmButton:!1,timer:k,showCloseButton:s}).fire({title:u})},y=()=>{g.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(u=>{g.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},d=u=>{g.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${u}`},target:document.getElementById(u+"-toast")||"body"}).fire({title:"Example notification text."})};return(u,t)=>(i(),E("div",null,[t[50]||(t[50]=o("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[o("li",null,[o("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),o("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[o("span",null,"Notifications")])],-1)),o("div",j,[o("div",T,[o("div",S,[l($)]),t[22]||(t[22]=o("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1)),t[23]||(t[23]=o("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/sweetalert2",-1))]),o("div",M,[o("div",N,[o("div",D,[t[25]||(t[25]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=s=>e(a)("code1"))},[o("span",I,[l(c,{class:"me-2"}),t[24]||(t[24]=m(" Code "))])])]),o("div",A,[o("div",H,[o("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=s=>n("Hello, world! This is a toast message."))},"Open Toast")])]),e(r).includes("code1")?(i(),p(b,{key:0},{default:f(()=>t[26]||(t[26]=[o("pre",null,`<!-- basic -->
<button type="button" class="btn btn-primary" @click="showMessage('Hello, world! This is a toast message.')">Open Toast</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1)])),_:1})):x("",!0)]),o("div",P,[o("div",V,[t[28]||(t[28]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"Position",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=s=>e(a)("code2"))},[o("span",L,[l(c,{class:"me-2"}),t[27]||(t[27]=m(" Code "))])])]),o("div",R,[t[29]||(t[29]=o("h6",{class:"font-semibold text-base dark:text-white-light mb-3 text-center"},"Top Position",-1)),o("div",O,[o("button",{type:"button",class:"btn btn-success",onClick:t[3]||(t[3]=s=>n("Example notification text.",e(v).rtlClass==="rtl"?"top-end":"top-start"))}," Top Left "),o("button",{type:"button",class:"btn btn-secondary",onClick:t[4]||(t[4]=s=>n("Example notification text","top"))},"Top Center"),o("button",{type:"button",class:"btn btn-info",onClick:t[5]||(t[5]=s=>n("Example notification text.",e(v).rtlClass==="rtl"?"top-start":"top-end"))}," Top Right ")]),t[30]||(t[30]=o("h6",{class:"font-semibold text-base dark:text-white-light mb-3 text-center"},"Bottom Position",-1)),o("div",W,[o("button",{type:"button",class:"btn btn-dark",onClick:t[6]||(t[6]=s=>n("Example notification text.",e(v).rtlClass==="rtl"?"bottom-end":"bottom-start"))}," Bottom Left "),o("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=s=>n("Example notification text.","bottom"))},"Bottom Center"),o("button",{type:"button",class:"btn btn-secondary",onClick:t[8]||(t[8]=s=>n("Example notification text.",e(v).rtlClass==="rtl"?"bottom-start":"bottom-end"))}," Bottom Right ")])]),e(r).includes("code2")?(i(),p(b,{key:0},{default:f(()=>t[31]||(t[31]=[o("pre",null,`<!-- top left -->
<button type="button" class="btn btn-success" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'top-end' : 'top-start')">Top Left</button>

<!-- top center -->
<button type="button" class="btn btn-secondary" @click="showMessage('Example notification text','top')">Top Center</button>

<!-- top right -->
<button type="button" class="btn btn-info" @click="showMessage('Example notification text.', store.rtlClass === 'rtl' ? 'top-start' : 'top-end')">Top Right</button>

<!-- bottom left -->
<button type="button" class="btn btn-dark" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start')">Bottom Left</button>

<!-- bottom center -->
<button type="button" class="btn btn-primary" @click="showMessage('Example notification text.','bottom')">Bottom Center</button>

<!-- bottom right -->
<button type="button" class="btn btn-secondary" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end')">Bottom Right</button>

<!-- script -->
<script>
  import { useAppStore } from '@/stores/index';
  const store = useAppStore();
  const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
      const toast = Swal.mixin({
          toast: true,
          position: position || 'bottom-start',
          showConfirmButton: false,
          timer: duration,
          showCloseButton: showCloseButton,
      });
      toast.fire({
          title: msg,
      });
  };
<\/script>
`,-1)])),_:1})):x("",!0)]),o("div",q,[o("div",z,[t[33]||(t[33]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"No Action",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[9]||(t[9]=s=>e(a)("code3"))},[o("span",F,[l(c,{class:"me-2"}),t[32]||(t[32]=m(" Code "))])])]),o("div",G,[o("div",J,[o("button",{type:"button",class:"btn btn-success",onClick:t[10]||(t[10]=s=>n("Example notification text.","bottom-start",!1))}," No Action ")])]),e(r).includes("code3")?(i(),p(b,{key:0},{default:f(()=>t[34]||(t[34]=[o("pre",null,`<!-- no action -->
<button type="button" class="btn btn-success" @click="showMessage('Example notification text.', 'bottom-start',false)">No Action</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1)])),_:1})):x("",!0)]),o("div",K,[o("div",Q,[t[36]||(t[36]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"Click Callback",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[11]||(t[11]=s=>e(a)("code4"))},[o("span",U,[l(c,{class:"me-2"}),t[35]||(t[35]=m(" Code "))])])]),o("div",X,[o("div",Y,[o("button",{type:"button",class:"btn btn-info",onClick:t[12]||(t[12]=s=>y())},"Click Callback")])]),e(r).includes("code4")?(i(),p(b,{key:0},{default:f(()=>t[37]||(t[37]=[o("pre",null,`<!-- click callback -->
<button type="button" class="btn btn-info" @click="clickCallable()">Click Callback</button>

<!-- script -->
<script>
    const clickCallable = () => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: "Custom callback when action button is clicked.",
            showCloseButton: true,
            showConfirmButton: false,
        }).then((result) => {
            Swal.fire({
                toast: true,
                position: 'bottom-start',
                text: 'Thanks for clicking the Dismiss button!',
                showCloseButton: true,
                showConfirmButton: false,
            });
        });
    };
<\/script>
`,-1)])),_:1})):x("",!0)]),o("div",Z,[o("div",_,[t[39]||(t[39]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"Duration",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[13]||(t[13]=s=>e(a)("code5"))},[o("span",tt,[l(c,{class:"me-2"}),t[38]||(t[38]=m(" Code "))])])]),o("div",ot,[o("div",st,[o("button",{type:"button",class:"btn btn-dark",onClick:t[14]||(t[14]=s=>n("Example notification text.","bottom-start",!0,"",5e3))}," Duration ")])]),e(r).includes("code5")?(i(),p(b,{key:0},{default:f(()=>t[40]||(t[40]=[o("pre",null,`<!-- click callback -->
<button type="button" class="btn btn-dark" @click="showMessage(msg='Example notification text.', position= 'bottom-start', duration=5000)">Duration</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1)])),_:1})):x("",!0)]),o("div",et,[o("div",nt,[t[42]||(t[42]=o("h5",{class:"font-semibold text-lg dark:text-white-light"},"Background Color",-1)),o("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[15]||(t[15]=s=>e(a)("code6"))},[o("span",it,[l(c,{class:"me-2"}),t[41]||(t[41]=m(" Code "))])])]),o("div",lt,[o("div",rt,[o("div",null,[o("button",{type:"button",class:"btn btn-primary",onClick:t[16]||(t[16]=s=>d("primary"))},"Primary"),t[43]||(t[43]=o("div",{id:"primary-toast"},null,-1))]),o("div",null,[o("button",{type:"button",class:"btn btn-secondary",onClick:t[17]||(t[17]=s=>d("secondary"))},"Secondary"),t[44]||(t[44]=o("div",{id:"secondary-toast"},null,-1))]),o("div",null,[o("button",{type:"button",class:"btn btn-success",onClick:t[18]||(t[18]=s=>d("success"))},"Success"),t[45]||(t[45]=o("div",{id:"success-toast"},null,-1))]),o("div",null,[o("button",{type:"button",class:"btn btn-danger",onClick:t[19]||(t[19]=s=>d("danger"))},"Danger"),t[46]||(t[46]=o("div",{id:"danger-toast"},null,-1))]),o("div",null,[o("button",{type:"button",class:"btn btn-warning",onClick:t[20]||(t[20]=s=>d("warning"))},"Warning"),t[47]||(t[47]=o("div",{id:"warning-toast"},null,-1))]),o("div",null,[o("button",{type:"button",class:"btn btn-info",onClick:t[21]||(t[21]=s=>d("info"))},"Info"),t[48]||(t[48]=o("div",{id:"info-toast"},null,-1))])])]),e(r).includes("code6")?(i(),p(b,{key:0},{default:f(()=>t[49]||(t[49]=[o("pre",null,`<!-- primary -->
<div>
    <button type="button" class="btn btn-primary" @click="coloredToast('primary')">Primary</button>
    <div id="primary-toast"></div>
</div>

<!-- secondary -->
<div>
    <button type=" button" class="btn btn-secondary" @click="coloredToast('secondary')">Secondary</button>
    <div id="secondary-toast"></div>
</div>

<!-- success -->
<div>
    <button type="button" class="btn btn-success" @click="coloredToast('success')">Success</button>
    <div id="success-toast"></div>
</div>

<!-- danger -->
<div>
    <button type="button" class="btn btn-danger" @click="coloredToast('danger')">Danger</button>
    <div id="danger-toast"></div>
</div>

<!-- warning -->
<div>
    <button type="button" class="btn btn-warning" @click="coloredToast('warning')">Warning</button>
    <div id="warning-toast"></div>
</div>

<!-- info -->
<div>
    <button type="button" class="btn btn-info" @click="coloredToast('info')">Info</button>
    <div id="info-toast"></div>
</div>

<!-- script -->
<script>
    const coloredToast = (color) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: \`color-\${color}\`
            },
            target: document.getElementById(color + '-toast')
        });
        toast.fire({
            title: 'Example notification text.',
        });
    };
<\/script>
`,-1)])),_:1})):x("",!0)])])])]))}});export{ft as default};
