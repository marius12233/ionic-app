angular.module('app').component('about', {
    templateUrl:  './pages/about/about.html',

    controller: function($scope) {
        print($scope.name)
        console.log("about component");
    }
})