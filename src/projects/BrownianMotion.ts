import { Ball } from "../lib/Ball"
import { Canvas } from "../lib/Canvas"
import { Vector } from "../lib/Vector"
/**
 * ## Brownian Motion
 * This is a phenonemon that can be observerd on the microscopic scale.
 * It is where larger particels seem to follow a random motion when suspended in a fluid.
 * This happens when tinier particles with higher kinetic energy collide with larger particles.
 * The effect can be simulated by applying random forces to the Ball object.
 * @functions app()
 */

class BallGroup{
  private balls:Ball[] = []
  private canvas:Canvas = new Canvas()
  private time:number=0
  constructor(parent:HTMLElement){
    parent.append(this.canvas.dom)
    this.balls = Ball.generate(100,0,500)
  }
  public update = ()=>{
    this.canvas.clear()
    this.time += 1
    this.balls.forEach((ball: Ball) => {
      ball.addForce(Vector.randSIgned(-2, 2))
      ball.update()
      ball.bound(this.canvas, { x: false, y: false })
      ball.draw(this.canvas)
    });
  }
}
export class BrownianMotionDemo {
  public balls:BallGroup
  /**
   *
   * @param parent A parent for the canvas object
   */
  constructor(parent: HTMLElement = document.body) {
    this.balls = new BallGroup(parent)
  }
  public animate = () => {
    this.balls.update()
    requestAnimationFrame(this.animate)
  };
  /**
   * Call the app function to get the animation running
   */
  public app = () => {
    this.animate()
  };
}
