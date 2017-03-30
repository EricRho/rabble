app.controller('galleryCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var elem = document.getElementById('gallery');

  $scope.initGallery = function() {
    var gallery = new MaterialPhotoGallery(elem);
  };
}]);
