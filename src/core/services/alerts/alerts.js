const template = require('../../assets/partials/alert.html');

function alerts($translate, $alert) {
  return {
    error,
    info,
    success,
    successUpsert,
    successDelete
  };

  function error(title, content) {
    getAlert($translate.instant(title || 'errors.general'), content, 'danger', 4);
  }

  function info(title, content) {
    getAlert(title, content, 'info', 3);
  }

  function success(title, content) {
    getAlert(title || 'Completado!', content, 'success', 3);
  }

  function successUpsert(resource, item) {
    getAlert($translate.instant('success.update' + resource.modelName, { name: item.name || item.title || '' }), null, 'success', 2);
  }

  function successDelete(modelName) {
    getAlert($translate.instant(modelName.toLowerCase() + 's.titles') + $translate.instant('success.deleteElement'), null, 'success', 2);
  }

  function getAlert(title, content, type, seconds) {
    $alert({
      placement: 'top-right',
      show: true,
      animation: 'mat-grow-top-right',
      duration: seconds,
      title: title,
      content: content,
      type: type,
      template: template
    });
  }
}

alerts.$inject = ['$translate', '$alert'];

export default alerts;
