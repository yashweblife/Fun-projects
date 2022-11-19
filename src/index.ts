import "./styles/index.scss";
import { RopeDemo } from "./projects";
import { CollisionDetectionDemo } from "./projects";
import { BrownianMotionDemo } from "./projects";
import { CompressorDemo } from "./projects";
import { GravityDemo } from "./projects";
import { SortingDemo } from "./projects";
import { DataStructureDemo } from "./projects";
import { ImageClassifierDemo } from "./projects";
import { LinearRegressionDemo } from "./projects";
import { RayCastingDemo } from "./projects";
import { GeneticAlgoDemo } from "./projects";
import {Graph, Vector, Matrix, bench, benchAverage, testIf, Canvas } from "./lib";
import { FourierDemo } from "./projects";

var test = new Graph()
test.plot(()=>{
  var output = []
  for(var i=-Math.PI;i<Math.PI;i+=0.01){
    output.push(10*Math.sin(100*i))
  }
  return(output)
})
test.animate()

var scale: HTMLInputElement = document.querySelector("#scale");
scale.addEventListener("input", () => {
  test.setScale(Number(scale.value));
});
