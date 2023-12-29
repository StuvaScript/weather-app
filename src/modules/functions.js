export { getWeather };

async function getWeather() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=portland&days=3',
      { mode: 'cors' },
    );
    const data = await response.json();

    //todo **`` Figure out how to run a loop through the three available days
    // forecast day, min temp C
    console.log(data.forecast.forecastday[0].day.mintemp_c);
    // forecast day, min temp F
    console.log(data.forecast.forecastday[0].day.mintemp_f);
    // forecast day, min temp C
    console.log(data.forecast.forecastday[0].day.maxtemp_c);
    // forecast day, min temp F
    console.log(data.forecast.forecastday[0].day.maxtemp_f);
    // update me
    console.log(data.forecast.forecastday);
    console.log(data.current);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//* **`` Needed properties:
// condition: text
// condition: icon
// condition: code
// maxtemp_f
// maxtemp_c
// mintemp_f
// mintemp_c
// is_day
