import Ember from 'ember';
import { initialize } from '../../../initializers/validator-upload';
import { module, test } from 'qunit';

var container, application;

module('ValidatorUploadInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
