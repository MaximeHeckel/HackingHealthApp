angular.module('starter.services', [])

.factory('vaccinsData', function(){
  var vaccinsData = [
    {
      id: 0,
      type: 'ok',
      value: 'BCG',
    },
    {
      id: 1,
      type: 'bar',
      value: '2 mois'
    },
    {
      id: 2,
      type: 'todo',
      value: 'Diphtérie-Tétanos-Poliomyélite'
    },
    {
      id: 3,
      type: 'todo',
      value: 'Coqueluche'
    },
    {
      id: 4,
      type: 'todo',
      value: 'Haemophilus Influenza de type b (HIB)'
    },
    {
      id: 5,
      type: 'todo',
      value: 'Hépatite B'
    },
    {
      id: 6,
      type: 'todo',
      value: 'Pneumocoque C'
    },
    {
      id: 7,
      type: 'bar',
      value: '4 mois'
    },
    {
      id: 8,
      type: 'later',
      value: 'Diphtérie-Tétanos-Poliomyélite'
    },
    {
      id: 9,
      type: 'later',
      value: 'Coqueluche'
    },
    {
      id: 10,
      type: 'later',
      value: 'Haemophilus Influenza de type b (HIB)'
    },
    {
      id: 11,
      type: 'later',
      value: 'Hépatite B'
    },
    {
      id: 12,
      type: 'later',
      value: 'Pneumocoque C'
    },
    {
      id: 13,
      type: 'bar',
      value: '11 mois'
    },
    {
      id: 14,
      type: 'later',
      value: 'Diphtérie-Tétanos-Poliomyélite'
    },
    {
      id: 15,
      type: 'later',
      value: 'Coqueluche'
    },
    {
      id: 16,
      type: 'later',
      value: 'Haemophilus Influenza de type b (HIB)'
    },
    {
      id: 17,
      type: 'later',
      value: 'Hépatite B'
    },
    {
      id: 18,
      type: 'later',
      value: 'Pneumocoque C'
    },
    {
      id: 19,
      type: 'bar',
      value: '12 mois'
    },
    {
      id: 20,
      type: 'later',
      value: 'Méningocoque C'
    },
    {
      id: 21,
      type: 'bar',
      value: '16 - 18 mois'
    },
    {
      id: 22,
      type: 'later',
      value: 'Méningocoque C'
    },
    {
      id: 23,
      type: 'later',
      value: 'Rougeole - Oreillons - Rubéole'
    },
  ];

  return{
    all: function(){
      return vaccinsData;
    }
  }
})

.factory('timelineData', function(){
  var timelineData = [
    {
      id: 0,
      type: 'Poids',
      value: '3.55kg',
      date: new Date("October 11, 2014")
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
      date: new Date("October 13, 2014")
    },
    {
      id: 4,
      type: 'Nutrition',
      value: 'Lait maternel',
      date: new Date("October 13, 2014")
    },
    {
      id: 5,
      type: 'Poids',
      value: '3.57kg',
      date: new Date("October 14, 2014")
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
    weight: '3,43',
    date: new Date("March 19, 2015")
  },
  {
    id: 1,
    height: 51.5,
    weight: '3,51',
    date: new Date("March 20, 2014")
  },
  {
    id: 2,
    height: 53.5,
    weight: '3,55',
    date: new Date("March 21, 2014")
  }
    ];

    return {
      all: function(){
        return morphoData;
      }
    }
})

.factory('homeData', function(){
  var homeData = [];

  return{
    all: function(){
      return homeData;
    }
  }
})

;
