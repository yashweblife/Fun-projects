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
import { Matrix } from "./lib";

var x = new Matrix();
// x.init()
var data = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];
console.log(x.$([0, 0]));
