'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('openwsAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('sets the selected action as home', function () {
    expect(MainCtrl.selectedAction).toBe('home');
  });
});
