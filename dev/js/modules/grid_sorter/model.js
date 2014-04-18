
App.GridSorterModel = Backbone.Model.extend({

  initialize: function() {

    // selected category defaults to all
    this.set('selected_category', 'all');

  },

  setSelectedCategory: function(category) {

    this.set('selected_category', category);

  }

});
