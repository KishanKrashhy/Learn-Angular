'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "";

    function fetch(){


      $http.get("http://opentable.herokuapp.com/api/restaurants?city=" + $scope.search)
      .then(function(response){ $scope.related = response.data;
        
        console.log($scope.related); 
        console.log($scope.related.current_page)
      });

      function inc_page()
      {
        return $scope.current_page++;
      }

    }

    $scope.update = function(movie){
      $scope.search = movie.name;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    };
   
  });
