angular.module('musagtManager',
['ngMaterial',
'ui.router',
'manager.controller',
'events.controller',
'comments.controller',
'manager.utils',
'eventosServices'
])


  //creando las vistas con sus respectivos controllers
  .config(
    function($stateProvider, $locationProvider,$urlRouterProvider, $mdThemingProvider) {


      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('indigo');


      $stateProvider
      	.state('events',{
          url:'/events',
          templateUrl: 'templates/events.html',
          controller:'eventsCtrl'
        })

        .state('comments', {
          url:'/comments',
          templateUrl:'templates/comments.html',
          controller:'commentsCtrl'
        })


        ;

        $urlRouterProvider
          .otherwise('/events');

  })
