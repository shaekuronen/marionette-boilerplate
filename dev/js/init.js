(function(Backbone, Marionette) {

  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    sorterRegion: '#grid-sorter-region',
    gridRegion: '#grid-region'
  });

  // add an event manager
  App.vent = new Backbone.Wreqr.EventAggregator();
  App.reqres = new Backbone.Wreqr.RequestResponse();

  // GRID SORTER MODULE

  // grid sorter model
  App.GridSorterModel = Backbone.Model.extend({

  });
  // end grid sorter model

  // grid sorter view
  App.GridSorterItemView = Marionette.ItemView.extend({

    tagName: 'select',
    id: 'grid-sorter',
    attributes: {
      'name': 'grid-sorter'
    },
    template: '#sorter-item-template',

    initialize: function() {

      var _this = this;

      // per this discussion + research looks like have to go into the dom to get select > option:selected event
      // http://stackoverflow.com/questions/16350211/backbone-js-html-select-radio-change-event-is-not-firing-but-click-event-is
      $('document').ready(function() {

        // when the grid-sorter select element option is selected
        $('#grid-sorter').on('change', function() {

          // get the selected category
          var selectedCategory = $(this).find('option:selected').attr('value');

          // notify controller that select element option was selected
          App.vent.trigger('gridSorter:category:selected', selectedCategory);

        });

        // to be consistent, triggering this in the dom
        $('#grid-sorter').find('option[value="all"]').prop('selected', true);

      });

    }

  });
  // end grid sorter view

  // grid sorter controller
  App.GridSorterController = Marionette.Controller.extend({

    initialize: function() {



    }

  });
  // end grid sorter controller

  // module definition
  App.module("GridSorter", function(GridSorter, App, Backbone, Marionette, $, _) {



  });
  // end module definition

  // END GRID SORTER MODULE

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

    getUniqueCategories: function(collection) {

      var _categories = [];

      _.each(collection.models, function(model) {

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

    var gridCollection = new App.GridCollection(Demo.itemsArray);

    // SORTER

    // create unique categories instance
    var uniqueCategoriesObject = gridCollection.getUniqueCategories(gridCollection);

    var gridSorterModel = new App.GridSorterModel(uniqueCategoriesObject);

    // instantiate view
    var gridSorterView = new App.GridSorterItemView({
      model: gridSorterModel
    });

    // render sorter
    App.sorterRegion.show(gridSorterView);

    // END SORTER

    // GRID

    // create an instance of GridCollectionView
    var gridCollectionView = new App.GridCollectionView({
      collection: gridCollection
    });

    // render grid
    App.gridRegion.show(gridCollectionView);

    App.vent.on('gridSorter:category:selected', function(category) {

        var originalCollection = new App.GridCollection(Demo.itemsArray);
        var filteredCollection = gridCollection.filter(originalCollection, category);

        gridCollection.reset(filteredCollection);

    });

    // END GRID

  });

  App.start();

})(Backbone, Marionette);
