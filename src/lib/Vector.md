# Vector

The vector class provides you with a simple data structure that holds 3 numerical values and allows you to do operations with them.

## To Import a Vector

```typescript
import { Vector } from "./lib";
```

## To Create a Vector

```typescript
const vec = new Vector();
//OR
const vec = new Vector(10, 0, 0);
```

## To Add a Vector

```typescript
const a = new Vector(10, 0, 0);
const b = new Vector(1, 0, 0);
a.add(b); //a.x = 11
```

## To Subtract a Vector

```typescript
const a = new Vector(10, 0, 0);
const b = new Vector(1, 0, 0);
a.sub(b); //a.x = 9
```

## To Multiply Scalar to Vector

```typescript
const a = new Vector(10, 0, 0);
const b = 10;
a.scalar(b); //a.x = 100
```

## To Normalize a Vector

```typescript
const a = new Vector(100, 0, 0);
a.normalize(); //a.x = 1
```

## To Dot Product

```typescript
const a = new Vector(100, 0, 0);
const b = new Vector(100, 0, 0);
a.dot(b);
```

## To Cross Product

```typescript
const a = new Vector(100, 0, 0);
a.cross(b);
```

## To find distance between 2 vectors

```typescript
const a = new Vector(100, 0, 0);
const b = new Vector(0, 0, 0);
a.dist(b);
```

## To Set Magnitude

```typescript
const a = new Vector(100, 0, 0);
a.setMag(10);
```

## To Get a Random Vector

```typescript
const a = Vector.rand();
```

## To Get a Random Signed Vector

```typescript
const a = Vector.randSigned();
```

## Get A Vector from Addition

```typescript
const a = new Vector(10);
const b = new Vector(10);
const c = Vector.VecFromAdd(a, b);
```
