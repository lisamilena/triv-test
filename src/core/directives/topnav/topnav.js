const topnavUrl = require('./topnav.html');

function topnav() {
  return {
    bindToController: true,
    controller: () => {
      const vm = this;
    },
    controllerAs: 'vm',
    restrict: 'E',
    templateUrl: topnavUrl
  }
}

export default topnav;
