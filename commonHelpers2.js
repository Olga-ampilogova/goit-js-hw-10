import"./assets/styles-2caccfe1.js";import{i as o}from"./assets/vendor-651d7991.js";const l=document.querySelector("input[type='number']");l.classList.add("inputDelay");const s=document.querySelector("input[value='fulfilled']");s.classList.add("fullfilled");const c=document.querySelector("input[value='rejected']");c.classList.add("rejected");const m=document.querySelectorAll("label");m.forEach(e=>{e.classList.add("labelStyle")});const f=document.querySelector("fieldset");f.classList.add("fieldsetStyle");const p=document.querySelector("legend");p.classList.add("legendStyle");const n=document.querySelector("button");n.classList.add("buttonNotify");n.addEventListener("click",e=>{e.preventDefault();const t=parseInt(l.value),d=s.checked;(({delay:i,shouldResolve:u})=>new Promise((a,r)=>{setTimeout(()=>{u?a():r()},i)}))({delay:t,shouldResolve:d}).then(()=>o.success({position:"topCenter",message:`✅ Fullfilled promise in ${t}ms`})).catch(()=>o.error({position:"topCenter",message:`❌ Rejected promise in ${t}ms`})),l.value="",s.checked=!1,c.checked=!1});
//# sourceMappingURL=commonHelpers2.js.map