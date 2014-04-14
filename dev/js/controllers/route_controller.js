
App.RouteController = Marionette.Controller.extend({

  showGrid: function(id) {

    console.log('the id is ' + id);

    var _id = id || 'all';

    console.log('showGrid executed with id ' + _id);

  }

});
