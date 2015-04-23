import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'asset'.w(),
  file: {},
  progress: function(){
    var progress = 'width:'+(this.get('file.progress')*100)+'%';
    return progress.htmlSafe();
  }.property('file.progress'),
  isUploading: function(){
    return this.get('file.progress') !== 1;
  }.property('file.progress')
});
