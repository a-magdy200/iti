let option;
let numbersArray = [];
let sum;
while (true) {
  option = parseInt(prompt("Enter numbers count ( 0 to exit )"), 10);
  if (option === 0) {
    break;
  }
  for (let i = 0; i < option; i++) {
    numbersArray[i] = parseInt(prompt("Number #" + (i+1)), 10);
    if (isNaN(numbersArray[i])) {
      numbersArray = 0;
    }
  }
  sum = numbersArray.reduce((a,b) => a + b);
  alert("Sum = " + sum);
}
