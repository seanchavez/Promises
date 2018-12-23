// #region Setup
// import $ from 'jquery';
// const API_URL = 'https://starwars.egghead.training/';
// const output = document.getElementById('output');
// const spinner = document.getElementById('spinner');

// const getFilmTitles = films => {
//   return films
//     .slice()
//     .sort((a, b) => a.episode_id - b.episode_id)
//     .map(film => `${film.episode_id}. ${film.title}`)
//     .join('\n');
// };
// // #endregion

// fetch(API_URL + 'films');
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Unsuccessful response');
//       //return Promise.reject(new Error('Unsuccessful response'));
//     }
//     return response.json().then(films => {
//       output.innerText = getFilmTitles(films);
//       return films;
//     });
//   })
// Promise.resolve($.getJSON(API_URL + 'films'))
//   .then(films => {
//     output.innerText = getFilmTitles(films);
//   })
//   .catch(error => {
//     console.warn(error);
//     output.innerText = ':(';
//   })
//   .finally(() => {
//     spinner.remove();
//   });

// function sleep(ms) {
//   return new Promise(resolve => {
//     throw new Error('...');
//     setTimeout(resolve, ms);
//   });
// }

// console.log('Right Away');

// sleep(1000)
//   .then(() => {
//     console.log('After 1s');
//   })
//   .then(() => sleep(1000))
//   .then(() => {
//     console.log('After 2s');
//   })
//   .catch(() => {
//     console.log('Rejected');
//   });

const fs = require('fs');

function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
}

readFile(__filename, 'utf8').then(
  contents => {
    console.log(contents);
  },
  error => {
    console.error(error);
  },
);
