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

var curToast = 0;
function book(){
    if(curToast==4)maxToasts();
    curToast++;
    setTimeout(displayToast,1510)
}
function displayToast(){
    var d = document.getElementById(curToast.toString());
    d.style.display = "block";
}
function reorganize(){
    curToast--;
    for(let i =1; i<=curToast; i++){
        var d = document.getElementById(i.toString());
        d.style.display = "block";
    }
    for(let j = curToast+1; j<5; j++){
        var d = document.getElementById(j.toString());
        d.style.display = "none";
    }
}

function maxToasts(){
    alert("You can only have at most 4 Appointment notifications on your screen.\n Please clear some notifications before you book another appointment.");
}