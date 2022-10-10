import "./styles/index.scss"
import {QuickSort} from "./projects/Sorting"

const arr:number[] = []
for(var i =0;i<10;i++){
    //arr.push(Math.floor(Math.random()*100))
    arr.push(10-i)
}
const b = new QuickSort(arr)
b.update()