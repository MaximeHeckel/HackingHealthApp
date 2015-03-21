angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('VaccinsCtrl', function($scope, $ionicModal, vaccinsData){
  $ionicModal.fromTemplateUrl('templates/modals/alert-doctor.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  console.log(vaccinsData.all());
  $scope.data = vaccinsData.all();

})

.controller('HomeCtrl', function($scope, homeData){
  
})

.controller('TimelineCtrl', function($scope, timelineData){
  console.log(timelineData.all());
  $scope.data = timelineData.all();
})

.controller('MorphoCtrl', function($scope, morphoData){
  console.log(morphoData.all());
  var legendData = [];
  for (var i = 0; i <= 36; i += 3) {
    legendData.push(i)
  }

  $scope.options = {
    showTooltips: false,
    scaleShowGridLines : true,
    responsive: true,
    pointDot: false,
    datasetStrokeWidth : 1,
  }

  $scope.chart = {
    labels : legendData,
    datasets : [
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "rgba(151,187,205,1)",
            data : [2.414,4.268,5.735,6.887,7.795,8.515,9.095,9.575,9.984,10.348,10.685,11.010,11.334],
        },
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "rgba(151,187,205,0.3)",
            data : [3.399,5.540,7.207,8.500,9.514,10.322,10.986,11.551,12.054,12.520,12.969,13.414,13.865]
        },
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "rgba(151,187,205,1)",
            data : [4.254,6.867,8.882,10.440,11.669,12.671,13.524,14.286,15.001,15.700,16.403,17.124,17.870]
        }
    ]
};
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
