import Ember from 'ember';

export default Ember.Mixin.create({
  validators: Ember.inject.service(),
  init: function(){
    var properties,
        validations,
        _this;

    this._super.apply(this, arguments);

    properties = Ember.keys(this.get('validations'));
    validations = this.get('validations');
    _this = this;

    properties.forEach(function(property){
      var modelProperty,
          validationsToExecute;

      modelProperty = validations[property];
      validationsToExecute = Ember.keys(modelProperty);

      validationsToExecute.forEach(function(validation){
        var validationToExecute,
            validator;

        validationToExecute = validations[property][validation];
        validator = _this.get('validators').findBy('name', validation);

        _this.addObserver(property, _this, function(model){
          validator.get('executor')
                 .execute(model, property, validationToExecute);
        });
      });
    });

  },

});
