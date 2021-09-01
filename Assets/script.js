var apiKey = "a162a4aa2ca086e1d88bae95464bc9a3";
var url = "https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=" + apiKey;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

  // type something in input, hit submit, and have weather data show in console
  // UV index, 5 day forecast