app = angular.module('villa', ['ngRoute']);

app.controller('mainCtrl', ['$scope', function($scope) {
  // alert('test');
  $scope.message = 'hello'
}]);
