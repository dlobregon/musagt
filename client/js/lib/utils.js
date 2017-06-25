angular.module('manager.utils', [])
.factory('$alert',function($mdDialog){
  return {
    show:function(title,message,stylebutton){
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title(title)
          .textContent(message)
          .ariaLabel('Error')
          .ok('Ok')
      );
    }
  }
})
