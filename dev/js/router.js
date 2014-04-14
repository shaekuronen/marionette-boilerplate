
App.Router = Marionette.AppRouter.extend({

  controller: new App.RouteController,

  appRoutes: {
    '': 'showGrid',
    'categories': 'showGrid',
    'category/:id': 'showGrid'
  }

});


