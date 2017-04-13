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
    .when('/activities', {
      templateUrl: 'partials/activities.html',
      controller: 'activitiesCtrl'
    })
    .when('/gallery', {
      templateUrl: 'partials/gallery.html',
      controller: 'galleryCtrl'
    })
    .when('/availability', {
      templateUrl: 'partials/availability.html',
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
    /* ------------ ABOUT PAGES ----------- */

    .when('/about/villa', {
      templateUrl: 'partials/about-pages/villa.html',
      controller: 'villaCtrl'
    })
    .when('/about/grounds', {
      templateUrl: 'partials/about-pages/grounds.html',
      controller: 'groundsCtrl'
    })
    .when('/about/spa', {
      templateUrl: 'partials/about-pages/spa.html', 
      controller: 'spaCtrl'
    })
    .when('/about/food', {
      templateUrl: 'partials/about-pages/food.html',
      controller: 'foodCtrl'
    })
    .when('/about/facilities', {
      templateUrl: 'partials/about-pages/facilities.html',
      controller: 'facilitiesCtrl'
    })
}]);
