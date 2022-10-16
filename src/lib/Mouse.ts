import { Vector } from "./Vector";

export class Mouse{
    pos:Vector;
    click:Boolean = false;
    offset:Vector;
    constructor(){}
    public handleMove = (e:MouseEvent)=>{
        this.pos.x = e.x;
        this.pos.y = e.y;

    }
    public handleClick = (e:MouseEvent)=>{
        this.click = true
    }
    public handleDown = (e:MouseEvent)=>{
        this.click = true;
    }
    public handleUp = (e:MouseEvent)=>{
        this.click = false;
    }

}