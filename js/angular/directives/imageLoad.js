app.directive('loadImg', function() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    replace: true,
    template: '<img ng-src="{{ src }}" data-full="{{ src }}" class="m-p-g__thumbs-img" />',
    link: function(scope, ele, attr) {
      ele.on('load', function() {
        console.log('LOAD');
      });
    }
  }
});
