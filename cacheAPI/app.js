var cacheApiApp = angular.module('cacheApiApp', []);
cacheApiApp.controller('appFirstCtrl', function ($scope) {
    //define the initial model and controller for this app.
    //TODO: Add a service for its model later.
    $scope.name = 'FirstName LastName';
});
cacheApiApp.cacheApiAppdirective('ngHelloDirective', function () {
    return {
        restrict: 'E',
        template: '<p>Hello {{name}}!</p>',
        controller: function ($scope, $element) {
            //establish model declaration both public private for this directive
            $scope.name = $scope.name;
        },
        link: function (scope, el, attr) {
            scope.name = scope.name;
        }
    }
});
