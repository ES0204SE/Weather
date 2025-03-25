const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").classList.remove("hidden");
                document.getElementById("cityName").innerText = data.name;
                document.getElementById("temperature").innerText = data.main.temp;
                document.getElementById("weatherDescription").innerText = data.weather[0].description;
                document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            } else {
                alert("City not found. Please enter a valid city name.");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again.");
        });
}
