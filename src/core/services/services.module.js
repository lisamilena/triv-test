import angular from 'angular';
import alerts from './alerts/alerts';
import request from './request/request';

export default angular.module('services', [])
  .factory('Request', request)
  .factory('Alerts', alerts)
  .name;
