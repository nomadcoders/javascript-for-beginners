const weather = document.querySelector("#weather .weather");
const city = document.querySelector("#weather .city");
const API_KEY = "7ebaeec96e9b793e7a8ded10cdb3a2c2";

function onGeoOk(position) { // OK일때
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {    
        city.innerText = `${data.name} 의 날씨`;    
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;        
      });
}
function onGeoError() { // Error일때
alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
//navigator.geolocation.getCurrentPosition(잘 됐을 때 실행될 함수, 에러일때 실행될 함수) 위치 좌표를 줌

