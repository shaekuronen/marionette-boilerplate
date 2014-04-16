
App.GridItemView = Marionette.ItemView.extend({

  tagName: 'li',

  template: JST['dev/templates/grid_item.hbs'],

  events: {
    'click': 'gridItemClicked'
  },

  gridItemClicked: function(id) {
    console.log('grid item clicked ' + Object.keys(id));
    console.log('grid item clicked ' + id.target);
  }

});
