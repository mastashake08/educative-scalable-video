customElements.define('video-footer',
  class extends HTMLElement {
    constructor() {
      super();

      const divEl = document.createElement('div');

      const shadowRoot = this.attachShadow({mode: 'open'});
       this.shadowRoot.innerHTML = `
      <slot name="footer-name">
      <div>Menu:
        <slot name="footer-menu-items"></slot>
      </div>

    `;
      shadowRoot.appendChild(divEl);
    }
  }
);

customElements.define('video-header',
  class extends HTMLElement {
    constructor() {
      super();

      const divEl = document.createElement('div');
      divEl.classList.add('header');

      const shadowRoot = this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <slot name="header-name">
      <div>Menu:
        <slot name="menu-items"></slot>
      </div>

    `;
      shadowRoot.appendChild(divEl);
    }
  }
);

document.onload = () => {
  console.log(document.getElementsByTagName('video-header'))
}

document.querySelector('html').addEventListener('click', e => {
  console.log(e.composed);
  console.log(e.composedPath());
});
