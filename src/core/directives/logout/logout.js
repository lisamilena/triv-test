function logout($rootScope, $state) {
  return {
    link: link,
    restrict: 'A',
    scope: {}
  }

  function link(scope, element, attrs) {
    element.on('click', function (e) {
      e.preventDefault();
      localStorage.setItem('user', null);
    });
  }
}

logout.$inject = ['$rootScope', '$state'];

export default logout;
