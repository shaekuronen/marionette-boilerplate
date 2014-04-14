
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {

  var gridCollection = new App.ItemsCollection(App.Data);

  // create an instance of GridCollectionView
  var gridCollectionView = new App.ItemsCollectionView({
    collection: gridCollection
  });

  // render grid
  App.gridRegion.show(gridCollectionView);

  App.vent.on('gridSorter:category:selected', function(category) {

    var originalCollection = new App.ItemsCollection(App.Data);
    var filteredCollection = gridCollection.filter(originalCollection, category);

    gridCollection.reset(filteredCollection);

    // update the URL
    App.router.navigate('category/' + category);

  });

});
