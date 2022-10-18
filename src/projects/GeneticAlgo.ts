import {Ball} from '../lib/Ball'
import { Canvas } from '../lib/Canvas';
import { Vector } from '../lib/Vector';

class Agent extends Ball{
    public path:Vector[]
    public fit:number=0;
    public init = (path:Vector[]|null = null)=>{
        this.path = []
        if(path == null){
            for(var i=0;i<10;i++){
                this.path.push(Vector.randSIgned(-105,105))
            }
        }else{
            this.path = path
        }
    }
    public makeChild = (partner:Agent, c:Canvas):Agent=>{
        const p1:Vector[] = []
        for(var i=0;i<this.path.length;i++){
            if(i<this.path.length/2){
                p1.push(this.path[i])
            }else{
                p1.push(partner.path[i])
            }
        }
        const child = new Agent(new Vector(0, c.height/2 ))
        child.init(p1)
        return(child)
    }
    public updateAgent = (time:number)=>{
        if(time>=this.path.length)return;
        this.addForce(this.path[time]);
    }
    public calculateFit = (target:Vector)=>{
        this.fit = this.pos.dist(target)
    }
}

export class GeneticAlgoDemo{
    public agents:Agent[] = [];
    public target:Ball;
    public canvas:Canvas;
    public clock:number = 0;
    public maxAge:number = 100;
    public populationSize:number = 100;
    constructor(parent:HTMLElement){
        this.canvas = new Canvas()
        this.canvas.setSize(window.innerWidth, window.innerHeight)
        parent.append(this.canvas.dom)
        this.target = new Ball(new Vector(this.canvas.width, this.canvas.height/2))
        for(var i=0;i<this.populationSize;i++){
            const a = new Agent(new Vector(10, this.canvas.height/2));
            a.init();
            this.agents.push(a)
        }
    }

    private findAverage = ():number=>{
        var sum:number = 0;
        this.agents.forEach((agent:Agent)=>{
            agent.calculateFit(this.target.pos)
            sum+=agent.fit
        })
        sum/=this.agents.length
        return(sum);
    }
    private highestFit = ()=>{
        var sum = 0
        this.agents.forEach((agent:Agent)=>{
            if(agent.fit>sum){
                sum = agent.fit
            }
        })
        console.log(sum)
    }
    private selection = ()=>{
        const sum = this.findAverage()
        this.highestFit()
        const output:Agent[] = []
        this.agents.forEach((agent:Agent)=>{
            if(agent.fit >= sum){
                output.push(agent)
            }
        })
        console.log(output)
        return(output)
    }
    private breeding = ()=>{
        const parents = this.selection();
        const children:Agent[] = []
        for(var i=0;i<this.populationSize;i++){
            const father:Agent = this.agents[Math.floor(Math.random()*this.agents.length)]
            const mother:Agent = this.agents[Math.floor(Math.random()*this.agents.length)]
            const child = father.makeChild(mother, this.canvas)
            children.push(child)
        }
        this.agents = children
    }
    private animate = ()=>{
        const step = 10
        this.clock+=0.5;
        if(this.clock%step==0){
            this.agents.forEach((agent:Agent)=>{
                agent.updateAgent(this.clock/step)
            })
        }else{
            this.canvas.clear();
            this.target.draw(this.canvas)
            this.agents.forEach((agent:Agent)=>{
                agent.update();
                agent.bound(this.canvas,{x:false,y:false})
                agent.draw(this.canvas)
            })
        }
        if(this.clock == 100){
            this.clock=0;
            this.breeding()
        }
        requestAnimationFrame(this.animate);
    }
    public app = ()=>{
        this.animate()
    }
}

