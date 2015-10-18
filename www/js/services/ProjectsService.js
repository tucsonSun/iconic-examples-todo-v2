	angular
		.module('todoApp')
		.factory('Projects', Projects);

	Projects.$inject = [];

	function Projects() {
		var service = {
			all: all,
			save: save,
			newProject: newProject,
			deleteProject: deleteProject,
			newTask: newTask,
			deleteTask: deleteTask,
			getLastActiveIndex: getLastActiveIndex,
			setLastActiveIndex: setLastActiveIndex,
			getLastProjectInList: getLastProjectInList,
			getIndexOfProject: getIndexOfProject,
			setActiveProject: setActiveProject,
			getActiveProject: getActiveProject,
			getIndexOfTask: getIndexOfTask,
			reorderArray: reorderArray,
			toggleTaskIsComplete: toggleTaskIsComplete
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
			var index = getIndexOfProject(project);

			//var index = globalProjects.indexOf(project);
			globalProjects.splice(index, 1);
			save(globalProjects);

			var lastActiveIndex = getLastActiveIndex();

			if (index == lastActiveIndex) {
				setLastActiveIndex(globalProjects.length - 1);
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
			var projects = all();

			if (projects && projects.length > 0) {
				var lastIndex = projects.length - 1;
				var lastProj = projects[lastIndex];
				return lastProj;
			}
			return null;
		}

		function getIndexOfProject(aProject) {
			console.log("Projects.getIndexOfProject");
			var projects = all();
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

		function newTask(project, task) {
			var newId = "id" + Math.random().toString(16).slice(2);
			var index = this.getIndexOfProject(project);
			task.id = newId;
			task.isCompleted = false;

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

		function getIndexOfTask(project, task) {
			if (project && project.tasks && project.tasks.length > 0) {
				var tasks = project.tasks;
				for (i = 0; i < tasks.length; i++) {
					var tempTask = tasks[i];
					if (tempTask.id === task.id)
						return i;
				}
			}
			return null;
		}


		function deleteTask(project, task) {
			console.log("Projects.deleteTask");
			var index = getIndexOfTask(project, task);

			if (index) {
				project.tasks.splice(index, 1);
				save(globalProjects);
			}
		}

		function toggleTaskIsComplete(task) {
			console.log("Projects.toggleTaskIsComplete");
			if (task) {
				task.isCompleted = !task.isCompleted;
				save(globalProjects);
			}
		}

		function reorderArray(array, item, fromIndex, toIndex) {
			array.splice(fromIndex, 1);
			array.splice(toIndex, 0, item);
			save(globalProjects);
		}
	}
