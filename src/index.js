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

//* File: dom-manipulation.js | Line: 130
//todo **`` Need to get the 'setIcon' function to detect if current weather 'is_day' and show appropriate icon

//* File: functions.js | Line: 150
//todo **`` Need to add buttons to pick city and send it. Get rid of the '[0]' in the 'fetchWeather' parameters after??

//* File: event-handlers.js | Line: 19
//todo **`` Need to pop up a warning or something that it's empty

//* File: event-handlers.js | Line: 31
//todo **`` Need to pop up a warning or something that it can't find the location
