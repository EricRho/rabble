'use strict';

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
    .when('/activies', {
      templateUrl: 'partials/activies.html',
      controller: 'activitiesCtrl'
    })
    .when('/gallery', {
      templateUrl: 'partials/gallery.html',
      controller: 'galleryCtrl'
    })
    .when('/availability', {
      templateUrl: 'partials/availability',
      controller: 'availabilityCtrl'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'contactCtrl'
    })
    .when('/faq', {
      templateUrl: 'partials/faq.html',
      controller: 'faqCtrl'
    })
}]);
