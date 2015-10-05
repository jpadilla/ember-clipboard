import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    onSuccess(event) {
      console.log(event);
    },

    onError(event) {
      console.log(event);
    }
  }
});
