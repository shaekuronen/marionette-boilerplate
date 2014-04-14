
App.RouteController = Marionette.Controller.extend({

  showGrid: function(id) {

    var _category = id || 'all';

    // notify controller that select element option was selected
    App.vent.trigger('gridSorter:category:selected', _category);

  }

});
