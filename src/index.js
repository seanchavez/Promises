const axios = require('axios');
const API_URL = 'https://starwars.egghead.training/';

const responsePromise = axios.get(API_URL + 'films');
console.log(responsePromise);
