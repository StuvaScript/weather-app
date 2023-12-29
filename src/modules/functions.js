export { fetchWeather, printConsoleData, fetchIPAddress, fetchAutocomplete };

//? **`` This fetches our weather data, converts it to a JS object, then returns the data. Our error handler is built into this function
async function fetchWeather() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=portland&days=3',
      { mode: 'cors' },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches your location to be used in the initial displayed weather.
async function fetchIPAddress() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/ip.json?key=a6926baa03824f759bd20713231912&q=auto:ip',
      { mode: 'cors' },
    );
    const data = await response.json();
    console.log(data);
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
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This gets all our necessary data and logs it to the console
function printConsoleData(data) {
  //? **`` Current weather
  console.group(`Current temps`);
  console.log(data.current.temp_c + ' temp C');
  console.log(data.current.temp_f + ' temp F');
  console.log(data.current.condition.text + ' condition');
  console.log(data.current.condition.icon.slice(-7) + ' icon number');
  console.log(data.current.is_day + ' daytime? 1 = yes, 0 = no');
  console.groupEnd();

  //? **`` This loops through the forecast data
  data.forecast.forecastday.forEach((element) => {
    console.group(`${element.date} day temps`);
    console.log(element.day.mintemp_c + ' min temp C');
    console.log(element.day.maxtemp_c + ' max temp C');
    console.log(element.day.mintemp_f + ' min temp F');
    console.log(element.day.maxtemp_f + ' max temp F');
    console.log(element.day.condition.text + ' condition');
    console.log(element.day.condition.icon.slice(-7) + ' icon number');
    console.log(element.day.daily_will_it_rain + ' rain? 1 = yes, 0 = no');
    console.log(element.day.daily_will_it_snow + ' snow? 1 = yes, 0 = no');
    console.log(element.day.daily_chance_of_rain + ' percent chance of rain');
    console.log(element.day.daily_chance_of_snow + ' percent chance of snow');
    console.groupEnd();
  });
}
