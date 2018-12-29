
const COORDS = "coords";
const API_KEY = "f406e32b23d9790906b21a7e8531fc04";
const weather = document.querySelector(".js-weather");


function getWeather(lat,lon){
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`).
     then(function(response){
        return response.json();
     }).then(function(json){
         const temp = json.main.temp;
         const city = json.name;

         weather.innerText = `temperature : ${temp} @ city : ${city}`;
     });
}

function saveToLS(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveToLS(coordsObj);
    getWeather(latitude,longitude);
}

function handleError(){
    console.log("error");
}

function askForCoords(){
    //위도 경도 가지고오기
    navigator.geolocation.watchPosition(handleSucces, handleError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();