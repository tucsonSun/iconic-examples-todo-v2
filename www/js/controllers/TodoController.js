	angular
		.module('todoApp')
		.controller('ToDoController', ToDoController);

	ToDoController.$inject = ['$scope', 'Projects', '$ionicModal', '$ionicSideMenuDelegate'];

	function ToDoController($scope, Projects, $ionicModal, $ionicSideMenuDelegate) {
		//initialize
		$scope.activeProject = Projects.getActiveProject();
		$scope.shouldShowDelete = false;
		$scope.shouldShowReorder = false;

		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
			$scope.taskModal = modal;
		}, {
			scope: $scope
		});


		$scope.taskModalTitle = function() {
			if ($scope.task && $scope.task.title) {
				return 'Edit Task';
			} else
				return 'Add Task';
		};

		/**
		 * Method will open a modal for add task
		 */
		$scope.addTask = function() {
			//Clear the ngModel in the modal first
			$scope.task = {};
			$scope.taskModal.show();
		};

		/**
		 * Method will close a modal for add task
		 */
		$scope.closeAddTaskModal = function() {
			$scope.taskModal.hide();
		};

		$scope.newTask = function(task) {
			console.log('TodoController.newTask');
			if (!Projects.getActiveProject() || !task) {
				return;
			}

			//push new task into project
			Projects.newTask($scope.activeProject, task);

			//update the activeProject reference
			$scope.activeProject = Projects.getActiveProject();

			//modal hide
			$scope.taskModal.hide();
		};

		/**
		 * Method will edit the task
		 */
		$scope.editTask = function(task) {
			//Clear the ngModel in the modal first
			$scope.task = task;
			$scope.taskModal.show();
		};

		/**
		 * Method will delete the task
		 */
		$scope.deleteTask = function(task) {
			console.log("Tasks.deleteTask");
			Projects.deleteTask($scope.activeProject, task);
		};


		/**
		 * Method will reorder the task
		 */
		$scope.reorderTask = function(task, $fromIndex, $toIndex) {
			console.log("Tasks.reorderTask");
		};

		/**
		 * Method will make the task completed
		 */
		$scope.isCompletedLabel = function(task) {
			if (task && task.title && task.isCompleted) {
				return "Done!";
			} else {
				return "Done?";
			}
		};

		/**
		 * Method will toggle isCompleted flag
		 */
		$scope.toggleTaskIsComplete = function(task) {
			Projects.toggleTaskIsComplete(task);
		};


		/**
		 * Method will toggleShowDelete
		 */
		$scope.toggleShowDelete = function() {
			console.log("Tasks.toggleShowDelete");
			$scope.shouldShowDelete = !$scope.shouldShowDelete;
			$scope.shouldShowReorder = false;
		};

		/**
		 * Method will toggleShowReorder
		 */
		$scope.toggleShowReorder = function() {
			console.log("Tasks.toggleShowReorder");
			$scope.shouldShowReorder = !$scope.shouldShowReorder;
			$scope.shouldShowDelete = false;
		};


		/**
		 * Method will reorderTask
		 */
		$scope.reorderTask = function(aTask, fromIndex, toIndex) {
			Projects.reorderArray($scope.activeProject.tasks, aTask, fromIndex, toIndex);
		};


		/**
		 * Method will reorderItem
		 */
		$scope.emailTask = function(task) {
			console.log("Tasks.emailTask");

		};

	}
