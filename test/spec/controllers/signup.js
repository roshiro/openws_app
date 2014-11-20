'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('openwsAppApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  it('sets the selected action as signup', function () {
    expect(MainCtrl.selectedAction).toBe('signup');
  });

  it('saves the user', function() {

  });
});
