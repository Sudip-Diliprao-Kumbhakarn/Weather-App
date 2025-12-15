const button = document.getElementById("searchBtn");

button.addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  getWeather(city);
});

function getWeather(city) {
  const apiKey = "YOUR_API_KEY";
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${apiKey}&appid={API key}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = "Temp: " + data.main.temp + " °C";
      document.getElementById("condition").innerText = "Weather: " + data.weather[0].main;
      document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " m/s";
    })
    .catch(error => {
      alert("City not found");
    });
}
