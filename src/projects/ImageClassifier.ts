import { Canvas, Vector } from "../lib";

class Classifier {}
class Group {}
class Reducer {}

export class ImageClassifierDemo {
  private videoElement: HTMLVideoElement;
  private canvas: Canvas;
  private camera: MediaStream;
  constructor(parent: HTMLElement = document.body) {
    this.videoElement = document.createElement("video");
    this.canvas = new Canvas();
    parent.append(this.canvas.dom);
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
  public reduceRes = (data: Vector[][], res: number = 4) => {
    var output = [] as Vector[][];
    for (var i = 0; i < data.length; i += res) {
      let line = [] as Vector[];
      for (var j = 0; j < data[i].length; j += res) {
        line.push(data[i][j]);
      }
      output.push(line);
    }
    return output;
  };
  private getPixelArray = () => {
    const image: ImageData = this.canvas.getImageData();
    const data:Uint8ClampedArray = image.data
    var pixels: Vector[] = [];
    for (var i = 0; i < data.length; i += 4) {
      let pixel = new Vector(data[i + 0], data[i + 1], data[i + 2]);
      pixels.push(pixel);
    }
    let output:Vector[][] = []
    for (var i = 0; i < image.height; i++) {
      let line = [] as Vector[];
      for (var j = 0; j < image.width; j++) {
        line.push(pixels[i * image.width + j]);
      }
      output.push(line);
    }

  };

  private animate = () => {
    this.canvas.drawImage(this.videoElement);
    requestAnimationFrame(this.animate);
  };
  public app = () => {
    this.animate();
  };
}
