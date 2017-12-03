import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNameBindings: ['umaLetra::nome-errado'],
    umaLetra: Ember.computed('pessoa.nome', function(){
        return this.get('pessoa.nome') <= 1;
    }),

    pessoa: Ember.Object.create({
        nome: 'J'
    })
});
