(()=>{"use strict";(()=>{const e=document.querySelector(".proj_btn"),t=document.querySelector(".close_btn"),c=document.querySelector(".addproj_form"),n=document.querySelector(".projects-menubar");e.addEventListener("click",(()=>{document.querySelector(".popup_div").classList.add("active"),document.querySelector(".bg_popup").classList.add("active")})),t.addEventListener("click",(()=>{document.querySelector(".popup_div").classList.remove("active"),document.querySelector(".bg_popup").classList.remove("active")})),c.addEventListener("submit",(t=>{t.preventDefault();const r=c.elements.project_name.value,o=document.createElement("button");o.innerHTML=r,o.className=r.replace(/ +/g,""),n.insertBefore(o,e),o.addEventListener("click",(e=>{e.preventDefault(),(e=>{const t=document.querySelector(".div-content"),c=document.createElement("h1"),n=document.createElement("div");n.className="project-tasks";const r=document.createElement("button");r.innerHTML="+ Add Task",r.addEventListener("click",(()=>{alert("click")})),""!==t.innerHTML&&(t.innerHTML=""),c.innerHTML=e,n.appendChild(r),t.appendChild(c),t.appendChild(n)})(o.innerHTML)})),c.reset(),document.querySelector(".popup_div").classList.remove("active"),document.querySelector(".bg_popup").classList.remove("active")}))})()})();