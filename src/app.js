function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey = "3f5104bce6891d8d28412dba0189a8d4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=${apiKey}&units=imperial`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);