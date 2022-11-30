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
import { PowerRNGDemo } from "./projects";
import {
  Graph,
  Vector,
  Matrix,
  bench,
  benchAverage,
  testIf,
  Canvas,
  Grid,
} from "./lib";
import { FourierDemo } from "./projects";

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

var f = new FourierDemo();
f.setScale(10);
f.plotVector(() => {
  const knots: number = 3;
  const output: Vector[] = [];
  for (var i = 0; i <= Math.PI; i += 0.01) {
    output.push(
      new Vector(
        FourierDemo.makeSin(FourierDemo.makeSin(10, knots, i), 1, i),
        FourierDemo.makeCos(FourierDemo.makeSin(10, knots, i), 1, i)
      )
    );
  }
  return output;
});

f.app();
