const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = 'e45e397caeb2fc40ea1dc1a31a09e17c';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.data())
        .then(data => {
            const img = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clouds' :
                    img.src = 'img/partly_cloudy-removebg-preview.png';
                    break;

                case 'Rain' :
                    img.src = 'img/rain-removebg-preview.png';
                    break; 
                    
                case 'Snow' :
                    img.src = 'img/snow-removebg-preview.png';
                    break;

                case 'Clear' :
                    img.src = 'img/sunny-removebg-preview.png';
                    break;

                case 'Mist' :
                    img.src = 'img/windy-removebg-preview.png';
                    break;

                default:
                    img.src = 'img/cloudy-removebg-preview.png';  
            }

            temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
            description.innerHTML = `${data.weather[0].description}`;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

    });

});