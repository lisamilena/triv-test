const hotelModal = require("./hotel-modal.html");

export default class UsersController {
  constructor($scope, $modal, Request) {
    const vm = this;

    vm.getNumberRate = rate => {
      return new Array(rate);
    };

    vm.openItem = item => {
      console.log(item.image)
      vm.selectedHotel = item;
      $modal({
        scope: $scope,
        templateUrl: hotelModal,
        backdrop: 'static',
        keyboard: false
      });
    };

    vm.closeModal = hide => {
      vm.selectedHotel = null;
      hide();
    }

    Request.get('/data-mock.json')
    .then(function(resp) {
      vm.hotels = resp.data;
    });
  }
}

UsersController.$inject = [
  "$scope",
  "$modal",
  "Request"
];
