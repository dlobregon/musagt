angular.module('eventosServices',[])

/*
--------------------------------------------------------
                  CATEGORIAS
--------------------------------------------------------

*/
.factory('Eventos', function($http) {
  var eventos = [];

  return {
    all: function() {
      return $http.get('/eventos')
      .success(function(response){
        eventos = response;
        return response;
      }).error(function(data,status,headers,config){
        console.error("Error al obtener eventos.")
        return null;
      });
    },
    new: function(evento){
      return $http.post('/eventos/',evento)
      .success(function(response){
        return response;
      }).error(function(data,status,headers,config){
        console.log("Error al crear la evento");
        return null;
      });
    }
  };
})
