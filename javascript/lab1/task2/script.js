
let number1, result, number2, running = true, feedback;
while (running) {
  number1 = result ? result : parseInt(prompt("Input first number"), 10);
  number2 = parseInt(prompt("Input second number"), 10);
  if (isNaN(number1) || isNaN(number2)) {
    alert("one or more entries is not a valid number");
  }
  result = number1 + number2;
  alert("Result is: " + result);
  feedback = prompt("Continue? (yes\\NO)").toLowerCase();
  running = feedback === 'y' || feedback === 'yes';
}
