angular.module('app').component('home', {
    templateUrl:  './pages/home/home.html',

    controller: function($scope) {
        console.log("home component");
        $scope.list = ["A", "B", "C"]
        //$scope.name = "Mario"
        console.log($scope.name)
        $scope.appendList = function(){
            $scope.list.push("D")
        }
    }
})