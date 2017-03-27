(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _greenback = require('greenback');

var _greenback2 = _interopRequireDefault(_greenback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _greenback2.default)('div').text('what the...').append(document.body);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvdG1wL2luZGV4LmpzIiwiZGlzdC9ncmVlbmJhY2suanMiLCJkaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2dyZWVuYmFjayA9IHJlcXVpcmUoJ2dyZWVuYmFjaycpO1xuXG52YXIgX2dyZWVuYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmVlbmJhY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX2dyZWVuYmFjazIuZGVmYXVsdCkoJ2RpdicpLnRleHQoJ3doYXQgdGhlLi4uJykuYXBwZW5kKGRvY3VtZW50LmJvZHkpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdyZWVuYmFja0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHcmVlbmJhY2tDb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyZWVuYmFja0NvbnN0cnVjdG9yKTtcblxuICAgIHZhciBncmVlbmJhY2sgPSBmdW5jdGlvbiBncmVlbmJhY2soZWwpIHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZG9tTWV0aG9kcyhlbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBncmVlbmJhY2s7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JlZW5iYWNrQ29uc3RydWN0b3IsIFt7XG4gICAga2V5OiAnZG9tTWV0aG9kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvbU1ldGhvZHMoZWwpIHtcbiAgICAgIHZhciBiYXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcblxuICAgICAgdmFyIEdyZWVuYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gR3JlZW5iYWNrKGVsLCBiYXNlKSB7XG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyZWVuYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG5cbiAgICAgICAgICB2YXIgc2hvdWxkR2V0UmVnZXggPSAvW1xcLlxcI1xcPF0vO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBzaG91bGRHZXRSZWdleC5leGVjKGVsKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmdldChlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSB0aGlzLmJhc2UuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhHcmVlbmJhY2ssIFt7XG4gICAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGVsKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUeXBlID0gZWwuY2hhckF0KDApO1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dCA9IGVsLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICB2YXIgZmlyc3RGbGFnID0gc2VsZWN0b3JUZXh0WzFdIHx8IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9lbCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0WzBdO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JUeXBlID09PSAnLicpIHtcbiAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gLyhcXC4pKFthLXpBLVowLTktXSopL2c7XG5cbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0LnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nICsgJyAnO1xuICAgICAgICAgICAgICB9KS50cmltKCk7XG5cbiAgICAgICAgICAgICAgX2VsID0gdGhpcy5iYXNlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgX2VsID0gZmlyc3RGbGFnID8gX2VsWzBdIDogX2VsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RvclR5cGUgPT09ICcjJykge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdG9yVGV4dCcsIHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIF9lbCA9IHRoaXMuYmFzZS5nZXRFbGVtZW50QnlJZChzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2VsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2ZpbmQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyZWVuYmFjayhlbCwgdGhpcy5lbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndGV4dCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRleHQodmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVyVGV4dCA9IHZhbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnaHRtbCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGh0bWwodmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHZhbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnYXR0cicsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dHIocGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShhLCBwYXJhbXNbYV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjbGFzcycsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGFzcyhuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3JlbW92ZUNsYXNzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbikge1xuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2FwcGVuZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncHJlcGVuZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmQocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gR3JlZW5iYWNrO1xuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gbmV3IEdyZWVuYmFjayhlbCwgYmFzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyZWVuYmFja0NvbnN0cnVjdG9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHcmVlbmJhY2tDb25zdHJ1Y3RvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZ3JlZW5iYWNrID0gcmVxdWlyZSgnLi9ncmVlbmJhY2suanMnKTtcblxudmFyIF9ncmVlbmJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JlZW5iYWNrKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdyZWVuYmFjayA9IG5ldyBfZ3JlZW5iYWNrMi5kZWZhdWx0KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JlZW5iYWNrOyJdfQ==
