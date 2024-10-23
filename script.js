function datentime(){
    const d = new Date();
    const display = d.toLocaleString();
    document.querySelector(".date").textContent = display;
}
setInterval(datentime,1000); 