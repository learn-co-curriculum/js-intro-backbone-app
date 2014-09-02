APP = {};
APP.BASE_URL = 'http://exceptional-realty-property-ad.herokuapp.com';
APP.TEMPLATES = {};
APP.LOAD_TEMPLATES = function(names, callback) {
  function loop(index) {
    var name = names[index];
    $.get('templates/' + name + '.html', function (content) {
      APP.TEMPLATES[name] = content;
      console.log('Loaded template: '+name);
      index++;
      if (index < names.length) {
        loop(index);
      } else {
        callback();
      }
    });
  }
  loop(0);
};
APP.GET_TEMPLATE = function(name) {
  return APP.TEMPLATES[name];
};