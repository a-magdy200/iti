let number1, result = undefined, number2, running = true, feedback, operation;
const operations = ['sum', 'subtract', 'division', 'multiply', 'modulus'];
while (running) {
  number1 = result !== undefined ? result : parseInt(prompt("Input first number"), 10);
  number2 = parseInt(prompt("Input second number"), 10);
  if (isNaN(number1) || isNaN(number2)) {
    alert("one or more entries is not a valid number");
    continue;
  }
  operation = prompt("Enter operation (" + operations.join(", ") + ")").toLowerCase();
  switch (operation) {
    case operations[0]:
      result = number1 + number2;
      break;
    case operations[1]:
      result = number1 - number2;
      break;
    case operations[2]:
      result = number1 / number2;
      break;
    case operations[3]:
      result = number1 * number2;
      break;
    case operations[4]:
      result = number1 % number2;
      break;
    default:
      alert("Invalid operation");
      continue;
  }
  alert("Result is: " + result);
  feedback = prompt("Continue? (yes\\NO)").toLowerCase();
  running = feedback === 'y' || feedback === 'yes';
}
