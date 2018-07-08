export default function stateChange($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    const notLoggedInAvailableStates = ['page.login', 'page.register', 'page.resetPassword', 'page.forgotPassword'];

    /*if (!ApplicationUser.isAuthenticated() && notLoggedInAvailableStates.indexOf(toState.name) === -1) {
      event.preventDefault();
      $state.go('page.login');
    }*/

    const currentLoggedInUser = JSON.parse(localStorage.getItem('user'));

   /* if (ApplicationUser.isAuthenticated()) {
      event.preventDefault();
    }*/
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.page = toState.name.replace('.', '-');
  });
}

stateChange.$inject = ['$rootScope', '$state'];
