class CustomElement extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  static get observedAttributes() { 
    return ['customAttributes'];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'closed' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
          .element-style-example-with-selector-id {
          }
      `;
  }

  get customAttributes() {
    return this._customAttributes;
  }
  set customAttributes(value) {
    this._customAttributes = value;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (property) {
      case 'customAttributes':
        this.customAttributes = newValue;
        break;
    }

    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <slot></slot>
    `;
  }
}

customElements.define('custom-element', CustomElement);
