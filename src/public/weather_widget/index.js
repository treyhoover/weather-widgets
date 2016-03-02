import styles from './styles/styles.scss';
import weatherWidgetComponent from './components/weather_widget.component';
import weatherDataService from './services/weather_data.service';

let module = angular.module('weatherWidget', []);

module.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});

weatherWidgetComponent(module);
weatherDataService(module);

export default function (module) {
  module.requires.push('weatherWidget');
}