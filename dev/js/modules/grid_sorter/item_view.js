
App.GridSorterItemView = Marionette.ItemView.extend({

  tagName: 'select',
  id: 'grid-sorter',
  template: JST['dev/templates/sorter_item.hbs'],

  initialize: function() {

    // per this discussion + research looks like have to go into the dom to get select > option:selected event
    // http://stackoverflow.com/questions/16350211/backbone-js-html-select-radio-change-event-is-not-firing-but-click-event-is
    $('document').ready(function() {

      // when the grid-sorter select element option is selected
      $('#grid-sorter').on('change', function() {

        // get the selected category
        var selectedCategory = $(this).find('option:selected').attr('value');

        // notify controller that select element option was selected
        App.vent.trigger('gridSorter:category:selected', selectedCategory);

      });

    });

  }

});
