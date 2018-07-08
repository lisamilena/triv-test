function requestService($http) {
  const login = () => {
    return $http({
      method: 'GET',
      url: '/users-mock.json',
      headers: {'Content-Type': 'json'}
    });
  };

  const get = url => {
    return $http({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'json',
        'authorization': localStorage.getItem('authorization')
      }
    });
  };

  return {
    login,
    get
  };
}
requestService.$inject = ['$http'];

export default requestService;