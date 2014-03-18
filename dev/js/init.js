DemoApp = (function(Backbone, Marionette) {

  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    mainRegion: "#main",
    sorterRegion: '#grid-sorter-region',
    gridRegion: '#grid-container'
  });

  App.StaticView = Marionette.ItemView.extend({
    template: '#static-view',
  });

  App.ListItemView = Marionette.ItemView.extend({
    template: '#list-item-view',
    tagName: 'ul'
  });

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

  // sorter item view
  App.SorterItemView = Marionette.ItemView.extend({
    tagName: 'select',
    template: '#sorter-item-template'
  });
  // end sorter item view

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

    var listItemView = new App.ListItemView;

    App.mainRegion.show(listItemView);

    // create an instance of SorterView
    var sorterView = new App.SorterItemView({
      model: new Backbone.Model({
        "categories": [
          "cat1", "cat2", "cat3", "cat4", "cat5", "cat6"
        ]
      })
    });

    // render sorter
    App.sorterRegion.show(sorterView);

    // create an instance of GridCollectionView
    var gridCollectionView = new App.GridCollectionView({
      collection: App.items
    });

    // render grid
    App.gridRegion.show(gridCollectionView);

  });

  // App.main.show(new App.StaticView);

  App.start();

})(Backbone, Marionette);
