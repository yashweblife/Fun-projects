import "./styles/index.scss";
import { RopeDemo } from "./projects/Rope";
import { CollisionDetectionDemo } from "./projects/CollisionDetection";
import { BrownianMotionDemo } from "./projects/BrownianMotion";
import { CompressorDemo } from "./projects/Compression";
import { GravityDemo } from "./projects/Gravity";
import { SortingDemo } from "./projects/Sorting";
import { DataStructureDemo } from "./projects/DataStructures";
import { ImageClassifierDemo } from "./projects/ImageClassifier";
import { LinearRegressionDemo } from "./projects/LinearRegression";
import { RayCastingDemo } from "./projects/RayCasting";
import { GeneticAlgoDemo } from "./projects/GeneticAlgo";
import { Graph, Vector } from "./lib";

const graph = new Graph(document.body);
for (var i = -Math.PI; i < Math.PI; i += 0.01) {
  graph.addData(new Vector(i, Math.sin(i)));
}
graph.canvas.dom.addEventListener("wheel", (e: WheelEvent) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    graph.setScale(graph.scale + 0.1);
  } else {
    if (graph.scale > 1) {
      graph.setScale(graph.scale - 0.1);
    }
  }
});
graph.animate();
