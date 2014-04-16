
App.Router = Marionette.AppRouter.extend({

  controller: new App.RouteController,

  appRoutes: {
    'category/:id': 'categoryRoute',
    'item/:id': 'itemRoute'
  }

});
