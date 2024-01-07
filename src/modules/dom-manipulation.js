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

  measurementSystemCheck(data);
  checkForRainOrSnow(data);
}

//? **`` Creates divs with the inputted data, adds class names, adds the C or F class, checks if it's day or night, then sets the weather icon
function manipulateData(parentElement, weatherInfo) {
  let isDay;
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    measurementClassAdder(key, div);
    div.classList.add(`${key}`);
    div.innerText = `${value}: ${key}`;
    if (key === 'is_day' && value === 0) {
      isDay = false;
    }
    setIcon(div, key, value, isDay);

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
    item.classList.remove('measure-hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.add('measure-hidden');
  });
}

//? **`` Hides all the data with the class of 'fahrenheit' and shows all the data with the class 'celsius'
function displayC() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.add('measure-hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.remove('measure-hidden');
  });
}

//? **`` Detects if the key is an icon, takes the icon value, gets the icon from the 'icon-handler.js' file, then displays it
function setIcon(div, key, value, isDay) {
  if (key === 'icon') {
    const img = document.createElement('img');
    if (isDay === false) {
      img.setAttribute('src', icon.night[`${value}`]);
      isDay = '';
    } else {
      img.setAttribute('src', icon.day[`${value}`]);
    }
    img.setAttribute('alt', 'Icon representing the weather');
    div.innerText = '';
    div.append(img);
  }
}

//? **`` Checks if the forecast day will rain or snow and hides data if no rain or snow is present
function checkForRainOrSnow(data) {
  //? **`` This counter simulates the day being checked
  let dayCounter = 1;
  data.forecastday.forEach((day) => {
    //? **`` Checks for rain
    if (day.daily_will_it_rain === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_rain, .forecast-day:nth-child(${dayCounter}) > .totalprecip_in, .forecast-day:nth-child(${dayCounter}) > .totalprecip_mm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }
    //? **`` Checks for snow
    if (day.daily_will_it_snow === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_snow, .forecast-day:nth-child(${dayCounter}) > .totalsnow_in, .forecast-day:nth-child(${dayCounter}) > .totalsnow_cm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }
    //? **`` At the end of each loop, it adds one to the day simulator
    dayCounter++;
  });
}
