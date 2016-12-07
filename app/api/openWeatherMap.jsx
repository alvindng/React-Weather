var axios = require('axios');

//const sets a variable that cant be altered. uppercases with underscores as syntax
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ae7e839935678d4b49f3f3c0e76c2a06&units=imperial';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location); //encodeURIComponent encodes a string to have a proper output for the browser
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//template query strings with `${}`
    return axios.get(requestURL).then(function(response){ //takes a URL and fetches request. axios uses promises, so the .then function will pass in success and error callbacks
      debugger;
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }else {
        return response.data.main.temp;
      }
    }, function (err){
      throw new Error(err.response.data.message);
    });
  } // openweather API uses proprietary syntax so we have to create some extra edge cases to account and work with it
}
