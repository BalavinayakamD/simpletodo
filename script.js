function datentime(){
    const d = new Date();
    const display = d.toLocaleString();
    document.querySelector(".date").textContent = display;
}
setInterval(datentime,1000);  

function taskadd(){
    var ul = document.getElementById("unol");
    var inp = document.getElementById("task");
    var list = document.createElement("li");
    list.innerHTML = inp.value
    ul.append(list)
}