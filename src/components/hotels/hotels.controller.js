const hotelModal = require("./hotel-modal.html");

export default class UsersController {
  constructor($scope, $modal, Request) {
    const vm = this;
    let hotels;

    vm.rating = [
      { name: 'All rating', id: null },
      { name: 'Rating 0', id: 0 },
      { name: 'Rating 1', id: 1 },
      { name: 'Rating 2', id: 2 },
      { name: 'Rating 3', id: 3 },
      { name: 'Rating 4', id: 4 },
      { name: 'Rating 5', id: 5 }
    ];
    vm.filters = {
      search: '',
      rating: vm.rating[0],
      active: true
    };

    vm.getNumberRate = rate => {
      return new Array(rate);
    };

    vm.openItem = item => {      
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
    };

    vm.filterHotels = () => {
      vm.hotels = hotels.filter(hotel => {
        return (!vm.filters.active || hotel.isActive === vm.filters.active) &&
        (vm.filters.rating.id === null || vm.filters.rating.id === hotel.rating) &&
        (!vm.filters.search.length || hotel.name.indexOf(vm.filters.search) > -1);
      });
    };

    Request.get('/data-mock.json')
    .then(function(resp) {
      hotels = Object.assign([], resp.data);
      vm.filterHotels(resp.data);
    });
  }
}

UsersController.$inject = [
  "$scope",
  "$modal",
  "Request"
];
