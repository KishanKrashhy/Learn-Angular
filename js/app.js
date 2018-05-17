'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "toronto";

    function fetch(){
      // $http.get("http://opentable.herokuapp.com/api/restaurants?city=" + $scope.search)
      // .then(function(response){ 
      //   $scope.details = response.data; 
      //   console.log($scope.details);
      // });

      $http.get("http://opentable.herokuapp.com/api/restaurants?city=" + $scope.search)
      .then(function(response){ $scope.related = response.data;
        // var result = related.split(" ");
        
        // var my_data=$scope.related;
        var my_json = JSON.stringify(result);
        console.log(result); 
      });
    }

    
    $scope.update = function(movie){
      $scope.search = movie.name;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
