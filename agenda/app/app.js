import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Inflector from 'ember-inflector';

Inflector.inflector.irregular('aplicacao', 'aplicacoes');

const App = Application.extend({
  primaryKey: 'id',
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  customEvents: {
    //desabilitando os evento `mouseenter`
    mouseenter: null,
    //adicionando suporte ao evento `paste`
    paste: 'paste'
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
