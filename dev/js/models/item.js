
App.ItemModel = Backbone.Model.extend({

  initialize: function() {

    // get the categories of the current model
    var _categories = this.get('categories');

    // add category 'all' to the temp categories array
    _categories.push('all');

    // add the updated categories to the current model
    this.set('categories', _categories);

  }

});
