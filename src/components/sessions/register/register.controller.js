const registerModal = require("./register-modal.html");

export default class RegisterController {
  constructor($state, $scope, $modal, Alerts) {
    const vm = this;
    this.state = $state;
    this.Alerts = Alerts;

    this.user = {
      email: '',
      password: ''
    };

    vm.openTerms = () => {
      $modal({
        scope: $scope,
        templateUrl: registerModal
      });
    };
  }

  register(user) {
    this.Alerts.success(`User ${user.name} saved`);
    this.state.go('page.login');
  }
}

RegisterController.$inject = ['$state', '$scope', '$modal', 'Alerts'];
