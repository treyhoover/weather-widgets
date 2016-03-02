import angular from 'angular';

import styles from './styles.scss';
import weatherWidget from './weather_widget';

let app = angular.module('app', []);

app.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});

weatherWidget(app);