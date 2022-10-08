/**
 * # Vector
 * ### This is the main library for Vectors.
 * Its primary functions are
 * Name | Info 
 * -------|--------
 * add | Adds a vector
 * sub | Subtracts a vector 
 * scalar | Scalar multiplication
 * normalize | Converts to a unit vector
 * dot | Vector dot product
 * cross | Vector cross product
 * rand | Generates a random vector
 * rotate | Rotates a vector
 * clone | Clones the vector
 */

export class Vector{
    public x:number = 0;
    public y:number = 0;
    public mag:number = 0;
    public ux:number = 0;
    public uy:number = 0;
    public angle:number = 0;
    /**
     * 
     * @param x : X value; default is 0
     * @param y : y value; default is 0
     */
    constructor(x:number=0, y:number=0){
        this.x = x; 
        this.y = y;
        this.recalib();
    }
    /**
     * Recaliberates the vector data
     */
    private recalib = ()=>{
        this.mag = Math.sqrt((this.x)**2 + (this.y)**2)
        this.ux = this.x/this.mag
        this.uy = this.y/this.mag
        this.angle = Math.atan2(this.y, this.x);
    }
    /**
     * Adds a Vector to the selected vector
     * @param a Vector
     */
    public add = (a:Vector)=>{
        this.x+=a.x;
        this.y+=a.y;
        this.recalib()
    }
    /**
     * Subtracts a vector
     * @param a Vector
     */
    public sub = (a:Vector)=>{
        this.x-=a.x;
        this.y-=a.y;
        this.recalib()
    }
    /**
     * Multiplies vector with a number
     * @param a Number
     */
    public scalar = (a:number)=>{
        this.x*=a;
        this.y*=a;
        this.recalib()
    }
    /**
     * Sets vector to unit vector
     */
    public normalize = ()=>{
        if(this.mag == 0){
            this.x=0;
            this.y=0;
        }else{
            this.x = this.x/this.mag
            this.y = this.y/this.mag
        }
        this.recalib()
    }
    /**
     * Vector dot product
     * @param a Vector
     * @returns A scalar multiplier
     */
    public dot = (a:Vector):number=>{
        return((this.x*a.x) + (this.y*a.y))
    }
    /**
     * Vector cross product
     * @param a Vector
     */
    public cross = (a:Vector)=>{
        return((this.x*a.x) - (this.y*a.y))
    }
    /**
     * Creates a random Vector
     * @param min Number
     * @param max Number
     * @returns A random Vector
     */
    public static rand = (min:number, max:number):Vector=>{
        const x = ((Math.random()-0.5)*max)+min;
        const y = ((Math.random()-0.5)*max)+min;
        return(new Vector(x,y))
    }
    /**
     * Rotates Vector, preserves magnitude
     * @param angle Number
     */
    public rotate = (angle:number)=>{
        var sin = Math.sin(angle), cos=Math.cos(angle);
        this.x = this.x * cos - this.y*sin
        this.y = this.x * sin + this.y*cos
        
    }
    /**
     * Clones the Vector
     * @returns cloned Vector
     */
    public clone = ():Vector=>{
        return(new Vector(this.x, this.y))
    }
}