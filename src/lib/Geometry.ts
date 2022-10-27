import {Vector} from './Vector'
import { PhysicsObject } from './PhysicsObject'
class Vertex {
    private pos:Vector;
}
class Edge {
    private start:Vertex;
    private end:Vertex
}
class Shape {
    private edges:Edge[]
}
export class Geometry extends PhysicsObject {
    shape:Shape[]
}
