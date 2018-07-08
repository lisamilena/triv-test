export function SessionsInterceptor($q, $location) {
  return {
    responseError: function (response) {
      if (response.status === 401) {
        localStorage.setItem('user', null);
        $location.path('/page/login/');
      }
      return $q.reject(response);
    }
  }
}

SessionsInterceptor.$inject = ['$q', '$location'];

export function SessionsInterceptorConfig($httpProvider) {
  $httpProvider.interceptors.push('SessionsInterceptor');
}

SessionsInterceptorConfig.$inject = ['$httpProvider'];
