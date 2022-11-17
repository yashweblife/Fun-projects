import { Vector, Canvas } from "../lib";
// var c = new Canvas();
// c.setSize(500, 100);
// c.line(new Vector(0, c.height / 2), new Vector(c.width, c.height / 2));

// var sins: Vector[] = [];
// var amp = c.height / 4;
// var freq = 3;
// var waveLength = c.width / freq;
// function makeSin(a: number, f: number, theta: number): number {
//   return -a * Math.sin(f * 2 * theta);
// }

// for (var i = -Math.PI; i < Math.PI; i += 1 / c.width) {
//   var sum = 0;
//   for (var j = 0; j < 10; j += 1) {
//     if (j % 2 !== 0) {
//       sum += makeSin(amp / j, freq * j, i);
//     }
//   }
//   sins.push(new Vector(i * waveLength, c.height / 2 + sum));
// }
// document.body.append(c.dom);

// sins.forEach((val: Vector) => {
//   c.circle({
//     pos: val,
//     radius: 1,
//     fill: true,
//     fillColor: "red",
//   });
// });


export class FourierDemo{
    private canvas:Canvas = new Canvas()
    private data:Vector[] = []
    private amp:number = this.canvas.height/4
    private freq:number = 3
    private waveLength:number = this.canvas.width/this.freq
    constructor(parent:HTMLElement = document.body){
        parent.append(this.canvas.dom)
        this.canvas.setSize(400,100)
        this.recalib()
    }
    private recalib = ()=>{
        this.amp = this.canvas.height/4
        this.waveLength = this.canvas.width/this.freq
    }
    public setFrequence = (a:number)=>{
        this.freq = a;
        this.recalib()
    }
    public plot = (func:()=>Vector[])=>{
        this.data = func()
    }
    public plotSquare = ()=>{
        for (var i = -Math.PI; i < Math.PI; i += 1 / this.canvas.width) {
            var sum = 0;
            for (var j = 0; j < 20; j += 1) {
              if (j % 2 !== 0) {
                sum += FourierDemo.makeSin(this.amp / j, this.freq * j, i);
              }
            }
            this.data.push(new Vector(i * this.waveLength, this.canvas.height / 2 + sum));
          }
    }
    public static makeSin = (a:number, f:number, theta:number=0)=>{
        return(-a*Math.sin(f*theta))
    }
    public static makeCos = (a:number, f:number, theta:number=0)=>{
        return(a*Math.cos(f*theta))
    }
    private draw = ()=>{
        this.canvas.clear()
        this.canvas.line(new Vector(0, this.canvas.height/2), new Vector(this.canvas.width, this.canvas.height/2))
        this.data.forEach((val: Vector) => {
            this.canvas.circle({
              pos: val,
              radius: 1,
              fill: true,
              fillColor: "red",
            });
          });
    }
    private animate = ()=>{
        this.draw()
        requestAnimationFrame(this.animate)
    }
    public app = ()=>{
        this.animate()
    }
}