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

// const fs = require('fs');
// const util = require('util');

// function readFile(path, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, encoding, (error, contents) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(contents);
//       }
//     });
//   });
// }

// const readFile = util.promisify(fs.readFile);

// readFile(__filename, 'utf8').then(
//   contents => {
//     console.log(contents);
//   },
//   error => {
//     console.error(error);
//   },
// );

// function resolveAfter(ms, value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, ms);
//   });
// }

//const promise = resolveAfter(1000, 'A');
// const promiseB = resolveAfter(500, 'B');

// const fastestPromise = Promise.race([promiseA, promiseB]);
// fastestPromise.then(value => {
//   console.log(value);
// });

// function timeout(ms, promise) {
//   let timeoutID;
//   const timeoutPromise = new Promise((_, reject) => {
//     timeoutID = setTimeout(() => {
//       reject(Error(`Operation timed out after ${ms}ms`));
//     }, ms);
//   });
//   return Promise.race([promise, timeoutPromise]).finally(() => {
//     clearTimeout(timeoutID);
//   });
// }

// function timeout(ms, promise) {
//   let timeoutID;
//   const timeoutPromise = new Promise((_, reject) => {
//     timeoutID = setTimeout(() => {
//       reject(new Error(`Operation timed out after ${ms}ms`));
//     }, ms);
//   });
//   return Promise.race([promise, timeoutPromise]).finally(() => {
//     clearTimeout(timeoutID);
//   });
// }

// timeout(5000, promise).then(
//   value => {
//     console.log(value);
//   },
//   error => {
//     console.error(error.message);
//   },
// );

// #region Setuo
// const API_URL = 'https://starwars.egghead.training/';

// const output = document.getElementById('output');
// const spinner = document.getElementById('spinner');

// function queryAPI(endpoint) {
//   return fetch(API_URL + endpoint).then(response => {
//     return response.ok
//       ? response.json()
//       : Promise.reject(Error('Unsuccessful response'));
//   });
// }
// #endregion

// queryAPI('films')
//   .then(films => {
//     return queryAPI('planets').then(planets => {
//       output.innerText =
//         `${films.length} films, ` + `${planets.length} planets, `;
//     });
//   })
//   .finally(() => {
//     spinner.remove();
//   });

// Promise.all([queryAPI('films'), queryAPI('planets'), queryAPI('species')])
//   .then(([films, planets, species]) => {
//     output.innerText =
//       `${films.length} films, ` +
//       `${planets.length} planets, ` +
//       `${species.length} species`;
//   })
//   .catch(error => {
//     console.warn(error);
//     output.innerText = ':(';
//   })
//   .finally(() => {
//     spinner.remove();
//   });
import '@babel/polyfill';
const API_URL = 'https://starwars.egghead.training/';

const output = document.getElementById('output');
const spinner = document.getElementById('spinner');

function queryAPI(endpoint) {
  return fetch(API_URL + endpoint).then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(Error('Unsuccessful response'));
  });
}

async function main() {
  const films = await queryAPI('films');
  console.log(films);
}

main();
