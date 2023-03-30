
const addProject = () => {
    const createProjBtn = document.querySelector('.proj_btn');
    const removeForm = document.querySelector(".close_btn");

    createProjBtn.addEventListener("click", ()=>{
        console.log("hello")
        document.querySelector(".popup_div").classList.add("active");
        document.querySelector(".bg_popup").classList.add("active");
    
    })
    removeForm.addEventListener("click", ()=>{
        document.querySelector(".popup_div").classList.remove("active");
        document.querySelector(".bg_popup").classList.remove("active")
    })

    
}

export default addProject;
