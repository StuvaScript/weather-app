import { printConsoleData } from './dom-manipulation';

export { fetchAutocomplete, displayInitialWeather };

//? **`` Gets the user's IP address, sends the location to the weather fetcher which fetches the weather data, then logs it to the console
async function displayInitialWeather() {
  const ipData = await fetchIPAddress();
  const weatherData = await fetchWeather(ipData);
  printConsoleData(weatherData);
}

//? **`` This fetches our weather data, converts it to a JS object, then returns the data. Our error handler is built into this function
async function fetchWeather(receivedData) {
  //! **`` Filter that needs to be split off. Also need to add the autocomplete filter on here.
  let inputData;
  if (receivedData.ip) {
    console.log('This came from the IP Fetcher');
    inputData = `${receivedData.lat},${receivedData.lon}`;
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=${inputData}&days=3`,
      { mode: 'cors' },
    );
    const data = await response.json();
    console.group('%cWeather', 'background:gold; color:black');
    console.log(data);
    console.groupEnd();

    const dataObject = createWeatherDataObject(data);
    console.log(dataObject);

    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches the user's location to be used in the initial displayed weather and returns an object with only the required data
async function fetchIPAddress() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/ip.json?key=a6926baa03824f759bd20713231912&q=auto:ip',
      { mode: 'cors' },
    );
    const data = await response.json();
    console.group('%cIP Address', 'background:green');
    console.log(`We detect that you're in ${data.city}`);
    console.log('Is that right?');
    console.log(data.lat + ' latitude');
    console.log(data.lon + ' longitude');
    console.log(data);
    console.groupEnd();

    const dataObject = createIPDataObject(data);
    console.log(dataObject);
    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches multiple cities that match your city. The returned data has an ID that can be inputted into the 'fetchWeather' api query
async function fetchAutocomplete() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/search.json?key=a6926baa03824f759bd20713231912&q=seattle',
      { mode: 'cors' },
    );
    const data = await response.json();
    console.group('%cAutocomplete', 'background:#1ce; color:black');
    console.log(data);
    console.groupEnd();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Takes the data from the fetchIPAddress API and returns only what we need
function createIPDataObject(data) {
  const ip = data.ip;
  const lat = data.lat;
  const lon = data.lon;

  return { ip, lat, lon };
}

//? **`` Takes the data from the fetchWeather API and returns only what we need
function createWeatherDataObject(data) {
  //? **`` Creating an object for the current day with only the needed data
  const current = {};
  current.temp_c = data.current.temp_c;
  current.temp_f = data.current.temp_f;
  current.condition = data.current.condition.text;
  current.icon = data.current.condition.icon.slice(-7);
  current.is_day = data.current.is_day;

  //? **`` Creating an array with objects for the forecast with only the needed data
  const forecastday = [];
  data.forecast.forecastday.forEach((element, index) => {
    forecastday[index] = {};
    forecastday[index].date = element.date;
    forecastday[index].mintemp_c = element.day.mintemp_c;
    forecastday[index].maxtemp_c = element.day.maxtemp_c;
    forecastday[index].mintemp_f = element.day.mintemp_f;
    forecastday[index].maxtemp_f = element.day.maxtemp_f;
    forecastday[index].condition = element.day.condition.text;
    forecastday[index].icon = element.day.condition.icon.slice(-7);
    forecastday[index].daily_will_it_rain = element.day.daily_will_it_rain;
    forecastday[index].daily_will_it_snow = element.day.daily_will_it_snow;
    forecastday[index].daily_chance_of_rain = element.day.daily_chance_of_rain;
    forecastday[index].daily_chance_of_snow = element.day.daily_chance_of_snow;
    forecastday[index].totalprecip_in = element.day.totalprecip_in;
    forecastday[index].totalprecip_mm = element.day.totalprecip_mm;
    forecastday[index].totalsnow_in = element.day.totalsnow_cm / 25.4;
    forecastday[index].totalsnow_cm = element.day.totalsnow_cm;
  });

  //? **`` Creating an object with the city name
  const location = {};
  location.name = data.location.name;

  return { current, forecastday, location };
}
