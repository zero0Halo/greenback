'use strict';

var $ = require('greenback');
console.log('$', $);
$('div').text('what the...').appendTo(document.body);

let $test = $('div').class('test').text('I\'m test');
let $test2 = $('div').class('test2').text('I\'m test2');
let $wrapper = $('.wrapper:first');

$wrapper.prepend($test).append($test2);
