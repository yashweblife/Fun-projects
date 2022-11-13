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
import { Matrix, bench } from "./lib";

// var x = new Matrix();
// var data = [
//     [0, 0, 1],
//     [0, 1, 0],
//     [1, 0, 0],
// ];
// x.init(data)
// var y = new Matrix();
// var data = [
//     [0, 0, 1],
//     [0, 1, 0],
//     [1, 0, 0],
// ];
// y.init(data)
// for(var i=0;i<10;i++){
//     x.add(y)
//     x.addTest(y)
// }

function test() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    for(var j=0;j<1000;j++){
        sum += 1;
    }
  }
  return sum;
}
bench(test)
