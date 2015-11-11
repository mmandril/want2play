'use strict';

/**
 * @ngdoc function
 * @name want2playApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the want2playApp
 */
angular.module('want2playApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.enviaEmail = function() {
        var user = $scope.user;
        console.log(user);
      };
  });
