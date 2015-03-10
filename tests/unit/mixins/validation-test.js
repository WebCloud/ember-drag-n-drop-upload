import Ember from 'ember';
import ValidationMixin from '../../../mixins/validation';
import { module, test } from 'qunit';

module('ValidationMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ValidationObject = Ember.Object.extend(ValidationMixin);
  var subject = ValidationObject.create();
  assert.ok(subject);
});
