const userProfileInformationUrl = require('./user-profile-information.html');

function userProfileInformation() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: userProfileInformationUrl,
    scope: {
    },
    controller: UserProfileInformationController,
    controllerAs: 'vm',
    bindToController: true
  }
}

function UserProfileInformationController() {

  const vm = this;

  //vm.user = ApplicationUser.getCurrent();
}

UserProfileInformationController.$inject = [];

export default userProfileInformation;
