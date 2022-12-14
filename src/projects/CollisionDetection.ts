import { Ball } from "../lib/Ball"
import { Canvas } from "../lib/Canvas"

/**
 * ## Ball Group
 * A simpler/concentrated way to manage the balls in this simulation.
 */
class BallGroup {
  private balls: Ball[]
  constructor(canvas: Canvas, size: number = 10) {
    this.balls = Ball.generate(size, 0, canvas.width)
  }
  public handleCollision = () => {
    for (var i = 0; i < this.balls.length; i++) {
      for (var j = 0; j < this.balls.length; j++) {
        if (i != j) {
          const b1 = this.balls[i]
          const b2 = this.balls[j]
          if (b1.dist(b2) <= b1.size + b2.size) {
            b1.repel(b2, 2)
            b1.vel.scalar(0.8)
          } else {
            b1.attract(b2, 0.001)
          }
        }
      }
    }
  }
  public update = () => {
    this.balls.forEach((b: Ball) => {
      b.update()
    })
  }
  public bound = (canvas: Canvas) => {
    this.balls.forEach((b: Ball) => {
      b.bound(canvas, { x: false, y: false })
    })
  }
  public draw = (canvas: Canvas) => {
    this.balls.forEach((b: Ball) => {
      b.draw(canvas)
    })
  }
}
/**
 * ## Collision Detection
 * This simulation takes a look at the idea of collisions and the physics behind it.
 * In the case of balls, the idea is simple:
 * - Take a look at the distance between the balls
 * - If the distance is less than or equal to sum of the radius of the balls, its valid
 *     - Find the direction vector of the ball relative to the other one, reverse it and multiply a scalar to it.
 */
export class CollisionDetectionDemo {
  private canvas: Canvas
  private balls: BallGroup
  constructor(parent: HTMLElement = document.body) {
    this.canvas = new Canvas()
    parent.append(this.canvas.dom)
    this.balls = new BallGroup(this.canvas, 100)
  }
  private animate = () => {
    this.canvas.clear()
    this.balls.handleCollision()
    this.balls.update()
    this.balls.bound(this.canvas)
    this.balls.draw(this.canvas)
    requestAnimationFrame(this.animate)
  }
  public app = () => {
    this.animate()
  }
}
