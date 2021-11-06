const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const cityName = document.getElementById("cityName").value;
  const apiKey = "59b163067c91653329632c343106cd59";
  checkWeather(cityName, apiKey);
  document.getElementById("status").style.display = "block";
});

function checkWeather(city, key) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tempKelvin = data.main.temp;
      const tempCelsius = Math.floor(tempKelvin - 273.15);
      const currentLocation = data.name;
      const country = data.sys.country;
      const description = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;
      document.getElementById("location").innerText = currentLocation;
      document.getElementById("country").innerText = country;
      document.getElementById("temp").innerText = tempCelsius;
      document.getElementById("description").innerText = description;
      document.getElementById("icon").src =
        "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    });
}
