import Rectangle from "./classes/Rectangle.js";
import Square from "./classes/Square.js";
import Oval from "./classes/Oval.js";
import Circle from "./classes/Circle.js";

const objects = [];
const shapeProps = document.getElementById("shape-props");
const shapeEdit = document.getElementById("shape-edit");
const shapesGenerator = document.getElementById("shapes");
const buttons = shapesGenerator.getElementsByTagName("button");
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
context.lineWidth = 6;
let currentObject;
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  objects.forEach(object => {
    object.draw(context);
  });
}
const clearHighlights = () => {
  for (const object of objects) {
    object.highlighted = false;
  }
}
const createNewShape = e => {
  const shape = e.target.getAttribute("data-shape");
  let newShape;
  switch (shape) {
    case "square":
      newShape = new Square({x: 0, y: 0, side: 50});
      break;
    case "rectangle":
      newShape = new Rectangle({x: 0, y: 0, height: 50, width: 100});
      break;
    case "oval":
      newShape = new Oval({x: 50, y: 50, mainAxis: 100, secondaryAxis: 50});
      break;
    case "circle":
      newShape = new Circle({x: 50, y: 50, radius: 25});
      break;
  }
  clearHighlights();
  draw();
  newShape.log();
  newShape.highlighted = true;
  newShape.draw(context);
  currentObject = newShape;
  newShape.edit(shapeEdit, shapeProps);
  objects.push(newShape);
}
const onCanvasClick = e => {
  const boundingClientRect = canvas.getBoundingClientRect();
  const x = e.clientX - boundingClientRect.left;
  const y = e.clientY - boundingClientRect.top;
  clearHighlights();
  if (x < 600 && x > 0 && y > 0 && y < 600) {
    for (let i = objects.length - 1; i > -1; i--) {
      const object = objects[i];
      if (context.isPointInPath(object.path, x, y)) {
        object.edit(shapeEdit, shapeProps);
        currentObject = object;
        object.highlighted = true;
        break;
      }
    }
  }
  draw();
}
const onInputChange = e => {
  const target = e.target;
  const targetVal = target.value;
  if (target.nodeName.toLowerCase() === 'input') {
    const key = e.key;
    switch (key) {
      case 'ArrowUp':
        target.value = targetVal === '' ? 1 : parseInt(targetVal, 10) + 1;
        break;
      case 'ArrowDown':
        target.value = (targetVal === '' ? 0 : (targetVal === '0' ? '0' : parseInt(targetVal, 10) - 1));
        break;ل
    }
  }
}
const onInput = (e) => {//Prevents users from typing anything except numbers
  if (e.target.name.toLowerCase().search('color') === -1) {
    onInputChange(e);
    const value = e.target.value;
    if (/^[0-9]+$/.test(value)) {
      e.target.value = parseInt(value, 10);
    } else {
      e.target.value = parseInt(value || 0);
    }
  }
  currentObject[e.target.name] = e.target.value;
  currentObject.showShapeProps(shapeProps);
  draw();
};
for (let button of buttons) {
  button.addEventListener("click", createNewShape);
}
document.addEventListener("input", onInput);
canvas.addEventListener("click", onCanvasClick);
