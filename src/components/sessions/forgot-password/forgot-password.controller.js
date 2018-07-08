export default class ForgotPasswordController {
  constructor($state) {
    this.state = $state;
  }

  sendNewPasswordRequest() {
    console.log(this.user)
  }
}

ForgotPasswordController.$inject = ['$state'];
