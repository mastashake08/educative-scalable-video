class VideoFooter extends HTMLElement {
  constructor() {
    super();

    const divEl = document.createElement('div');

    const shadowRoot = this.attachShadow({mode: 'open'});
     this.shadowRoot.innerHTML = `
    <slot name="footer-name">
    <div>Menu:
      <slot name="footer-menu-items"></slot>
    </div>`;
    shadowRoot.appendChild(divEl);
  }
}
export default VideoFooter;
