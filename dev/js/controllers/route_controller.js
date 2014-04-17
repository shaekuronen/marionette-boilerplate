
App.RouteController = Marionette.Controller.extend({

  categoryRoute: function(id) {

    var _category = 'all',
        _categories = App.uniqueCategoriesObject.categories;

    // if the category exists in the categories array
    if (_.indexOf(_categories, id) >= 0) {
      _category = id;
    }

    // notify controller that select element option was selected
    App.vent.trigger('gridSorter:category:selected', _category);

  },

  itemRoute: function(url_safe_title) {

    console.log('itemRoute executed with url_safe_title ' + url_safe_title);

    App.vent.trigger('item:route', url_safe_title);

  }

});
