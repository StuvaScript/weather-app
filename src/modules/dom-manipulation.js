export { displayData };

const main = document.querySelector('main');

//? **`` This gets all our necessary data and displays it
function displayData(data) {
  //? **`` This removes all the child elements inside the 'main' element
  main.replaceChildren();

  measurementSystemCheck(data);

  //? **`` Display city
  const cityDiv = document.createElement('div');
  cityDiv.setAttribute('id', 'city-wrapper');
  createDivs(cityDiv, data.location);

  //? **`` Displays the current weather
  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.setAttribute('id', 'current-weather-wrapper');
  createDivs(currentWeatherDiv, data.current);

  //? **`` This loops thru and displays the forecast data
  const forecastWeatherDiv = document.createElement('div');
  forecastWeatherDiv.setAttribute('id', 'forecast-weather-wrapper');

  data.forecastday.forEach((element) => {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day');
    createDivs(forecastDayDiv, element);
    forecastWeatherDiv.append(forecastDayDiv);
  });

  main.append(cityDiv, currentWeatherDiv, forecastWeatherDiv);
}

//? **`` Creates divs with the inputted data and adds class names
function createDivs(parentElement, weatherInfo) {
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    measurementClassAdder(key, div);
    div.classList.add(`${key}`);
    div.innerText = `${value}`;
    parentElement.append(div);
  }
}

//? **`` Changes to F or C depending on the detected country
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
    } else {
      cToggle.checked = true;
    }
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
