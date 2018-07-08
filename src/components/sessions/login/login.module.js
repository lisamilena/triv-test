import angular from 'angular';
import LoginController from './login.controller';
import './login.css';

const loginUrl = require('./login.html');

export default angular.module('login', [])
  .config(routes)
  .name;

function routes($stateProvider) {

  $stateProvider
    .state('page.login', {
      url: '/login/',
      title: 'Login',
      controller: LoginController,
      controllerAs: 'vm',
      templateUrl: loginUrl
    })
}

routes.$inject = ['$stateProvider'];
