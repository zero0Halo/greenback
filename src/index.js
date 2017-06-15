(function (global) {
  class GreenbackConstructor {
    constructor(){
      let greenback = (el) => {
        if(el) { return this.domMethods(el); }
      };

      return greenback;
    }

    domMethods(el, base=document){

      class Greenback {
        constructor(el, base){
          this.fragment = false;
          this.el = false;
          this.base = base;

          let shouldGet = /[\.\#\<]/.test(el);

          if(shouldGet){
            this.el = this.get(el);
          } else {
            this.el = this.base.createElement(el);
            this.fragment = document.createDocumentFragment();
            this.fragment.appendChild(this.el);
          }

          return this;
        }

        get(el){
          let selectorType = el.charAt(0);
          let selectorText = el.split(':');
          let firstFlag = selectorText[1] || false;
          let _el;

          selectorText = selectorText[0];

          if(selectorType === '.'){
            let regex = /(\.)([a-zA-Z0-9-]*)/g;

            selectorText = selectorText.replace(regex, (match, offset, string) => {
              return string + ' ';
            }).trim();

            _el = this.base.getElementsByClassName(selectorText);
            _el = firstFlag ? _el[0] : _el;
          } else if(selectorType === '#') {
            selectorText = selectorText.replace('#', '');
            console.log('selectorText', selectorText);
            _el = this.base.getElementById(selectorText);
          }

          return _el;
        };

        find(el){
          return new Greenback(el, this.el);
        };

        text(val){
          this.el.innerText = val;

          return this;
        };

        html(val){
          this.el.innerHTML = val;

          return this;
        };

        attr(params){
          for(let a in params){
            this.el.setAttribute(a, params[a]);
          }

          return this;
        };

        class(name){
          this.el.classList.add(name);

          return this;
        };

        removeClass(name){
          this.el.classList.remove(name);

          return this;
        };

        on(event, fn){
          this.el.addEventListener(event, fn);

          return this;
        };

        append(node){
          node = this._getDomElement(node);

          this.el.appendChild(node);

          return this;
        };

        prepend(node){
          let children = this.el.childNodes;
          let child;

          node = this._getDomElement(node);

          // Need to prepend to an actual element node and not a text node
          for(let a = 0; a < children.length; a++){
            child = children[a];
            if(child.nodeType === 1) {
              break;
            }
          }

          this.el.insertBefore(node, child);

          return this;
        };

        appendTo(parent){
          parent = this._getDomElement(parent);
          parent.appendChild(this.fragment);

          return this;
        };

        prependTo(parent){
          let children = parent.childNodes;
          let child;

          parent = this._getDomElement(parent);

          // Need to prepend to an actual element node and not a text node
          for(let a = 0; a < children.length; a++){
            child = children[a];
            if(child.nodeType === 1) {
              break;
            }
          }

          parent.insertBefore(this.fragment, child);

          return this;
        };

        // Check and see if it's a valid node, otherwise assume it's greenback object and get .el
        _getDomElement(node){
          return node.nodeType ? node : node.el;
        };

      }

      return new Greenback(el, base);
    }
  }



  let $GB = new GreenbackConstructor();

  // AMD support
  if (typeof define === 'function' && define.amd) {
      define(function () { return $GB; });
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
