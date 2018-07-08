import angular from 'angular';
import HotelsController from './hotels.controller';

const hotelsUrl = require('./hotels.html');

export default angular.module('hotels', [
])
  .config(routes)
  .name;

function routes($stateProvider) {

  $stateProvider
    .state('app.hotels', {
      url: '/hotels/',
      title: 'Hotels',
      controller: HotelsController,
      controllerAs: 'vm',
      templateUrl: hotelsUrl
    })
}

routes.$inject = ['$stateProvider'];
