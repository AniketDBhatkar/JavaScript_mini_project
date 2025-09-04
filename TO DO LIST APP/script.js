
let inputbox = document.getElementById("input-box");

let listcontainer = document.getElementById("list-container");
function AddTask() {

    if (inputbox.value === "") {
        alert("You Must write Something !");
    }

    else {

        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";

    saveData()
}

listcontainer.addEventListener("click", function(event) {
    let element = event.target;  // element that was clicked
    
    if (element.tagName === "LI") {
        element.classList.toggle("checked");

        saveData()
    } 
    else if (element.tagName === "SPAN") {
        element.parentElement.remove();

        saveData()
    }
});

function saveData() {
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}

showTask()