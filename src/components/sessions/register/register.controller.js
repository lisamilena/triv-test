export default class RegisterController {
  constructor($state, Alerts, $translate, $scope) {
    //this.ApplicationUser = ApplicationUser;
    this.state = $state;

    this.user = {
      email: '',
      password: ''
    };
  }

  register(isValid, user) {
    if (isValid) console.log(user)
  }
}

RegisterController.$inject = ['$state', 'Alerts', '$translate', '$scope'];
