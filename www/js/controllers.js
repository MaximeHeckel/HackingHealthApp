angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('VaccinsCtrl', function($scope, vaccinsData){

})

.controller('TimelineCtrl', function($scope, timelineData){
  console.log(timelineData.all());
  $scope.data = timelineData.all();
})

.controller('MorphoCtrl', function($scope, morphoData){
  console.log(morphoData.all());
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
