import { printConsoleData, fetchWeather } from './modules/functions';
import './normalize.css';
import './style.css';

//? **`` Gets the weather data, then logs it to the console
fetchWeather().then((data) => {
  printConsoleData(data);
});
