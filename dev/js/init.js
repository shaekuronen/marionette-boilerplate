
App = new Marionette.Application();

App.addRegions({
  sorterRegion: '#grid-sorter-region',
  gridRegion: '#grid-region'
});

// add an event manager
App.vent = new Backbone.Wreqr.EventAggregator();
