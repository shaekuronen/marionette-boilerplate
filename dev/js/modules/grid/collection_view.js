
App.ItemsCollectionView = Marionette.CollectionView.extend({

  tagName: 'ul',

  itemView: App.GridItemView

  // ,

  // events: {
  //   'click': 'gridClicked'
  // },

  // gridClicked: function(id) {

  //   // this.model.set('item_detail_selected', true);

  //   console.log('in gridClicked value of this is ' + Object.keys(this));
  //   console.log('in gridClicked value of this.children is ' + Object.keys(this.children));
  //   console.log('grid item clicked ' + Object.keys(id));
  //   console.log('grid item clicked ' + id.target);

  //   this.close();

  // }

});
