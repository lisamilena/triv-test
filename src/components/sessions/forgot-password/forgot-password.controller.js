export default class ForgotPasswordController {
  constructor($state) {
    //this.ApplicationUser = ApplicationUser;
    this.state = $state;
  }

  sendNewPasswordRequest() {
    /*this.ApplicationUser.resetPassword({ email: this.user.email }).$promise
      .then(res => {
        this.emailSent = true;
      })
      .catch(err => {
        this.emailSent = false;
      });*/
  }
}

ForgotPasswordController.$inject = ['$state'];
