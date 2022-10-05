export class Vector{
    x=0;
    y=0;
    ux=0;
    uy=0;
    mag=0;
    angle=0;
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
        this.recalib()
    }
    recalib = ()=>{
        this.mag = Math.sqrt((this.x)**2 + (this.y)**2)
        if(this.mag===0){
            this.ux = 0;
            this.uy = 0;
        }else{
            this.ux = this.x/this.mag
            this.uy = this.y/this.mag
        }
        this.angle = Math.atan(this.y/this.x);
    }
    add = (a)=>{
        this.x+=a.x;
        this.y+=a.y;
        this.recalib()
    }
    scalar = (a)=>{
        this.x*=a
        this.y*=a
        this.recalib()
    }
    normalize = ()=>{
        this.x = this.x/this.mag;
        this.y = this.y/this.mag;
        this.recalib()
    }
    setMag = (a)=>{
        this.normalize();
        this.scalar(a);
    }
}