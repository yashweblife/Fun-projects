export class Camera {
  public stream: MediaStream | null;
  public video: HTMLVideoElement;
  constructor(video: HTMLVideoElement = document.createElement("video")) {
    this.video = video;
  }
  public init = async (constraints?: MediaStreamConstraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    this.stream = stream;
    this.video.srcObject = this.stream;
    this.video.play();
  }
  public play = () => {
    this.video.play();
  }
  public pause = () => {
    this.video.pause();
  }
  public close = () => {
    this.stream?.getTracks().forEach((track: MediaStreamTrack) => {
      this.stream?.removeTrack(track);
    });
  }
  public capture = () => {}
  public reverse = () => {}
}
