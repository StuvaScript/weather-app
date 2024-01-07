import { displayC, displayData, displayF } from './dom-manipulation';
import {
  fetchAutocomplete,
  fetchWeather,
  multipleCityChecker,
} from './functions';

export { searchInputLogic, toggleMeasurementData };

//? **`` This activates the autocomplete, the user selects a city if there are multiples, then the coordinates are sent to the weather fetcher, then displayed.
function searchInputLogic() {
  const form = document.querySelector('form');

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

//? **`` When clicking the C or F radio buttons, it displays the correct data accordingly
function toggleMeasurementData() {
  const toggleWrapper = document.querySelector('#toggle-wrapper');
  const fToggle = document.querySelector('#F-toggle');

  toggleWrapper.addEventListener('click', () => {
    fToggle.checked ? displayF() : displayC();
  });
}
