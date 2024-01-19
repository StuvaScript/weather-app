import {
  displayFavicon,
  displayLoadImage,
  displaySearchIcon,
} from './modules/dom-manipulation';
import {
  searchInputLogic,
  toggleMeasurementData,
} from './modules/event-handlers';
import { displayInitialWeather } from './modules/functions';
import './normalize.css';
import './style.css';

displayInitialWeather();
searchInputLogic();
toggleMeasurementData();
displaySearchIcon();
displayFavicon();
displayLoadImage();
