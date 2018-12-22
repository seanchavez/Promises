//const axios = require('axios');
const API_URL = 'https://starwars.egghead.training/';

const responsePromise = fetch(API_URL + 'films'); //axios.get(API_URL + 'films');
console.log(responsePromise);
responsePromise.then(response => {
  console.log(response);
});
