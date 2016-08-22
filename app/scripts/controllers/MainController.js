/**
 * Created by izabela on 22/08/16.
 */
angular.module('events').controller('MainCtrl',['$scope', 'EventService',  function MainController($scope ,EventService) {

    $scope.events;

    EventService.getContent().then(function(content){
        //success:
        $scope.events = content.data;

    }, function(err){
        //error
        console.log(err);
    })



}]);
