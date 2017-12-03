import Controller from '@ember/controller';

/* 
let Pessoa = Ember.Object.extend({
    nome: 'Clairton' ,
    sobrenome: 'Heinzen',
    nomeCompleto: Ember.computed('nome', 'sobrenome', function(){
        return `${this.get('nome')} ${this.get('sobrenome')}`;
    }),
    aoAlterarNome : Ember.observer('nomeCompleto', function(){
        console.log(`nome alterado para ${this.get('nomeCompleto')}`);
    }),
    telefones: [],
    prefixos: Ember.computed('telefones.@each.prefixo', function(){
        return this.get('telefones').mapBy('prefixo');
    })
});


let pessoa = Pessoa.create({
      nome: 'J',
      sobrenome: 'Silva'
    });

let residencial = Ember.Object.create({
    prefixo: 49,
    numero: '33333333'
});

pessoa.get('telefones').pushObject(residencial);

let comercial = Ember.Object.create({
    prefixo: 47,
    valor: '99999999'
});

pessoa.get('telefones').pushObject(comercial);

console.log(pessoa.get('nomeCompleto'));

console.log(pessoa.set('nomeCompleto', 'Daniel <3'));

console.log(pessoa.get('telefones'));

console.log(pessoa.get('prefixos')); */

export default Controller.extend({
    nome: null,
    queryParams: ['nome'],
});
