import { CollisionDetectionDemo } from "./projects/CollisionDetection"
import {GravityDemo} from "./projects/Gravity"
import {CompressorDemo} from "./projects/Compression"
import {BinaryTree} from "./projects/DataStructures"

const t= new BinaryTree(5)
for(var i=0;i<10;i++){
    t.addData(Math.floor(Math.random()*100));
}
t.traverse()