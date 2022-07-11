var apiKey = "e6befcf36e16d40cbedb800e2331ac1d"
var searchButton =document.querySelector("#searchBtn");
var cityInput =document.querySelector("#cityInput");
var weatherName =document.querySelector("#weatherName");

$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'))

searchButton.addEventListener("click", function() {
    var currentWeatherimage =document.querySelector("#weather")
    var li =document.querySelector(".fiveWeather")
    currentWeatherimage.innerHTML= "";
    li.innerHTML= "";
    todaysWeather(cityInput.value);
    weatherName.textContent = cityInput.value
    

    var citySelect = document.querySelector("#weatherName").textContent;
    localStorage.setItem("citySelect", citySelect);
    renderLast();

});

function renderLast() {
    var citySelect = localStorage.getItem("citySelect");
    var cities =document.querySelector("#cities");
    let li = document.createElement("li"); 
    li.textContent = citySelect;
    cities.appendChild(li);
}

function todaysWeather (city) {

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    var url2 =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e6befcf36e16d40cbedb800e2331ac1d&units=imperial`

    // Fetch to call 5 day forcast
    fetch(url2)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);

            var timeStamp = data["list"]
            
            
            // Get specific time for each 5 day forecast 
            for (let i = 5; i < timeStamp.length; i=i+8) {
                var selectTime = timeStamp[i];
               

                console.log(selectTime)

                console.log(selectTime["dt_txt"])
                console.log(selectTime["main"]["temp"])
                console.log(selectTime["wind"]["speed"])
                console.log(selectTime["weather"][0]["main"])

                var fiveDate = (selectTime["dt_txt"])
                var fiveTemp = (selectTime["main"]["temp"])
                var fiveWind = (selectTime["wind"]["speed"])
                var weatherConditionstwo = (selectTime["weather"][0]["main"])
                var image = document.querySelector("#image")


                var combined = "Temperature: " + fiveTemp + " " + "Wind: " + fiveWind + " mph, Conditions: " + weatherConditionstwo;
                console.log(combined)

                

                var fiveWeather = document.querySelector(".fiveWeather");
                let li = document.createElement("li");
                li.className = "weatherList"
                li.textContent = combined;
                fiveWeather.appendChild(li);

                if (weatherConditionstwo === 'Clear') {
                    var weatherImagetwo = document.createElement("img")
                    weatherImagetwo.src="./images/Clear.png"
                    image.appendChild(weatherImagetwo)
                } else if
                    (weatherConditionstwo === 'Clouds') {
                        var weatherImagetwo =document.createElement("img")
                        weatherImagetwo.src="./images/clouds.png"
                        image.appendChild(weatherImagetwo)
                } else if
                    (weatherConditionstwo === 'Thunderstorm') {
                        var weatherImagetwo =document.createElement("img")
                        weatherImagetwo.src="./images/thunderstorm.png"
                        fiveWeather.appendChild(weatherImagetwo)
                } else if
                    (weatherConditionstwo === 'Drizzle') {
                        var weatherImagetwo =document.createElement("img")
                        weatherImagetwo.src="./images/Drizzle.png"
                        fiveWeather.appendChild(weatherImagetwo)
                } else if
                    (weatherConditionstwo === 'Rain') {
                        var weatherImagetwo =document.createElement("img")
                        weatherImagetwo.src="./images/rain.png"
                        fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Snow') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/snow.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Smoke') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/smoke.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Fog') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/fog.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Dust') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/dust.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Sand') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/dust.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Mist') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/mist.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Tornado') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/tornado.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Ash') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/volcano.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Haze') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/fog.png"
                    fiveWeather.appendChild(weatherImagetwo)
                } else if
                (weatherConditionstwo === 'Squall') {
                    var weatherImagetwo =document.createElement("img")
                    weatherImagetwo.src="./images/thunderstorm.png"
                    fiveWeather.appendChild(weatherImagetwo)
    }

            }
            
})

// Fetch for current days weather
    fetch(url)
        .then(function(response) {
            return response.json()

        })
        .then(function(data) {
            console.log(data)
            console.log(data["main"]["humidity"])
            console.log(data["main"]["temp"])
            console.log(data["weather"][0]["main"])
            console.log(data["wind"]["speed"])
// getting individual data points to display on screen
            var humidity = data["main"]["humidity"]
            var weatherConditions = data["weather"][0]["main"]
            var temperature = data["main"]["temp"]
            var wind = data["wind"]["speed"]

            //display in the HTML
            var humid =document.querySelector("#humidity")
            var weather =document.querySelector("#weather")
            var outsideTemp =document.querySelector("#temp")
            var windy =document.querySelector("#wind")

            humid.textContent = humidity + "%"
            
            outsideTemp.textContent = temperature + " F"
            windy.textContent =wind + " mph"
            //This is for weather image
            // weather.textContent = weatherConditions


            if (weatherConditions === 'Clear') {
                var weatherImage = document.createElement("img")
                weatherImage.src="./images/Clear.png"
                weather.appendChild(weatherImage)
            } else if
                (weatherConditions === 'Clouds') {
                    var weatherImage =document.createElement("img")
                    weatherImage.src="./images/clouds.png"
                    weather.appendChild(weatherImage)
            } else if
                (weatherConditions === 'Thunderstorm') {
                    var weatherImage =document.createElement("img")
                    weatherImage.src="./images/thunderstorm.png"
                    weather.appendChild(weatherImage)
            } else if
                (weatherConditions === 'Drizzle') {
                    var weatherImage =document.createElement("img")
                    weatherImage.src="./images/Drizzle.png"
                    weather.appendChild(weatherImage)
            } else if
                (weatherConditions === 'Rain') {
                    var weatherImage =document.createElement("img")
                    weatherImage.src="./images/rain.png"
                    weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Snow') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/snow.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Smoke') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/smoke.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Fog') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/fog.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Dust') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/dust.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Sand') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/dust.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Mist') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/mist.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Tornado') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/tornado.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Ash') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/volcano.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Haze') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/fog.png"
                weather.appendChild(weatherImage)
            } else if
            (weatherConditions === 'Squall') {
                var weatherImage =document.createElement("img")
                weatherImage.src="./images/thunderstorm.png"
                weather.appendChild(weatherImage)
}

        })

}