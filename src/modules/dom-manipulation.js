export { printConsoleData };

//? **`` This gets all our necessary data and logs it to the console
function printConsoleData(data) {
  //? **`` Current weather
  console.group(`Current temps`);
  console.log(data.current.temp_c + ' temp C');
  console.log(data.current.temp_f + ' temp F');
  console.log(data.current.condition + ' condition');
  console.log(data.current.icon + ' icon number');
  console.log(data.current.is_day + ' daytime? 1 = yes, 0 = no');
  console.groupEnd();

  //? **`` This loops through the forecast data
  data.forecastday.forEach((element) => {
    console.group(`${element.date} day temps`);
    console.log(element.date + ' date');
    console.log(element.mintemp_c + ' min temp C');
    console.log(element.maxtemp_c + ' max temp C');
    console.log(element.mintemp_f + ' min temp F');
    console.log(element.maxtemp_f + ' max temp F');
    console.log(element.condition + ' condition');
    console.log(element.icon + ' icon number');
    console.log(element.daily_will_it_rain + ' rain? 1 = yes, 0 = no');
    console.log(element.daily_will_it_snow + ' snow? 1 = yes, 0 = no');
    console.log(element.daily_chance_of_rain + ' percent chance of rain');
    console.log(element.daily_chance_of_snow + ' percent chance of snow');
    console.log(element.totalprecip_in + ' total rain in inches');
    console.log(element.totalprecip_mm + ' total rain in millimeters');
    console.log(element.totalsnow_in + ' total snow in inches');
    console.log(element.totalprecip_cm + ' total snow in centimeters');
    console.groupEnd();
  });

  //? **`` Displayed city
  console.group('Diplayed City');
  console.log(data.location.name + ' city name');
  console.groupEnd();
}
