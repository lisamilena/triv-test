import angular from 'angular';
import detail from './detail/detail';
import topnav from './topnav/topnav';

export default angular.module('directives', [])
  .directive('topnav', topnav)
  .directive('detail', detail)
  .name;
