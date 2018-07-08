export default class LoginController {
  constructor($state, Alerts, $translate) {
   // this.ApplicationUser = ApplicationUser;
    this.state = $state;
    this.Alerts = Alerts;
    this.translate = $translate;
    this.loginError = this.loginError.bind(this);

    this.user = {
      email: '',
      password: ''
    };

    this.params = {
      rememberMe: true
    }
  }

  login() {
    if(!this.user.email || !this.user.password) return this.loginError('errors.emptyUserPass');

    console.log(this.user)
    this.state.go('app.hotels');

   /* this.ApplicationUser.login(this.params, this.user)
    .$promise
    .then(session => {
      localStorage.setItem('user', JSON.stringify(session.user));
      this.goToApp();
    })
    .catch(this.loginError);*/
  }

  loginError(error) {
    this.Alerts.error(this.translate.instant((error.status === 401 ? 'errors.incorrectUserPass' : error.statusText)));
  }
}

LoginController.$inject = ['$state', 'Alerts', '$translate'];
