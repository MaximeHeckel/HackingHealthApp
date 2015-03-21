angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('VaccinsCtrl', function($scope, vaccinsData){

})

.controller('HomeCtrl', function($scope, $ionicModal, $window, homeData,   $ionicPlatform, $cordovaLocalNotification){

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

  $scope.add = function() {
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
            id: "1",
            date: alarmTime,
            message: "John doit se faire vacciner dans 15 jours",
            title: "Alerte Vaccin",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
    };

    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled("1").then(function(isScheduled) {
            alert("Notification 1 Scheduled: " + isScheduled);
        });
    }



})

.controller('TimelineCtrl', function($scope, timelineData){
  console.log(timelineData.all());
  $scope.data = timelineData.all();
})

.controller('MorphoCtrl', function($scope, morphoData, $ionicSlideBoxDelegate){
  $scope.data = morphoData.all();

  $scope.weightSlide = function() {
    $ionicSlideBoxDelegate.slide(0);
  }

  $scope.sizeSlide = function() {
    $ionicSlideBoxDelegate.slide(1);
  }

  $scope.pcSlide = function() {
    $ionicSlideBoxDelegate.slide(2);
  }

  var legendData = [];
  for (var i = 0; i <= 12; i += 1) {
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
            data : [2.414,2.550,2.683,2.821,2.949,3.074,3.198,3.320,3.461,3.579,3.695,3.809,3.922],
        },
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "rgba(151,187,205,0.3)",
            data : [3.399,3.557,3.712,3.872,4.019,4.165,4.307,4.448,4.613,4.748,4.882,5.013,5.142]
        },
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "rgba(151,187,205,1)",
            data : [4.254,4.449,4.638,4.834,5.015,5.192,5.366,5.538,5.740,5.905,6.067,6.227,6.383]
        },
        {
            fillColor : "rgba(213,40,40,0)",
            strokeColor : "rgba(213,40,40,1)",
            data : [3.717,3.887,4.053,4.225,4.383,4.539,4.692,4.692,4.613]
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
