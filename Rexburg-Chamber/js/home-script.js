/*====================================================================*/
/*                         Footer                                     */
/*====================================================================*/
let year =  new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString("en-GB", options);


/*====================================================================*/
/*                         Nav Toggle                                 */
/*====================================================================*/
function toggleMenu () {
    document.getElementById("responsive-nav").classList.toggle("hide");
};

/*====================================================================*/
/*                         Weather API                                */
/*====================================================================*/

const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.8231&lon=111.7924&exclude=current,minutely,hourly,alerts&appid=5a075be914ab88f45e9bd84bdf934553';
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