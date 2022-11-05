const API_KEY = "3fa326e3a92d22ebfb7fa77c6dc6fd7d";

function onOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = data.name;
       
    });
}
function onERR(){
    alert("Cannot find location");
}

navigator.geolocation.getCurrentPosition(onOK,onERR);
