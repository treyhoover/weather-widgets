import angular from 'angular';

import styles from './styles.scss';
import weatherWidget from './weather_widget';

let app = angular.module('app', []);

weatherWidget(app);