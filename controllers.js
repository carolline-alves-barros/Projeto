//criamos os app.js
angular.module("ToDoList")
.controller("ToDoController",
  function($scope, localStorageService){
 
    //Nossa variavel do localStorage é ls-lista 
    
    //Verificando se já existem dados
    
    if (localStorageService.get("lS-lista")) {
      $scope.todo = localStorageService.get("lS-lista");
    } else {
      $scope.todo=[];
    }

    $scope.agregarTarea = function(){
      //Executa quando clica no botao submit do formulario 
      
      //Coloca um novo dado na lista
      $scope.todo.push($scope.nuevaTarea);
      
      //reseta a informacao para um novo dado
      $scope.nuevaTarea = {};
      
      //guarda em localSotrage a lista 
      localStorageService.set("lS-lista", $scope.todo);

    };

    $scope.limpiarLista = function(){
      //Executa a funcao de limpar a lista
      
      $scope.todo=[];
    
      localStorageService.remove("lS-lista");
    };
  
});
