import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista', {path: '/'});
  this.route('pessoa', {path: 'pessoa/:id'});
  this.route('nova');
});

export default Router;
