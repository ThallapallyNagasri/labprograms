function fetchCityId(cityId, callback) {
    setTimeout(() => {
        const cityName = "New York";
        callback(cityName);
    }, 1000);
}

function fetchCityWeather(cityName, callback) {
    setTimeout(() => {
        console.log(`Fetching weather for city: ${cityName}`);
        const weather = { city: cityName, temperature: 25, condition: "sunny" };
        callback(weather);
    }, 1000);
}

function displayWeather(weather) {
    console.log(`City: ${weather.city}, Temperature: ${weather.temperature}°C, Condition: ${weather.condition}`);
}

fetchCityId(101, (cityName) => {
    fetchCityWeather(cityName, displayWeather);
});
