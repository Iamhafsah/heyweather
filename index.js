// search button
let searchBtn = document.getElementById('search-btn');

// current day details
let currentDayBreakdown = document.querySelector('.current-day-details')

//current city name
let currentCityName = document.querySelector('.current-city-name');

//day of week
let days = document.querySelector('.days');

//current time 
let time = document.getElementById('#time');

//current city date
let date = document.querySelector('.date');

//current weather icon
let currentIcon = document.getElementById('sun');

//four days icon
let day1icon = document.getElementById('day1-icon');
let day2icon = document.getElementById('day2-icon');
let day3icon = document.getElementById('day3-icon');
let day4icon = document.getElementById('day4-icon');

// hourly icons
let hour1icon = document.getElementById('hour1-icon');
let hour2icon = document.getElementById('hour2-icon');
let hour3icon = document.getElementById('hour3-icon');
let hour4icon = document.getElementById('hour4-icon');
let hour5icon = document.getElementById('hour5-icon');
let hour6icon = document.getElementById('hour6-icon');
let hour7icon = document.getElementById('hour7-icon');

//weather description
let description = document.querySelector('.description');

//weather degree
let degree = document.querySelector('.degree');
let feelsLike = document.querySelector('.feels-like');
let high = document.querySelector('.high');
let low = document.querySelector('.low');

// forecast for four more days
let day1 = document.querySelector('.day1');
let day2 = document.querySelector('.day2');
let day3 = document.querySelector('.day3');
let day4 = document.querySelector('.day4');

// hourly forecast
let hour1 = document.querySelector('.hour1');
let hour2 = document.querySelector('.hour2');
let hour3 = document.querySelector('.hour3');
let hour4 = document.querySelector('.hour4');
let hour5 = document.querySelector('.hour5');
let hour6 = document.querySelector('.hour6');
let hour7 = document.querySelector('.hour7');

// additional info
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind-speed');
let windDegree = document.querySelector('.wind-deg');

//hourly time
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let time3 = document.querySelector('.time3');
let time4 = document.querySelector('.time4');
let time5 = document.querySelector('.time5');
let time6 = document.querySelector('.time6');
let time7 = document.querySelector('.time7');

// tips
let tips = document.querySelector('.tips');

//getting the bottom container when result is displayed
const element = document.querySelector('.bottom-container');

// my API key
const api = {
    key:   "265d87dc7e06c188365712d29e81b86f",
    base: "https://api.openweathermap.org/data/2.5/"
}


const getWeather = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn.value}&units=metric&appid=${api.key}`
            );
            const myJson = await response.json();
            console.log(myJson);
            if(myJson.cod == 404){
                alert('I cant find the name of your city. Please check your spelling and try again.')
            }if(myJson.cod == 200){
             setTimeout(() => {
                element.scrollIntoView({behaviour:'smooth'});
             }, 2000);
            };

        latitude = async() =>{
            const respo = await fetch(
             `https://api.openweathermap.org/data/2.5/onecall?lat=${myJson.coord.lat}&lon=${myJson.coord.lon}&exclude=minute&units=metric&appid=${api.key}`
            );
            const detail = await respo.json();
        
        getTime = async() =>{
            const newTime = await fetch(
                `https://worldtimeapi.org/api/timezone/${detail.timezone}`
            );
            const timeIn = await newTime.json();
        
        // current city name
        currentCityName.innerHTML = myJson.name + ', ' + myJson.sys.country;
        description.innerHTML = myJson.weather[0].description;
        degree.innerHTML = Math.round(detail.current.temp) + ' &#8451';
        feelsLike.innerHTML = 'It feels like ' + Math.round(detail.current.feels_like) + ' &#8451';
        
        // high and low
        high.innerHTML = 'H - ' + Math.round(myJson.main.temp_max) + ' &#8451';
        low.innerHTML = 'L - ' + Math.round(myJson.main.temp_min) + ' &#8451';
        
        // additional info section
        pressure.innerHTML = 'Pressure: ' + myJson.main.pressure + " hpa";
        humidity.innerHTML = 'Humidity: ' + myJson.main.humidity + ' %';
        windSpeed.innerHTML = 'Wind speed: ' + myJson.wind.speed + ' Km/h';
        windDegree.innerHTML = 'Wind degree: ' + myJson.wind.deg;

        // tips and bits

        if (myJson.weather[0].description.includes('rain')) {
            currentIcon.className = "fas fa-cloud-rain";
            tips.innerHTML = 'Perfect weather for a hot cup of tea or coffee. If i were you i would go out with an umbrella . ☔' ;
        } else if (myJson.weather[0].description.includes('clear')) {
            currentIcon.className = "far fa-sun";
            tips.innerHTML = 'Perfect day for a stroll. You can go shopping, gardening, visit friends, or have a picnic. Go for it!! 😎' ;
        } else if (myJson.weather[0].description.includes('sun')) {
            tips.innerHTML = 'A perfect beach day. You can do all you want to do today, just remember to use your sunscreen 😉 ';
        }
        else if (myJson.weather[0].description.includes('clouds')){
            currentIcon.className = "fas fa-cloud";
            tips.innerHTML = 'There are many things you can do today, one of them is to watch movies and chill 😋 ';
        }
        else if (myJson.weather[0].description.includes('snow')){
            currentIcon.className = "far fa-snowflake";
            tips.innerHTML = 'It is snowing today! what will you do today? Build a snow man or stay in bed? totally up to you. ❄❄ ';
        }
        else if (myJson.weather[0].description.includes('mist')){
            currentIcon.className = "fas fa-smog"
        }
        else if (myJson.weather[0].description.includes('thunderstorm')) {
            currentIcon.className = "fas fa-poo-storm";
        }
        else{
            tips.innerHTML = 'It is a good day to look around, smile, and have fun 🎉';
        }

        // current city searched and four more days weather forecast
        day1.innerHTML = Math.round(detail.daily[1].temp.day) + ' &#8451';
        day2.innerHTML = Math.round(detail.daily[2].temp.day) + ' &#8451';
        day3.innerHTML = Math.round(detail.daily[3].temp.day) + ' &#8451';
        day4.innerHTML = Math.round(detail.daily[4].temp.day) + ' &#8451';

        // hourly data
        hour1.innerHTML = Math.round(detail.hourly[1].temp) + ' &#8451';
        hour2.innerHTML = Math.round(detail.hourly[2].temp) + ' &#8451';
        hour3.innerHTML = Math.round(detail.hourly[3].temp) + ' &#8451';
        hour4.innerHTML = Math.round(detail.hourly[4].temp) + ' &#8451';
        hour5.innerHTML = Math.round(detail.hourly[5].temp) + ' &#8451';
        hour6.innerHTML = Math.round(detail.hourly[6].temp) + ' &#8451';
        hour7.innerHTML = Math.round(detail.hourly[7].temp) + ' &#8451';
   
        // daily icons
        //day one
        if(detail.daily[1].weather[0].description.includes('rain')){
            day1icon.className =  "fas fa-cloud-rain"
        }else if(detail.daily[1].weather[0].description.includes('cloud')){
            day1icon.className = "fas fa-cloud";
        }else if(detail.daily[1].weather[0].description.includes('clear')){
            day1icon.className = "far fa-sun";
        }else if(detail.daily[1].weather[0].description.includes('snow')){
            day1icon.className = "far fa-snowflake";
        }else if (detail.daily[1].weather[0].description.includes('mist')){
            day1icon.className = "fas fa-smog"
        }
        else if(detail.daily[1].weather[0].description.includes('thunderstorm')){
            day1icon.className ="fas fa-poo-storm";
        }
            else {
            day1icon.className = "fas fa-sun"
        }
         //day two
         if(detail.daily[2].weather[0].description.includes('rain')){
            day2icon.className =  "fas fa-cloud-rain"
        }else if(detail.daily[2].weather[0].description.includes('cloud')){
            day2icon.className = "fas fa-cloud";
        }else if(detail.daily[2].weather[0].description.includes('clear')){
            day2icon.className = "far fa-sun";
        }else if(detail.daily[2].weather[0].description.includes('snow')){
            day2icon.className = "far fa-snowflake";
        }else if (detail.daily[2].weather[0].description.includes('mist')){
            day2icon.className = "fas fa-smog"
        } else if(detail.daily[2].weather[0].description.includes('thunderstorm')){
            day2icon.className ="fas fa-poo-storm";
        } else {
            day2icon.className = "fas fa-sun"
        }
         //day three
         if(detail.daily[3].weather[0].description.includes('rain')){
            day3icon.className =  "fas fa-cloud-rain"
        }else if(detail.daily[3].weather[0].description.includes('cloud')){
            day3icon.className = "fas fa-cloud";
        }else if(detail.daily[3].weather[0].description.includes('clear')){
            day3icon.className = "far fa-sun";
        }else if(detail.daily[3].weather[0].description.includes('snow')){
            day3icon.className = "far fa-snowflake";
        }else if (detail.daily[3].weather[0].description.includes('mist')){
            day3icon.className = "fas fa-smog"
        } else if(detail.daily[3].weather[0].description.includes('thunderstorm')){
            day3icon.className ="fas fa-poo-storm";
        } else {
            day3icon.className = "fas fa-sun"
        }
         //day four
         if(detail.daily[4].weather[0].description.includes('rain')){
            day4icon.className =  "fas fa-cloud-rain"
        }else if(detail.daily[4].weather[0].description.includes('cloud')){
            day4icon.className = "fas fa-cloud";
        }else if(detail.daily[4].weather[0].description.includes('clear')){
            day4icon.className = "far fa-sun";
        }else if(detail.daily[4].weather[0].description.includes('snow')){
            day4icon.className = "far fa-snowflake";
        }else if (detail.daily[4].weather[0].description.includes('mist')){
            day4icon.className = "fas fa-smog"
        } else if(detail.daily[4].weather[0].description.includes('thunderstorm')){
            day4icon.className ="fas fa-poo-storm";
        } else {
            day4icon.className = "fas fa-sun"
        }

        // hourly icons
        //hour one
        if(detail.hourly[1].weather[0].description.includes('rain')){
            hour1icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[1].weather[0].description.includes('cloud')){
            hour1icon.className = "fas fa-cloud";
        }else if(detail.hourly[1].weather[0].description.includes('clear')){
            hour1icon.className = "far fa-sun";
        }else if(detail.hourly[1].weather[0].description.includes('snow')){
            hour1icon.className = "far fa-snowflake";
        }else if (detail.hourly[1].weather[0].description.includes('mist')){
            hour1icon.className  = "fas fa-smog"
        }else if(detail.hourly[1].weather[0].description.includes('thunderstorm')){
            hour1icon.className =  "fas fa-poo-storm"
        } else {
            hour1icon.className = "fas fa-sun"
        }
        //hour two
        if(detail.hourly[2].weather[0].description.includes('rain')){
            hour2icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[2].weather[0].description.includes('cloud')){
            hour2icon.className = "fas fa-cloud";
        }else if(detail.hourly[2].weather[0].description.includes('clear')){
            hour2icon.className = "far fa-sun";
        }else if(detail.hourly[2].weather[0].description.includes('snow')){
            hour2icon.className = "far fa-snowflake";
        }else if (detail.hourly[2].weather[0].description.includes('mist')){
            hour2icon.className  = "fas fa-smog"
        }else if(detail.hourly[2].weather[0].description.includes('thunderstorm')){
            hour2icon.className =  "fas fa-poo-storm"
        } else {
            hour2icon.className = "fas fa-sun"
        }

        //hour three
        if(detail.hourly[3].weather[0].description.includes('rain')){
            hour3icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[3].weather[0].description.includes('cloud')){
            hour3icon.className = "fas fa-cloud";
        }else if(detail.hourly[3].weather[0].description.includes('clear')){
            hour3icon.className = "far fa-sun";
        }else if(detail.hourly[3].weather[0].description.includes('snow')){
            hour3icon.className = "far fa-snowflake";
        }else if (detail.hourly[3].weather[0].description.includes('mist')){
            hour3icon.className  = "fas fa-smog"
        }else if(detail.hourly[3].weather[0].description.includes('thunderstorm')){
            hour3icon.className =  "fas fa-poo-storm"
        } else {
            hour3icon.className = "fas fa-sun"
        }

         //hour four
         if(detail.hourly[4].weather[0].description.includes('rain')){
            hour4icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[4].weather[0].description.includes('cloud')){
            hour4icon.className = "fas fa-cloud";
        }else if(detail.hourly[4].weather[0].description.includes('clear')){
            hour4icon.className = "far fa-sun";
        }else if(detail.hourly[4].weather[0].description.includes('snow')){
            hour4icon.className = "far fa-snowflake";
        }else if (detail.hourly[4].weather[0].description.includes('mist')){
            hour4icon.className  = "fas fa-smog"
        }else if(detail.hourly[4].weather[0].description.includes('thunderstorm')){
            hour4icon.className =  "fas fa-poo-storm"
        } else {
            hour4icon.className = "fas fa-sun"
        }

        //hour five
        if(detail.hourly[5].weather[0].description.includes('rain')){
        hour5icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[5].weather[0].description.includes('cloud')){
            hour5icon.className = "fas fa-cloud";
        }else if(detail.hourly[5].weather[0].description.includes('clear')){
            hour5icon.className = "far fa-sun";
        }else if(detail.hourly[5].weather[0].description.includes('snow')){
            hour5icon.className = "far fa-snowflake";
        }else if (detail.hourly[5].weather[0].description.includes('mist')){
            hour5icon.className  = "fas fa-smog"
        }else if(detail.hourly[5].weather[0].description.includes('thunderstorm')){
            hour5icon.className =  "fas fa-poo-storm"
        } else {
            hour5icon.className = "fas fa-sun"
        }

        //hour six
        if(detail.hourly[6].weather[0].description.includes('rain')){
        hour6icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[6].weather[0].description.includes('cloud')){
            hour6icon.className = "fas fa-cloud";
        }else if(detail.hourly[6].weather[0].description.includes('clear')){
            hour6icon.className = "far fa-sun";
        }else if(detail.hourly[6].weather[0].description.includes('snow')){
            hour6icon.className = "far fa-snowflake";
        }else if (detail.hourly[6].weather[0].description.includes('mist')){
            hour6icon.className  = "fas fa-smog"
        }else if(detail.hourly[6].weather[0].description.includes('thunderstorm')){
            hour6icon.className =  "fas fa-poo-storm"
        } else {
            hour6icon.className = "fas fa-sun"
        }

        //hour seven
        if(detail.hourly[7].weather[0].description.includes('rain')){
        hour7icon.className =  "fas fa-cloud-rain"
        }else if(detail.hourly[7].weather[0].description.includes('cloud')){
            hour7icon.className = "fas fa-cloud";
        }else if(detail.hourly[7].weather[0].description.includes('clear')){
            hour7icon.className = "far fa-sun";
        }else if(detail.hourly[7].weather[0].description.includes('snow')){
            hour7icon.className = "far fa-snowflake";
        }else if (detail.hourly[7].weather[0].description.includes('mist')){
            hour7icon.className  = "fas fa-smog"
        }else if(detail.hourly[7].weather[0].description.includes('thunderstorm')){
            hour7icon.className =  "fas fa-poo-storm"
        } else {
            hour7icon.className = "fas fa-sun"
        }


        //the time and day
        switch(timeIn['day_of_week']){
            case 1:
                days.innerHTML = 'Monday';
                break;
            case 2:
                days.innerHTML = 'Tuesday';
                break;
            case 3:
                days.innerHTML = 'wednesday';
                break;
            case 4:
                days.innerHTML = 'Thursday';
                break;
            case 5:
                days.innerHTML = 'Friday';
                break;
            case 6:
                days.innerHTML = 'Saturday';
                break;
            case 7:
                days.innerHTML = 'Sunday';
            default:
                days.innerHTML = 'Today';
        }

        // date
        let date = document.querySelector('.date');
        date.innerHTML = dayjs(timeIn.datetime).format('DD  MMMM');

        //time
        let time = document.querySelector('.time');
        time.innerHTML = dayjs(timeIn.datetime).format('H:mm a');
    
    }
    getTime();
    }
    latitude();
}
getWeather();




// event listener for the city search button
searchBtn.addEventListener("search", getWeather);



