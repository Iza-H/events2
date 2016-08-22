/**
 * Created by izabela on 22/08/16.
 */

angular.module('events').service('EventService', function($q, $http, Properties){

    //promise which takes data from the backend:
    this.getContent = function(){
        return $q(function(resolve, reject){
            $http.get(Properties.ENDPOINT_URL).then(
                function (response){
                    //success
                    resolve(response);
                }, function(error){
                    //error:
                    reject(error);
                }
            )

        });
    }


});