import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    onSuccess(event) {
      window.alert(event.text);
    },

    onError(event) {
      console.log(event);
    }
  }
});
