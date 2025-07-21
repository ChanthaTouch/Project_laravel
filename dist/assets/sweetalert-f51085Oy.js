import{c as v,_ as d,I as p}from"./icon-code-D7QmxkRG.js";import{S as o}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{d as h,u as C,o as l,c as k,a as e,h as r,i as n,j as m,V as b,w as f,C as g}from"./index-dI1uNq6t.js";import{I as B}from"./icon-bell-DigOGByS.js";const S={class:"pt-5 space-y-8 sweet-alerts"},A={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},j={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},T={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},_={class:"panel"},$={class:"flex items-center justify-between mb-5"},I={class:"flex items-center"},Y={class:"mb-5"},M={class:"flex items-center justify-center"},L={class:"panel"},D={class:"flex items-center justify-between mb-5"},q={class:"flex items-center"},P={class:"mb-5"},W={class:"flex items-center justify-center"},O={class:"panel"},N={class:"flex items-center justify-between mb-5"},H={class:"flex items-center"},R={class:"mb-5"},V={class:"flex items-center justify-center"},U={class:"panel"},Q={class:"flex items-center justify-between mb-5"},G={class:"flex items-center"},J={class:"mb-5"},F={class:"flex items-center justify-center"},E={class:"panel"},X={class:"flex items-center justify-between mb-5"},z={class:"flex items-center"},K={class:"mb-5"},Z={class:"flex items-center justify-center"},tt={class:"panel"},et={class:"flex items-center justify-between mb-5"},st={class:"flex items-center"},nt={class:"mb-5"},ot={class:"flex items-center justify-center"},it={class:"panel"},lt={class:"flex items-center justify-between mb-5"},rt={class:"flex items-center"},at={class:"mb-5"},ut={class:"flex items-center justify-center"},ct={class:"panel"},dt={class:"flex items-center justify-between mb-5"},pt={class:"flex items-center"},mt={class:"mb-5"},bt={class:"flex items-center justify-center"},ft={class:"panel"},gt={class:"flex items-center justify-between mb-5"},wt={class:"flex items-center"},xt={class:"mb-5"},yt={class:"flex items-center justify-center"},vt={class:"panel"},ht={class:"flex items-center justify-between mb-5"},Ct={class:"flex items-center"},kt={class:"mb-5"},Bt={class:"flex items-center justify-center"},St={class:"panel"},At={class:"flex items-center justify-between mb-5"},jt={class:"flex items-center"},Tt={class:"mb-5"},_t={class:"flex items-center justify-center"},$t={class:"panel"},It={class:"flex items-center justify-between mb-5"},Yt={class:"flex items-center"},Mt={class:"mb-5"},Lt={class:"flex items-center justify-center"},Dt={class:"panel"},qt={class:"flex items-center justify-between mb-5"},Pt={class:"flex items-center"},Wt={class:"mb-5"},Ot={class:"flex items-center justify-center"},Nt={class:"panel"},Ht={class:"flex items-center justify-between mb-5"},Rt={class:"flex items-center"},Vt={class:"mb-5"},Ut={class:"flex items-center justify-center",id:"rtl-container"},Qt={class:"panel"},Gt={class:"flex items-center justify-between mb-5"},Jt={class:"flex items-center"},Ft={class:"mb-5"},Et={class:"flex items-center justify-center"},ee=h({__name:"sweetalert",setup(Xt){C({title:"Sweetalert"});const{codeArr:a,toggleCode:u}=v(),c=async i=>{if(i===1)o.fire({title:"Saved succesfully",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===2)o.fire({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===3){const t="https://api.ipify.org?format=json";o.fire({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,customClass:{popup:"sweet-alerts"},preConfirm:()=>fetch(t).then(s=>s.json()).then(s=>{o.fire({title:s.ip,customClass:{popup:"sweet-alerts"}})}).catch(()=>{o.fire({icon:"error",title:"Unable to get your public IP",customClass:{popup:"sweet-alerts"}})})})}else if(i===4)o.fire({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===5){const t=["1","2","3"],s=o.mixin({confirmButtonText:"Next →",showCancelButton:!0,progressSteps:t,input:"text",inputAttributes:{required:"true"},validationMessage:"This field is required",padding:"2em",customClass:{popup:"sweet-alerts"}}),x=[];let w;for(w=0;w<t.length;){const y=await s.fire({title:`Question ${t[w]}`,text:w==0?"Chaining swal modals is easy.":"",inputValue:x[w]||"",showCancelButton:w>0,currentProgressStep:w,customClass:{popup:"sweet-alerts"}});if(y.value)x[w]=y.value,w++;else if(y.dismiss===o.DismissReason.cancel)w--;else break}w===t.length&&o.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(x)+"</pre>",confirmButtonText:"Lovely!",customClass:{popup:"sweet-alerts"}})}else if(i===6)o.fire({title:"Custom animation with Animate.css",showClass:{popup:"animate__animated animate__flip"},hideClass:{popup:"animate__animated animate__fadeOutUp"},padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===7){let t;o.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,customClass:{popup:"sweet-alerts"},didOpen:()=>{var x;o.showLoading();const s=(x=o.getHtmlContainer())==null?void 0:x.querySelector("b");t=setInterval(()=>{s.textContent=o.getTimerLeft()},100)},willClose:()=>{clearInterval(t)}}).then(s=>{s.dismiss===o.DismissReason.timer&&console.log("I was closed by the timer")})}else if(i===8)o.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/custom-swal.svg",imageWidth:224,imageHeight:"auto",imageAlt:"Custom image",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===9)o.fire({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(i===10)o.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:{popup:"sweet-alerts"}}).then(t=>{t.value&&o.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:{popup:"sweet-alerts"}})});else if(i===11){const t=o.mixin({customClass:{popup:"sweet-alerts",confirmButton:"btn btn-secondary",cancelButton:"btn btn-dark ltr:mr-3 rtl:ml-3"},buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(s=>{s.value?t.fire("Deleted!","Your file has been deleted.","success"):s.dismiss===o.DismissReason.cancel&&t.fire("Cancelled","Your imaginary file is safe :)","error")})}else i===12?o.fire({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:{popup:"background-modal sweet-alerts"},background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):i===13?o.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:;">Why do I have this issue?</a>',padding:"2em",customClass:{popup:"sweet-alerts"}}):i===14?o.fire({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,padding:"2em",customClass:{popup:"sweet-alerts"}}):i===15&&o.mixin({toast:!0,position:"top-end",showConfirmButton:!1}).fire({icon:"success",title:"Signed in successfully",padding:"10px 20px"})};return(i,t)=>(l(),k("div",null,[t[78]||(t[78]=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Sweet Alerts")])],-1)),e("div",S,[e("div",A,[e("div",j,[r(B)]),t[30]||(t[30]=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1)),t[31]||(t[31]=e("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/sweetalert2",-1))]),e("div",T,[e("div",_,[e("div",$,[t[33]||(t[33]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic message",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=s=>n(u)("code1"))},[e("span",I,[r(p,{class:"me-2"}),t[32]||(t[32]=m(" Code "))])])]),e("div",Y,[e("div",M,[e("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=s=>c(1))},"Basic message")])]),n(a).includes("code1")?(l(),b(d,{key:0},{default:f(()=>t[34]||(t[34]=[e("pre",null,`<!-- basic message -->
<button type="button" class="btn btn-primary" @click="showAlert()">Basic message</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",L,[e("div",D,[t[36]||(t[36]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Success message",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=s=>n(u)("code2"))},[e("span",q,[r(p,{class:"me-2"}),t[35]||(t[35]=m(" Code "))])])]),e("div",P,[e("div",W,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[3]||(t[3]=s=>c(2))},"Success message!")])]),n(a).includes("code2")?(l(),b(d,{key:0},{default:f(()=>t[37]||(t[37]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Success message!</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",O,[e("div",N,[t[39]||(t[39]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dynamic queue",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=s=>n(u)("code3"))},[e("span",H,[r(p,{class:"me-2"}),t[38]||(t[38]=m(" Code "))])])]),e("div",R,[e("div",V,[e("button",{type:"button",class:"btn btn-success",onClick:t[5]||(t[5]=s=>c(3))},"Dynamic queue")])]),n(a).includes("code3")?(l(),b(d,{key:0},{default:f(()=>t[40]||(t[40]=[e("pre",null,`<!-- dynamic queue -->
<button type="button" class="btn btn-success" @click="showAlert()">Dynamic queue</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received ' + 'via AJAX request',
            showLoaderOnConfirm: true,
            customClass: { popup: 'sweet-alerts' },
            preConfirm: () => {
                return fetch(ipAPI)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        Swal.fire({
                            title: data.ip,
                            customClass: { popup: 'sweet-alerts' },
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unable to get your public IP',
                            customClass: { popup: 'sweet-alerts' },
                        });
                    });
            },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",U,[e("div",Q,[t[42]||(t[42]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"A title with a text under",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=s=>n(u)("code5"))},[e("span",G,[r(p,{class:"me-2"}),t[41]||(t[41]=m(" Code "))])])]),e("div",J,[e("div",F,[e("button",{type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=s=>c(4))},"Title & text")])]),n(a).includes("code5")?(l(),b(d,{key:0},{default:f(()=>t[43]||(t[43]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-danger" @click="showAlert()">Title & text</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",E,[e("div",X,[t[45]||(t[45]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Chaining modals (queue)",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=s=>n(u)("code6"))},[e("span",z,[r(p,{class:"me-2"}),t[44]||(t[44]=m(" Code "))])])]),e("div",K,[e("div",Z,[e("button",{type:"button",class:"btn btn-warning",onClick:t[9]||(t[9]=s=>c(5))},"Chaining modals (queue)")])]),n(a).includes("code6")?(l(),b(d,{key:0},{default:f(()=>t[46]||(t[46]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-warning" @click="showAlert()">Chaining modals (queue)</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const steps = ['1', '2', '3'];
        const swalQueueStep = Swal.mixin({
            confirmButtonText: 'Next →',
            showCancelButton: true,
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true,
            },
            validationMessage: 'This field is required',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });

        const values = [];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length;) {
            const result = await swalQueueStep.fire({
                title: \`Question \${steps[currentStep]}\`,
                text: currentStep == 0 ? 'Chaining swal modals is easy.' : '',
                inputValue: values[currentStep],
                showCancelButton: currentStep > 0,
                currentProgressStep: currentStep,
                customClass: { popup: 'sweet-alerts' },
            });
            if (result.value) {
                values[currentStep] = result.value;
                currentStep++;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                currentStep--;
            } else {
                break;
            }
        }

        if (currentStep === steps.length) {
            Swal.fire({
                title: 'All done!',
                padding: '2em',
                html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                confirmButtonText: 'Lovely!',
                customClass: { popup: 'sweet-alerts' },
            });
        }
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",tt,[e("div",et,[t[48]||(t[48]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom animation",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[10]||(t[10]=s=>n(u)("code7"))},[e("span",st,[r(p,{class:"me-2"}),t[47]||(t[47]=m(" Code "))])])]),e("div",nt,[e("div",ot,[e("button",{type:"button",class:"btn btn-info",onClick:t[11]||(t[11]=s=>c(6))},"Custom animation")]),t[49]||(t[49]=e("div",{class:"fixed inset-0 bg-[black]/60 z-[999] transition-all duration-300 px-4 hidden"},[e("div",{class:"panel absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-[480px] text-center"},[e("h3",{class:"text-[#3b3f5c] dark:text-white-light text-2xl font-bold mb-5"},"Custom animation with Animate.css"),e("button",{type:"button",class:"btn btn-info"},"Ok")])],-1))]),n(a).includes("code7")?(l(),b(d,{key:0},{default:f(()=>t[50]||(t[50]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-info" @click="showAlert()">Custom animation</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            animation: false,
            showClass: {
                popup: 'animate__animated animate__flip'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",it,[e("div",lt,[t[52]||(t[52]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Message with auto close timer",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[12]||(t[12]=s=>n(u)("code8"))},[e("span",rt,[r(p,{class:"me-2"}),t[51]||(t[51]=m(" Code "))])])]),e("div",at,[e("div",ut,[e("button",{type:"button",class:"btn btn-primary",onClick:t[13]||(t[13]=s=>c(7))},"Message timer")])]),n(a).includes("code8")?(l(),b(d,{key:0},{default:f(()=>t[53]||(t[53]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-primary" @click="showAlert()">Message timer</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        let timerInterval;

        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            customClass: { popup: 'sweet-alerts' },
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",ct,[e("div",dt,[t[55]||(t[55]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Message with custom image",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[14]||(t[14]=s=>n(u)("code9"))},[e("span",pt,[r(p,{class:"me-2"}),t[54]||(t[54]=m(" Code "))])])]),e("div",mt,[e("div",bt,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[15]||(t[15]=s=>c(8))},"Message with custom image")])]),n(a).includes("code9")?(l(),b(d,{key:0},{default:f(()=>t[56]||(t[56]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Message with custom image</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: ('/assets/images/thumbs-up.jpg'),
            imageWidth: 224,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false,
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",ft,[e("div",gt,[t[58]||(t[58]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom HTML description and buttons",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[16]||(t[16]=s=>n(u)("code10"))},[e("span",wt,[r(p,{class:"me-2"}),t[57]||(t[57]=m(" Code "))])])]),e("div",xt,[e("div",yt,[e("button",{type:"button",class:"btn btn-danger",onClick:t[17]||(t[17]=s=>c(9))},"Custom Description & buttons")])]),n(a).includes("code10")?(l(),b(d,{key:0},{default:f(()=>t[59]||(t[59]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-danger" @click="showAlert()">Custom Description & buttons</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",vt,[e("div",ht,[t[61]||(t[61]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},'Warning message, with "Confirm" button',-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[18]||(t[18]=s=>n(u)("code11"))},[e("span",Ct,[r(p,{class:"me-2"}),t[60]||(t[60]=m(" Code "))])])]),e("div",kt,[e("div",Bt,[e("button",{type:"button",class:"btn btn-success",onClick:t[19]||(t[19]=s=>c(10))},"Confirm")])]),n(a).includes("code11")?(l(),b(d,{key:0},{default:f(()=>t[62]||(t[62]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-success" @click="showAlert()">Confirm</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: { popup: 'sweet-alerts' }, });
            }
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",St,[e("div",At,[t[64]||(t[64]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},'Execute something else for "Cancel".',-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[20]||(t[20]=s=>n(u)("code12"))},[e("span",jt,[r(p,{class:"me-2"}),t[63]||(t[63]=m(" Code "))])])]),e("div",Tt,[e("div",_t,[e("button",{type:"button",class:"btn btn-warning",onClick:t[21]||(t[21]=s=>c(11))},'Addition else for "Cancel".')])]),n(a).includes("code12")?(l(),b(d,{key:0},{default:f(()=>t[65]||(t[65]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-warning" @click="showAlert()">Addition else for "Cancel".</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                popup: 'sweet-alerts',
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
        .fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            padding: '2em',
        })
        .then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",$t,[e("div",It,[t[67]||(t[67]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"A message with custom width, padding and background",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[22]||(t[22]=s=>n(u)("code13"))},[e("span",Yt,[r(p,{class:"me-2"}),t[66]||(t[66]=m(" Code "))])])]),e("div",Mt,[e("div",Lt,[e("button",{type:"button",class:"btn btn-info",onClick:t[23]||(t[23]=s=>c(12))},"Custom Message")])]),n(a).includes("code13")?(l(),b(d,{key:0},{default:f(()=>t[68]||(t[68]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-info" @click="showAlert()">Custom Message</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(' + ('/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%',
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",Dt,[e("div",qt,[t[70]||(t[70]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"With Footer",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[24]||(t[24]=s=>n(u)("code14"))},[e("span",Pt,[r(p,{class:"me-2"}),t[69]||(t[69]=m(" Code "))])])]),e("div",Wt,[e("div",Ot,[e("button",{type:"button",class:"btn btn-dark",onClick:t[25]||(t[25]=s=>c(13))},"With Footer")])]),n(a).includes("code14")?(l(),b(d,{key:0},{default:f(()=>t[71]||(t[71]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-dark" @click="showAlert()">With Footer</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",Nt,[e("div",Ht,[t[73]||(t[73]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"RTL support",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[26]||(t[26]=s=>n(u)("code15"))},[e("span",Rt,[r(p,{class:"me-2"}),t[72]||(t[72]=m(" Code "))])])]),e("div",Vt,[e("div",Ut,[e("button",{type:"button",class:"btn btn-primary",onClick:t[27]||(t[27]=s=>c(14))},"RTL")])]),n(a).includes("code15")?(l(),b(d,{key:0},{default:f(()=>t[74]||(t[74]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-primary" @click="showAlert()">RTL</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)]),e("div",Qt,[e("div",Gt,[t[76]||(t[76]=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Mixin",-1)),e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[28]||(t[28]=s=>n(u)("code16"))},[e("span",Jt,[r(p,{class:"me-2"}),t[75]||(t[75]=m(" Code "))])])]),e("div",Ft,[e("div",Et,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[29]||(t[29]=s=>c(15))},"Mixin")])]),n(a).includes("code16")?(l(),b(d,{key:0},{default:f(()=>t[77]||(t[77]=[e("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Mixin</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '2em',
            customClass: { popup: 'sweet-alerts' },
        });
    }
<\/script>
`,-1)])),_:1})):g("",!0)])])])]))}});export{ee as default};
