(()=>{var e={};e.id=841,e.ids=[841],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},93404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>d.a,__next_app__:()=>h,pages:()=>l,routeModule:()=>f,tree:()=>c});var r=a(70260),s=a(28203),n=a(25155),d=a.n(n),o=a(67292),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);a.d(t,i);let c=["",{children:["(admin)",{children:["tsk",{children:["admin",{children:["(dash)",{children:["news",{children:["preview",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,76905)),"C:\\Users\\space\\OneDrive\\Documentos\\Proyectos\\tsukimoto-front\\app\\(admin)\\tsk\\admin\\(dash)\\news\\preview\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,31243)),"C:\\Users\\space\\OneDrive\\Documentos\\Proyectos\\tsukimoto-front\\app\\(admin)\\tsk\\admin\\(dash)\\layout.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,19611)),"C:\\Users\\space\\OneDrive\\Documentos\\Proyectos\\tsukimoto-front\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\space\\OneDrive\\Documentos\\Proyectos\\tsukimoto-front\\app\\(admin)\\tsk\\admin\\(dash)\\news\\preview\\[id]\\page.tsx"],h={require:a,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(admin)/tsk/admin/(dash)/news/preview/[id]/page",pathname:"/tsk/admin/news/preview/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},97801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{"008418f1fa81505ed524a8f43b53ad767d01b59b80":()=>r.aE,"401682f2cca79df46022f84310c4c29fe6876f3c43":()=>r.Q4,"4020b32b4028671a98d1a79fd38e36808739e97463":()=>r.Qd,"403c148a4a5fdffaec876c6b842290bfc1cb7c9901":()=>r.fq});var r=a(50975)},66094:(e,t,a)=>{"use strict";a.r(t),a.d(t,{"00326c04844c7092416e7d9421a736439ce9dcf3ae":()=>s.d$,"008f05fb121196b40e24d81d0cac40dbf5a5554095":()=>s.dC,"00bc54e9920f2f3956791d27ad3a531bffd4d7f3dc":()=>r.KM,"00f833499cef9148ebe5b9598b89d6e20040b609be":()=>r.bc,"40181a89b9e083dc22c6cb7a6768b07f21a268e0db":()=>s.$k,"403d4cb87bebf3d0f9214f2d39c257f93cf82f5cb9":()=>s.ro,"406e1241af7c398cb9e89396a6346ff8931de14f9c":()=>r.dG,"4072b5516376576bcbdcf738d874d63cce91352b15":()=>s.co,"409d9cc58b30e12f5f46aee649631d41c876b0c068":()=>s.qH,"40d81a1848a9442b33e2eae2df620c703dddc17c28":()=>r.AC});var r=a(49981),s=a(59905)},95430:(e,t,a)=>{Promise.resolve().then(a.bind(a,87493))},65166:(e,t,a)=>{Promise.resolve().then(a.bind(a,97873))},76905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(62740),s=a(87493),n=a(50975);a(76301);var d=a(36587);let o=process.env.URL_API;async function i(e){let t=await e.params;var a=await (0,n.fq)(t.id),i=a[0].date;i=(i=i.split("T"))[0].split("-");var c=`${i[2]}/${i[1]}/${i[0]}`;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"fixed z-20 bg-[#27528e] w-5/6",children:[(0,r.jsx)(s.default,{back:"/tsk/admin/news",page:"",add:"",type:"",genres:[],serie:[]}),(0,r.jsx)("h2",{className:"text-white text-2xl text-center",children:a[0].name}),(0,r.jsxs)("div",{className:"grid grid-cols-2 mt-2 mx-4 text-white justify-items-end",children:[(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:a[0].previewContent})}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:c})})]})]}),(0,r.jsxs)("div",{className:"flex justify-between px-4",children:[(0,r.jsx)("div",{className:"w-1/2 fixed bottom-8",children:(0,r.jsx)("img",{className:"rounded-lg shadow-lg max-w-[70%] max-h-[70%]",src:`${o}/images/${a[0].portada}`})}),(0,r.jsx)("div",{className:"m-4 mt-16 ml-auto relative top-48 w-1/2",children:(0,d.Ay)(a[0].content)})]})]})})}},50975:(e,t,a)=>{"use strict";a.d(t,{Q4:()=>d,Qd:()=>c,aE:()=>o,fq:()=>i});var r=a(88977);a(98063);var s=a(61482),n=a(44512);async function d(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/news/create`,{method:"POST",body:e,headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/news"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function o(){let e=process.env.URL_API;var t=await fetch(`${e}/api/news`,{method:"GET"}).then(e=>e.json());return t.ok?t.data:[]}async function i(e){let t=process.env.URL_API;var a=await fetch(`${t}/api/news/${e}`,{method:"GET"}).then(e=>e.json());return a.ok?a.data:[]}async function c(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/news/${e}`,{method:"DELETE",headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/news"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}(0,a(56215).D)([d,o,i,c]),(0,r.A)(d,"401682f2cca79df46022f84310c4c29fe6876f3c43",null),(0,r.A)(o,"008418f1fa81505ed524a8f43b53ad767d01b59b80",null),(0,r.A)(i,"403c148a4a5fdffaec876c6b842290bfc1cb7c9901",null),(0,r.A)(c,"4020b32b4028671a98d1a79fd38e36808739e97463",null)},59905:(e,t,a)=>{"use strict";a.d(t,{$k:()=>d,co:()=>o,d$:()=>l,dC:()=>h,qH:()=>i,ro:()=>c});var r=a(21590);a(70376);var s=a(47735),n=a(42385);async function d(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/products/createserie`,{method:"POST",body:e,headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/products"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function o(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/products/createvol`,{method:"POST",body:e,headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/products"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function i(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/products/serie/${e}`,{method:"DELETE",headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/products"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function c(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/products/serie/vol/${e}`,{method:"DELETE",headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/products"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function l(){let e=process.env.URL_API;var t=await fetch(`${e}/api/products/`,{method:"GET"}).then(e=>e.json());return t.ok?t.products:[]}async function h(){let e=process.env.URL_API;var t=await fetch(`${e}/api/products/series`,{method:"GET"}).then(e=>e.json());return t.ok?t.serie:[]}(0,a(99344).D)([d,o,i,c,l,h]),(0,r.A)(d,"40181a89b9e083dc22c6cb7a6768b07f21a268e0db",null),(0,r.A)(o,"4072b5516376576bcbdcf738d874d63cce91352b15",null),(0,r.A)(i,"409d9cc58b30e12f5f46aee649631d41c876b0c068",null),(0,r.A)(c,"403d4cb87bebf3d0f9214f2d39c257f93cf82f5cb9",null),(0,r.A)(l,"00326c04844c7092416e7d9421a736439ce9dcf3ae",null),(0,r.A)(h,"008f05fb121196b40e24d81d0cac40dbf5a5554095",null)},49981:(e,t,a)=>{"use strict";a.d(t,{AC:()=>c,KM:()=>o,bc:()=>i,dG:()=>d});var r=a(21590);a(70376);var s=a(47735),n=a(42385);async function d(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/shops/create`,{method:"POST",body:e,headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/shops"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}async function o(){let e=process.env.URL_API;var t=await fetch(`${e}/api/shops`,{method:"GET"}).then(e=>e.json());return t.ok?t.data:[]}async function i(){let e=process.env.URL_API;var t=await fetch(`${e}/api/shops`,{method:"GET"}).then(e=>e.json());return t.ok?t.data.reduce((e,t)=>(e[t.region]||(e[t.region]={}),e[t.region][t.commune]||(e[t.region][t.commune]=[]),e[t.region][t.commune].push(t),e),{}):[]}async function c(e){let t=process.env.URL_API,a=(await (0,n.UL)()).get("tath");var r=await fetch(`${t}/api/shops/${e}`,{method:"DELETE",headers:{Cookie:`tath=${a.value}`}}).then(e=>e.json());if(r.ok)return(0,s.revalidatePath)("/tsk/admin/shops"),(0,s.revalidatePath)("/"),r.message;throw Error(r.error)}(0,a(99344).D)([d,o,i,c]),(0,r.A)(d,"406e1241af7c398cb9e89396a6346ff8931de14f9c",null),(0,r.A)(o,"00bc54e9920f2f3956791d27ad3a531bffd4d7f3dc",null),(0,r.A)(i,"00f833499cef9148ebe5b9598b89d6e20040b609be",null),(0,r.A)(c,"40d81a1848a9442b33e2eae2df620c703dddc17c28",null)}};var t=require("../../../../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[989,614,77,8,861,651,462,775,587,965],()=>a(93404));module.exports=r})();