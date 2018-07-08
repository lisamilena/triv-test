import angular from 'angular';
import Login from './login/login.module';
import Register from './register/register.module';
import ForgotPassword from './forgot-password/forgot-password.module';
import { SessionsInterceptor, SessionsInterceptorConfig } from './sessions.interceptor';

export default angular.module('sessions', [
  Login,
  Register,
  ForgotPassword
])
  .factory('SessionsInterceptor', SessionsInterceptor)
  .config(SessionsInterceptorConfig)
  .name;
