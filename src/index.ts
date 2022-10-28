import "./styles/index.scss";
// import { RopeDemo } from "./projects/Rope";
// import { CollisionDetectionDemo } from "./projects/CollisionDetection";
// import { BrownianMotionDemo } from "./projects/BrownianMotion";
// import { CompressorDemo } from "./projects/Compression";
// import { GravityDemo } from "./projects/Gravity";
// import { SortingDemo } from "./projects/Sorting";
// import { DataStructureDemo } from "./projects/DataStructures";
// import { ImageClassifierDemo } from "./projects/ImageClassifier";
// import { LinearRegressionDemo } from "./projects/LinearRegression";
// import { RayCastingDemo } from "./projects/RayCasting";
// import { GeneticAlgoDemo } from "./projects/GeneticAlgo";

import {Canvas, Vector} from './lib'
import {Wall} from './lib'
import { Geometry } from "./lib";
const c:Canvas = new Canvas()
document.body.append(c.dom)
const vecArr = []

vecArr.push(new Vector(10,10))
vecArr.push(new Vector(100,10))
vecArr.push(new Vector(100,100))
vecArr.push(new Vector(10,100))
const test = new Geometry(vecArr)
test.draw(c)
