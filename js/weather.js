const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "75fc051c23be5c5109c1ebf95579a430";


function onGeoOk(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
        city.innerText = data.name;
    });
  }
  function onGeoError() {
    alert("위치를 찾을 수 없습니다. 날씨가 제공되지 않습니다.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);