import {Vector} from './Vector'
import {PhysicsObject} from './PhysicsObject'
import { Canvas } from './Canvas'
export class Wall extends PhysicsObject{
    private angle:number;
    
    public draw = (c:Canvas)=>{
        // c.rect({
        //     pos:this.pos,
        //     size:this.size,
        //     angle:this.angle
        // })
    }
}