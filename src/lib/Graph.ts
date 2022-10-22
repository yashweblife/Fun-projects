import {Canvas} from './Canvas'
class Graph{
    public canvas:Canvas;    
    public data:any[] = [];
    constructor(parent:HTMLElement){
        this.canvas=new Canvas();
        parent.append(this.canvas.dom);
    }
    public app = ()=>{}
}