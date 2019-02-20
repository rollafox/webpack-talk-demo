var getHeroes = require('./superheroes.js');
var $ = require('jquery')

$.each(getHeroes(), function(index, hero){
  $('body').append('<h1>'+hero.name+'</h1>');
});
