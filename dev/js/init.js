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

      $('document').ready(function() {
        $('#grid-sorter').on('change', $.proxy(_this.onselect, _this));
      });

    },

    onselect: function (evt) {
      console.log('change is ' + Object.keys(evt));
    },

    // notify app that a grid sorter category has been selected
    // App.vent('gridSorter:option:selected')
    events: {

    }

  });
  // end grid sorter view

  // unique categories model
  App.UniqueCategoriesModel = Backbone.Model.extend({

    collection: App.items,

    initialize: function() {

      // create an array of all categories in the collection
      var _categories = [];

      _.each(this.collection.models, function(model) {

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

  });
  // end grid item model

  // grid collection
  App.GridCollection = Backbone.Collection.extend({
    model: App.ItemModel
  });
  // end grid collection

  // grid collection view
  App.GridCollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: App.GridItemView
  });
  // end grid collection view

  // module definition
  App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {



  });
  // end module definition

  // END GRID MODULE

  App.on("initialize:after", function() {
    var uniqueCategoriesModel = new App.UniqueCategoriesModel();

    var gridSorterView = new App.GridSorterItemView({
      model: uniqueCategoriesModel
    });

    // render sorter
    App.sorterRegion.show(gridSorterView);

    // create an instance of GridCollectionView
    var gridCollectionView = new App.GridCollectionView({
      collection: App.items
    });

    // render grid
    App.gridRegion.show(gridCollectionView);

  });

  App.start();

})(Backbone, Marionette);
