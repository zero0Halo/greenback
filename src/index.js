import iDom from './i-dom.js';

class addToDom {
  constructor(element, val, parent) {
    let fragment = document.createDocumentFragment();
    let el = document.createElement(element);

    fragment.appendChild(el);
    el.innerHTML = val;
    parent.appendChild(fragment);
  }
};

let idom = new iDom();

module.exports = idom;