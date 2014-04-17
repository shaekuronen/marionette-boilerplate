
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {

  // create an instance of GridCollectionView
  var gridCollectionView = new App.ItemsCollectionView({
    collection: App.itemsCollection
  });

  // render grid
  App.gridRegion.show(gridCollectionView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // filter collection by category
    var filteredCollection = App.itemsCollection.filter(App.originalCollection, category);

    // reset itemsCollection
    App.itemsCollection.reset(filteredCollection);

    // update the URL
    App.router.navigate('category/' + category);

  });

  // when an item in the grid is clicked
  App.vent.on('grid:item:selected', function(modelId) {

    gridCollectionView.close();

  });

});
