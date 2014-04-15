
App.RouteController = Marionette.Controller.extend({

  categoryRoute: function(id) {

    var _category = 'all',
        _categories = _.values(App.uniqueCategoriesObject);

    // if the category exists in the categories array
    if (_.indexOf(_categories, id) >= 0) {
      _category = id;
    }

    // notify controller that select element option was selected
    App.vent.trigger('gridSorter:category:selected', _category);

  }

});
