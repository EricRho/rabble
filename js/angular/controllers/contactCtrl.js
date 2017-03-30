app.controller('contactCtrl', ['$scope', function($scope) {

  // Turn into directive
  var initMap;

  function initMap() {
    var uluru = {
      lat: 6.072289,
      lng: 80.916981
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      mapTypeControl: false,
      scrollwheel: false,
      mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  initMap();

}]);
