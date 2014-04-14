
App.module("GridSorter", function(GridSorter, App, Backbone, Marionette, $, _) {

  // create unique categories instance
  var uniqueCategoriesObject = App.itemsCollection.getUniqueCategories();

  var gridSorterModel = new App.GridSorterModel(uniqueCategoriesObject);

  // instantiate view
  var gridSorterView = new App.GridSorterItemView({
    model: gridSorterModel
  });

  // render sorter
  App.sorterRegion.show(gridSorterView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // get option with attribute value equal to category and set select property to true
    $('#grid-sorter option[value="' + category + '"').prop('selected', true);

  });

});
