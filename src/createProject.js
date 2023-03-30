
const addProject = () => {
    const createProjBtn = document.querySelector('.proj_btn');
    const removeForm = document.querySelector(".close_btn");
    const addProjForm = document.querySelector(".addproj_form");
    const projContainer = document.querySelector(".projects-menubar");
    const buttonAddProj = document.querySelector(".proj_btn");
    

    createProjBtn.addEventListener("click", ()=>{
        document.querySelector(".popup_div").classList.add("active");
        document.querySelector(".bg_popup").classList.add("active");
    
    })
    removeForm.addEventListener("click", ()=>{
        document.querySelector(".popup_div").classList.remove("active");
        document.querySelector(".bg_popup").classList.remove("active")
    })
    addProjForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const ProjName = addProjForm.elements['project_name'].value;
        const newProject = document.createElement("button");
        newProject.innerHTML = ProjName;
        newProject.className = ProjName;

        projContainer.insertBefore(newProject,buttonAddProj);
        addProjForm.reset();
        document.querySelector(".popup_div").classList.remove("active");
        document.querySelector(".bg_popup").classList.remove("active")
    })
    
 }
 
export default addProject;

