const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const dekuBtn = document.getElementById("dekuBtn");
const hinataBtn = document.getElementById("hinataBtn");
const defaultBtn = document.getElementById("defaultBtn");
let currentTheme = "default-theme";
let imgDiv = document.getElementById("img");
let image = document.createElement("img");

function addTask(){
    if(input.value == null || input.value == "")
    {
        alert("Enter a task first");
    }
    else{
        const taskItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-square-check fa-2xl"></i>';

        taskItem.setAttribute("class", "taskItem");
        deleteBtn.setAttribute("class", "deleteBtn");

        taskItem.textContent = input.value;
    
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        input.value = "";
    }
    
}

function setTheme(theme){
    currentTheme = theme;
    const wrapper = document.getElementById("wrapper");

    wrapper.classList.remove("deku-theme", "hinata-theme", "default-theme");

    if (theme === "deku")
    {
        wrapper.classList.add("deku-theme");
        image.src = "deku.png";
        imgDiv.appendChild(image);
    }
    else if (theme === "hinata")
    {
        wrapper.classList.add("hinata-theme");
        image.src = "hinata1.png";
        imgDiv.appendChild(image);
    }
    else{
        wrapper.classList.add("default-theme");
        imgDiv.removeChild(image);
    }
}


addBtn.addEventListener("click", addTask);
dekuBtn.addEventListener("click", function()
    {setTheme("deku")});
hinataBtn.addEventListener("click", function()
    {setTheme("hinata")});
defaultBtn.addEventListener("click", function()
    {setTheme("default")});