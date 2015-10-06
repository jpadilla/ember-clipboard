import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    onSuccess(event) {
      alert(event.text);
    },

    onError(event) {
      console.log(event);
    }
  }
});
