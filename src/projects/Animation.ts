import {Canvas} from '../lib'

export class Animator{
    private frames:Canvas[] = []
    constructor(){
        this.frames.push(new Canvas())
    }
    public addFrame = ()=>{}
    public removeFrame = ()=>{}
    public clearFrame = ()=>{}
}