export default class UsersController {
  constructor($modal, $state, $scope, Alerts) {
    const vm = this;


    $scope.$on("$destroy", function() {
    });
  }
}

UsersController.$inject = [
  "$modal",
  "$state",
  "$scope",
  "Alerts"
];
