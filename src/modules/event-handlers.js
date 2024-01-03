import { displayData } from './dom-manipulation';
import {
  fetchAutocomplete,
  fetchWeather,
  multipleCityChecker,
} from './functions';

export { searchInputLogic, toggleMeasurementData };

const form = document.querySelector('form');

//? **`` This activates the autocomplete, the user selects a city if there are multiples, then the coordinates are sent to the weather fetcher, then displayed.
function searchInputLogic() {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let inputField = document.querySelector('#search-input');
    //? **`` This returns if the input is submitted empty
    if (inputField.value === '') {
      //todo **`` Need to pop up a warning or something that it's empty
      console.warn('Empty search field');
      return;
    }

    try {
      const response = await fetchAutocomplete(inputField.value);
      const multiCheck = await multipleCityChecker(response);
      const weatherData = await fetchWeather(multiCheck[0]);
      displayData(weatherData);
    } catch (error) {
      console.error(`Error: ${error}`);
      //todo **`` Need to pop up a warning or something that it can't find the location
      console.warn("Can't find location");
    } finally {
      inputField.value = '';
    }
  });
}

function toggleMeasurementData() {
  const toggleWrapper = document.querySelector('#toggle-wrapper');
  const fToggle = document.querySelector('#F-toggle');

  toggleWrapper.addEventListener('click', (e) => {
    console.log(e);

    fToggle.checked ? displayF() : displayC();
  });
}

//! **`` Move these to function module
function displayF() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.remove('hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.add('hidden');
  });
}

function displayC() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.add('hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.remove('hidden');
  });
}
