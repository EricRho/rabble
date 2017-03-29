app.controller('aboutCtrl', ['$scope', function($scope) {

    // Make into directive and drop JQuery
    $(document).ready(function() {

      var $cont = document.querySelector('.cont');

      var $elsArr = [].slice.call(document.querySelectorAll('.el'));
      var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

      setTimeout(function() {
        $cont.classList.remove('s--inactive');
      }, 200);
      $elsArr.forEach(function($el) {
        $el.addEventListener('click', function() {
          console.log($el);
          if (this.classList.contains('s--active')) return;
          $cont.classList.add('s--el-active');
          this.classList.add('s--active');
        });
      });

      $closeBtnsArr.forEach(function($btn) {
        $btn.addEventListener('click', function(e) {
          e.stopPropagation();
          $cont.classList.remove('s--el-active');
          document.querySelector('.el.s--active').classList.remove('s--active');
        });
      });


    }); // JQuery


}]);
