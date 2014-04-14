
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {

  // create an instance of GridCollectionView
  var gridCollectionView = new App.ItemsCollectionView({
    collection: App.gridCollection
  });

  // create a new copy of itemsCollection
  App.originalCollection = new App.ItemsCollection(App.Data);

  // render grid
  App.gridRegion.show(gridCollectionView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // filter collection by category
    var filteredCollection = App.gridCollection.filter(App.originalCollection, category);

    // reset gridCollection
    App.gridCollection.reset(filteredCollection);

    // update the URL
    App.router.navigate('category/' + category);

  });

});
