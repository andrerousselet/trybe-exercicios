// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeContainer = document.querySelector('#jokeContainer')
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  fetch(API_URL, myObj)
    .then(response => response.json())
    .then(data => jokeContainer.innerHTML = data.joke);
};

window.onload = () => fetchJoke();