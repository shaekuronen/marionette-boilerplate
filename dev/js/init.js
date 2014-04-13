DemoApp = (function(Backbone, Marionette) {

  "use strict";

  var App = new Marionette.Application();

  App.print_object = function(obj) {

    var output = '';
    for(var property in obj) {
      output += property + ': ' + obj[property]+'; \n';
    }
    console.log(output);

  }

  App.addRegions({
    sorterRegion: '#grid-sorter-region',
    gridRegion: '#grid-region'
  });

  // add an event manager
  App.vent = new Backbone.Wreqr.EventAggregator();
  App.reqres = new Backbone.Wreqr.RequestResponse();

  // items collection
  App.items = new Backbone.Collection([
    {
      "id": 1,
      "name": "Item1 Name",
      "thumbnail": "/img/items/item01_thumbnail.jpg",
      "categories": [
        "cat1",
        "cat2",
        "cat3"
      ]
    },
    {
      "id": 2,
      "name": "Item2 Name",
      "thumbnail": "/img/items/item02_thumbnail.jpg",
      "categories": [
        "cat4",
        "cat5",
        "cat6"
      ]
    },
    {
      "id": 3,
      "name": "Item3 Name",
      "thumbnail": "/img/items/item03_thumbnail.jpg",
      "categories": [
        "cat1",
        "cat3"
      ]
    },
    {
      "id": 4,
      "name": "Item4 Name",
      "thumbnail": "/img/items/item04_thumbnail.jpg",
      "categories": [
        "cat2",
        "cat4"
      ]
    },
    {
      "id": 5,
      "name": "Item5 Name",
      "thumbnail": "/img/items/item05_thumbnail.jpg",
      "categories": [
        "cat5",
        "cat6"
      ]
    },
    {
      "id": 6,
      "name": "Item6 Name",
      "thumbnail": "/img/items/item06_thumbnail.jpg",
      "categories": [
        "cat1",
        "cat6"
      ]
    },
    {
      "id": 7,
      "name": "Item7 Name",
      "thumbnail": "/img/items/item07_thumbnail.jpg",
      "categories": [
        "cat2",
        "cat4"
      ]
    },
    {
      "id": 8,
      "name": "Item8 Name",
      "thumbnail": "/img/items/item08_thumbnail.jpg",
      "categories": [
        "cat3",
        "cat5"
      ]
    },
    {
      "id": 9,
      "name": "Item9 Name",
      "thumbnail": "/img/items/item09_thumbnail.jpg",
      "categories": [
        "cat4",
        "cat6"
      ]
    },
    {
      "id": 10,
      "name": "Item10 Name",
      "thumbnail": "/img/items/item10_thumbnail.jpg",
      "categories": [
        "cat1",
        "cat4"
      ]
    }
  ]);
  // end items collection

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

        // kind of a hack until figure out how to detect currently selected option on page load
        App.vent.trigger('gridSorter:category:selected', 'all');

        // when the grid-sorter select element option is selected
        $('#grid-sorter').on('change', function() {

          // get the selected category
          var selectedCategory = $(this).find('option:selected').attr('value');

          // notify controller that select element option was selected
          App.vent.trigger('gridSorter:category:selected', selectedCategory);

        });

      });

    }

  });
  // end grid sorter view

  // unique categories model
  App.UniqueCategoriesModel = Backbone.Model.extend({

    // collection: App.items,
    // collection: App.GridCollection,

    initialize: function(attributes, options) {

      var _categories = [];

      _.each(collection.models, function(model) {

        _.each(model.get('categories'), function(category) {

          _categories.push(category);

        });

      });
      // end create an array of all categories in the collection

      // add the unique categories to the model
      this.set({'categories': _.uniq(_categories)});

    }

  });
  // end unique categories model

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

      console.log('this is ' + Object.keys(this));
      console.log('this is ' + Object.keys(this.attributes));
      console.log('categories are' + this.get('categories'));

    }

  });
  // end grid item model

  // grid collection
  App.GridCollection = Backbone.Collection.extend({

    model: new App.ItemModel,

    filter: function(collection, category) {

      var filteredCollection = [];

      _.each(collection.models, function(model) {

        if ( _.contains(model.get('categories'), category) ) {

          console.log('this happened and category is ' + category);

          filteredCollection.push(model);

        }

      });

      return filteredCollection;

    },

    getUniqueCategories: function(collection) {

      var _categories = [];

      console.log('this is ' + Object.keys(this));
      console.log('this.models is ' + Object.keys(this.models));

      _.each(collection.models, function(model) {

        _.each(model.get('categories'), function(category) {
          console.log('the category is now ' + category);

          _categories.push(category);

        });

      });
      // end create an array of all categories in the collection

      var model = new Backbone.Model();

      model.set({'categories': _.uniq(_categories)});

      return model;

      // add the unique categories to the model
      // return new Backbone.Model({'categories': _.uniq(_categories)});

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

    initialize: function() {

      var _this = this;

      var gridCollection = new App.GridCollection();



      App.vent.on('gridSorter:category:selected', function(category) {

        var filteredCollection = gridCollection.filter(App.items, category);

        gridCollection.reset(filteredCollection);

      });

    }

  });
  // end grid controller

  // module definition
  App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {



  });
  // end module definition

  // END GRID MODULE

  App.on("initialize:after", function() {

    // var gridCollection = new App.GridCollection({
    //   model: App.ItemModel
    // });

    var gridCollection = new App.GridCollection(App.items.models);

    console.log('the categories: ' + gridCollection.model[0].get('categories'));

    // SORTER

    // create unique categories instance
    // var uniqueCategoriesModel = gridCollection.getUniqueCategories(gridCollection);

    var uniqueCategoriesModel = new Backbone.Model({
      'categories': [
        'cat1',
        'cat2',
        'cat3'
      ]
    });

    // instantiate view
    var gridSorterView = new App.GridSorterItemView({
      model: uniqueCategoriesModel
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

      var filteredCollection = gridCollection.filter(App.items, category);

      gridCollection.reset(filteredCollection);

    });

    // END GRID

  });

  App.start();

})(Backbone, Marionette);
