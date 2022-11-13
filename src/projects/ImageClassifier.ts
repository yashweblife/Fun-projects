import { Canvas, Vector } from "../lib";

class Classifier {}
class Group {}
class Reducer {}

export class ImageClassifierDemo {
  private videoElement: HTMLVideoElement;
  private canvas: Canvas;
  private camera: MediaStream;
  constructor(parent:HTMLElement = document.body) {
    this.videoElement = document.createElement("video");
    this.canvas = new Canvas();
    parent.append(this.canvas.dom)
    this.canvas.setSize(300, 300);
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 300,
          height: 300,
        },
      })
      .then((stream: MediaStream) => {
        this.camera = stream;
        this.videoElement.srcObject = stream;
        this.videoElement.play();
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }
  private getPixelArray = ()=>{
    const image:Uint8ClampedArray = this.canvas.getImageData()
    var pixels:Vector[] = []
  }
  private animate = () => {
    this.canvas.drawImage(this.videoElement )
    requestAnimationFrame(this.animate)
  }
  public app = () => {
    this.animate()
  };
}
