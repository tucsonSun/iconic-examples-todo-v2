	angular
		.module('todoApp')
		.controller('ExportToFileController', ExportToFileController);

	ExportToFileController.$inject = ['$scope', 'Projects', '$ionicModal', '$ionicSideMenuDelegate', '$cordovaFile'];

	function ExportToFileController($scope, Projects, $ionicModal, $ionicSideMenuDelegate, $cordovaFile) {
		//initialize
		$scope.all = Projects.all();

		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
			$scope.taskModal = modal;
		}, {
			scope: $scope
		});

		/**
		 * Method will open a modal for new task
		 */
		$scope.exportToFile = function() {
			//Clear the ngModel in the modal first
			console.log("ExportToFileController.exportToFile()");

			$cordovaFile.writeFile('file.txt', data, {
				'append': false
			}).then(function(result) {
				// Success!
			}, function(err) {
				// An error occured. Show a message to the user
			});
		};


	}
