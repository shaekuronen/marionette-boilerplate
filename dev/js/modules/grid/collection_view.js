
App.ItemsCollectionView = Marionette.CollectionView.extend({

  tagName: 'ul',

  itemView: App.GridItemView,

  events: {
    'click': 'gridClicked'
  },

  gridClicked: function(id) {

    // this.model.set('item_detail_selected', true);

    this.remove();

    console.log('in gridClicked value of this is ' + Object.keys(this));
    console.log('in gridClicked value of this.options is ' + Object.keys(this.options));
    console.log('grid item clicked ' + Object.keys(id));
    console.log('grid item clicked ' + id.target);
  }

});
