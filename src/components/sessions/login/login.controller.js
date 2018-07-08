export default class LoginController {
  constructor($state, $translate, Alerts, Request) {
    this.state = $state;
    this.Alerts = Alerts;
    this.Request = Request;
    this.translate = $translate;

    this.user = {
      email: '',
      password: ''
    };

    this.params = {
      rememberMe: true
    }
  }

  login(user) {
    if(!user.email || !user.password)
      return this.Alerts.error(this.translate.instant('errors.emptyUserPass'));
      
    const self = this;
    this.Request.login()
    .then(function(resp) {
      const currentUser = resp.data.filter(item => {
        return item.email === user.email;
      })[0];
      console.log(currentUser)

      if(!currentUser || currentUser.password !== user.password)
        self.Alerts.error(self.translate.instant('errors.incorrectUserPass'));
      else {
        localStorage.setItem('authorization', currentUser.token);
        localStorage.setItem('user', JSON.stringify({ email: currentUser.email, username: currentUser.username}));
        self.state.go('page.hotels');
      }
    });
  }
}

LoginController.$inject = ['$state', '$translate', 'Alerts', 'Request'];
