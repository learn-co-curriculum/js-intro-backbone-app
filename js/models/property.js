APP.Property = Backbone.Model.extend({
  initialize: function (){
    this.on('all', function(event){
      console.log(this.get('street')+' event: '+event);
    });
    this.on('error', function(model, error){
      console.log(error);
    });
  },
  defaults: {
    "id": null,
    "street": null,
    "city": null,
    "state": null,
    "price": null,
    "posted": null
  },
  validate: function (attributes){
    if (!(typeof attributes.street === 'string')) {
      return "Street must be a string!";
    }
    if (!(typeof attributes.city === 'string')) {
      return "City must be a string!";
    }
    if (!(typeof attributes.state === 'string')) {
      return "State must be a string!";
    }
    if (!(typeof attributes.price === 'number')) {
      return "Price must be a number!";
    }
    if (!(typeof attributes.posted === 'string')) {
      return "Posted must be a string!";
    }
  },
  urlRoot: APP.BASE_URL+'/properties',
  url: function() {
    var base = this.urlRoot || (this.collection && this.collection.url) || '/';
    if (this.isNew()) {
      return base+'.json';
    } else {
      return base+'/'+this.id+'.json';
    }
  }
});

APP.PropertyList = Backbone.Collection.extend({
  model: APP.Property,
  url: APP.BASE_URL+'/properties.json'
});