import angular from 'angular';
import RegisterController from './register.controller';
import './register.css';

const registerUrl = require('./register.html');

export default angular.module('register', [])
  .config(routes)
  .name;

function routes($stateProvider) {

  $stateProvider
    .state('page.register', {
      url: '/register/',
      title: 'Register',
      controller: RegisterController,
      controllerAs: 'vm',
      templateUrl: registerUrl
    })
}

routes.$inject = ['$stateProvider'];
