'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'aboutCtrl'
  })
}]);
