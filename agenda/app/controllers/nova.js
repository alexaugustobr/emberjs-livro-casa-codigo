import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    store: Ember.inject.service(),
    criarTelefoneAoIniciar: Ember.on('init', function(){
        this.send('criarTelefone');
    }),
    actions:{
        salvarAoPressionarEnter(){
            this.send('salvar', this.get('model'));
        },
        salvar(pessoa){
            let self = this;
            pessoa.save().then(() => {
                self.transitionToRoute('lista');
                this.get('model.telefones').filterBy('id', null).forEach(function(item) { 
                    item.deleteRecord(); 
                });
            }).catch((adapterError) => {
                console.log(adapterError);
            });
        },
        removerTelefone(telefone){
            if(confirm('Você está removendo um telefone, deseja continuar?')){
                telefone.destroyRecord();
            }
        },
        criarTelefone(){
            let telefone = this.get('store').createRecord('telefone',{});
            this.set('telefone', telefone);
        },
        adicionarTelefone(telefone){
            this.get('model.telefones').pushObject(telefone);
            this.send('criarTelefone');
        }
    }
});
