'use strict';

/**
 * @ngdoc function
 * @name openwsAppApp.controller:ExamplesCtrl
 * @description
 * # ExamplesCtrl
 * Controller of the openwsAppApp
 */
angular.module('openwsAppApp')
  .controller('ExamplesCtrl', ['$http', '$log', function ($http,$log,$scope) {
    this.tasksUrl = 'https://openws.herokuapp.com/example_user.todolist?apiKey=5b5dc314f2973fc6613307a7e2d1806f';
    this.tasks = [];
    _this = this;

    this.loadTasks = function() {
      $http.get(this.tasksUrl).success(function(data, status){
        _this.tasks = data;
      });
    };

    this.saveTask = function(task) {
      $http.post(this.tasksUrl, task).success(function(data, status) {
        $log.info('Task saved');
        this.tasks.push(data);
      });
    };

    this.deleteTask = function(taskId) {
      $http.delete(this.tasksUrl, taskId).success(function(data, status) {
        $log.info('data = ' + data);
      });
    };

    this.updateTask = function(task) {
      $http.put(this.tasksUrl, task).success(function(data, status) {
        $log.info('data = ' + data);
      });
    };
  }]);
