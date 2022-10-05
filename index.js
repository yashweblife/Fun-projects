import { Graph } from "./Graph/Graph.js";

const graph = new Graph(); 
document.body.append(graph.canvas.canvas)

graph.plotScatter({x:100,y:100},"t1","red")
graph.plotScatter({x:200,y:50},"t2","green")
graph.plotScatter({x:300,y:100},"t1","red")
graph.plotScatter({x:400,y:100},"t2","green")
graph.drawLine();
