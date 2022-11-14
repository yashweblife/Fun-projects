import { Vector } from "../lib/Vector";
class Grid {
  private size: Vector;
  private shape: Vector;
  constructor() {}
}
class Pixel {
  private pos: Vector;
  private size: Vector;
  private color: string;
  constructor() {}
}

export class PixelArtDemo{
  constructor(parent:HTMLElement = document.body){}
  private animate = ()=>{}
  public app = ()=>{}
}