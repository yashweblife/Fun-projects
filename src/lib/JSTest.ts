export function bench(test:()=>any){
    console.time("test")
    var start = new Date()
    test()
    var end = new Date()
    console.log(":::: ", end.getTime()-start.getTime())
    console.timeEnd("test")
}