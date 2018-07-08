import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import 'angular-translate';
import AngularStrap from 'angular-strap';
import AngularStrapTpl from 'angular-strap/dist/angular-strap.tpl';
import ngAnimate from 'angular-animate/angular-animate';

import config from './config/config.module';
import directives from './directives/directives.module';
import services from './services/services.module';

export default angular.module('core', [
  uirouter,
  ngResource,
  'ngAnimate',
  'pascalprecht.translate',
  'mgcrea.ngStrap',
  config,
  directives,
  services
])
  .name;
