(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _greenback = require('greenback');

var _greenback2 = _interopRequireDefault(_greenback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _greenback2.default)('div').text('what the...').appendTo(document.body);


},{"greenback":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GreenbackConstructor = function () {
  function GreenbackConstructor() {
    var _this = this;

    _classCallCheck(this, GreenbackConstructor);

    var greenback = function greenback(el) {
      if (el) {
        return _this.domMethods(el);
      }
    };

    return greenback;
  }

  _createClass(GreenbackConstructor, [{
    key: 'domMethods',
    value: function domMethods(el) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      var Greenback = function () {
        function Greenback(el, base) {
          _classCallCheck(this, Greenback);

          this.fragment = false;
          this.el = false;
          this.base = base;

          var shouldGetRegex = /[\.\#\<]/;
          var result = shouldGetRegex.exec(el);

          if (result) {
            this.el = this.get(el);
          } else {
            this.el = this.base.createElement(el);
            this.fragment = document.createDocumentFragment();
            this.fragment.appendChild(this.el);
          }

          return this;
        }

        _createClass(Greenback, [{
          key: 'get',
          value: function get(el) {
            var selectorType = el.charAt(0);
            var selectorText = el.split(':');
            var firstFlag = selectorText[1] || false;
            var _el = void 0;

            selectorText = selectorText[0];

            if (selectorType === '.') {
              var regex = /(\.)([a-zA-Z0-9-]*)/g;

              selectorText = selectorText.replace(regex, function (match, offset, string) {
                return string + ' ';
              }).trim();

              _el = this.base.getElementsByClassName(selectorText);
              _el = firstFlag ? _el[0] : _el;
            } else if (selectorType === '#') {
              selectorText = selectorText.replace('#', '');
              console.log('selectorText', selectorText);
              _el = this.base.getElementById(selectorText);
            }

            return _el;
          }
        }, {
          key: 'find',
          value: function find(el) {
            return new Greenback(el, this.el);
          }
        }, {
          key: 'text',
          value: function text(val) {
            this.el.innerText = val;

            return this;
          }
        }, {
          key: 'html',
          value: function html(val) {
            this.el.innerHTML = val;

            return this;
          }
        }, {
          key: 'attr',
          value: function attr(params) {
            for (var a in params) {
              this.el.setAttribute(a, params[a]);
            }

            return this;
          }
        }, {
          key: 'class',
          value: function _class(name) {
            this.el.classList.add(name);

            return this;
          }
        }, {
          key: 'removeClass',
          value: function removeClass(name) {
            this.el.classList.remove(name);

            return this;
          }
        }, {
          key: 'on',
          value: function on(event, fn) {
            this.el.addEventListener(event, fn);

            return this;
          }
        }, {
          key: 'append',
          value: function append(parent) {
            parent.appendChild(this.fragment);

            return this;
          }
        }, {
          key: 'prepend',
          value: function prepend(parent) {
            parent.prependChild(this.fragment);

            return this;
          }
        }]);

        return Greenback;
      }();

      return new Greenback(el, base);
    }
  }]);

  return GreenbackConstructor;
}();

exports.default = GreenbackConstructor;


},{}],3:[function(require,module,exports){
'use strict';

var _greenback = require('./greenback.js');

var _greenback2 = _interopRequireDefault(_greenback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greenback = new _greenback2.default();

module.exports = greenback;
},{"./greenback.js":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvdG1wL2luZGV4LmpzIiwiZGlzdC9ncmVlbmJhY2suanMiLCJkaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7OztBQUVBLHlCQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsYUFBZCxFQUE2QixRQUE3QixDQUFzQyxTQUFTLElBQS9DOzs7O0FDSkE7Ozs7Ozs7Ozs7SUFFcUIsb0I7QUFDbkIsa0NBQWE7QUFBQTs7QUFBQTs7QUFDWCxRQUFJLFlBQVksU0FBWixTQUFZLENBQUMsRUFBRCxFQUFRO0FBQ3RCLFVBQUcsRUFBSCxFQUFPO0FBQUUsZUFBTyxNQUFLLFVBQUwsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUE2QjtBQUN2QyxLQUZEOztBQUlBLFdBQU8sU0FBUDtBQUNEOzs7OytCQUVVLEUsRUFBa0I7QUFBQSxVQUFkLElBQWMsdUVBQVQsUUFBUzs7QUFBQSxVQUVyQixTQUZxQjtBQUd6QiwyQkFBWSxFQUFaLEVBQWdCLElBQWhCLEVBQXFCO0FBQUE7O0FBQ25CLGVBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNBLGVBQUssRUFBTCxHQUFVLEtBQVY7QUFDQSxlQUFLLElBQUwsR0FBWSxJQUFaOztBQUVBLGNBQUksaUJBQWlCLFVBQXJCO0FBQ0EsY0FBSSxTQUFTLGVBQWUsSUFBZixDQUFvQixFQUFwQixDQUFiOztBQUVBLGNBQUcsTUFBSCxFQUFVO0FBQ1IsaUJBQUssRUFBTCxHQUFVLEtBQUssR0FBTCxDQUFTLEVBQVQsQ0FBVjtBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFLLEVBQUwsR0FBVSxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLEVBQXhCLENBQVY7QUFDQSxpQkFBSyxRQUFMLEdBQWdCLFNBQVMsc0JBQVQsRUFBaEI7QUFDQSxpQkFBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixLQUFLLEVBQS9CO0FBQ0Q7O0FBRUQsaUJBQU8s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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdncmVlbmJhY2snO1xuXG4kKCdkaXYnKS50ZXh0KCd3aGF0IHRoZS4uLicpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5iYWNrQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBncmVlbmJhY2sgPSAoZWwpID0+IHtcbiAgICAgIGlmKGVsKSB7IHJldHVybiB0aGlzLmRvbU1ldGhvZHMoZWwpOyB9XG4gICAgfTtcblxuICAgIHJldHVybiBncmVlbmJhY2s7XG4gIH1cblxuICBkb21NZXRob2RzKGVsLCBiYXNlPWRvY3VtZW50KXtcblxuICAgIGNsYXNzIEdyZWVuYmFjayB7XG4gICAgICBjb25zdHJ1Y3RvcihlbCwgYmFzZSl7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhc2UgPSBiYXNlO1xuXG4gICAgICAgIGxldCBzaG91bGRHZXRSZWdleCA9IC9bXFwuXFwjXFw8XS87XG4gICAgICAgIGxldCByZXN1bHQgPSBzaG91bGRHZXRSZWdleC5leGVjKGVsKTtcblxuICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmdldChlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbCA9IHRoaXMuYmFzZS5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZ2V0KGVsKXtcbiAgICAgICAgbGV0IHNlbGVjdG9yVHlwZSA9IGVsLmNoYXJBdCgwKTtcbiAgICAgICAgbGV0IHNlbGVjdG9yVGV4dCA9IGVsLnNwbGl0KCc6Jyk7XG4gICAgICAgIGxldCBmaXJzdEZsYWcgPSBzZWxlY3RvclRleHRbMV0gfHwgZmFsc2U7XG4gICAgICAgIGxldCBfZWw7XG5cbiAgICAgICAgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0WzBdO1xuXG4gICAgICAgIGlmKHNlbGVjdG9yVHlwZSA9PT0gJy4nKXtcbiAgICAgICAgICBsZXQgcmVnZXggPSAvKFxcLikoW2EtekEtWjAtOS1dKikvZztcblxuICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIG9mZnNldCwgc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nICsgJyAnO1xuICAgICAgICAgIH0pLnRyaW0oKTtcblxuICAgICAgICAgIF9lbCA9IHRoaXMuYmFzZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgX2VsID0gZmlyc3RGbGFnID8gX2VsWzBdIDogX2VsO1xuICAgICAgICB9IGVsc2UgaWYoc2VsZWN0b3JUeXBlID09PSAnIycpIHtcbiAgICAgICAgICBzZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0b3JUZXh0Jywgc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICBfZWwgPSB0aGlzLmJhc2UuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZWw7XG4gICAgICB9O1xuXG4gICAgICBmaW5kKGVsKXtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmVlbmJhY2soZWwsIHRoaXMuZWwpO1xuICAgICAgfTtcblxuICAgICAgdGV4dCh2YWwpe1xuICAgICAgICB0aGlzLmVsLmlubmVyVGV4dCA9IHZhbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG5cbiAgICAgIGh0bWwodmFsKXtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBhdHRyKHBhcmFtcyl7XG4gICAgICAgIGZvcihsZXQgYSBpbiBwYXJhbXMpe1xuICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGEsIHBhcmFtc1thXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG5cbiAgICAgIGNsYXNzKG5hbWUpe1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICByZW1vdmVDbGFzcyhuYW1lKXtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgICAgb24oZXZlbnQsIGZuKXtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBhcHBlbmQocGFyZW50KXtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgICAgcHJlcGVuZChwYXJlbnQpe1xuICAgICAgICBwYXJlbnQucHJlcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgR3JlZW5iYWNrKGVsLCBiYXNlKTtcbiAgfVxuXG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9ncmVlbmJhY2sgPSByZXF1aXJlKCcuL2dyZWVuYmFjay5qcycpO1xuXG52YXIgX2dyZWVuYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmVlbmJhY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ3JlZW5iYWNrID0gbmV3IF9ncmVlbmJhY2syLmRlZmF1bHQoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBncmVlbmJhY2s7Il19
