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

import {Canvas} from './lib'
import {Wall} from './lib'

const c = new Canvas()
const w = new Wall()
document.body.append(c.dom)
w.angle = 10;
w.draw(c)