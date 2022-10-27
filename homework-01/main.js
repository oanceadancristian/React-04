// Promises

// Example 1

// let value = true;

// let myPromise = new Promise((resolve, reject) => {
//   if (value) {
//     resolve('Promise resolved');
//   } else {
//     reject('Promise rejected');
//   }
// });

// console.log(myPromise);

// Example 2

// let value2 = true;

// let myPromise2 = new Promise((resolve, reject) => {
//   if (value2) {
//     resolve('Promise2 resolved');
//   } else {
//     reject('Promise2 rejected');
//   }
// });

// console.log(myPromise2);

// myPromise2
//   .then(function successPromise2(result) {
//     console.log(result);
//   })
//   .catch(function errorPromise2(result) {
//     console.log(result);
//   });

// Fetch API

// Example 1

// let url = 'https://rickandmortyapi.com/api/character';

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.results[0].name))
//   .catch((error) => console.log(error));

// Example 2

// let url2 = 'https://rickandmortyapi.com/api/character';

// async function fetchCharacter() {
//   let response = await fetch(url2);
//   let data = await response.json();
//   console.log(data.results[1].name);
// }

// fetchCharacter().catch((error) => console.log(error));

// Spread operator

// Example 1

// const tennisPlayers = ['Djokovik', 'Nadal', 'Federer'];
// const greatestTennisPlayers = [...tennisPlayers, 'Sampras', 'Agassi', 'Becker'];

// console.log(greatestTennisPlayers);

// Example 2

// const bestPlayers = {
//   goalkeeper: 'Curtois',
//   midfielder: 'Modric',
//   forward: 'Benzema',
// };

// const bestCoach = {
//   coach: 'Zidane',
// };

// const bestPlayersAndCoach = { ...bestPlayers, ...bestCoach };
// console.log(bestPlayersAndCoach);

// Rest operator

// Example 1

// function showArgs(...args) {
//   console.log(args);
// }

// showArgs(1, 2, 3);

// Example 2

// function calculateSum(a, b, c, d, e) {
//   console.log(a + b + c + d + e);
// }

// const numbers = [1, 2, 3, 4, 5];

// calculateSum(...numbers);
