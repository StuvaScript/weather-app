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

//! **`` WATCH YOUR PROJECT WITH 'NPX WEBPACK --WATCH' FOOOOOOOOL!!!! :)

//todo **`` Bring in the icons

//* File: dom-manipulation.js | Line: 76
//todo **`` Get the measurementSystemCheck() to hide the C or F info on initial IP fetch.

//* File: event-handlers.js | Line: 39
//todo **`` Move the functions to dom-manipulation.js, add the toggler to measurementSystemCheck() and change it to only check fToggle and classList.toggle() accordingly to shorten up the 'hidden' class add code.

//* File: functions.js | Line: 150
//todo **`` Need to add buttons to pick city and send it. Get rid of the '[0]' in the 'fetchWeather' parameters after??

//* File: event-handlers.js | Line: 19
//todo **`` Need to pop up a warning or something that it's empty

//* File: event-handlers.js | Line: 31
//todo **`` Need to pop up a warning or something that it can't find the location
