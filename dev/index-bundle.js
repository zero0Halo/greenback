(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _greenback = require('greenback');

var _greenback2 = _interopRequireDefault(_greenback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _greenback2.default)('div').text('what the...').appendTo(document.body);

var $test = (0, _greenback2.default)('div').class('test').text('I\'m test');
var $test2 = (0, _greenback2.default)('div').class('test2').text('I\'m test2');
var $wrapper = (0, _greenback2.default)('.wrapper:first');

$wrapper.prepend($test).append($test2);


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
          value: function append(node) {
            node = this._getDomElement(node);

            this.el.appendChild(node);

            return this;
          }
        }, {
          key: 'prepend',
          value: function prepend(node) {
            var children = this.el.childNodes;
            var child = void 0;

            node = this._getDomElement(node);

            // Need to prepend to an actual element node and not a text node
            for (var a = 0; a < children.length; a++) {
              child = children[a];
              if (child.nodeType === 1) {
                break;
              }
            }

            this.el.insertBefore(node, child);

            return this;
          }
        }, {
          key: 'appendTo',
          value: function appendTo(parent) {
            parent = this._getDomElement(parent);
            parent.appendChild(this.fragment);

            return this;
          }
        }, {
          key: 'prependTo',
          value: function prependTo(parent) {
            var children = parent.childNodes;
            var child = void 0;

            parent = this._getDomElement(parent);

            // Need to prepend to an actual element node and not a text node
            for (var a = 0; a < children.length; a++) {
              child = children[a];
              if (child.nodeType === 1) {
                break;
              }
            }

            parent.insertBefore(this.fragment, child);

            return this;
          }
        }, {
          key: '_getDomElement',


          // Check and see if it's a valid node, otherwise assume it's greenback object and get .el
          value: function _getDomElement(node) {
            return node.nodeType ? node : node.el;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvdG1wL2luZGV4LmpzIiwiZGlzdC9ncmVlbmJhY2suanMiLCJkaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7OztBQUVBLHlCQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsYUFBZCxFQUE2QixRQUE3QixDQUFzQyxTQUFTLElBQS9DOztBQUVBLElBQUksUUFBUSx5QkFBRSxLQUFGLEVBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsSUFBdkIsQ0FBNEIsV0FBNUIsQ0FBWjtBQUNBLElBQUksU0FBUyx5QkFBRSxLQUFGLEVBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsSUFBeEIsQ0FBNkIsWUFBN0IsQ0FBYjtBQUNBLElBQUksV0FBVyx5QkFBRSxnQkFBRixDQUFmOztBQUVBLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixNQUF4QixDQUErQixNQUEvQjs7OztBQ1ZBOzs7Ozs7Ozs7O0lBRXFCLG9CO0FBQ25CLGtDQUFhO0FBQUE7O0FBQUE7O0FBQ1gsUUFBSSxZQUFZLFNBQVosU0FBWSxDQUFDLEVBQUQsRUFBUTtBQUN0QixVQUFHLEVBQUgsRUFBTztBQUFFLGVBQU8sTUFBSyxVQUFMLENBQWdCLEVBQWhCLENBQVA7QUFBNkI7QUFDdkMsS0FGRDs7QUFJQSxXQUFPLFNBQVA7QUFDRDs7OzsrQkFFVSxFLEVBQWtCO0FBQUEsVUFBZCxJQUFjLHVFQUFULFFBQVM7O0FBQUEsVUFFckIsU0FGcUI7QUFHekIsMkJBQVksRUFBWixFQUFnQixJQUFoQixFQUFxQjtBQUFBOztBQUNuQixlQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxlQUFLLEVBQUwsR0FBVSxLQUFWO0FBQ0EsZUFBSyxJQUFMLEdBQVksSUFBWjs7QUFFQSxjQUFJLGlCQUFpQixVQUFyQjtBQUNBLGNBQUksU0FBUyxlQUFlLElBQWYsQ0FBb0IsRUFBcEIsQ0FBYjs7QUFF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OztBQStJekI7QUEvSXlCLHlDQWdKVixJQWhKVSxFQWdKTDtBQUNsQixtQkFBTyxLQUFLLFFBQUwsR0FBZ0IsSUFBaEIsR0FBdUIsS0FBSyxFQUFuQztBQUNEO0FBbEp3Qjs7QUFBQTtBQUFBOztBQXNKM0IsYUFBTyxJQUFJLFNBQUosQ0FBYyxFQUFkLEVBQWtCLElBQWxCLENBQVA7QUFDRDs7Ozs7O2tCQWhLa0Isb0I7Ozs7QUNGckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2dyZWVuYmFjayc7XG5cbiQoJ2RpdicpLnRleHQoJ3doYXQgdGhlLi4uJykuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG5cbmxldCAkdGVzdCA9ICQoJ2RpdicpLmNsYXNzKCd0ZXN0JykudGV4dCgnSVxcJ20gdGVzdCcpO1xubGV0ICR0ZXN0MiA9ICQoJ2RpdicpLmNsYXNzKCd0ZXN0MicpLnRleHQoJ0lcXCdtIHRlc3QyJyk7XG5sZXQgJHdyYXBwZXIgPSAkKCcud3JhcHBlcjpmaXJzdCcpO1xuXG4kd3JhcHBlci5wcmVwZW5kKCR0ZXN0KS5hcHBlbmQoJHRlc3QyKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5iYWNrQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBncmVlbmJhY2sgPSAoZWwpID0+IHtcbiAgICAgIGlmKGVsKSB7IHJldHVybiB0aGlzLmRvbU1ldGhvZHMoZWwpOyB9XG4gICAgfTtcblxuICAgIHJldHVybiBncmVlbmJhY2s7XG4gIH1cblxuICBkb21NZXRob2RzKGVsLCBiYXNlPWRvY3VtZW50KXtcblxuICAgIGNsYXNzIEdyZWVuYmFjayB7XG4gICAgICBjb25zdHJ1Y3RvcihlbCwgYmFzZSl7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhc2UgPSBiYXNlO1xuXG4gICAgICAgIGxldCBzaG91bGRHZXRSZWdleCA9IC9bXFwuXFwjXFw8XS87XG4gICAgICAgIGxldCByZXN1bHQgPSBzaG91bGRHZXRSZWdleC5leGVjKGVsKTtcblxuICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmdldChlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbCA9IHRoaXMuYmFzZS5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZ2V0KGVsKXtcbiAgICAgICAgbGV0IHNlbGVjdG9yVHlwZSA9IGVsLmNoYXJBdCgwKTtcbiAgICAgICAgbGV0IHNlbGVjdG9yVGV4dCA9IGVsLnNwbGl0KCc6Jyk7XG4gICAgICAgIGxldCBmaXJzdEZsYWcgPSBzZWxlY3RvclRleHRbMV0gfHwgZmFsc2U7XG4gICAgICAgIGxldCBfZWw7XG5cbiAgICAgICAgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0WzBdO1xuXG4gICAgICAgIGlmKHNlbGVjdG9yVHlwZSA9PT0gJy4nKXtcbiAgICAgICAgICBsZXQgcmVnZXggPSAvKFxcLikoW2EtekEtWjAtOS1dKikvZztcblxuICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIG9mZnNldCwgc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nICsgJyAnO1xuICAgICAgICAgIH0pLnRyaW0oKTtcblxuICAgICAgICAgIF9lbCA9IHRoaXMuYmFzZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgX2VsID0gZmlyc3RGbGFnID8gX2VsWzBdIDogX2VsO1xuICAgICAgICB9IGVsc2UgaWYoc2VsZWN0b3JUeXBlID09PSAnIycpIHtcbiAgICAgICAgICBzZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0b3JUZXh0Jywgc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICBfZWwgPSB0aGlzLmJhc2UuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZWw7XG4gICAgICB9O1xuXG4gICAgICBmaW5kKGVsKXtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmVlbmJhY2soZWwsIHRoaXMuZWwpO1xuICAgICAgfTtcblxuICAgICAgdGV4dCh2YWwpe1xuICAgICAgICB0aGlzLmVsLmlubmVyVGV4dCA9IHZhbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG5cbiAgICAgIGh0bWwodmFsKXtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBhdHRyKHBhcmFtcyl7XG4gICAgICAgIGZvcihsZXQgYSBpbiBwYXJhbXMpe1xuICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGEsIHBhcmFtc1thXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG5cbiAgICAgIGNsYXNzKG5hbWUpe1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICByZW1vdmVDbGFzcyhuYW1lKXtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgICAgb24oZXZlbnQsIGZuKXtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBhcHBlbmQobm9kZSl7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9nZXREb21FbGVtZW50KG5vZGUpO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBwcmVwZW5kKG5vZGUpe1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkTm9kZXM7XG4gICAgICAgIGxldCBjaGlsZDtcblxuICAgICAgICBub2RlID0gdGhpcy5fZ2V0RG9tRWxlbWVudChub2RlKTtcblxuICAgICAgICAvLyBOZWVkIHRvIHByZXBlbmQgdG8gYW4gYWN0dWFsIGVsZW1lbnQgbm9kZSBhbmQgbm90IGEgdGV4dCBub2RlXG4gICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBjaGlsZHJlbi5sZW5ndGg7IGErKyl7XG4gICAgICAgICAgY2hpbGQgPSBjaGlsZHJlblthXTtcbiAgICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUobm9kZSwgY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgICAgYXBwZW5kVG8ocGFyZW50KXtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fZ2V0RG9tRWxlbWVudChwYXJlbnQpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcmFnbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBwcmVwZW5kVG8ocGFyZW50KXtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIGxldCBjaGlsZDtcblxuICAgICAgICBwYXJlbnQgPSB0aGlzLl9nZXREb21FbGVtZW50KHBhcmVudCk7XG5cbiAgICAgICAgLy8gTmVlZCB0byBwcmVwZW5kIHRvIGFuIGFjdHVhbCBlbGVtZW50IG5vZGUgYW5kIG5vdCBhIHRleHQgbm9kZVxuICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgY2hpbGRyZW4ubGVuZ3RoOyBhKyspe1xuICAgICAgICAgIGNoaWxkID0gY2hpbGRyZW5bYV07XG4gICAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5mcmFnbWVudCwgY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2hlY2sgYW5kIHNlZSBpZiBpdCdzIGEgdmFsaWQgbm9kZSwgb3RoZXJ3aXNlIGFzc3VtZSBpdCdzIGdyZWVuYmFjayBvYmplY3QgYW5kIGdldCAuZWxcbiAgICAgIF9nZXREb21FbGVtZW50KG5vZGUpe1xuICAgICAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA/IG5vZGUgOiBub2RlLmVsO1xuICAgICAgfTtcblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgR3JlZW5iYWNrKGVsLCBiYXNlKTtcbiAgfVxuXG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9ncmVlbmJhY2sgPSByZXF1aXJlKCcuL2dyZWVuYmFjay5qcycpO1xuXG52YXIgX2dyZWVuYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmVlbmJhY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ3JlZW5iYWNrID0gbmV3IF9ncmVlbmJhY2syLmRlZmF1bHQoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBncmVlbmJhY2s7Il19
