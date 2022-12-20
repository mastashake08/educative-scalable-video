import Hls from 'hls.js';
class VideoPlayer extends HTMLElement {
  constructor() {
    super();
    this.video = document.createElement('video');
    if (Hls.isSupported()) {

      this.hls = new Hls();
      this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });
      this.hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(
          'manifest loaded, found ' + data.levels.length + ' quality level'
        );
        console.table(data)
      });
      console.log(this.getAttribute('src'))
      this.hls.loadSource('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8')
      // bind them together
      this.hls.attachMedia(this.video);
      this.video.play()
    }

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(this.video);
    this.addEventListener('click', this.video.play())
  }
}
export default VideoPlayer
