
App.ItemsCollection = Backbone.Collection.extend({

  model: App.ItemModel,

  filter: function(collection, category) {

    var filteredCollection = [];

    _.each(collection.models, function(model) {

      if ( _.contains(model.get('categories'), category) ) {

        filteredCollection.push(model);

      }

    });

    return filteredCollection;

  },

  getUniqueCategories: function() {

    var _this = this,
        _categories = [];

    _.each(_this.models, function(model) {

      _.each(model.get('categories'), function(category) {

        _categories.push(category);

      });

    });
    // end create an array of all categories in the collection

    // return an object with the unique categories sorted alphabetically
    return {
      'categories': (_.uniq(_categories)).sort()
    };

  }

});

App.gridCollection = new App.ItemsCollection(App.Data);
