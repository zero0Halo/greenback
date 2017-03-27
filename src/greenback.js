'use strict';

export default class GreenbackConstructor {
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

        let shouldGetRegex = /[\.\#\<]/;
        let result = shouldGetRegex.exec(el);

        if(result){
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

      append(parent){
        parent.appendChild(this.fragment);

        return this;
      };

      prepend(parent){
        parent.prependChild(this.fragment);

        return this;
      };

    }

    return new Greenback(el, base);
  }

}

