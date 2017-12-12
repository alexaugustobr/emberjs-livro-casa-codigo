import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
      queryParams: {
        nome: {
          refreshModel: true
        }
      },
    
      model(params){
        let filter = {};
        if(!Ember.isEmpty(params.nome)){
            filter.nome = params.nome;
        }
        return this.get('store').query('pessoa', filter);
      },
    
      actions:{
          nova(){
              this.transitionTo('nova');
          }
      }
});
