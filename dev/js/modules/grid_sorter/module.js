
App.module("GridSorter", function(GridSorter, App, Backbone, Marionette, $, _) {

  var gridSorterModel = new App.GridSorterModel(App.uniqueCategoriesObject);

  // instantiate view
  var gridSorterView = new App.GridSorterItemView({
    model: gridSorterModel
  });

  // render sorter
  App.sorterRegion.show(gridSorterView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // get option with attribute value equal to category and set select property to true
    $('#grid-sorter option[value="' + category + '"]').prop('selected', true);

  });

  App.vent.on('grid:item:selected', function(modelId) {

    $('#grid-sorter option[value=""]').prop('selected', true);

  });

});
