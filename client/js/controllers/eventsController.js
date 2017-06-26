angular.module('events.controller',['ngMaterial'])
.controller('eventsCtrl', function ($scope, $mdDialog, $alert, $state, $filter, Eventos) {


  var imagePath = "http://unis.edu.gt/wp-content/uploads/2015/11/museo-foto1.png";



  $scope.obtenerEventos = function(){
      $scope.eventos = Eventos.all()
        .then(function(response){
          if(response.data){
            $scope.eventos = response.data;
          }else{
            $alert.show("Error", "No se pudo obtener las eventos", "error")
          }
        })
    };


  $scope.showNewEvento= function(ev) {
    $mdDialog.show({
      controller: NewEventoCtrl,
      templateUrl: 'templates/newEvento.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(evento) {
      if(evento && evento.nombre!=="" && evento.descripcion !== "" && evento.fecha != "" && evento.hora != "" && evento.imagen){
        if(evento.image === "")
          evento.imagen = imagePath;
          evento.fecha = $filter('date')(evento.fecha, "dd/MM/yyyy");
        evento.fecha = evento.fecha + " " +evento.hora;
        //$scope.eventos.push(evento);
        $scope.createEvento(evento);
      }else{
          $alert.show("Error","No se pudo crear el evento","error");
      }
    }, function() {
      console.log("Fue cancelado la creación de evento.");
    });
  };


  $scope.createEvento = function(evento){
    Eventos.new(evento)
      .then(function(response){
        if(response.data && response.data.success == 1){
          $alert.show("Exito","Evento creada.","exito");
        }else{
          $alert.show("Error","Evento no ha sido creada", "error")
        }
        $scope.obtenerEventos();
      });
  };

  function NewEventoCtrl($scope, $mdDialog) {
      $scope.museos = [
          {
            id: 0,
            nombre: 'Museo Nacional de Arqueología y Etnología'
          },{
            id: 1,
          nombre: 'Museo Miraflores'
        },{
          id: 2,
          nombre: 'Museo PopolVuh'
        },{
          id: 3,
          nombre: 'Museo del Ferrocarril'
        },{
          id: 4,
          nombre: 'Musac'
        },{
          id: 5,
          nombre: 'Museo Numismático'
        },{
          id: 6,
          nombre: 'Museo de los Niños'
        },{
          id: 7,
          nombre: 'Museo Arquidiocesano de Santiago de Guatemala'
        },{
          id: 8,
          nombre: 'Museo Jardín Botánico USAC'
        },{
          id: 9,
          nombre: 'Museo Casa MIMA'
        }
      ];
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.enviarEvento= function(evento) {
        $mdDialog.hide(evento);
      };
    };

    $scope.obtenerEventos();

})
