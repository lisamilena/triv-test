export default function stateChange($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    const notLoggedInAvailableStates = ['page.login', 'page.register', 'page.forgotPassword'];
    const currentLoggedInUser = localStorage.getItem('user');

    if (!currentLoggedInUser && notLoggedInAvailableStates.indexOf(toState.name) === -1) {
      event.preventDefault();
      $state.go('page.login');
    }    
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.page = toState.name.replace('.', '-');
  });
}

stateChange.$inject = ['$rootScope', '$state'];
