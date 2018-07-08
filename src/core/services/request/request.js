function requestService($http) {
  const get = url => {
    return $http({
      method: 'GET',
      url: url,
      headers: {'Content-Type': 'json'}
    });
  };

  return {
    get
  };
}
requestService.$inject = ['$http'];

export default requestService;