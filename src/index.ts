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
import { Vector, Matrix, bench, benchAverage, testIf, Canvas } from "./lib";
import { FourierDemo } from "./projects";

var app = new FourierDemo();
//app.plotSquare()
// app.plot(()=>{
//     const data:number[] = []
//     for(var i=-2*Math.PI;i<=Math.PI;i+=0.01){
//         data.push(20*Math.sin(4*i))
//     }
//     return(data)
// })

app.plotVector(() => {
  const output: Vector[] = [];
  for (var i = -2*Math.PI; i <= 2*Math.PI; i += 0.01) {
    output.push(new Vector(i*10, FourierDemo.makeSin(10,10,i) +  FourierDemo.makeSin(-10,10,i)))
  }
  return(output)
});
app.app();





var scale:HTMLInputElement = document.querySelector("#scale")
scale.addEventListener('input', ()=>{
    app.setScale(Number(scale.value))
})