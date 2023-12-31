export { displayData };

const main = document.querySelector('main');

//? **`` This gets all our necessary data and logs it to the console
function displayData(data) {
  //? **`` This removes all the child elements inside the 'main' element
  main.replaceChildren();

  measurementSystemCheck(data);

  //? **`` Display city
  const cityDiv = document.createElement('div');
  cityDiv.setAttribute('id', 'city-wrapper');
  createDivs(cityDiv, data.location);

  // console.group('Diplayed City');
  // console.log(data.location.city_name + ' city name');
  // console.groupEnd();

  //? **`` Displays the current weather
  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.setAttribute('id', 'current-weather-wrapper');
  createDivs(currentWeatherDiv, data.current);

  // console.group(`Current temps`);
  // console.log(data.current.temp_c + ' temp C');
  // console.log(data.current.temp_f + ' temp F');
  // console.log(data.current.condition + ' condition');
  // console.log(data.current.icon + ' icon number');
  // console.log(data.current.is_day + ' daytime? 1 = yes, 0 = no');
  // console.groupEnd();

  //? **`` This loops thru and displays the forecast data
  const forecastWeatherDiv = document.createElement('div');
  forecastWeatherDiv.setAttribute('id', 'forecast-weather-wrapper');

  data.forecastday.forEach((element) => {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day');
    createDivs(forecastDayDiv, element);
    forecastWeatherDiv.append(forecastDayDiv);

    // console.group(`${element.date} day temps`);
    // console.log(element.date + ' date');
    // console.log(element.mintemp_c + ' min temp C');
    // console.log(element.maxtemp_c + ' max temp C');
    // console.log(element.mintemp_f + ' min temp F');
    // console.log(element.maxtemp_f + ' max temp F');
    // console.log(element.condition + ' condition');
    // console.log(element.icon + ' icon number');
    // console.log(element.daily_will_it_rain + ' rain? 1 = yes, 0 = no');
    // console.log(element.daily_will_it_snow + ' snow? 1 = yes, 0 = no');
    // console.log(element.daily_chance_of_rain + ' percent chance of rain');
    // console.log(element.daily_chance_of_snow + ' percent chance of snow');
    // console.log(element.totalprecip_in + ' total rain in inches');
    // console.log(element.totalprecip_mm + ' total rain in millimeters');
    // console.log(element.totalsnow_in + ' total snow in inches');
    // console.log(element.totalprecip_cm + ' total snow in centimeters');
    // console.groupEnd();
  });

  main.append(cityDiv, currentWeatherDiv, forecastWeatherDiv);
}

function createDivs(parentElement, weatherInfo) {
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    div.classList.add(`${key}`);
    div.innerText = `${value}`;
    parentElement.append(div);
  }
}

//? **`` Changes to F or C depending on the detected country
function measurementSystemCheck(data) {
  const fToggle = document.querySelector('#F-toggle');
  const cToggle = document.querySelector('#C-toggle');

  if (
    data.location.country === 'United States of America' ||
    data.location.country === 'Liberia' ||
    data.location.country === 'Myanmar'
  ) {
    fToggle.checked = true;
  } else {
    cToggle.checked = true;
  }
}
