import {Body} from "./Physics/Body.js"
import {Vertex} from "./Physics/Vertex.js"
import {Canvas} from "./lib/Canvas.js"

var canvas = new Canvas()
document.body.append(canvas.canvas)
var v_arr = [
    new Vertex(0,0),
    new Vertex(100,0),
    new Vertex(100,100),
    new Vertex(0,100),
]


var b = new Body(v_arr);
b.pos.x = 20;
b.pos.y = 20;
b.draw(canvas.ctx)
console.log(b.bounds)