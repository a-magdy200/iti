import Shape from "./Shape.js";

class Oval extends Shape {
  constructor({x = 0, y = 0, mainAxis = 0, secondaryAxis = 0} = {}) {
    super({x, y, shape: "Oval"});
    this._mainAxis = mainAxis;
    this._secondaryAxis = secondaryAxis;
    this.shapeProps = ["x", "y", "mainAxis", "secondaryAxis", "color", "highlightColor", "circumference", "area"];
    this.shapeVars = ["x", "y", "mainAxis", "secondaryAxis", "color", "highlightColor"];
  }

  get mainAxis() {
    return this._mainAxis;
  }

  set mainAxis(value) {
    this._mainAxis = value;
  }

  get secondaryAxis() {
    return this._secondaryAxis;
  }

  set secondaryAxis(value) {
    this._secondaryAxis = value;
  }
  get area() {
    return (Math.PI * this.mainAxis * this.secondaryAxis).toFixed(2);
  }
  get circumference() {
    return ((this.secondaryAxis +  this.mainAxis) * Math.PI).toFixed(2);
  }
  draw(context) {
    this.path = new Path2D();
    this.path.ellipse(this.x, this.y, this.mainAxis / 2, this.secondaryAxis / 2, 0, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill(this.path);
    if (this.highlighted) {
      const strokePath = new Path2D();
      strokePath.ellipse(this.x, this.y, 3 + this.mainAxis / 2, 3 + this.secondaryAxis / 2, 0, 0, 2 * Math.PI);
      context.strokeStyle = this.highlightColor;
      context.stroke(strokePath);
    }
  }
}
export default Oval;
