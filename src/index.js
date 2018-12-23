const API_URL = 'https://star-wars.egghead.training/';
const output = document.getElementById('output');

output.innerText = 'Loading...';

// fetch(API_URL + 'films')
//   .then(response => response.json())
//   .then(films => {
//     output.innerText = getFilmTitles(films);
//   });

fetch(API_URL + 'films')
  .then(response => {
    return Promise.reject('Invalid JSON').then(films => {
      output.innerText = getFilmTitles(films);
    });
  })
  .catch(error => {
    console.warn(error);
    output.innerText = ':(';
  });

const getFilmTitles = films => {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n');
};
