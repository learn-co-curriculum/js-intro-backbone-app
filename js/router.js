APP.Router = Backbone.Router.extend({
  initialize: function () {
    $('#new').html(new APP.HeaderView().render());
  },
  routes: {
    "": "list",
    "properties/new": "newProperty",
    "properties/:id": "propertyDetails"
  },
  list: function () {
    this.before(function () {
      this.showView('#main', new APP.WelcomeView());
    });
  },
  propertyDetails: function (id) {
    this.before(function () {
      var property = this.propertyList.get(id);
      this.showView('#main', new APP.PropertyView({
        model: property
      }));
    });
  },
  newProperty: function () {
    this.before(function () {
      this.showView('#main', new APP.PropertyView({
        model: new APP.Property()
      }));
    });
  },
  showView: function (selector, view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    $(selector).html(view.render());
    this.currentView = view;
    return view;
  },
  before: function (callback) {
    if (this.propertyList) {
      if (callback) callback.call(this);
    } else {
      this.propertyList = new APP.PropertyList();
      var self = this;
      this.propertyList.fetch({
        success: function () {
          var propertyListView = new APP.PropertyListView({
              model: self.propertyList
          }).render();
          $('#list').html(propertyListView);
          if (callback) callback.call(self);
        }
      });
    }
  }
});