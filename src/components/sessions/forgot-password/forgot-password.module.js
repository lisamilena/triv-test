import angular from 'angular';
import ForgotPasswordController from './forgot-password.controller';
import './forgot-password.css';

const forgotPasswordUrl = require('./forgot-password.html');

export default angular.module('forgot-password', [])
  .config(routes)
  .name;

function routes($stateProvider) {

  $stateProvider
    .state('page.forgotPassword', {
      url: '/forgot-password/',
      controller: ForgotPasswordController,
      controllerAs: 'vm',
      templateUrl: forgotPasswordUrl
    })
}

routes.$inject = ['$stateProvider'];
