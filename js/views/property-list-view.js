APP.PropertyListView = Backbone.View.extend({
  model: APP.PropertyList,
  tagName: 'ul',
  initialize: function() {
    this.model.bind( 'reset', this.render, this);        
    this.model.bind( 'add', this.appendNewProperty, this);
  },
  render: function() {
    _.each( this.model.models, function( property ) {
      this.appendNewProperty( property );
    }, this);
    return this.el;
  },
  appendNewProperty: function( property ) {
    this.$el.append(new APP.PropertyListItemView({model:property}).render());
  }
});

APP.PropertyListItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.template = _.template( APP.GET_TEMPLATE('property-list-item') );
    this.model.bind( 'change', this.render(), this);
    this.model.bind( 'destroy', this.remove(), this);
  },
  render: function() {
    this.$el.html( this.template( this.model.toJSON()));
    return this.el;
  }
});