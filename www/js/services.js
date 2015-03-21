angular.module('starter.services', [])

.factory('timelineData', function(){
  var timelineData = [];

  return{
    all: function(){
      return timelineData;
    }
  }
})

.factory('morphoData', function(){
  var morphoData = [
  {
    id: 0,
    height: 51,
    weight: 3.500,
    date: new Date('12','03','2014')
  },
  {
    id: 1,
    height: 51.5,
    weight: 3.550,
    date: new Date('13','03','2014')
  },
  {
    id: 2,
    height: 53.5,
    weight: 3.600,
    date: new Date('13','03','2014')
  }
    ];

    return {
      all: function(){
        return morphoData;
      }
    }
});
