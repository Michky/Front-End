
(function(angular){
'use strict';
	angular.module('tesisApp',['ngRoute'])
  .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
       .when('/agregar', {
        templateUrl: 'Plantillas/agregar.html',
        controller: 'agregarCtrl'
        })
      /*.when('/confirmar', {
        templateUrl: 'Plantillas/confirmar.html'        
        })*/
      .when('/enviar', {
        templateUrl: 'Plantillas/enviarInvitacion.html'        
        })
      .when('/gestionar', {
        templateUrl: 'Plantillas/gestionarEvaluadores.html'       
        })
      .when ("/presentar",{
        templateUrl: "Plantillas/presentarPropuesta.html",
        controller:"presentarCtrl"
      })
      .when ("/radicar",{
        templateUrl: "Plantillas/radicar.html"
      })
      .otherwise({
      	redirectYo:'/'
      });
     $locationProvider.html5Mode(true);
    }])

  .controller("presentarCtrl", ["$scope","$http", function($scope, $http){
    $scope.propuesta={};
    $scope.prueba = function(){      
      $scope.propuesta.archivo = (document.getElementById("archivo")).files[0];
      window.alert(angular.toJson($scope.propuesta));

    };
  }])

  .controller("agregarCtrl", ["$scope","$http", function($scope, $http){
    $scope.tipo="";
    //$scope.usuario = {};
    $scope.informacion={
    	nombre:"",
    	apellido:"",
    	id:"",
    	email:"",
    	celular:"",
    	telefono:"",
    	programa:"",
    	titulo:"",
    	empresa:"",
    	curso:"",
    	cargo:"",
    	direccion:""
    };
	 $scope.enviarUsuario = function(){

		if ($scope.tipo == "Estudiante")
		{
      $scope.usuario = {
        nombre:$scope.informacion.nombre,
        apellido:$scope.informacion.apellido,
        id:$scope.informacion.id,
        email:$scope.informacion.email,
        celular:$scope.informacion.celular,
        telefono:$scope.informacion.telefono,
        programa:$scope.informacion.programa
      };            
		}

    else if ($scope.tipo == "Profesor")
    {
      $scope.usuario = {
        nombre:$scope.informacion.nombre,
        apellido:$scope.informacion.apellido,
        id:$scope.informacion.id,
        email:$scope.informacion.email,
        celular:$scope.informacion.celular,
        telefono:$scope.informacion.telefono,
        //programa:$scope.informacion.programa
        titulo: $scope.informacion.titulo,
        curso: $scope.informacion.curso,
        direccion: $scope.informacion.direccion
      };
    }

    else if ($scope.tipo == "Evaluador"){
      $scope.usuario = {
        nombre:$scope.informacion.nombre,
        apellido:$scope.informacion.apellido,
        id:$scope.informacion.id,
        email:$scope.informacion.email,
        celular:$scope.informacion.celular,
        telefono:$scope.informacion.telefono,
        //programa:$scope.informacion.programa
        titulo: $scope.informacion.titulo,
        empresa: $scope.informacion.empresa,
        cargo: $scope.informacion.cargo,
        direccion: $scope.informacion.direccion
      };
    }

    else if ($scope.tipo == "Asesor"){

      $scope.usuario = {
        nombre:$scope.informacion.nombre,
        apellido:$scope.informacion.apellido,
        id:$scope.informacion.id,
        email:$scope.informacion.email,
        celular:$scope.informacion.celular,
        telefono:$scope.informacion.telefono,        
        titulo: $scope.informacion.titulo,        
        direccion: $scope.informacion.direccion
      };
    }
    window.alert(angular.toJson($scope.usuario));
    //$http.post("url",angular.toJson($scope.usuario));
	};
  }])
  
  .controller('MainCtrl',["$scope",function($scope){
    $scope.botones={
      prueba:[{
        nombre: "Agregar Usuario",
        url:"/agregar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      },/* {
        nombre: "Confirmar Invitaciones",
        url:"/confirmar"
      },*/{
      	nombre: "Enviar Invitaciones",
        url:"/enviar"
      },{
      	nombre: "Gestionar Evaluadores",
        url:"/gestionar"
      },{
      	nombre: "Presentar Propuesta",
        url:"/presentar"
      }],
      estudiante:[{
        nombre: "Presentar Propuesta",
        url:"/presentar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      }],
      calificador:[]
      };
      $scope.funcion = function(numero, ultimo){

        for (var i=0;i<$scope.botones.prueba.length;i++)
        {
          if (i == parseInt(numero))
          {
            document.getElementById(i.toString()).className = "active";
          }
          else
          {
            document.getElementById(i.toString()).className = "";
          }
          
        }
        
      };
  }])

  .controller("enviarInvitacionCtrl", ["$scope","$http", function($scope, $http){
  	$scope.invitacion = {
  		/*nombre : "",
  		apellido : "",
  		asesor : "",
  		fecha : "",
  		correo : ""*/
  	};

  	$scope.enviar = function(){
      window.alert(angular.toJson($scope.invitacion));
      //$http.post("/url",angular.toJson($scope.invitacion));  		
  	};

  }])

  .controller ("radicarCtrl",["$scope","$http", function(){
    

  }])

  .controller 



  })(window.angular);

