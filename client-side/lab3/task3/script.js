let running = true;
let option, entry;
const squareArea = (side) => side * side;
const circleArea = (radius) => radius * radius * Math.PI;
while (running) {
  option = prompt("Square / Circle / Exit").toLowerCase();
  switch (option) {
    case 'square':
      entry = parseInt(prompt("Enter square side"), 10);
      alert(`Square area of side ${entry} = ${squareArea(entry)}`);
      break;
    case 'circle':
      entry = parseInt(prompt("Enter circle radius"), 10);
      alert(`Circle area of radius ${entry} = ${circleArea(entry)}`);
      break;
    case 'exit':
      running = false;
      break;
    default:
      alert("Invalid operation");
      break;
  }
}
