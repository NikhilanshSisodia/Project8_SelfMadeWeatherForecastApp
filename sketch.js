let input = document.querySelector('.cityName');
let btn = document.querySelector('.searchBtn');
let temp = document.querySelector('.temp');
let cityName = document.querySelector('.city');
let windMeasure = document.querySelector('.windInfo');
let humidMeasure = document.querySelector('.humidityInfo');
let weatherInfo = document.querySelector('.weatherImg')

btn.addEventListener('click', getInfo);

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        getInfo();
    }
});

async function getInfo() {

    if (input.value.length > 0) {

        let city = input.value.toLowerCase().trim();
        input.value = '';

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=767eeab86829dec1746548eaf932401d&units=metric`;
            let res = await fetch(url)
            let data = await res.json();

            if (data.cod == 404) {
                alert('Invalid City Name');
            } else if (data.cod > 199 && data.cod < 300) {

                temp.innerHTML = `${Math.round(data.main.temp)}°C`;
                cityName.innerHTML = data.name;
                windMeasure.innerHTML = `${Math.round(data.wind.speed)}km/hr`;
                humidMeasure.innerHTML = `${Math.round(data.main.humidity)}%`;
                weatherInfo.setAttribute(`src`, `./assets/${data.weather[0].main.toLowerCase()}.png`);
                weatherInfo.setAttribute(`alt`, `${data.weather[0].main}`);

            } else if (data.cod > 399 && data.cod < 500) {

                alert('Error from user side.');

            } else if (data.cod > 499 && data.cod < 600) {

                alert('Error from Server side.');

            }
                    
    } else {
        alert('Enter City Name');
    }
}

onload = async () => {
    let city = 'new delhi';
    input.value = '';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=767eeab86829dec1746548eaf932401d&units=metric`;
    let res = await fetch(url)
    let data = await res.json();

    if (data.cod == 404) {
        alert('Invalid City Name');
    } else if (data.cod > 199 && data.cod < 300) {

        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        cityName.innerHTML = data.name;
        windMeasure.innerHTML = `${Math.round(data.wind.speed)}km/hr`;
        humidMeasure.innerHTML = `${Math.round(data.main.humidity)}%`;
        weatherInfo.setAttribute(`src`, `./assets/${data.weather[0].main.toLowerCase()}.png`);
        weatherInfo.setAttribute(`alt`, `${data.weather[0].main.toLowerCase()}`);

    } else if (data.cod > 399 && data.cod < 500) {

        alert('Error from user side.');

    } else if (data.cod > 499 && data.cod < 600) {

        alert('Error from Server side.');

    }
}