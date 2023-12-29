export { getWeather };

async function getWeather() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=portland&days=3',
      { mode: 'cors' },
    );
    const data = await response.json();

    console.group(`Current temps`);
    console.log(data.current.temp_c + ' temp C');
    console.log(data.current.temp_f + ' temp F');
    console.log(data.current.condition.text + ' condition');
    console.log(data.current.condition.icon.slice(-7) + ' icon number');
    console.groupEnd();

    data.forecast.forecastday.forEach((element) => {
      console.group(`${element.date} day temps`);
      console.log(element.day.mintemp_c + ' min temp C');
      console.log(element.day.maxtemp_c + ' max temp C');
      console.log(element.day.mintemp_f + ' min temp F');
      console.log(element.day.maxtemp_f + ' max temp F');
      console.log(element.day.condition.text + ' condition');
      console.log(element.day.condition.icon.slice(-7) + ' icon number');
      console.groupEnd();
    });
    // // forecast day, min temp C
    // console.log(data.forecast.forecastday[0].day.mintemp_c);
    // // forecast day, min temp F
    // console.log(data.forecast.forecastday[0].day.mintemp_f);
    // // forecast day, min temp C
    // console.log(data.forecast.forecastday[0].day.maxtemp_c);
    // // forecast day, min temp F
    // console.log(data.forecast.forecastday[0].day.maxtemp_f);
    // update me
    console.log(data.forecast.forecastday);
    console.log(data.current);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//* **`` Needed properties:
// is_day
// hourly? Might get pretty complicated...

// condition: text
// condition: icon
// maxtemp_f
// maxtemp_c
// mintemp_f
// mintemp_c
