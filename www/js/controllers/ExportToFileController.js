	angular
		.module('todoApp')
		.controller('ExportToFileController', ExportToFileController);

	ExportToFileController.$inject = ['$scope', 'Projects', '$ionicSideMenuDelegate', '$cordovaFile', '$ionicPlatform'];

	function ExportToFileController($scope, Projects, $ionicSideMenuDelegate, $cordovaFile, $ionicPlatform) {
		//initialize
		$scope.all = Projects.all();

		/**
		 * Method will open a modal for new task
		 */
		$scope.exportToFile = function() {
			//Clear the ngModel in the modal first
			console.log("ExportToFileController.exportToFile()");
			var data = JSON.stringify($scope.all);
			var filePath = 'file.txt';

			$ionicPlatform.ready(function() {
				$cordovaFile.writeFile(cordova.file.externalRootDirectory + 'Surveyor', 'temp.html', 'text to write', true)
					.then(function(success) {
						alert('success ' + success.toString());
					}, function(error) {
						alert('error ' + error.toString());
					});
			});

		};


	}
