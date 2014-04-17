
App.GridItemView = Marionette.ItemView.extend({

  tagName: 'li',

  template: JST['dev/templates/grid_item.hbs'],

  events: {
    'click': 'itemClicked'
  },

  itemClicked: function(jqueryObject) {
    console.log('itemClicked value of this is ' + Object.keys(this));
    console.log('itemClicked value of this.cid is ' + this.cid);
    console.log('itemClicked value of this.model.id is ' + this.model.get('id'));
    console.log('itemClicked value of this.model ' + Object.keys(this.model));
    console.log('itemClicked value of this.model.attributes ' + Object.keys(this.model.attributes));
    console.log('itemClicked value of this.model.collection ' + Object.keys(this.model.collection));

    App.vent.trigger('grid:item:selected', this.model.get('id'));
  }

});
