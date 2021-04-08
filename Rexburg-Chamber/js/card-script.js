const requestURL = 'https://raw.githubusercontent.com/tjproduces/tjproduces.github.io/master/Rexburg-Chamber/json/directory.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const biz = jsonObject['businesses'];

    for (let i = 0; i < biz.length; i++) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('h5');
        let website = document.createElement('h5');
        

        name.textContent = biz[i].name;
        phone.textContent = 'phone: ' + biz[i].phone;
        website.textContent = 'website: ' + biz[i].website;
        
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
      
        document.querySelector('div.cards').appendChild(card);
    }
});