import {Vector} from './Vector'

class Variable{
    public data:Variable[]
    constructor(val:Variable[]){
        this.data = val
    }
}
export class Matrix{
    public data:Variable[]
    public shape:Vector
    constructor(){}
    public init = (a:[])=>{
        this.data = a;
    }
    public $ = (val:number[])=>{
        for(var i=0;i<val.length;i++){

        }

    }
    public add = ()=>{}
    public scalar = ()=>{}
}