	angular
		.module('todoApp')
		.controller('AppController', AppController);

	AppController.$inject = ['$scope', 'Projects', '$ionicModal', '$ionicSideMenuDelegate'];

	function AppController($scope, Projects, $ionicModal, $ionicSideMenuDelegate) {
		// Load or initialize projects
		$scope.projects = Projects.all();



	}
