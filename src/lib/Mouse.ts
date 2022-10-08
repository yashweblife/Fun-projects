import { Vector } from "./Vector";

export class Mouse{
    pos:Vector;
    click:Boolean = false;
    offset:Vector;
    constructor(){}
    public handleMove = (e:Event)=>{}
    public handleClick = (e:Event)=>{}
    public handleDown = (e:Event)=>{}
    public handleUp = (e:Event)=>{}

}