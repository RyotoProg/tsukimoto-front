(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{1949:(e,a,n)=>{Promise.resolve().then(n.bind(n,7854))},7854:(e,a,n)=>{"use strict";n.d(a,{default:()=>O});var r=n(5155),t=n(5828);let i=(0,t.createServerReference)("40b6f70a709f2a9e877de0806268aa5df99a5c8215",t.callServer,void 0,t.findSourceMapURL,"createGender"),o=(0,t.createServerReference)("40c8ff32c316262d97f5512b79882adf62da4e9aca",t.callServer,void 0,t.findSourceMapURL,"deleteGender"),l=(0,t.createServerReference)("406dfbca4ada07dedb61a57f76d7ab772863cbc4b4",t.callServer,void 0,t.findSourceMapURL,"changeMaintance");var s=n(2115),c=n(4349),d=n(5407),u=n(2541),m=n(6128),f=n(5268),b=n(883),p=n(4406),v=n(4622),g=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=String(e).toLowerCase(),t=String(n.getOptionValue(a)).toLowerCase(),i=String(n.getOptionLabel(a)).toLowerCase();return t===r||i===r},x={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,a,n,r){return!(!e||a.some(function(a){return h(e,a,r)})||n.some(function(a){return h(e,a,r)}))},getNewOptionData:function(e,a){return{label:a,value:e,__isNew__:!0}}};n(7650),n(6637);var w=(0,s.forwardRef)(function(e,a){var n,r,t,i,o,l,c,h,w,N,C,O,j,S,L,k,A,R,_,V,y,M,E,D,G,P,U,H,W=(t=void 0!==(r=(n=(0,m.u)(e)).allowCreateWhileLoading)&&r,o=void 0===(i=n.createOptionPosition)?"last":i,c=void 0===(l=n.formatCreateLabel)?x.formatCreateLabel:l,w=void 0===(h=n.isValidNewOption)?x.isValidNewOption:h,C=void 0===(N=n.getNewOptionData)?x.getNewOptionData:N,O=n.onCreateOption,S=void 0===(j=n.options)?[]:j,L=n.onChange,R=void 0===(A=(k=(0,p.A)(n,g)).getOptionValue)?u.g:A,V=void 0===(_=k.getOptionLabel)?u.b:_,y=k.inputValue,M=k.isLoading,E=k.isMulti,D=k.value,G=k.name,P=(0,s.useMemo)(function(){return w(y,(0,v.H)(D),S,{getOptionValue:R,getOptionLabel:V})?C(y,c(y)):void 0},[c,C,V,R,y,w,S,D]),U=(0,s.useMemo)(function(){return(t||!M)&&P?"first"===o?[P].concat((0,b.A)(S)):[].concat((0,b.A)(S),[P]):S},[t,o,M,P,S]),H=(0,s.useCallback)(function(e,a){if("select-option"!==a.action)return L(e,a);var n=Array.isArray(e)?e:[e];if(n[n.length-1]===P){if(O)O(y);else{var r=C(y,y);L((0,v.D)(E,[].concat((0,b.A)((0,v.H)(D)),[r]),r),{action:"create-option",name:G,option:r})}return}L(e,a)},[C,y,E,G,P,O,L,D]),(0,f.A)((0,f.A)({},k),{},{options:U,onChange:H}));return s.createElement(u.S,(0,d.A)({ref:a},W))}),N=n(4932);let C=[{value:!1,label:"Pagina disponible"},{value:!0,label:"En mantenimiento"}];function O(e){let{config:a}=e,[n,t]=(0,s.useState)(),[d,u]=(0,s.useState)(C.filter(e=>e.value==a.maintance)),m=async e=>{N.oR.promise(i(e),{success:{render(e){let{data:a}=e;return a}},error:{render(e){let{data:a}=e;return a.name="",a.toString()}}})},f=async()=>{N.oR.promise(o(n),{success:{render(e){let{data:a}=e;return a}},error:{render(e){let{data:a}=e;return a.name="",a.toString()}}})},b=async e=>{N.oR.promise(l(e),{success:{render(e){let{data:a}=e;return a}},error:{render(e){let{data:a}=e;return a.name="",a.toString()}}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("h2",{className:"font-bold",children:"Configuracion de la tienda"})}),(0,r.jsx)("hr",{className:"my-4 md:min-w-full"}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("h3",{className:"font-bold",children:"Generos"})}),(0,r.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,r.jsxs)("div",{className:"w-full px-3 mb-0",children:[(0,r.jsx)("label",{className:"block uppercase tracking-wide text-xs font-bold mb-2",children:"Nombre del genero"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(w,{isClearable:!0,onCreateOption:e=>m(e),className:"text-[#404040] w-9/12",options:a.genres,onChange:e=>t(null==e?void 0:e.value)}),(0,r.jsx)("button",{onClick:f,className:"bg-[#d1462f] ml-3 p-2 rounded-lg",children:"Eliminar genero"})]})]})}),(0,r.jsx)("hr",{className:"my-4 md:min-w-full"}),(0,r.jsx)("form",{action:b,children:(0,r.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[(0,r.jsxs)("div",{className:"w-full px-3 mb-0",children:[(0,r.jsx)("label",{className:"block uppercase tracking-wide text-xs font-bold mb-2",children:"Configuracion del Mantenimiento"}),(0,r.jsx)(c.Ay,{className:"text-[#404040] w-full",name:"maintance",options:C,defaultValue:d})]}),(0,r.jsx)("button",{className:"w-full border-white border-2 rounded-md hover:bg-white hover:text-black mt-4",children:"Guardar"})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[551,476,441,517,358],()=>a(1949)),_N_E=e.O()}]);