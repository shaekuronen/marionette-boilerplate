
App.module("ItemDetail", function(ItemDetail, App, Backbone, Marionette, $, _) {

  App.vent.on('grid:item:selected', function(modelId) {

    // instantiate view
    var itemDetailItemView = new App.ItemDetailItemView({
      model: App.itemsCollection.get(modelId)
    });

    // render item detail
    App.itemDetailRegion.show(itemDetailItemView);

  });

});
