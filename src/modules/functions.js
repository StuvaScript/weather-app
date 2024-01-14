import {
  createMultiCityDisplay,
  displayData,
  removeCityDisplay,
} from './dom-manipulation';

export {
  fetchAutocomplete,
  displayInitialWeather,
  fetchWeather,
  multipleCityChecker,
};

//? **`` Gets the user's IP address, sends the location to the weather fetcher which fetches the weather data, then logs it to the console
async function displayInitialWeather() {
  try {
    const ipData = await fetchIPAddress();
    console.log(ipData);
    const weatherData = await fetchWeather(ipData);
    displayData(weatherData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches our weather data, converts it to a JS object, then returns the data
async function fetchWeather(receivedData) {
  const inputData = `${receivedData.lat},${receivedData.lon}`;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=${inputData}&days=3`,
      { mode: 'cors' },
    );
    const data = await response.json();
    console.group('%cOriginal Data', 'background:rebeccapurple');
    console.log(data);
    console.groupEnd();

    const dataObject = createWeatherDataObject(data);

    console.group('%cFiltered Weather', 'background:gold; color:black');
    console.log(dataObject);
    console.groupEnd();

    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches the user's location to be used in the initial displayed weather and converts it to a JS object
async function fetchIPAddress() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/ip.json?key=a6926baa03824f759bd20713231912&q=auto:ip',
      { mode: 'cors' },
    );
    const data = await response.json();
    const dataObject = createIPDataObject(data);

    console.group('%cIP Address', 'background:green');
    console.log(`We detect that you're in ${data.city}`);
    console.log(dataObject);
    console.groupEnd();

    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches multiple cities that match the inputted city.
async function fetchAutocomplete(receivedData) {
  //? **`` This clears out the search bar
  document.querySelector('#search-input').value = '';
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=a6926baa03824f759bd20713231912&q=${receivedData}`,
      { mode: 'cors' },
    );
    const data = await response.json();
    const dataArray = createAutocompleteDataArray(data);

    console.group('%cAutocomplete', 'background:#1ce; color:black');
    console.log(dataArray);
    console.groupEnd();

    return dataArray;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Takes the data from the fetchIPAddress API and returns only what we need
function createIPDataObject(data) {
  const lat = data.lat;
  const lon = data.lon;

  return { lat, lon };
}

//? **`` Takes the data from the fetchWeather API and returns only what we need
function createWeatherDataObject(data) {
  //? **`` Creating an object for the current day with only the needed data
  const current = {};
  current.temp_c = data.current.temp_c;
  current.temp_f = data.current.temp_f;
  current.condition = data.current.condition.text;
  current.is_day = data.current.is_day;
  current.icon = data.current.condition.icon.slice(-7);

  //? **`` Creating an array with objects for the forecast with only the needed data
  const forecastday = [];
  data.forecast.forecastday.forEach((element, index) => {
    forecastday[index] = {};
    forecastday[index].date = element.date;
    forecastday[index].maxtemp_c = element.day.maxtemp_c;
    forecastday[index].mintemp_c = element.day.mintemp_c;
    forecastday[index].maxtemp_f = element.day.maxtemp_f;
    forecastday[index].mintemp_f = element.day.mintemp_f;
    forecastday[index].condition = element.day.condition.text;
    forecastday[index].icon = element.day.condition.icon.slice(-7);
    forecastday[index].daily_chance_of_rain = element.day.daily_chance_of_rain;
    forecastday[index].totalprecip_in = element.day.totalprecip_in;
    forecastday[index].totalprecip_mm = element.day.totalprecip_mm;
    forecastday[index].daily_chance_of_snow = element.day.daily_chance_of_snow;
    forecastday[index].totalsnow_in = element.day.totalsnow_cm / 2.54;
    forecastday[index].totalsnow_cm = element.day.totalsnow_cm;
  });

  //? **`` Creating an object with the city name
  const location = {};
  location.city_name = data.location.name;
  location.region = data.location.region;
  location.country = data.location.country;

  return { current, forecastday, location };
}

//? **`` Takes the data from the fetchAutocomplete API and creates an array with objects for the autocomplete with only the needed data
function createAutocompleteDataArray(data) {
  const autocompleteArray = [];
  data.forEach((element, index) => {
    autocompleteArray[index] = {};
    autocompleteArray[index].name = element.name;
    autocompleteArray[index].region = element.region;
    autocompleteArray[index].country = element.country;
    autocompleteArray[index].lat = element.lat;
    autocompleteArray[index].lon = element.lon;
  });

  return autocompleteArray;
}

//? **`` This checks to see if there is more than one value in the Autocomplete fetch, displays the choices if so, then removes the city picker window. If theres only one city when searched, it returns that one.
async function multipleCityChecker(array) {
  if (array[1]) {
    createMultiCityDisplay(array);
    console.log(array);
    const city = await selectCity(array);
    removeCityDisplay();
    return city;
  }
  return array[0];
}

//? **`` Creates a new Promise to let the user select the city before any other functions can continue
function selectCity(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //? **`` This cancels the city search if the user clicks outside of the city search box
      document.querySelector('body').addEventListener('click', function (e) {
        //? **`` Checking to see if the element clicked has a class
        if (e.target.classList.length === 0) {
          resolve('Search cancelled');
        }
        //? **`` Checking to see if the clicked element class does NOT match with the city selection class
        if (![...e.target.classList].includes('city-choice')) {
          resolve('Search cancelled');
        }
      });

      document.querySelectorAll('.city-choice').forEach((choice) => {
        choice.addEventListener('click', function () {
          const cityIndex = [...this.parentNode.childNodes].indexOf(this);
          //? **`` This checks to see if the user selected the last option which is to search again.
          if (cityIndex === [...this.parentNode.childNodes].length - 1) {
            resolve('Search cancelled');
          } else {
            resolve(array[cityIndex]);
          }
        });
      });
    }, 0);
  });
}
