const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['businesses'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h5');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let avgRainfall = document.createElement('p');
        let image = document.createElement('img');
        let divInfo = document.createElement('div');
        let divImg = document.createElement('div');

        h2.textContent = towns[i].name + ' ';
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Found: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
        avgRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);
        divInfo.setAttribute('class', 'townInfo');
        divImg.setAttribute('class', 'townImg');

        divInfo.appendChild(h2);
        divInfo.appendChild(motto);
        divImg.appendChild(image);
        divInfo.appendChild(yearFounded);
        divInfo.appendChild(currentPopulation);
        divInfo.appendChild(avgRainfall);
        card.appendChild(divInfo);
        card.appendChild(divImg);


        document.querySelector('div.cards').appendChild(card);
      }
    }
});