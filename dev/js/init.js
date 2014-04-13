
App = new Marionette.Application();

App.addRegions({
  sorterRegion: '#grid-sorter-region',
  gridRegion: '#grid-region'
});

// add an event manager
App.vent = new Backbone.Wreqr.EventAggregator();
App.reqres = new Backbone.Wreqr.RequestResponse();

// GRID MODULE

// grid item view
App.GridItemView = Marionette.ItemView.extend({
  tagName: 'li',
  template: '#grid-item'
});
// end grid item view

// grid item model
App.ItemModel = Backbone.Model.extend({

  initialize: function(attributes, options) {

    var _categories = this.get('categories');

    _categories.push('all');

    this.set('categories', _categories);

  }

});
// end grid item model

// grid collection
App.GridCollection = Backbone.Collection.extend({

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
// end grid collection

// grid collection view
App.GridCollectionView = Marionette.CollectionView.extend({
  tagName: 'ul',
  itemView: App.GridItemView
});
// end grid collection view

// grid controller
App.GridController = Marionette.Controller.extend({



});
// end grid controller

// module definition
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {



});
// end module definition

// END GRID MODULE

App.on("initialize:after", function() {

  var gridCollection = new App.GridCollection(App.Data);

  // GRID

  // create an instance of GridCollectionView
  var gridCollectionView = new App.GridCollectionView({
    collection: gridCollection
  });

  // render grid
  App.gridRegion.show(gridCollectionView);

  App.vent.on('gridSorter:category:selected', function(category) {

      var originalCollection = new App.GridCollection(App.Data);
      var filteredCollection = gridCollection.filter(originalCollection, category);

      gridCollection.reset(filteredCollection);

  });

  // END GRID

});

