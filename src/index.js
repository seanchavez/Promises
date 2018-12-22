//const axios = require('axios');
const API_URL = 'https://starwars.egghead.training/';

const responsePromise = fetch(API_URL + 'films'); //axios.get(API_URL + 'films');
console.log(responsePromise);
responsePromise
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(films => {
    console.log(films);
    const filmTitles = films
      .map(film => `${film.episode_id}. ${film.title}`)
      .join('\n');

    const output = document.getElementById('output');
    output.innerText = filmTitles;
  });
