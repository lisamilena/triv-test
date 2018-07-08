import angular from 'angular';
import ProfileController from './profile.controller';
import UserProfileInformation from './directives/user-profile-information.directive';

const profileUrl = require('./profile.html');

export default angular.module('profile', [])
  .config(routes)
  .directive('userProfileInformation', UserProfileInformation)
  .name;

function routes($stateProvider) {

  $stateProvider
    .state('app.profile', {
      url: '/profile/',
      title: 'Profile',
      controller: ProfileController,
      controllerAs: 'vm',
      templateUrl: profileUrl
    })
}

routes.$inject = ['$stateProvider'];
