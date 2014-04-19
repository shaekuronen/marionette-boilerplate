
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {

  // create another instance of App.ItemsCollection to allow filtering and reseting while preserving an apriori version (App.itemsCollection) to filter against
  var gridCollection = new App.ItemsCollection(App.Data);

  // create an instance of GridCollectionView
  var gridCollectionView = new App.GridCollectionView({
    collection: gridCollection
  });

  // initial render grid
  App.gridRegion.show(gridCollectionView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // update collection models to selected:true if they contain the category
    App.itemsCollection.setSelectedCategory(category);

    // update the URL
    App.router.navigate('category/' + category);

  });

  // this module listens to changes on the collection
  Grid.listenTo(App.itemsCollection, 'change:selected', function() {

    // get a collection of models that have property selected: true
    var selectedCollection = App.itemsCollection.getSelectedModels();

    gridCollection.reset(selectedCollection);

  });

  // when an item in the grid is clicked
  App.vent.on('grid:item:selected', function(modelId) {

    // deselect all items in the items collection
    App.itemsCollection.setSelectedCategory('');

  });

  App.vent.on('item:route', function(url_safe_title) {

    // deselect all items in the items collection
    App.itemsCollection.setSelectedCategory('');

  });

});
