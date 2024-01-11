import * as icon from './icon-handler';

export {
  displayData,
  displayC,
  displayF,
  createMultiCityDisplay,
  removeCityDisplay,
};

//? **`` This gets all our necessary data and displays it
function displayData(data) {
  const main = document.querySelector('main');

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

  main.append(currentWeatherDiv, cityDiv, forecastWeatherDiv);

  measurementSystemCheck(data);
  checkForRainOrSnow(data);
  regionCorrection();
  hideIrrelevantData();
}

//? **`` Creates divs with the inputted data, adds class names, adds the C or F class, checks if it's day or night then sets the weather icon, rounds off longer numbers
function manipulateData(parentElement, weatherInfo) {
  let isDay;
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    measurementClassAdder(key, div);
    div.classList.add(`${key}`);
    div.innerText = `${value}`;
    if (key === 'is_day' && value === 0) {
      isDay = false;
    }
    setIcon(div, key, value, isDay);
    roundOffNumbers(key, value, div);

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
  data.forecastday.forEach((day, index) => {
    //? **`` This counter simulates the day being checked
    const dayCounter = index + 1;
    //? **`` Checks for rain
    if (day.daily_chance_of_rain === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_rain, .forecast-day:nth-child(${dayCounter}) > .totalprecip_in, .forecast-day:nth-child(${dayCounter}) > .totalprecip_mm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }

    //? **`` Checks for snow
    if (day.daily_chance_of_snow === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_snow, .forecast-day:nth-child(${dayCounter}) > .totalsnow_in, .forecast-day:nth-child(${dayCounter}) > .totalsnow_cm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }
  });
}

//? **`` Adds a 'hidden' class to data that doesn't need to be displayed
function hideIrrelevantData() {
  document.querySelectorAll('.is_day').forEach((e) => {
    e.classList.add('irrelevant-hidden');
  });
}

//? **`` If the fetched region data is empty or is the same name as the city, make the region data hidden
function regionCorrection() {
  const city = document.querySelector('.city_name');
  const region = document.querySelector('.region');
  if (city.innerText == region.innerText || region.innerText === '') {
    region.classList.add('irrelevant-hidden');
  }
}

//? **`` Makes sure certain numbers are rounded
function roundOffNumbers(key, value, div) {
  //? **`` Rounds to the tenth position
  if (
    key === 'totalsnow_in' ||
    key === 'totalsnow_cm' ||
    key === 'totalprecip_mm'
  ) {
    div.innerText = value.toFixed(1);
  }

  //? **`` Rounds to the whole number
  if (key === 'temp_f' || key === 'mintemp_f' || key === 'maxtemp_f') {
    div.innerText = value.toFixed();
  }
}

//? **`` Creates a menu to select a city when multiple cities are an option
function createMultiCityDisplay(array) {
  const body = document.querySelector('body');
  const multiCityWrapper = document.createElement('div');
  multiCityWrapper.classList.add('multi-city-wrapper');
  array.forEach((location, index) => {
    const div = document.createElement('div');
    //? **`` Won't display the region if the city and region share the same name or if the region data is empty
    if (location.name == location.region || location.region === '') {
      div.innerText = `${location.name}, ${location.country}`;
    } else {
      div.innerText = `${location.name}, ${location.region}, ${location.country}`;
    }
    div.classList.add(`city-choice`);
    multiCityWrapper.append(div);
  });
  //? **`` Final option to search again
  const div = document.createElement('div');
  div.innerText = 'City not here? Try searching postal code.';
  div.classList.add(`city-choice`);
  multiCityWrapper.append(div);

  body.prepend(multiCityWrapper);
}

//? **`` Removes the city display window
function removeCityDisplay() {
  document.querySelector('.multi-city-wrapper').remove();
}
