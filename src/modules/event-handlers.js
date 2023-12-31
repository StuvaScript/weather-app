import { displayData } from './dom-manipulation';
import {
  fetchAutocomplete,
  fetchWeather,
  multipleCityChecker,
} from './functions';

export { searchInputLogic };

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
      console.warn("Can't find location");
    } finally {
      inputField.value = '';
    }
  });
}
