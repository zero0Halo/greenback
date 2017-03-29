'use strict';

var _greenback = require('greenback');

var _greenback2 = _interopRequireDefault(_greenback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _greenback2.default)('div').text('what the...').appendTo(document.body);

var $test = (0, _greenback2.default)('div').class('test').text('I\'m test');
var $test2 = (0, _greenback2.default)('div').class('test2').text('I\'m test2');
var $wrapper = (0, _greenback2.default)('.wrapper:first');

$wrapper.prepend($test).append($test2);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJhcHBlbmRUbyIsImRvY3VtZW50IiwiYm9keSIsIiR0ZXN0IiwiY2xhc3MiLCIkdGVzdDIiLCIkd3JhcHBlciIsInByZXBlbmQiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7QUFFQSx5QkFBRSxLQUFGLEVBQVNBLElBQVQsQ0FBYyxhQUFkLEVBQTZCQyxRQUE3QixDQUFzQ0MsU0FBU0MsSUFBL0M7O0FBRUEsSUFBSUMsUUFBUSx5QkFBRSxLQUFGLEVBQVNDLEtBQVQsQ0FBZSxNQUFmLEVBQXVCTCxJQUF2QixDQUE0QixXQUE1QixDQUFaO0FBQ0EsSUFBSU0sU0FBUyx5QkFBRSxLQUFGLEVBQVNELEtBQVQsQ0FBZSxPQUFmLEVBQXdCTCxJQUF4QixDQUE2QixZQUE3QixDQUFiO0FBQ0EsSUFBSU8sV0FBVyx5QkFBRSxnQkFBRixDQUFmOztBQUVBQSxTQUFTQyxPQUFULENBQWlCSixLQUFqQixFQUF3QkssTUFBeEIsQ0FBK0JILE1BQS9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdncmVlbmJhY2snO1xuXG4kKCdkaXYnKS50ZXh0KCd3aGF0IHRoZS4uLicpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuXG5sZXQgJHRlc3QgPSAkKCdkaXYnKS5jbGFzcygndGVzdCcpLnRleHQoJ0lcXCdtIHRlc3QnKTtcbmxldCAkdGVzdDIgPSAkKCdkaXYnKS5jbGFzcygndGVzdDInKS50ZXh0KCdJXFwnbSB0ZXN0MicpO1xubGV0ICR3cmFwcGVyID0gJCgnLndyYXBwZXI6Zmlyc3QnKTtcblxuJHdyYXBwZXIucHJlcGVuZCgkdGVzdCkuYXBwZW5kKCR0ZXN0Mik7XG4iXX0=
