
App.ItemModel = Backbone.Model.extend({

  initialize: function(attributes, options) {

    var _categories = this.get('categories');

    _categories.push('all');

    this.set('categories', _categories);

  }

});
