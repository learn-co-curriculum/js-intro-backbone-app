APP.HeaderView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template( APP.GET_TEMPLATE('header') );
  },
  render: function() {
    this.$el.html(this.template());
    return this.el;
  },
  events: {
    'click #new': 'newProperty'
  },
  newProperty: function() {
    app.navigate('properties/new', true);
    return false;
  }
});