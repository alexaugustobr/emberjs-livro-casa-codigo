import Ember from 'ember';

export default Ember.Helper.extend({
  meses: Ember.inject.service('meses'),
  compute(params/*, hash*/){
    return '';
    if (!params){
      return ``;
    }
    let [nascidoEm] = params;
    if (!nascidoEm){
      return ``;
    }
    let dia = nascidoEm.getDate();
    let mes = this.get('meses').getPorExtenso(nascidoEm.getMonth());
    let ano = nascidoEm.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
  }
});