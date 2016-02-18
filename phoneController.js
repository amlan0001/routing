var phoneapp = angular.module("phoneapp", []);
var phone_data = ["Samsung", "Nokia", "Sony", "Microsoft", "HTC", "Apple"];
var phoneController = function ($scope) {

    $scope.phones = phone_data;


};
phoneapp.controller("phoneController", phoneController);

var searchController = function ($scope, $routeParams) {

    var flag = 0;
    for (var i = 0; i < phones.length; i++) {
        if (phone_data[i] == $routeParams.item) {
            flag = 1;
        }

    }
    if (flag == 1) {
        $scope.stat = "Found";

    }
    else {

        $scope.stat = "Not Found";
    }


};
phoneapp.controller("searchController", ['$scope', '$routeParams', searchController]);