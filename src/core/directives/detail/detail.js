const detailUrl = require('./detail.html');

function detail() {
  return {
    bindToController: true,
    controller: () => {
      const vm = this;
    },
    controllerAs: 'vm',
    restrict: 'E',
    scope: {
      colClass: '@',
      size: '=',
      screen: '@',
      labelClass: '@',
      label: '=',
      param: '=',
      name: '@',
      editable: '=',
      upsert: '&',
      choices: '=',
      state: '=',
      type: '=',
      length: '=',
      required: '=',
      min: '<',
      max: '<',
      autocomplete: '='
    },
    templateUrl: detailUrl
  }
}

export default detail;
