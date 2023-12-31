import { searchInputLogic } from './modules/event-handlers';
import { displayInitialWeather } from './modules/functions';
import './normalize.css';
import './style.css';

displayInitialWeather();
searchInputLogic();

//* File: dom-manipulation.js | Line: 76
//todo **`` Refine the measurementSystemCheck() to only display the C or F info. Make a listener for that same idea too.

//* File: dom-manipulation.js | Line: 76
//todo **`` Use 'display:none' to hide and remove either Celsius or Fahrenheit info

//* File: functions.js | Line: 150
//todo **`` Need to add buttons to pick city and send it. Get rid of the '[0]' in the 'fetchWeather' parameters after??

//* File: event-handlers.js | Line: 19
//todo **`` Need to pop up a warning or something that it's empty

//* File: event-handlers.js | Line: 31
//todo **`` Need to pop up a warning or something that it can't find the location
