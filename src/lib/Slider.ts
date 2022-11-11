export interface SliderInterface{
    min:number;
    max:number;
    value:number;
}
export class Slider {
  value: number;
  min: number;
  max: number;
  dom: HTMLElement;
  constructor(parent: HTMLElement = document.body) {
    this.dom = document.createElement("input");
    this.dom.setAttribute("type", "range");
    parent.append(this.dom);
  }
  public init = (value:SliderInterface)=>{
    this.min = value.min
    this.max = value.max
    this.value = value.value
  }
}
