export default function interceptor($httpProvider) {
  $httpProvider.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
    return {
      responseError: function (rejection) {

        $rootScope.$broadcast('rejection', rejection);

        return $q.reject(rejection);
      }
    };
  }]);
}

interceptor.$inject = ['$httpProvider'];
