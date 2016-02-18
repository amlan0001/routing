var app = angular.module('myapp', ['ngRoute', 'phoneapp']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl: 'phone-list.html',
        controller: 'phoneController'

    })
    .when('/search', {
        templateUrl: 'search.html',
        controller: 'phoneController'
    })
    .when('/:item', {
        templateUrl: 'phone-detail.html',
        controller: 'searchController'

    })
    .otherwise({
        redirectTo: '/phones'
    })


}]);