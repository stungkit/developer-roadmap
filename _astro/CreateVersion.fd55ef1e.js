import{j as e}from"./jsx-runtime.6940b965.js";import{r as s}from"./index.070054a4.js";import{a as j,h as v}from"./http.408ee04f.js";import{u as w}from"./use-toast.dbd347db.js";import{i as d}from"./jwt.ab9b7b25.js";import{s as f}from"./popup.a359f713.js";import{M as k}from"./map.07b8754f.js";import{L as N}from"./loader-2.7ee93c0d.js";import{c as C}from"./createLucideIcon.3c9fdece.js";import"./toast.5b8c89b6.js";import"./index.4b590221.js";const V=C("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9",key:"c89w8i"}],["path",{d:"M12 12v3",key:"158kv8"}]]);function U(u){const{roadmapId:o}=u,p=w(),[m,t]=s.useState(!0),[i,l]=s.useState(!1),[x,n]=s.useState(!1),[c,h]=s.useState();async function g(){if(!d())return;t(!0);const{response:r,error:a}=await j(`https://api.roadmap.sh/v1-get-my-version/${o}`,{});if(a||!r){t(!1);return}t(!1),h(r)}s.useEffect(()=>{g().finally(()=>{t(!1)})},[]);async function b(){if(i||!o)return;if(!d()){f();return}l(!0);const{response:r,error:a}=await v(`https://api.roadmap.sh/v1-create-version/${o}`,{});if(a||!r){l(!1),p.error(a?.message||"Failed to create version");return}const y=`https://draw.roadmap.sh/${r?.roadmapId}`;window.open(y,"_blank")}return m?e.jsx("div",{className:"h-[30px] w-[206px] animate-pulse rounded-md bg-gray-300"}):!m&&c?._id?e.jsx("div",{className:"flex items-center",children:e.jsxs("a",{href:`/r?id=${c._id}`,className:"flex items-center rounded-md border border-blue-400 bg-gray-50 px-2.5 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 max-sm:hidden sm:text-sm",children:[e.jsx(k,{size:"15px",className:"mr-1.5"}),"Visit your own version"]})}):x?e.jsxs("p",{className:"flex h-[30px] items-center text-sm text-red-500",children:["Create and edit a custom roadmap from this?",e.jsx("button",{onClick:()=>{n(!1),b().finally(()=>null)},className:"ml-2 font-semibold underline underline-offset-2",children:"Yes"}),e.jsx("span",{className:"text-xs",children:" / "}),e.jsx("button",{className:"font-semibold underline underline-offset-2",onClick:()=>n(!1),children:"No"})]}):e.jsx("button",{disabled:i,className:"flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 max-sm:hidden sm:text-sm",onClick:()=>{if(!d()){f();return}n(!0)},children:i?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"mr-2 h-3 w-3 animate-spin stroke-[2.5]"}),"Please wait .."]}):e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"mr-1.5",size:"16px"}),"Create your own Version"]})})}export{U as CreateVersion};
