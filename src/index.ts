import {
  BrownianMotionDemo,
  CollisionDetectionDemo,
  CompressorDemo,
  DataStructureDemo,
  GeneticAlgoDemo,
  GravityDemo,
  ImageClassifierDemo,
  LinearRegressionDemo,
  PowerRNGDemo,
  RayCastingDemo,
  RopeDemo,
  SortingDemo
} from "./projects";
import "./styles/index.scss";
export {
  RopeDemo,
  CollisionDetectionDemo,
  BrownianMotionDemo,
  CompressorDemo,
  GravityDemo,
  SortingDemo,
  DataStructureDemo,
  ImageClassifierDemo,
  LinearRegressionDemo,
  RayCastingDemo,
  GeneticAlgoDemo,
  PowerRNGDemo,
};

  import { Vector } from "./lib";
  import { Body, World3D } from "./lib/3D";
let pos = 100;
const w = new World3D();
const box: Vector[][] = [
  [
    new Vector(pos, pos, pos),
    new Vector(pos, -pos, pos),
    new Vector(-pos, -pos, pos),
    new Vector(-pos, pos, pos),
  ],
  [
    new Vector(-pos, pos, pos),
    new Vector(-pos, -pos, pos),
    new Vector(-pos, -pos, -pos),
    new Vector(-pos, pos, -pos),
  ],
  [
    new Vector(-pos, pos, -pos),
    new Vector(-pos, -pos, -pos),
    new Vector(pos, -pos, -pos),
    new Vector(pos, pos, -pos),
  ],
  [
    new Vector(pos, pos, -pos),
    new Vector(pos, -pos, -pos),
    new Vector(pos, -pos, pos),
    new Vector(pos, pos, pos),
  ],
];
const bod = new Body(box, new Vector(350, 350));
w.addBody(bod);
// bod.rotateX(10 * (Math.PI / 180));
// bod.rotateY(10 * (Math.PI / 180));
const angle = 0.01;
//bod.addRotation(new Vector(0,0,(angle*Math.PI)/180));
w.animate();
