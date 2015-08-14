var cacheApiApp = angular.module('cacheApiApp', []);
.cacheApiAppdirective('ngHelloDirective', function () {
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
