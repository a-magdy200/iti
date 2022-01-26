const calculator = document.getElementById("calculator");
const buttons = calculator.getElementsByTagName("button");
const input = document.getElementById("input");
const result = document.getElementById("result");
let currentValue = '';
let nextOperation = '';
let secondOperand = '';
let firstOperand = 0;
let symbol = '';
let resultValue = 0;
let reset = false;
const calculate = () => {
  secondOperand = parseFloat(secondOperand);
  switch (nextOperation) {
    case 'plus':
      resultValue = firstOperand + secondOperand;
      break;
    case 'minus':
      resultValue = firstOperand - secondOperand;
      break;
    case 'multiply':
      resultValue = firstOperand * secondOperand;
      break;
    case 'divide':
      resultValue = firstOperand / secondOperand;
      resultValue = resultValue.toFixed(2);
      break;
    case 'modulus':
      resultValue = firstOperand % secondOperand;
      break;
    default:
      resultValue = firstOperand;
      break;
  }
  nextOperation = '';
  symbol = '';
  secondOperand = '';
  firstOperand = resultValue;
  input.textContent = firstOperand;
  input.setAttribute('data-value', firstOperand);
  reset = true;
}
const onClickHandler = (e) => {
  const target = e.target;
  const value = target.getAttribute("data-value");
  const numericValue = parseInt(value, 10);
  if (!isNaN(numericValue) || value === '.') {
    if (input.textContent === '0' || reset) {
      input.textContent = value;
    } else {
      input.textContent += value === '.' ? value : numericValue;
    }
    reset = false;
    if (nextOperation === '') {
      firstOperand = parseFloat(input.textContent);
    } else {
      secondOperand += value;
    }
    input.setAttribute('data-value', input.textContent);
  } else {
    switch (value) {
      case 'clear':
        result.textContent = '0';
        input.textContent = '0';
        currentValue = '';
        result.setAttribute("data-value", currentValue);
        nextOperation = '';
        symbol = '';
        break;
      case 'invert':
        currentValue = result.textContent;
        currentValue = (-1 * parseFloat(currentValue)).toString();
        result.textContent = currentValue;
        result.setAttribute("data-value", currentValue);
        nextOperation = '';
        symbol = '';
        break;
      case 'calculate':
        calculate();
        result.textContent = resultValue;
        result.setAttribute("data-value", currentValue);
        break;
      default:
        symbol = target.getAttribute('data-symbol');
        if (nextOperation === '') {
          firstOperand = parseFloat(input.textContent);
          input.textContent += ` ${symbol} `;
        } else {
          input.textContent = input.textContent.replace(/[+-/*%]/, symbol);
        }
        reset = false;
        nextOperation = value;
        break;
    }
  }
};
for (let button of buttons) {
  button.addEventListener("click", onClickHandler);
}
