
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

// both grid and sorter_grid modules reference itemsCollection, so make instance here to have one global version (vs instantiating in both the module definitions, which doesn't seem super dry)
App.itemsCollection = new App.ItemsCollection(App.Data);

// this collection is used for filtering, as itemsCollection will be, well, filtered
App.originalCollection = App.itemsCollection.clone();

// create unique categories instance
App.uniqueCategoriesObject = App.itemsCollection.getUniqueCategories();
