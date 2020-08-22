// top london city details
let londonWeather = document.querySelector('.london-weather');
let londonTemp = document.querySelector('.london-temp');

// lagos weather details
let lagosWeather = document.querySelector('.lagos-weather');
let lagosTemp = document.querySelector('.lagos-temp');

// paris weather details
let parisWeather = document.querySelector('.paris-weather');
let parisTemp = document.querySelector('.paris-temp');

// Riyadh weather details
let riyadhWeather = document.querySelector('.riyadh-weather');
let riyadhTemp = document.querySelector('.riyadh-temp');

// seoul weather details
let seoulWeather = document.querySelector('.seoul-weather');
let seoulTemp = document.querySelector('.seoulTemp');



const cityWeathers = async () => {
    // london
    const reslondon = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${api.key}`
    )
    // lagos
    const reslagos = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=${api.key}`
    )
    // paris
    const resparis = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${api.key}`
    )
    // riyadh
    const resriyadh = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&appid=${api.key}`
    )
    // seoul
    const resseoul = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=${api.key}`
    )
    const datalondon = await reslondon.json();

    const datalagos = await reslagos.json();

    const dataparis = await resparis.json();

    const datariyadh = await resriyadh.json();

    const dataseoul = await resseoul.json();

    // changing the elements
    londonWeather.innerHTML = datalondon.weather[0].main;
    londonTemp.innerHTML = Math.round(datalondon.main.temp) + ' &#8451';

    lagosWeather.innerHTML = datalagos.weather[0].main;
    lagosTemp.innerHTML = Math.round(datalagos.main.temp) + ' &#8451';

    parisWeather.innerHTML = dataparis.weather[0].main;
    parisTemp.innerHTML = Math.round(dataparis.main.temp) + ' &#8451';

    riyadhWeather.innerHTML = datariyadh.weather[0].main;
    riyadhTemp.innerHTML = Math.round(datariyadh.main.temp) + ' &#8451';

    seoulWeather.innerHTML = datalondon.weather[0].main;
    seoulTemp.innerHTML = Math.round(datalondon.main.temp) + ' &#8451';
}
cityWeathers();