function getValue(params) {
    let location = document.getElementById("location");
    let value = location.value;
    console.log(value);
}

fatch(`api.openweathermap.org/data/2.5/weather?q=${value}&appid=your_api_key`).then(response => response.jeson()).then(
    displayData
).catch(err => alert('wrong city name'));console.log(displayData);
