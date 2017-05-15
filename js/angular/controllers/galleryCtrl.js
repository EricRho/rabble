app.controller('galleryCtrl', ['$scope', '$timeout', '$q', function($scope, $timeout, $q) {
    var elem = document.getElementById('gallery');

  $scope.initGallery = function() {
    var gallery = new MaterialPhotoGallery(elem);
  };

  $scope.sources = [
    '/assets/images/Joby Davies - ©OBS07597.jpg',
    '/assets/images/Joby Davies - ©OBS07718.jpg',
    '/assets/images/Joby Davies - ©OBS07884.jpg',
    '/assets/images/Joby Davies - ©OBS08143.jpg',
    '/assets/images/Joby Davies - ©OBS09754.jpg',
    '/assets/images/Joby Davies - ©OBS08251.jpg',
    '/assets/images/Joby  Davies - ©OBS09990.jpg',
    '/assets/images/Joby Davies - ©OBS08055.jpg',
    '/assets/images/Joby Davies - ©OBS08255.jpg',
    '/assets/images/Joby Davies - ©OBS09964.jpg',
    '/assets/images/villa - day.jpg',
    '/assets/images/indoor - living room.jpg'
  ];
}]);
