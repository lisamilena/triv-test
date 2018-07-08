export default class LoginController {
  constructor($state, Alerts, $translate) {
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

    localStorage.setItem('user', JSON.stringify(this.user));
    this.state.go('page.hotels');
  }

  loginError(error) {
    this.Alerts.error(this.translate.instant((error.status === 401 ? 'errors.incorrectUserPass' : error.statusText)));
  }
}

LoginController.$inject = ['$state', 'Alerts', '$translate'];
