export default function (module) {
  module.component('weatherWidget', {
    bindings: {
      zip: '@'
    },
    controller: function weatherWidgetCtrl(WeatherDataService) {
      this.initialized = false;

      WeatherDataService.getForecast(this.zip).then(results => {
        this.imgSrc = angular.element(results.description)[0].src;
        this.city = results.title.match(/(Conditions for )(.+?)( at .*)/)[2];
        this.condition = results.condition;
        this.forecast = results.forecast;

        this.initialized = true;
      });
    },
    template: `
      <div class='weather-widget-body' ng-show="$ctrl.initialized">
        <p class="title">{{$ctrl.city}}</p>
        <section class="current-condition">
          <span class="temperature">{{$ctrl.condition.temp}}&deg;</span>
          <span class="description">
            <img src="" ng-src="{{$ctrl.imgSrc}}">
            <span class="current-condition-label">{{$ctrl.condition.text}}</span>
          </span>
        </section>
        <section class="five-day-forecast">
          <div class="day" ng-repeat="day in $ctrl.forecast">
            <span class="day-label">{{day.day}}</span>
            <span class="temperature">{{day.low}}&deg; / {{day.high}}&deg;</span>
          </div>
        </section>
      </div>
    `
  });
}