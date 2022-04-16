const userModule = require("./user-module");
const mathModule = require("./math-module");
try {
  console.log(mathModule.add(1, 3));
} catch (e) {
  console.error(e.message);
}
try {
  console.log(mathModule.add('A', 3));
} catch (e) {
  console.error(e.message);
}
try {
  console.log(userModule.hello("ahmed", "1996-03-21"));
} catch (e) {
  console.error(e.message);
}
try {
  console.log(userModule.hello("ahmed", "2020"));} catch (e) {
  console.error(e.message);
}
