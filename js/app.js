angular.module('FxTradingApp', []).
controller('panelCtrl',['$scope','$http', '$interval', function($scope,$http,$interval) {
    $scope.source = [];
    $http.get('../source.json').then(
        function(response) {
            $scope.source = response.data;
            angular.forEach($scope.source,function(value)
            {
                $interval(function () {
                    var valueToMultiply = ((Math.random() *  (1.1 - 0.9)) + 0.9);
                    value.buy *= valueToMultiply;
                    value.sell *= valueToMultiply;
                    value['priceIncreased'] = valueToMultiply > 1.0 ? true : false;
                },1000);
            });
        },
        function(error)
        {
            alert(error);
        }
    );


}]);