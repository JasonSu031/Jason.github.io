function showSpinner(name){
    var d = document.getElementById(name);
    d.style.display= "inline-block";
   
}
function hideSpinner(name){
    var d = document.getElementById(name);
    d.style.display= "none";
}

function toggleSpinner(name) {
    showSpinner(name);
    setTimeout(hideSpinner, 1500, name);
}