import angular from 'angular';
import detail from './detail/detail';
import topnav from './topnav/topnav';
import logout from './logout/logout';

export default angular.module('directives', [])
  .directive('topnav', topnav)
  .directive('detail', detail)
  .directive('logout', logout)
  .name;
