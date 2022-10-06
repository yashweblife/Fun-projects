/**
 * @class Vector
 */

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
        this.angle = Math.atan2(this.y,this.x)
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

    rotate = (a)=>{
        var r_sin = Math.sin(a)
        var r_cos = Math.cos(a);
        this.x = (this.x*r_cos) - (this.y*r_sin)
        this.y = (this.x*r_sin) + (this.y*r_cos)
        this.recalib()
    }
    rotateAbout = (a,p)=>{
        var cos = Math.cos(a), sin = Math.sin(a);
        this.x = p.x + ((this.x - p.x) * cos - (this.y - p.y) * sin);
        this.y = p.y + ((this.x - p.x) * sin + (this.y - p.y) * cos);
    }
    dot = (a)=>{
        return((this.x*a.x)+(this.y*a.y))
    }
    cross = (a)=>{
        return((this.x*a.y)-(this.y*a.x))
    }
    angleBetween = (a)=>{
        return(Math.atan2(a.y-this.y, a.x-this.x))
    }
    clone = ()=>{
        return(new Vector(this.x, this.y))
    }


}