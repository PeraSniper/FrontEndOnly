var app = angular.module('myApp', []);
    
            app.controller('myCtrl', function($scope, $location) {
                $scope.myUrl = $location.absUrl();
                $scope.aas = $scope.myUrl.split('?');
                $scope.aas = $scope.aas[1].split('=');
                $scope.aas = $scope.aas[1].split('#');
                $scope.names = [{name:"Србија"},
                    {name:"Црна Гора"},
                    {name:"БиХ"},
                    {name:"Deutschland"}]
            });

