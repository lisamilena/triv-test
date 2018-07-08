function logout($rootScope, $state) {
  return {
    link: link,
    restrict: 'A',
    scope: {}
  }

  function link(scope, element, attrs) {
    element.on('click', function (e) {
      e.preventDefault();
      /*ApplicationUser.logout().$promise.then(function () {
        $state.go('page.login');
      });*/
    });
  }
}

logout.$inject = ['$rootScope', '$state'];

export default logout;
