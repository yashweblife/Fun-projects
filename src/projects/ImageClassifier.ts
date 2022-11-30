import { Canvas, Mouse, Vector } from "../lib";

class Classifier {}
class Group {}
class Reducer {}

export class ImageClassifierV2Demo {
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
    const data: Uint8ClampedArray = image.data;
    var pixels: Vector[] = [];
    for (var i = 0; i < data.length; i += 4) {
      let pixel = new Vector(data[i + 0], data[i + 1], data[i + 2]);
      pixels.push(pixel);
    }
    let output: Vector[][] = [];
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

export class ImageClassifierDemo {
  private canvas: Canvas;
  private mouse: Mouse;
  private canvasBound: DOMRect = null;
  private trainButton: HTMLButtonElement;
  private resolution: number = 10;
  private drawButton: HTMLButtonElement;
  private data:Vector[][];
  constructor(parent: HTMLElement = document.body) {
    this.canvas = new Canvas();
    this.mouse = new Mouse();
    this.trainButton = document.createElement("button");
    this.trainButton.innerText = "Train";
    this.trainButton.addEventListener("click", () => {
      this.data = this.convertToPixelArray(this.getData());
    });
    this.drawButton = document.createElement("button");
    this.drawButton.innerText = "Draw";
    this.drawButton.addEventListener("click", () => {
      this.draw(this.data)
    });
    parent.append(this.canvas.dom, this.trainButton, this.drawButton);
  }
  public allowDraw = () => {
    this.canvasBound = this.canvas.dom.getBoundingClientRect();
    this.mouse.setOffset(this.canvasBound);
    window.addEventListener("mousedown", this.mouse.handleDown);
    window.addEventListener("mouseup", this.mouse.handleUp);
    window.addEventListener("mousemove", (e: MouseEvent) => {
      this.mouse.move(e);
      if (this.mouse.click === true) {
        this.canvas.circle({
          pos: this.mouse.pos,
          radius: 2,
          stroke: true,
          strokeColor: "red",
        });
      }
    });
  };
  private getData = (): ImageData => {
    return this.canvas.getImageData();
  };
  private convertToPixelArray = (val: ImageData) => {
    const output: Vector[][] = [];
    const pixels: Vector[] = [];
    for (var i = 0; i < val.data.length; i += 4) {
      var x = val.data[i + 0];
      var y = val.data[i + 1];
      var z = val.data[i + 2];
      var pixel = new Vector(x, y, z);
      pixels.push(pixel);
    }
    for (var i = 0; i < val.height; i += this.resolution) {
      let line = [] as Vector[];
      for (var j = 0; j < val.width; j += this.resolution) {
        line.push(pixels[i * val.width + j]);
      }
      output.push(line);
    }
    return output;
  };
  private draw = (data: Vector[][]) => {
    let sx = this.canvas.width / data.length;
    let sy = this.canvas.height / data[0].length;
    let rect = false;
    for (var i = 0; i < data.length; i += 1) {
      for (var j = 0; j < data[i].length; j += 1) {
        let point = data[i][j] as Vector;
        this.canvas.rect({
          pos: new Vector(j * this.resolution, i * this.resolution),
          size: new Vector(this.resolution, this.resolution),
          fill: true,
          fillColor: `rgb(${point.x},${point.y},${point.z})`,
        });
      }
    }
  };
}
