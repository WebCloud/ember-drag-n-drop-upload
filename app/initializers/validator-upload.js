import Ember from 'ember';

var UploadValidator = Ember.Object.create({
  execute: function(model, property, restrictions){
    var isValid,
        acceptedExtensions;

    isValid = false;
    acceptedExtensions = new RegExp("\\.(?:"+restrictions.accept.join('|')+")$");

    isValid = !!model.get(property).toLocaleLowerCase().match(acceptedExtensions);

    if(!isValid){
      model.get('errors').add(property, restrictions.message);
    }
  }
});

export function initialize(container) {
  var validators = container.lookup('service:validators');
  validators.pushObject(Ember.Object.create({
    name: 'file',
    executor: UploadValidator
  }));
}

export default {
  name: 'validator-upload',
  initialize: initialize
};
