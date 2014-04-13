
App.module("gridSorter", function(gridSorter, App, Backbone, Marionette, $, _) {

  var gridCollection = new App.GridCollection(App.Data);

  // create unique categories instance
  var uniqueCategoriesObject = gridCollection.getUniqueCategories();

  var gridSorterModel = new App.GridSorterModel(uniqueCategoriesObject);

  // instantiate view
  var gridSorterView = new App.GridSorterItemView({
    model: gridSorterModel
  });

  // render sorter
  App.sorterRegion.show(gridSorterView);

});
