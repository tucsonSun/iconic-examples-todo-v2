	angular
		.module('todoApp')
		.factory('Projects', Projects);

	Projects.$inject = [];

	function Projects() {
		var service = {
			all: all,
			save: save,
			newProject: newProject,
			getLastActiveIndex: getLastActiveIndex,
			setLastActiveIndex: setLastActiveIndex,
			deleteProject: deleteProject,
			getLastProjectInList: getLastProjectInList,
			getIndexOfProject: getIndexOfProject,
			setActiveProject: setActiveProject,
			getActiveProject: getActiveProject,
			addTaskToProject: addTaskToProject
		};

		var globalProjects = [];

		return service;

		////////////////
		function all() {
			console.log("Projects.all");
			var projectString = window.localStorage['projects'];
			if (projectString) {
				globalProjects = angular.fromJson(projectString);
			}
			return globalProjects;
		}

		function setActiveProject(project) {
			var index = this.getIndexOfProject(project);
			this.setLastActiveIndex(index);
		}

		function getActiveProject() {
			var index = getLastActiveIndex();
			return this.all()[index];
		}

		function deleteProject(project) {
			console.log("Projects.deleteProject");
			console.log(globalProjects);
			console.log(project);
			var index = globalProjects.indexOf(project);
			globalProjects.splice(index, 1);
			save(globalProjects);

			var lastActiveIndex = getLastActiveIndex();

			if (index == lastActiveIndex) {
				setLastActiveIndex(globalProjects.length-1);
			}
		}


		function save(projects) {
			console.log("Projects.save");
			var global = globalProjects;
			window.localStorage['projects'] = angular.toJson(projects);
		}

		function newProject(projectTitle) {
			var newId = "id" + Math.random().toString(16).slice(2);
			console.log("Projects.newProject");
			// Add a new project
			return {
				id: newId,
				title: projectTitle,
				tasks: []
			};
		}

		function getLastProjectInList() {
			console.log("Projects.getLastProjectInList");
			var projects = this.all();

			if (projects && projects.length > 0) {
				var lastIndex = projects.length - 1;
				var lastProj = projects[lastIndex];
				return lastProj;
			}
			return null;
		}

		function getIndexOfProject(aProject) {
			console.log("Projects.getIndexOfProject");
			var projects = this.all();
			if (aProject && projects && projects.length > 0) {
				for (i = 0; i < projects.length; i++) {
					var tempProj = projects[i];
					if (tempProj.id === aProject.id)
						return i;
				}
				return null;
			}
			return null;
		}

		function getLastActiveIndex() {
			console.log("Projects.getLastActiveIndex");
			return parseInt(window.localStorage['lastActiveProject']) || 0;
		}

		function setLastActiveIndex(index) {
			console.log("Projects.setLastActiveIndex");
			window.localStorage['lastActiveProject'] = index;
		}

		function addTaskToProject(project, task) {
			var newId = "id" + Math.random().toString(16).slice(2);
			var index = this.getIndexOfProject(project);
			if (!task.id) {
				task.id = newId;
			}

			globalProjects[index].tasks.push(task);

			//save the projectList
			this.save(globalProjects);
		}


		function getUniqueId(project) {
			if (typeof project.prototype.uniqueId == "undefined") {
				var id = 0;
				project.prototype.uniqueId = function() {
					if (typeof this.__uniqueid == "undefined") {
						this.__uniqueid = ++id;
					}
					return this.__uniqueid;
				};
			}
			return -1;
		}


	}
