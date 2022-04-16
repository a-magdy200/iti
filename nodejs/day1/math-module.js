const add = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Both parameters must be numbers");
  }
  return a + b;
}
const sub = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Both parameters must be numbers");
  }
  return a - b;
}
const multi = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Both parameters must be numbers");
  }
  return a * b;
}
module.exports = {
  add,
  sub,
  multi
}
