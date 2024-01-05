import * as icon from './icon-handler';

export { displayData, displayC, displayF };

const main = document.querySelector('main');

//? **`` This gets all our necessary data and displays it
function displayData(data) {
  //? **`` This removes all the child elements inside the 'main' element
  main.replaceChildren();

  //? **`` Display city
  const cityDiv = document.createElement('div');
  cityDiv.setAttribute('id', 'city-wrapper');
  manipulateData(cityDiv, data.location);

  //? **`` Displays the current weather
  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.setAttribute('id', 'current-weather-wrapper');
  manipulateData(currentWeatherDiv, data.current);

  //? **`` This loops thru and displays the forecast data
  const forecastWeatherDiv = document.createElement('div');
  forecastWeatherDiv.setAttribute('id', 'forecast-weather-wrapper');

  data.forecastday.forEach((element) => {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day');
    manipulateData(forecastDayDiv, element);
    forecastWeatherDiv.append(forecastDayDiv);
  });

  main.append(cityDiv, currentWeatherDiv, forecastWeatherDiv);

  //? **`` Checks for and shows either F or C data
  measurementSystemCheck(data);
}

//? **`` Creates divs with the inputted data, adds class names, displays either C or F, sets the correct weather icon
function manipulateData(parentElement, weatherInfo) {
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    measurementClassAdder(key, div);
    div.classList.add(`${key}`);
    div.innerText = `${value}`;
    setIcon(div, key, value);

    parentElement.append(div);
  }
}

//? **`` Displays either the C or F data accordingly depending on the radio buttons
function measurementSystemCheck(data) {
  const fToggle = document.querySelector('#F-toggle');
  const cToggle = document.querySelector('#C-toggle');

  //? **`` This toggles F or C on the initial IP fetch
  if (!fToggle.checked && !cToggle.checked) {
    if (
      data.location.country === 'United States of America' ||
      data.location.country === 'Liberia'
    ) {
      fToggle.checked = true;
      displayF();
    } else {
      cToggle.checked = true;
      displayC();
    }
  }

  //? **`` Checks for the checked radio button when searching for a new location and displays either C or F data
  if (fToggle.checked) {
    displayF();
  } else {
    displayC();
  }
}

//? **`` This adds a class of either 'celsius' or 'fahrenheit' to the correct measurement data
function measurementClassAdder(key, div) {
  const celsiusArray = [
    'temp_c',
    'mintemp_c',
    'maxtemp_c',
    'totalprecip_mm',
    'totalsnow_cm',
  ];
  const fahrenheitArray = [
    'temp_f',
    'mintemp_f',
    'maxtemp_f',
    'totalprecip_in',
    'totalsnow_in',
  ];

  celsiusArray.forEach((item) => {
    if (key === item) {
      return div.classList.add('celsius');
    }
  });

  fahrenheitArray.forEach((item) => {
    if (key === item) {
      return div.classList.add('fahrenheit');
    }
  });
}

//? **`` Hides all the data with the class of 'celsius' and shows all the data with the class 'fahrenheit'
function displayF() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.remove('hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.add('hidden');
  });
}

//? **`` Hides all the data with the class of 'fahrenheit' and shows all the data with the class 'celsius'
function displayC() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.add('hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.remove('hidden');
  });
}

//? **`` Detects if the key is an icon, takes the icon value and gets the icon from the 'icon-handler.js' file
function setIcon(div, key, value) {
  if (key === 'icon') {
    const img = document.createElement('img');
    img.setAttribute('src', icon.day[`${value}`]);
    img.setAttribute('alt', 'Icon representing the weather');
    div.innerText = '';
    div.append(img);
  }
}
