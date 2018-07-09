const topnavUrl = require('./topnav.html');

function topnav() {
  return {
    bindToController: true,
    controller: topnavController,
    controllerAs: 'vm',
    restrict: 'E',
    templateUrl: topnavUrl
  }
}

function topnavController($state, $rootScope) {
  const vm = this;

  const setUser = user => {
    vm.user = (user ? user.username : null);
  };

  vm.logout = () => {
    localStorage.setItem('user', null);
    $state.go('page.login');
  };

  setUser(JSON.parse(localStorage.getItem('user')));

  $rootScope.$on('$stateChangeSuccess', function () {
    setUser(JSON.parse(localStorage.getItem('user')));
  });
}
topnavController.$inject = ['$state', '$rootScope'];

export default topnav;
