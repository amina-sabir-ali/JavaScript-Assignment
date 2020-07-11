var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var  laps = [];
function timer(){
    msec++;
    msecHeading.innerHTML =  msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    if(sec >= 60){
        min++;
        minHeading.innerHTML =  min;
        sec = 0;
    }
}

function start(){
    document.getElementById("start").disabled = true;
    interval = setInterval(timer, 10);
}

function stop(){
    document.getElementById("start").disabled = false;
    clearInterval(interval);
}

function reset(){
    min = 0;
    sec = 0;
    msec  = 0;
    msecHeading.innerHTML = "0 0";
    secHeading.innerHTML = "0 0";
    minHeading.innerHTML = "0 0";
    stop();
}