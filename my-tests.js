require('jsdom-global')();

var $ = require('greenback');
var test = require('tape');

test('Create element', function(assert){
  var expected = $('div').el.nodeName;
  var actual = document.createElement('div').nodeName;

  assert.equal(actual, expected,
    'Greenback should create a div element just like document.createElement');

  assert.end();
});


test('Get Element By Id', function(assert){
  document.body.innerHTML = '<div id="wrapper"></div>';

  var expected = $('#wrapper').el.id;
  var actual = document.getElementById('wrapper').id;

  assert.deepEqual(actual, expected,
    'Greenback should get an element by ID');

  assert.end();
});


test('Get All Elements by Class', function(assert){
  document.body.innerHTML = '<div id="wrapper"><div class="thing" id="thing1"></div><div class="thing" id="thing2"></div></div>';

  var expected = $('.thing').el;
  var actual = document.getElementsByClassName('thing');

  assert.equal(actual, expected,
    'Greenback should get all elements by class name');

  assert.end();
});


test('Get First Element by Class', function(assert){
  document.body.innerHTML = '<div id="wrapper"><div class="thing" id="thing1"></div><div class="thing" id="thing2"></div></div>';

  var expected = $('.thing:first').el.id;
  var actual = document.getElementsByClassName('thing')[0].id;

  assert.equal(actual, expected,
    'Greenback\'s :first pseudo class should get the first element of a list');

  assert.end();
});