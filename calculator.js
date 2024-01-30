function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(calcOperator, operandOne, operandTwo) {
    operandOne = parseInt(operandOne);
    operandTwo = parseInt(operandTwo);
    switch(calcOperator) {
        case '+':
            return add(operandOne, operandTwo);
        case '-':
            return subtract(operandOne, operandTwo);
        case '×':
            return multiply(operandOne, operandTwo);
        case '÷':
            return divide(operandOne, operandTwo);
        default:
            return null;
    };
};

function updateDisplay(newVal) {
    switch(newVal) {
        case 'C':
            operandStack = [];
            operandOne = null;
            calcOperator = null;
            result = null;
            calcDisplay.textContent = '';
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            if (operandOne && operandStack) {
                result = operate(calcOperator, operandOne, operandStack.join(''));
                operandOne = result;
                operandStack = [];
                calcDisplay.textContent = result;
                calcOperator = newVal;
            } else {
                operandOne = operandStack.join('');
                operandStack = [];
                calcOperator = newVal;
            };
            break;
        case '=':
            result = operate(calcOperator, operandOne, operandStack.join(''));
            operandOne = result;
            operandStack = [];
            calcOperator = null;
            calcDisplay.textContent = result;
            break;
        default:
            operandStack.push(newVal)
            calcDisplay.textContent = operandStack.join('');
    };
};

let operandStack = [];
let operandOne = null;
let calcOperator = null;
let result = null;

const calcDisplay = document.querySelector('.display-item');
const buttons = document.querySelectorAll('.numpad-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});