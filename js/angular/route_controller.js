// // 'use strict';
//
// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//   .when('/', {
//     // templateUrl: 'partials/home.html'
//     templateUrl: 'partials/about.html',
//     controller: 'aboutCtrl'
//   })
//   .when('/#about', {
//     // templateUrl: 'partials/about.html',
//     templateUrl: 'partials/home.html',
//     controller: 'homeCtrl'
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
// }]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'aboutCtrl'
    })
}]);
