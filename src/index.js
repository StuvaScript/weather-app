import { searchInputLogic } from './modules/event-handlers';
import { fetchAutocomplete, displayInitialWeather } from './modules/functions';
import './normalize.css';
import './style.css';

displayInitialWeather();
searchInputLogic();
