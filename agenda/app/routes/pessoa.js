import Route from '@ember/routing/route';

export default Route.extend({
    pessoas: [{id: "1", nome: 'Clairton'}, {id:"2", nome: 'Rodrigo'}],
    
    model(params){
        return this.get('pessoas').findBy('id', params.id);
    }
});
