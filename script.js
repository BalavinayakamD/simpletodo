function datentime() {
    const d = new Date();
    const display = d.toLocaleString();
    document.querySelector(".date").textContent = display;
}
setInterval(datentime, 1000);

function taskadd() {
    var ul = document.getElementById("unol");
    var inp = document.getElementById("task");
    var list = document.createElement("li");
    var date = document.querySelector("#event");
    var dnt = date.value ? date.value : "No date";
    
    if (inp.value !== '') {
        list.innerHTML = '<input type="checkbox" id="strike" onclick="complete(event)">' + '<span class ="cl"></span>'+
                         '<span class="task-text">' + inp.value + '</span>' + '<span class ="cl"></span>'+
                         '<span class="date-text">' + dnt + '</span>' + '<span class ="cl"></span>'+
                         '<button onclick="delt(event)"  id="del" >X</button>' + '<span class ="cl"></span>'+
                         '<button onclick="edittext(event)" id="edit" >Edit</button>';
        ul.append(list);
        inp.value = '';
    } else {
        alert('Please enter a task');
    }
}

function complete(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        checkbox.parentElement.querySelector('.task-text').style.textDecoration = "line-through";
    } else {
        checkbox.parentElement.querySelector('.task-text').style.textDecoration = "none";
    }
}

function delt(event) {
    event.target.parentElement.remove();
}

function edittext(event) {
    var listItem = event.target.parentElement;
    var taskText = listItem.querySelector('.task-text');
    var input = document.createElement("input");
    input.type = "text";
    input.value = taskText.textContent;
    listItem.replaceChild(input, taskText);
    event.target.textContent = "Save";
    event.target.setAttribute("onclick", "saveEdit(event)");
}

function saveEdit(event) {
    var listItem = event.target.parentElement;
    var input = listItem.querySelector('input[type="text"]');
    var span = document.createElement("span");
    span.className = "task-text";
    span.textContent = input.value;
    listItem.replaceChild(span, input);
    event.target.textContent = "Edit";
    event.target.setAttribute("onclick", "edittext(event)");
}
