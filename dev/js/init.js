
App = new Marionette.Application();

App.addRegions({
  sorterRegion: '#grid-sorter-region',
  gridRegion: '#grid-region'
});

// add an event manager
App.vent = new Backbone.Wreqr.EventAggregator();

App.on("initialize:after", function() {

  // instantiate router
  App.router = new App.Router();

  // start Backbone history
  Backbone.history.start({pushState: true});

});
