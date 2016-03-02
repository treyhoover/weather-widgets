export default function (module) {
  module.service('WeatherDataService', function ($http) {
    this.getForecast = function (zipcode = 22102) {
      let query = encodeURIComponent(`select item from weather.forecast where location="${zipcode}"`);
      return $http.get(`http://query.yahooapis.com/v1/public/yql?q=${query}&format=json`)
        .then((res) => res.data.query.results.channel.item);
    }
  });
}