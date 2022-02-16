import Shape from "./Shape.js";

class Rectangle extends Shape {
  constructor({x = 0, y = 0, width = 0, height = 0} = {}) {
    super({x, y, shape: "Rectangle"});
    this._width = width;
    this._height = height;
    this.shapeProps = ["x", "y", "width", "height", "color", "highlightColor", "circumference", "area"];
    this.shapeVars = ["x", "y", "width", "height", "color", "highlightColor"];
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get area() {
    return this.width * this.height;
  }

  get circumference() {
    return 2 * (this.width + this.height);
  }

  draw(context) {
    this.path = new Path2D();
    this.path.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.color;
    context.fill(this.path);
    if (this.highlighted) {
      const strokePath = new Path2D();
      strokePath.rect(this.x - 3, this.y - 3, this.width + 6, this.height + 6);
      context.strokeStyle = this.highlightColor;
      context.stroke(strokePath);
    }
  }
}

export default Rectangle;
