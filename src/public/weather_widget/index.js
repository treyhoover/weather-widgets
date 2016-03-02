import styles from './styles/styles.scss';
import weatherWidgetComponent from './components/weather_widget.component';

let weatherWidget = angular.module('weatherWidget', []);

weatherWidgetComponent(weatherWidget);

export default function (module) {
  module.requires.push('weatherWidget');
}