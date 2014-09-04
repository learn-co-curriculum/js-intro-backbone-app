APP.PropertyView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template( APP.GET_TEMPLATE('property-details') );
    this.model.bind( 'change', this.render, this);
  },
  render: function() {
    this.$el.html( this.template(this.model.toJSON()));
    return this.el;
  },
  events: {
    'click #save': 'saveProperty',
    'click #delete': 'deleteProperty',
  },
  saveProperty: function() {
    this.model.set({
        street: $('#street').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        price: parseFloat($('#price').val()),
        posted: $('#posted').val()
    });

    if (this.model.isNew()) {
      var self = this;
      app.propertyList.create( this.model, {
        success: function() {
          alert('New property was saved successfully.');
          APP.navigate( 'properties/' + self.model.id, false);
        }
      });
    } else {
      if (this.model.save()) {
        alert('Property was updated successfully.');
      }
    }
    return false;
  },
  deleteProperty: function() {
    this.model.destroy({
      success: function() {
        alert('Property was deleted successfully.');
        window.history.back();
      }
    });
    return false;
  }
});