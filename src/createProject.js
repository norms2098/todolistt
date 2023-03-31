
const addProject = () => {
    const createProjBtn = document.querySelector('.proj_btn');
    const removeForm = document.querySelector(".close_btn");
    const addProjForm = document.querySelector(".addproj_form");
    const projContainer = document.querySelector(".projects-menubar");
    

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
        newProject.className = ProjName.replace(/ +/g, "");

        projContainer.insertBefore(newProject,createProjBtn);
        newProject.addEventListener("click",(e)=>{
            e.preventDefault();
            loadProjectContent(newProject.innerHTML)
        })
        
        addProjForm.reset();
        document.querySelector(".popup_div").classList.remove("active");
        document.querySelector(".bg_popup").classList.remove("active")
    })
    
 }

 const loadProjectContent = (nameofProject) =>{
    const contentDiv = document.querySelector(".div-content");
    const headerProjectName = document.createElement('h1');
    const taskDiv = document.createElement("div");
    taskDiv.className = "project-tasks";

    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerHTML = "+ Add Task"
    addTaskBtn.addEventListener('click',()=>{
        alert("click");
    })

    if(contentDiv.innerHTML !==""){
        contentDiv.innerHTML = "";
    }

    headerProjectName.innerHTML = nameofProject;
    taskDiv.appendChild(addTaskBtn);
    contentDiv.appendChild(headerProjectName);
    contentDiv.appendChild(taskDiv)

    


}

export default addProject;

