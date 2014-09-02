$(function() {
  APP.LOAD_TEMPLATES(['header', 'property-details', 'property-list-item', 'welcome'], function() {
    app = new APP.Router();
    Backbone.history.start();
  });
});