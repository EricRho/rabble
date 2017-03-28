'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html'
  })
  .when('/about', {
    templateUrl: 'partials/about.html'
  });
}]);
