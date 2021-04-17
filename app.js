var sec = 0;
var msec = 0;
var min = 0;
var secH = document.getElementById('sec');
var msecH = document.getElementById('msec');
var minH = document.getElementById('min');
var interval;


function timer(){

    msec+=1;
msecH.innerHTML = msec;
if (msec === 1000){
    msec = 0;
    sec+=1
    secH.innerHTML = sec;
}
if (sec === 60){
    sec=0;
    min+=1;
    minH.innerHTML=min;
}

}


// setTimeout(function(){},5000)


function start(){
    interval = setInterval(timer,1)
    
}

function Stop(){
    clearInterval(interval);
    console.log("stop")
}

function reset(){

    Stop();
    msec=0;
    sec =0;
    min =0;

    msecH.innerHTML=0;
    secH.innerHTML=0;
    minH.innerHTML=0;
}