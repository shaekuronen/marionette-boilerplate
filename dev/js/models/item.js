
App.ItemModel = Backbone.Model.extend({

  initialize: function() {

    // get the categories of the current model
    var _categories = this.get('categories');

    // add category 'all' to the temp categories array
    _categories.push('all');

    // add the updated categories to the current model
    this.set('categories', _categories);

    // create a url safe title
    var url_safe_title = this.get('title').replace(/[^a-z0-9]/gi, '-').toLowerCase();

    // add the url safe title to the model
    this.set('url_safe_title', url_safe_title);

  }

});
