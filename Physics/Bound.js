import {Vector} from "../lib/Vector.js"

export class Bound{
    min = new Vector();
    max = new Vector();
    constructor(vertices){
        this.min.x=-Infinity
        this.min.y=-Infinity
        this.max.x=Infinity
        this.min.x=-Infinity
        for(var i=0;i<vertices.length; i++){
            var p = vertices[i]
            if(p.pos.x>this.max.x) this.max.x = p.pos.x
            if(p.pos.x<this.min.x) this.min.x = p.pos.x
            if(p.pos.y>this.max.y) this.max.y = p.pos.y
            if(p.pos.y<this.min.y) this.min.y = p.pos.y
        }
    }

}