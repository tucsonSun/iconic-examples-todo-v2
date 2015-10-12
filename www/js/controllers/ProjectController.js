	angular
		.module('todoApp')
		.controller('ProjectController', ProjectController);

	ProjectController.$inject = ['$scope', '$state', 'Projects', '$ionicModal', '$ionicSideMenuDelegate'];

	function ProjectController($scope, $state, Projects, $ionicModal, $ionicSideMenuDelegate) {
		// Load or initialize projects
		$scope.projects = Projects.all();

		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
			$scope.projectModal = modal;
		}, {
			scope: $scope,
		});

		$scope.addProjectWithModal = function() {
			//Clear the ngModel in the modal first
			$scope.project = {};
			$scope.projectModal.show();
		};

		$scope.editProjectWithModal = function(project) {
			//Asign the ngModel in the modal first
			$scope.project = project;
			$scope.projectModal.show();
		};


		$scope.closeNewProject = function() {
			$scope.projectModal.hide();
		};


		$scope.newProject = function(project) {
			var projectTitle = project.title;
			if (projectTitle) {
				var newProject = Projects.newProject(projectTitle);
				//add this to the list of projects
				$scope.projects.push(newProject);
				//save the project
				Projects.save($scope.projects);

				//select the new project
				Projects.setActiveProject(project);

				// close the module
				$scope.projectModal.hide();
				//console.dir($scope.projectModal);
			}
		};


		$scope.selectProject = function(project) {
			//set the active project
			Projects.setActiveProject(project);

			//redirct to tasks list
			$state.go('app.tasks');
		};



		/**
		 * Method will delete the activeProject
		 */
		$scope.deleteActiveProject = function(project) {
			if (!project) {
				console.log("unable to delete project ");
				return;
			}

			console.log("delete project= '" + project.title + "'");
			//save the project
			Projects.deleteProject(project);

			//If removing the activeProject
			if (Projects.getActiveProject() && Projects.getActiveProject().id === project.id) {
				var lastProj = Projects.getLastProjectInList();
				//set the active project
				Projects.setActiveProject(lastProj);
			}
			//update projects list
			$scope.projects = Projects.all();
		};
	}
