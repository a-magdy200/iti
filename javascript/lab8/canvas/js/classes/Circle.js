import Shape from "./Shape.js";

class Circle extends Shape {
  constructor({x = 0, y = 0, radius = 0} = {}) {
    super({x, y, shape: "Circle"});
    this._radius = radius;
    this.shapeProps = ["x", "y", "radius", "color", "highlightColor", "circumference", "area"];
    this.shapeVars = ["x", "y", "radius", "color", "highlightColor"];
  }


  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get area() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
  get circumference() {
    return (2 * this.radius * Math.PI).toFixed(2);
  }

  draw(context) {
    this.path = new Path2D();
    this.path.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill(this.path);
    if (this.highlighted) {
      const strokePath = new Path2D();
      strokePath.arc(this.x, this.y, this.radius + 3, 0, 2 * Math.PI);
      context.strokeStyle = this.highlightColor;
      context.stroke(strokePath);
    }
  }
}
export default Circle;
