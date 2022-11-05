const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const Hrs = String(date.getHours()).padStart(2,"0");
    const Min = String(date.getMinutes()).padStart(2,"0");
    const Sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${Hrs}:${Min}:${Sec}` ;
}
getClock();
setInterval(getClock,1000);