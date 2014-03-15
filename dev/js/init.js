DemoApp = (function(Backbone, Marionette) {

  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    main: "#main"
  });

  App.StaticView = Marionette.ItemView.extend({
    template: '#static-view',
  });

  App.ListItemView = Marionette.ItemView.extend({
    template: '#list-item-view',
    tagName: 'ul'
  });

  App.on("initialize:after", function() {

    var listItemView = new App.ListItemView;

    App.main.show(listItemView);

  });

  // App.main.show(new App.StaticView);

  App.start();

})(Backbone, Marionette);
