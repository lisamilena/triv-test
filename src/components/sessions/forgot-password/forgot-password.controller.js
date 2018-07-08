export default class ForgotPasswordController {
  constructor($state, Alerts) {
    this.state = $state;
    this.Alerts = Alerts;
  }

  sendNewPasswordRequest() {
    if(!this.userEmail) return this.Alerts.error('Empty email');
    this.emailSent = true;
  }
}

ForgotPasswordController.$inject = ['$state', 'Alerts'];
