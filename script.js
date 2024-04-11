const TIMER_STATE={
    PAUSED: "paused",
    STARTED: "started",
    STOPPED: "stopped"
}

let startTime;
let timeValue='00.00.00';
let timerSetInterval;
let lastTime;
let state=TIMER_STATE.STOPPED;

let h1= document.getElementById('timeDisplay');
h1.textContent=timeValue;

function startTimer(){
    if(state===TIMER_STATE.STOPPED)
    {   
        startTime = new Date();
    }
    if(state===TIMER_STATE.PAUSED)
    {
        startTime = new Date()-(lastTime-startTime);
    }
    if(state!==TIMER_STATE.STARTED)
    {
        state=TIMER_STATE.STARTED;
        timerSetInterval=setInterval(()=>{getTimeDiff();}, 1000);
    }

}

function getTimeDiff(){
    lastTime= new Date();
    const differenceMs = lastTime - startTime;
    const seconds = (Math.floor(differenceMs / 1000)).toString().padStart(2, '0');;
    const minutes = (Math.floor(seconds / 60)).toString().padStart(2, '0');
    const hours = (Math.floor(minutes / 60)).toString().padStart(2, '0');
    timeValue=`${hours}:${minutes}:${seconds}`;
    h1.textContent=timeValue;
}

function resetTimer(){
    state=TIMER_STATE.STOPPED;
    timeValue='00.00.00';
    h1.textContent=timeValue;
    clearInterval(timerSetInterval);
}

function pauseTimer(){
    state=TIMER_STATE.PAUSED;
    clearInterval(timerSetInterval);
}


