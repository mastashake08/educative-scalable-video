class VideoHeader extends HTMLElement {
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
export default VideoHeader
