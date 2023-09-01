const apikey = "238640de329bfb28d802de5d306da3c7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {

        var data = await response.json();

        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "assests/images/clouds.png"

        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "assests/images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "assests/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "assests/images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "assests/images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "assests/images/snow.png"

        }
        else if (data.weather[0].main == "Wind") {
            weathericon.src = "assests/images/wind.png"
        }
        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block";
    }


}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

