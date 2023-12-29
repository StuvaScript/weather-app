import {
  printConsoleData,
  fetchWeather,
  fetchIPAddress,
  fetchAutocomplete,
} from './modules/functions';
import './normalize.css';
import './style.css';

//? **`` Gets the weather data, then logs it to the console
fetchWeather().then((data) => {
  printConsoleData(data);
});

fetchIPAddress();

fetchAutocomplete();

//todo **`` Need to get the IP address to set the initial weather. Then make a form field. Then add the autocomplete to the search bar. Then let that input trigger the weather api
