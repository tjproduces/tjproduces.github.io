/* Footer */
let year =  new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString("en-GB", options);


/* Nav toggle */
function toggleMenu () {
    document.getElementById("responsive-nav").classList.toggle("hide");
}

/* API */
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=5a075be914ab88f45e9bd84bdf934553&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let chill = "N/A";
        document.getElementById('cond').innerHTML = jsObject.weather[0].description;
        document.getElementById('temp').innerHTML = jsObject.main.temp_max + "&#8457;";
        document.getElementById("chill").innerHTML = chill + " ";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
        document.getElementById('speed').innerHTML = Math.round(s) + " mph";

        // windchill
        if (temp >= 50 && speed >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (t * (Math.pow(speed, 0.16))));
            chill = Math.round(f);
        } else {
            chill = "N/A";
        }
    });
    
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=5a075be914ab88f45e9bd84bdf934553';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {

        console.table(forecastObject);
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {

            const d = new Date(forecast[day].dt_txt);
            const imgSrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const desc = forecast[day].weather[0].description;


            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`icon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

        }

    });

/* Events */

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function events(city) {

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        }).then(function (jsonObject) {
            const town = jsonObject['towns'];
            const filtered = town.filter(town => (town.name == city));
            let paragraph = document.createElement('div');

            for (let i = 0; i < filtered[0].events.length; i++) {
                let eventCity = document.getElementsByClassName("city");
                let eventItem = document.createElement('p');
                let city = filtered[0].name.includes(eventCity);
                eventItem.textContent = filtered[0].events[i];
                paragraph.appendChild(eventItem);
            }
            document.querySelector('div.events').appendChild(paragraph);
        });
}

events('Soda Springs');

