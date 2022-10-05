import {Canvas} from "../lib/Canvas.js"
import {Vector} from "../lib/Vector.js"
class Point{
    type = "";
    pos;
    size=5;
    color="red"
    constructor(pos=new Vector(), type="", color='red'){
        this.pos = pos;
        this.type = type;
        this.color = color;
    }
    draw = (c)=>{
        if(this.type == ""){
            c.circle(this.pos.x, this.pos.y, this.size, this.color);
        }
    }
}
class Bar{
    pos;
    size;
    type;
    color="red";
    constructor(x,y,color, size){
        this.pos=new Vector(x,0);
        this.size = new Vector(size,y);
        this.color=color;
    }
    draw = (c)=>{
        c.bottomRect(this.pos.x, this.pos.y, this.size.x-1, this.size.y, this.color);
    }
}
export class Graph{
    data = []
    canvas=new Canvas()
    scale=10;
    constructor(){}

    plotScatter = (data, name="",color="red")=>{
        const test = this.data.filter((item)=>item.name==name);
        if(test.length==1){

            test[0].values.push(new Point(new Vector(data.x/this.scale, data.y/this.scale),"",color));
        }else{
            const d = {
                name:name,
                values:[new Point(new Vector(data.x/this.scale, data.y/this.scale),"",color)],
                color:color
            }
            this.data.push(d);
        }
    }
    drawScatter = ()=>{
        const scalar = (this.canvas.width/this.scale)
        for(var i=0;i<this.canvas.width;i++){
            this.canvas.line(0,i*scalar,this.canvas.width,i*scalar,"rgba(0,0,0,0.2)");  
        }
        for(var i=0;i<this.canvas.height;i++){
            this.canvas.line(i*scalar,0,i*scalar,this.canvas.width,"rgba(0,0,0,0.2)");
        }
        // for(var i=0;i<this.data.length;i++){
        //     for(var j=0;j<this.data[i].values.length-1;j++){
        //         const val = this.data[i].values[j]
        //         const val1 = this.data[i].values[j+1]
        //         console.log(val,"--->",val1)
        //         this.canvas.line(val.pos.x,val.pos.y,val1.pos.x,val1.pos.y)
        //     }
        // }
        
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.data[i].values.length;j++){
                this.data[i].values[j].draw(this.canvas)
            }
        }

    }
    drawLine = (type=false)=>{
        const scalar = (this.canvas.width/this.scale)
        for(var i=0;i<this.canvas.width;i++){
            this.canvas.line(0,i*scalar,this.canvas.width,i*scalar,"rgba(0,0,0,0.2)");  
        }
        for(var i=0;i<this.canvas.height;i++){
            this.canvas.line(i*scalar,0,i*scalar,this.canvas.width,"rgba(0,0,0,0.2)");
        }
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.data[i].values.length-1;j++){
                const val = this.data[i].values[j]
                const val1 = this.data[i].values[j+1]
                console.log(val,"--->",val1)
                this.canvas.line(val.pos.x,val.pos.y,val1.pos.x,val1.pos.y)
            }
        }
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.data[i].values.length;j++){
                this.data[i].values[j].draw(this.canvas)
            }
        }
    }
    plotBar = (data,name="",color="red")=>{
        const size = 30
        this.data.push({
            name:name,
            value:new Bar(this.data.length*size, data, color, size)
        })
    }
    drawBar = ()=>{
        this.data.forEach((item)=>{
            item.value.draw(this.canvas)
        })
    }
}