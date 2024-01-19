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

//todo **`` When launched on github, check the accessability tab and see if the color contrast is ok

//* File: README.md | Line: 1
//todo **`` Update README.md
