import {
  displayC,
  displayData,
  displayF,
  toggleLoadingImage,
} from './dom-manipulation';
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
      console.warn('Empty search field');
      return;
    }

    try {
      const response = await fetchAutocomplete(inputField.value);
      const multiCheck = await multipleCityChecker(response);
      //? **`` Checks to see if the user hit the last option to 'search again' in the city picker
      if (multiCheck === 'Search cancelled') {
        return;
      }
      toggleLoadingImage();
      const weatherData = await fetchWeather(multiCheck);
      toggleLoadingImage();
      displayData(weatherData);
    } catch (error) {
      toggleLoadingImage();
      console.error(`Error: ${error}`);
      console.warn("Can't find location");
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
