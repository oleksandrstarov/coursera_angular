(function(){
  'use strict';

angular.module('app',[])
.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope){
  $scope.message = '';
  $scope.input = '';


  $scope.submit = function(){
    if($scope.input === ''){
      $scope.message = 'Please enter data first';
      return;
    }
    if($scope.input.split(',').length < 4){
      $scope.message = 'Enjoy!';
    }else{
      $scope.message = 'Too much!';
    }

  };
};
})();
