app.controller('galleryCtrl', ['$scope', '$timeout', '$q', function($scope, $timeout, $q) {
    var elem = document.getElementById('gallery');

  $scope.initGallery = function() {
    var gallery = new MaterialPhotoGallery(elem);
  };

  // $scope.src = '/assets/images/Joby Davies - ©OBS07597.jpg';

  // $scope.sources = [{
  //   name: '/assets/images/Joby Davies - ©OBS07597.jpg',
  // }, {
  //   name: '/assets/images/Joby Davies - ©OBS07718.jpg'
  // }, {
  //   name: '/assets/images/Joby Davies - ©OBS07884.jpg'
  // }, {
  //   name: '/assets/images/Joby Davies - ©OBS08143.jpg'
  // }, {
  //   name: '/assets/images/Joby Davies - ©OBS09754.jpg'
  // }];

  $scope.sources = [
    '/assets/images/Joby Davies - ©OBS07597.jpg',
    '/assets/images/Joby Davies - ©OBS07718.jpg',
    '/assets/images/Joby Davies - ©OBS07884.jpg',
    '/assets/images/Joby Davies - ©OBS08143.jpg',
    '/assets/images/Joby Davies - ©OBS09754.jpg'
  ];
}]);
