(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $ = require('greenback');
console.log('$', $);
$('div').text('what the...').appendTo(document.body);

var $test = $('div').class('test').text('I\'m test');
var $test2 = $('div').class('test2').text('I\'m test2');
var $wrapper = $('.wrapper:first');

$wrapper.prepend($test).append($test2);


},{"greenback":2}],2:[function(require,module,exports){
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global) {
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

            var shouldGet = /[\.\#\<]/.test(el);

            if (shouldGet) {
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

  var $GB = new GreenbackConstructor();

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return $GB;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== 'undefined') {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = $GB;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.$GB = $GB;
  } else {
    global.$GB = $GB;
  }
})(this);


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvdG1wL2luZGV4LmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksSUFBSSxRQUFRLFdBQVIsQ0FBUjtBQUNBLFFBQVEsR0FBUixDQUFZLEdBQVosRUFBaUIsQ0FBakI7QUFDQSxFQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsYUFBZCxFQUE2QixRQUE3QixDQUFzQyxTQUFTLElBQS9DOztBQUVBLElBQUksUUFBUSxFQUFFLEtBQUYsRUFBUyxLQUFULENBQWUsTUFBZixFQUF1QixJQUF2QixDQUE0QixXQUE1QixDQUFaO0FBQ0EsSUFBSSxTQUFTLEVBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCLElBQXhCLENBQTZCLFlBQTdCLENBQWI7QUFDQSxJQUFJLFdBQVcsRUFBRSxnQkFBRixDQUFmOztBQUVBLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixNQUF4QixDQUErQixNQUEvQjs7Ozs7Ozs7QUNWQSxDQUFDLFVBQVUsTUFBVixFQUFrQjtBQUFBLE1BQ1gsb0JBRFc7QUFFZixvQ0FBYTtBQUFBOztBQUFBOztBQUNYLFVBQUksWUFBWSxTQUFaLFNBQVksQ0FBQyxFQUFELEVBQVE7QUFDdEIsWUFBRyxFQUFILEVBQU87QUFBRSxpQkFBTyxNQUFLLFVBQUwsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUE2QjtBQUN2QyxPQUZEOztBQUlBLGFBQU8sU0FBUDtBQUNEOztBQVJjO0FBQUE7QUFBQSxpQ0FVSixFQVZJLEVBVWM7QUFBQSxZQUFkLElBQWMsdUVBQVQsUUFBUzs7QUFBQSxZQUVyQixTQUZxQjtBQUd6Qiw2QkFBWSxFQUFaLEVBQWdCLElBQWhCLEVBQXFCO0FBQUE7O0FBQ25CLGlCQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxpQkFBSyxFQUFMLEdBQVUsS0FBVjtBQUNBLGlCQUFLLElBQUwsR0FBWSxJ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QUssUUFBekIsRUFBbUMsS0FBbkM7O0FBRUEscUJBQU8sSUFBUDtBQUNEO0FBNUl3QjtBQUFBOzs7QUE4SXpCO0FBOUl5QiwyQ0ErSVYsSUEvSVUsRUErSUw7QUFDbEIscUJBQU8sS0FBSyxRQUFMLEdBQWdCLElBQWhCLEdBQXVCLEtBQUssRUFBbkM7QUFDRDtBQWpKd0I7O0FBQUE7QUFBQTs7QUFxSjNCLGVBQU8sSUFBSSxTQUFKLENBQWMsRUFBZCxFQUFrQixJQUFsQixDQUFQO0FBQ0Q7QUFoS2M7O0FBQUE7QUFBQTs7QUFxS2pCLE1BQUksTUFBTSxJQUFJLG9CQUFKLEVBQVY7O0FBRUE7QUFDQSxNQUFJLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLEdBQTNDLEVBQWdEO0FBQzVDLFdBQU8sWUFBWTtBQUFFLGFBQU8sR0FBUDtBQUFhLEtBQWxDO0FBQ0o7QUFDQyxHQUhELE1BR08sSUFBSSxPQUFPLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDdkM7QUFDQSxRQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLE9BQTVDLEVBQXFEO0FBQ2pELGdCQUFVLE9BQU8sT0FBUCxHQUFpQixHQUEzQjtBQUNIO0FBQ0Q7QUFDQSxZQUFRLEdBQVIsR0FBYyxHQUFkO0FBQ0gsR0FQTSxNQU9BO0FBQ0gsV0FBTyxHQUFQLEdBQWEsR0FBYjtBQUNIO0FBQ0YsQ0FyTEQsRUFxTEcsSUFyTEgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2dyZWVuYmFjaycpO1xuY29uc29sZS5sb2coJyQnLCAkKTtcbiQoJ2RpdicpLnRleHQoJ3doYXQgdGhlLi4uJykuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG5cbmxldCAkdGVzdCA9ICQoJ2RpdicpLmNsYXNzKCd0ZXN0JykudGV4dCgnSVxcJ20gdGVzdCcpO1xubGV0ICR0ZXN0MiA9ICQoJ2RpdicpLmNsYXNzKCd0ZXN0MicpLnRleHQoJ0lcXCdtIHRlc3QyJyk7XG5sZXQgJHdyYXBwZXIgPSAkKCcud3JhcHBlcjpmaXJzdCcpO1xuXG4kd3JhcHBlci5wcmVwZW5kKCR0ZXN0KS5hcHBlbmQoJHRlc3QyKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIGNsYXNzIEdyZWVuYmFja0NvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgbGV0IGdyZWVuYmFjayA9IChlbCkgPT4ge1xuICAgICAgICBpZihlbCkgeyByZXR1cm4gdGhpcy5kb21NZXRob2RzKGVsKTsgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGdyZWVuYmFjaztcbiAgICB9XG5cbiAgICBkb21NZXRob2RzKGVsLCBiYXNlPWRvY3VtZW50KXtcblxuICAgICAgY2xhc3MgR3JlZW5iYWNrIHtcbiAgICAgICAgY29uc3RydWN0b3IoZWwsIGJhc2Upe1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmVsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5iYXNlID0gYmFzZTtcblxuICAgICAgICAgIGxldCBzaG91bGRHZXQgPSAvW1xcLlxcI1xcPF0vLnRlc3QoZWwpO1xuXG4gICAgICAgICAgaWYoc2hvdWxkR2V0KXtcbiAgICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmdldChlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmJhc2UuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChlbCl7XG4gICAgICAgICAgbGV0IHNlbGVjdG9yVHlwZSA9IGVsLmNoYXJBdCgwKTtcbiAgICAgICAgICBsZXQgc2VsZWN0b3JUZXh0ID0gZWwuc3BsaXQoJzonKTtcbiAgICAgICAgICBsZXQgZmlyc3RGbGFnID0gc2VsZWN0b3JUZXh0WzFdIHx8IGZhbHNlO1xuICAgICAgICAgIGxldCBfZWw7XG5cbiAgICAgICAgICBzZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHRbMF07XG5cbiAgICAgICAgICBpZihzZWxlY3RvclR5cGUgPT09ICcuJyl7XG4gICAgICAgICAgICBsZXQgcmVnZXggPSAvKFxcLikoW2EtekEtWjAtOS1dKikvZztcblxuICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0LnJlcGxhY2UocmVnZXgsIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZyArICcgJztcbiAgICAgICAgICAgIH0pLnRyaW0oKTtcblxuICAgICAgICAgICAgX2VsID0gdGhpcy5iYXNlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgIF9lbCA9IGZpcnN0RmxhZyA/IF9lbFswXSA6IF9lbDtcbiAgICAgICAgICB9IGVsc2UgaWYoc2VsZWN0b3JUeXBlID09PSAnIycpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdG9yVGV4dCcsIHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICBfZWwgPSB0aGlzLmJhc2UuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX2VsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbmQoZWwpe1xuICAgICAgICAgIHJldHVybiBuZXcgR3JlZW5iYWNrKGVsLCB0aGlzLmVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0ZXh0KHZhbCl7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lclRleHQgPSB2YWw7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBodG1sKHZhbCl7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWw7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBhdHRyKHBhcmFtcyl7XG4gICAgICAgICAgZm9yKGxldCBhIGluIHBhcmFtcyl7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShhLCBwYXJhbXNbYV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNsYXNzKG5hbWUpe1xuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlbW92ZUNsYXNzKG5hbWUpe1xuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIG9uKGV2ZW50LCBmbil7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBhcHBlbmQobm9kZSl7XG4gICAgICAgICAgbm9kZSA9IHRoaXMuX2dldERvbUVsZW1lbnQobm9kZSk7XG5cbiAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJlcGVuZChub2RlKXtcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkTm9kZXM7XG4gICAgICAgICAgbGV0IGNoaWxkO1xuXG4gICAgICAgICAgbm9kZSA9IHRoaXMuX2dldERvbUVsZW1lbnQobm9kZSk7XG5cbiAgICAgICAgICAvLyBOZWVkIHRvIHByZXBlbmQgdG8gYW4gYWN0dWFsIGVsZW1lbnQgbm9kZSBhbmQgbm90IGEgdGV4dCBub2RlXG4gICAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGNoaWxkcmVuLmxlbmd0aDsgYSsrKXtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGRyZW5bYV07XG4gICAgICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmVsLmluc2VydEJlZm9yZShub2RlLCBjaGlsZCk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBhcHBlbmRUbyhwYXJlbnQpe1xuICAgICAgICAgIHBhcmVudCA9IHRoaXMuX2dldERvbUVsZW1lbnQocGFyZW50KTtcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5mcmFnbWVudCk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBwcmVwZW5kVG8ocGFyZW50KXtcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcbiAgICAgICAgICBsZXQgY2hpbGQ7XG5cbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9nZXREb21FbGVtZW50KHBhcmVudCk7XG5cbiAgICAgICAgICAvLyBOZWVkIHRvIHByZXBlbmQgdG8gYW4gYWN0dWFsIGVsZW1lbnQgbm9kZSBhbmQgbm90IGEgdGV4dCBub2RlXG4gICAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGNoaWxkcmVuLmxlbmd0aDsgYSsrKXtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGRyZW5bYV07XG4gICAgICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZnJhZ21lbnQsIGNoaWxkKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoZWNrIGFuZCBzZWUgaWYgaXQncyBhIHZhbGlkIG5vZGUsIG90aGVyd2lzZSBhc3N1bWUgaXQncyBncmVlbmJhY2sgb2JqZWN0IGFuZCBnZXQgLmVsXG4gICAgICAgIF9nZXREb21FbGVtZW50KG5vZGUpe1xuICAgICAgICAgIHJldHVybiBub2RlLm5vZGVUeXBlID8gbm9kZSA6IG5vZGUuZWw7XG4gICAgICAgIH07XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBHcmVlbmJhY2soZWwsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG5cblxuICBsZXQgJEdCID0gbmV3IEdyZWVuYmFja0NvbnN0cnVjdG9yKCk7XG5cbiAgLy8gQU1EIHN1cHBvcnRcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuICRHQjsgfSk7XG4gIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0LlxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU3VwcG9ydCBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2AgKHdoaWNoIGNhbiBiZSBhIGZ1bmN0aW9uKVxuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gJEdCO1xuICAgICAgfVxuICAgICAgLy8gQnV0IGFsd2F5cyBzdXBwb3J0IENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjIChgZXhwb3J0c2AgY2Fubm90IGJlIGEgZnVuY3Rpb24pXG4gICAgICBleHBvcnRzLiRHQiA9ICRHQjtcbiAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbC4kR0IgPSAkR0I7XG4gIH1cbn0pKHRoaXMpO1xuIl19
