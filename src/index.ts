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

app.plotButterFly();
app.app();

var scale: HTMLInputElement = document.querySelector("#scale");
scale.addEventListener("input", () => {
  app.setScale(Number(scale.value));
});
