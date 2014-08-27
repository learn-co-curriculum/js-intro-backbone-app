App = {};
App.baseUrl = 'http://exceptional-realty-property-ad.herokuapp.com';

Backbone.emulateHTTP = true;

App.Property = Backbone.Model.extend({

  initialize: function (){
    this.on('all', function(event){
      console.log(this.get('street')+' event: '+event);
    });
    this.on('error', function(model, error){
      console.log(error);
    });
  },
  defaults: {
    "street": "",
    "city": "New York",
    "state": "NY",
    "price": 0.0,
    "posted": ""
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
  urlRoot: App.baseUrl+'/properties',
  url: function() {
    var base = this.urlRoot || (this.collection && this.collection.url) || '/';
    if (this.isNew()) {
      return base;
    } else {
      return base+'/'+encodeURIComponent(this.id)+'.json';
    }
  }
});

App.Properties = Backbone.Collection.extend({

  model: App.Property,
  url: App.baseUrl+'/properties.json'
});





