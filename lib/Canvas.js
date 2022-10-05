export class Canvas{
    canvas;
    ctx;
    width;
    height;
    constructor(dom=document.createElement("canvas"),w=300,h=300){
        this.canvas = dom
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = w;
        this.canvas.height = h;
        this.width = w;
        this.height = h;
    }
    clear=()=>{
        this.ctx.clearRect(0,0,this.width,this.height)
    }
    circle = (x,y,r,c)=>{
        this.ctx.beginPath();
        this.ctx.fillStyle = c;
        this.ctx.arc(x,y,r,0,Math.PI*2, false);
        this.ctx.fill();
        this.ctx.closePath();
    }
    rect = (x,y,w,h,c)=>{
        this.ctx.beginPath();
        this.ctx.fillStyle = c;
        this.ctx.rect(x,y,w,h);
        this.ctx.fill();
        this.ctx.closePath();
    }
    bottomRect = (x,y,w,h,c)=>{
        this.ctx.beginPath();
        this.ctx.fillStyle = c;
        this.ctx.rect(x,(this.height-h),w,h);
        this.ctx.fill();
        this.ctx.closePath();
    }
    line = (x,y,x1,y1,c)=>{
        this.ctx.beginPath();
        this.ctx.strokeStyle = c;
        this.ctx.moveTo(x,y)
        this.ctx.lineTo(x1,y1);
        this.ctx.stroke();
        this.ctx.closePath();
    }


}