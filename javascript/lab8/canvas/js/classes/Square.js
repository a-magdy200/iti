import Shape from "./Shape.js";

class Square extends Shape {
  constructor({side = 0, x = 0, y = 0} = {}) {
    super({x, y, shape: "Square"});
    this._side = side;
    this.shapeProps = ["x", "y", "side", "color", "highlightColor", "circumference", "area"];
    this.shapeVars = ["x", "y", "side", "color", "highlightColor"];
  }

  get side() {
    return this._side;
  }

  set side(value) {
    this._side = value;
  }

  get area() {
    return this.side * this.side;
  }

  get circumference() {
    return this.side * 4;
  }

  draw(context) {
    this.path = new Path2D();
    this.path.rect(this.x, this.y, this.side, this.side);
    context.fillStyle = this.color;
    context.fill(this.path);
    if (this.highlighted) {
      const strokePath = new Path2D();
      strokePath.rect(this.x - 3, this.y - 3, this.side + 6, this.side + 6);
      context.strokeStyle = this.highlightColor;
      context.stroke(strokePath);
    }
  }
}

export default Square;
