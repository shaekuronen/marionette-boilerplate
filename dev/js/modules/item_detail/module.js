
App.module("ItemDetail", function(ItemDetail, App, Backbone, Marionette, $, _) {

  App.vent.on('grid:item:selected', function(modelId) {

    // console.log('itemDetailModel is ' + Object.keys(itemDetailModel));
    // console.log('itemDetailModel.attributes is ' + Object.keys(itemDetailModel.attributes));
    // console.log('itemDetailModel attribute title is ' + itemDetailModel.get('title'));

    // instantiate view
    var itemDetailItemView = new App.ItemDetailItemView({
      model: App.itemsCollection.get(modelId)
    });

    // render item detail
    App.itemDetailRegion.show(itemDetailItemView);

  });

});
