
App.GridItemView = Marionette.ItemView.extend({

  tagName: 'li',

  template: JST['dev/templates/grid_item.hbs'],

  events: {
    'click': 'itemClicked'
  },

  itemClicked: function() {

    App.vent.trigger('grid:item:selected', this.model.get('id'));
  }

});
