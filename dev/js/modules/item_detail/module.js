
App.module("ItemDetail", function(ItemDetail, App, Backbone, Marionette, $, _) {

  // create an instance of item detail model
  var itemDetailModel = new App.ItemDetailModel();

  // instantiate view
  var itemDetailView = new App.ItemDetailView({
    model: itemDetailModel
  });

  // render item detail
  App.itemDetailRegion.show(itemDetailView);

  App.vent.on('grid:item:selected', function(item) {



  });

});
