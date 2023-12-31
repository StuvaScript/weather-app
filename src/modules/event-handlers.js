import { fetchAutocomplete, fetchWeather, printConsoleData } from './functions';

export { searchInputLogic };

const searchBtn = document.querySelector('#search-button');

function searchInputLogic() {
  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let inputValue = document.querySelector('#search-input').value;
    if (inputValue == '') {
      console.log('Empty search field');
      return;
    }

    //todo **`` Need to reset the search field
    try {
      const response = await fetchAutocomplete(inputValue);
      multipleCityChecker(response);
    } catch (error) {
      console.error(`Error: ${error}`);
    }

    //todo **`` This needs to come out of this handler into the functions module
    //? **`` This checks to see if there is more than one value in the Autocomplete fetch
    async function multipleCityChecker(array) {
      if (array[1]) {
        console.log('Pick your city');
      } else {
        try {
          const weatherData = await fetchWeather(array[0]);
          printConsoleData(weatherData);
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      }
    }
  });
}
