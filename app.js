angular.module('myApp', [])




.controller('myController', function($scope) {
  var loggedNums = 0;
  $scope.output = 0;
  $scope.numbers = function(btn) {
    if($scope.output === 0) {
      $scope.output = btn.toString();
    } else {
      $scope.output += btn.toString();
    }
  }
  $scope.clear = function() {
    $scope.output = 0;
  }
  $scope.add = function() {
    loggedNums = parseInt($scope.output);
    $scope.output += '+';
  }
});