import {Vector} from './Vector'

export class Matrix{
    public data:number[][]
    public shape:Vector
    constructor(){}
    public init = (a:number[][])=>{
        this.data = a;
    }
    public $ = (x:number, y:number):number=>{
        return(this.data[x][y])
    }
    public addTest = (mat:Matrix)=>{
        console.time('test 0')
        var output = []
        for(var i=0;i<this.data.length;i++){
            var test = []
            for(var j=0;j<this.data[i].length;j++){
                test.push(this.data[i][j] + mat.data[i][j])
            }
            output.push(test)
        }
        //console.log(output)
        console.timeEnd('test 0')
    }
    public add = (mat:Matrix)=>{
        console.time('test 1')
        var rows = []
        for(var i=0;i<this.data.length;i++){
            rows.push([this.data[i],mat.data[i]])
        }
        var output = []
        for(var i=0;i<rows.length;i++){
            var test = []
            for(var j=0;j<rows[i][0].length;j++){
                test.push(rows[i][0][j] + rows[i][1][j])
            }
            output.push(test)
        }
        //console.log(output)
        console.timeEnd('test 1')
    }
    public scalar = ()=>{}
}