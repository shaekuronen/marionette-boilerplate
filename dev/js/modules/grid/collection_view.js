
App.GridCollectionView = Marionette.CollectionView.extend({

  tagName: 'ul',

  itemView: App.GridItemView,

  initialize: function() {

    // this view listens to changes on the collection
    this.listenTo(this.collection, 'change', this.render);

  }

});
