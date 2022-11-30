import {Ball, Vector} from '../src/lib'
test('Distance between 2 vectors',()=>{
    const a = new Vector()
    const b = new Vector(1,0)
    expect(a.dist(b)).toBe(1)
})

test('Physics Object Distance',()=>{
    const a = new Ball(new Vector(0,0))
    const b = new Ball(new Vector(10,0))
    expect(a.dist(b)).toBe(10)
})