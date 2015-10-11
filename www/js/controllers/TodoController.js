	angular
		.module('todoApp')
		.controller('ToDoController', ToDoController);

	ToDoController.$inject = ['$scope', 'Projects', '$ionicModal', '$ionicSideMenuDelegate'];

	function ToDoController($scope, Projects, $ionicModal, $ionicSideMenuDelegate) {
		//initialize
		$scope.activeProject = Projects.getActiveProject();

		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
			$scope.taskModal = modal;
		}, {
			scope: $scope
		});

		/**
		* Method will open a modal for new task
		*/
		$scope.newTask = function() {
			//Clear the ngModel in the modal first
			$scope.task = {};
			$scope.taskModal.show();
		};

		/**
		* Method will close a modal for new task
		*/
		$scope.closeNewTask = function() {
			$scope.taskModal.hide();
		};

		$scope.createTask = function(task) {
			console.log('TodoController.createTask');
			if (!Projects.getActiveProject() || !task) {
				return;
			}

			//push new task into project
			Projects.addTaskToProject($scope.activeProject, task);

			//update the activeProject reference
			$scope.activeProject = Projects.getActiveProject();

			//modal hide
			$scope.taskModal.hide();
		};
	}
