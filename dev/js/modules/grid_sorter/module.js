
App.module("GridSorter", function(GridSorter, App, Backbone, Marionette, $, _) {

  var gridSorterModel = new App.GridSorterModel(App.uniqueCategoriesObject);

  // instantiate view
  var gridSorterView = new App.GridSorterItemView({
    model: gridSorterModel
  });

  // render sorter
  App.sorterRegion.show(gridSorterView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // update the model's selected_category property
    gridSorterModel.setSelectedCategory(category);

  });

  App.vent.on('grid:item:selected', function(modelId) {

    // update the model's selected_category property to empty string
    // this resets the sorter to default state (in this case, 'Categories')
    gridSorterModel.setSelectedCategory('');

  });

});
