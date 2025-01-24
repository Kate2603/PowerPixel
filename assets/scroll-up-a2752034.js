import{a as f}from"./vendor-cc1203f3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i=f.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),L=async e=>{var r,s;const t=await i.post("/subscription",{email:e});if((r=t.data)!=null&&r.error)throw new Error(((s=t.data)==null?void 0:s.error)||"Subscription failed");return t.data},w=async(e="Muscles",t=1)=>{const s=window.innerWidth<768?9:12;try{const o=await i.get("/filters",{params:{filter:e,page:t,limit:s}});if(!o.data)throw new Error("No data received");return o.data}catch(o){throw console.error("Error fetching categories:",o),new Error("Failed to fetch categories. Please try again later.")}},m=async()=>{try{return(await i.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},q=async({bodypart:e="",muscles:t="",equipment:r="",keyword:s="",page:o=1,limit:n=10})=>{try{return(await i.get("/exercises",{params:{bodypart:e,muscles:t,equipment:r,keyword:s,page:o,limit:n}})).data}catch(c){console.error("Error fetching exercises:",c)}};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),r=document.querySelector(".menu-backdrop");if(e&&r&&t){let s=function(){r.classList.add("is-open"),t.style.display="block",t.addEventListener("click",o)},o=function(){r.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",o)};e.addEventListener("click",s)}});const a=document.querySelectorAll(".header-nav-link");function l(e){a.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}window.addEventListener("load",()=>{const e=window.location.pathname,t=[...a].find(r=>e.includes(r.getAttribute("href")));if(t)l(t);else{const r=a[0];l(r)}});a.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),l(t.currentTarget)})});const u=document.querySelector(".sidebar-quote"),d=document.querySelector(".sidebar-quote-author"),p=localStorage.getItem("quoteDate"),h=new Date,g=async()=>{if(p!==h.toLocaleDateString()){const e=await m();u.innerHTML=e.quote,d.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else u.innerHTML=localStorage.getItem("quoteText"),d.innerHTML=localStorage.getItem("quoteAuthor")};g();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",r)):(e.classList.add("hidden"),e.removeEventListener("click",r))},r=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});export{q as a,w as f,L as s};
//# sourceMappingURL=scroll-up-a2752034.js.map
