APP.WelcomeView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template( APP.GET_TEMPLATE('welcome') );
  },
  render: function() {
    this.$el.html(this.template());
    return this.el;
  }
});