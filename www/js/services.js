angular.module('starter.services', [])

.factory('vaccinsData', function(){
  var vaccinsData = [];

  return{
    all: function(){
      return timelineData;
    }
  }
})

.factory('timelineData', function(){
  var timelineData = [
    {
      id: 0,
      type: 'Poids',
      value: '3.55kg',
      date: new Date("October 13, 2014")
    },
    {
      id: 1,
      type: 'Nutrition',
      value: 'Lait: dose 20mg',
      date: new Date("October 12, 2014")
    },
    {
      id: 2,
      type: 'Nutrition',
      value: 'Lait: dose 21mg',
      date: new Date("October 12, 2014")
    },
    {
      id: 3,
      type: 'Vaccin',
      value: 'Rougeole',
      date: new Date("October 11, 2014")
    },
    {
      id: 4,
      type: 'Nutrition',
      value: 'Lait maternel',
      date: new Date("October 11, 2014")
    },
  ];

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
