'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune')
    .then((response) => response.text())
    .then((status) => {
      document.querySelector('#fortune-text').innerHTML = status;
  })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#weather-info').innerHTML = responseJson.forecast;
    });

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  
  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      alert(responseJSON.msg);
    });

}

  
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

// function showError(code) {

//   if (code == "ERROR") {
//     document.querySelector('#order-status').classList.add(order-error)';
//     document.querySelector('#order-status').innerHTML = `${msg}`;
//   }
// }

document.querySelector('#order-form').addEventListener('submit', orderMelons);

