const requestURL = '';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const biz = jsonObject['businesses'];

    for (let i = 0; i < biz.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h5');
        let yearFounded = document.createElement('p');
        

        h2.textContent = towns[i].name + ' ';
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Found: ' + towns[i].yearFounded;
        
        divInfo.appendChild(h2);
        divInfo.appendChild(motto);
        divImg.appendChild(image);
        divInfo.appendChild(yearFounded);
      


        document.querySelector('div.cards').appendChild(card);
    }
});