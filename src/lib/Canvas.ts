import {Vector} from "./Vector"
interface CircleInterface{pos:Vector; radius:number; fillColor?:string;strokeColor?:string; stroke?:Boolean; fill?:Boolean}
interface RectInterface{pos:Vector; size:Vector; fillColor?:string;strokeColor?:string; stroke?:Boolean; fill?:Boolean, angle?:number}
/**
 * @class
 * # Canvas
 * ### This is a library to simplify the use of HTMl canvas element
 */
export class Canvas{
    public dom:HTMLCanvasElement;
    public ctx:CanvasRenderingContext2D;
    public width:number;
    public height:number;
    constructor(canvas:HTMLCanvasElement = document.createElement("canvas")){
        this.dom = canvas;
        this.ctx = this.dom.getContext('2d')!;
    }

    public circle = ({pos=new Vector(0,0), radius=5, fillColor="red",strokeColor="black", stroke=false, fill=true}:CircleInterface)=>{
        this.ctx.beginPath()
        this.ctx.fillStyle = fillColor;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2, false);
        this.ctx.closePath()
        if(fill){this.ctx.fill()}
        if(stroke){this.ctx.stroke()}
    }
    public rect = ({pos=new Vector(0,0), size=new Vector(100,100), fillColor="red", strokeColor="black", stroke=false, fill=true, angle=0}:RectInterface)=>{
        this.ctx.beginPath()
        this.ctx.fillStyle = fillColor;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.rect(pos.x, pos.y, size.x, size.y);
        this.ctx.closePath()
        if(fill===true) this.ctx.fill();
        if(stroke===true) this.ctx.stroke();
    }
    public reverseRect = ({pos, size, fillColor, strokeColor, stroke, fill, angle})=>{}
    public drawPath = ()=>{}
    public clear = ()=>{}
    
}