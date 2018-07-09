import angular from 'angular';
import routes from './routes';
import translations from './translations';
import interceptor from './interceptor';
import stateChange from './state-change';

export default angular.module('config', [])
  .config(routes)
  .config(translations)
  .config(interceptor)
  .run(stateChange)
  .constant('API_URL', process.env.API_URL)
  .name;
