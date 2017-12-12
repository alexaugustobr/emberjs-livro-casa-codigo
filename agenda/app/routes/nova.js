import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model(){
        return this.get('store').createRecord('pessoa');
    },
    
});
