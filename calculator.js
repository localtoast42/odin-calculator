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

function operate(operandOne, calcOperator, operandTwo) {
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
            if (parseInt(operandTwo) === 0) {
                return NaN;
            } else {
                return divide(operandOne, operandTwo);
            };
        default:
            return null;
    };
};

function updateDisplay(newVal) {
    switch(newVal) {
        case 'C':
            operandStack = [];
            result = null;
            calcDisplay.textContent = '';
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            if (inputStack.length > 0) {
                operandStack.push(inputStack.join(''));
                inputStack = [];
            };
            if (operandStack.length === 3) {
                // if operandStack is full, evaluate result, dump stack, then add result and new operator
                result = operate(...operandStack);
                calcDisplay.textContent = result;
                operandStack = [];
                operandStack.push(result);
                operandStack.push(newVal);
            } else if (operandStack.length === 2) {
                // replace operator if last input was operator
                operandStack.pop();
                operandStack.push(newVal);
            } else if (operandStack.length === 1) {
                operandStack.push(newVal);
            };
            result = null;
            break;
        case '=':
            if (inputStack.length > 0) {
                if (operandStack.length === 1) {
                    operandStack.pop();
                };
                operandStack.push(inputStack.join(''));
                inputStack = [];
            };
            if (operandStack.length === 3) {
                result = operate(...operandStack);
                operandStack = [];
                if (isNaN(result)) {
                    calcDisplay.textContent = 'NO ZERO DIVISION';
                    operandStack = [];
                } else {
                    operandStack.push(result);
                    calcDisplay.textContent = result;
                };
            };
            result = null;
            break;
        default:
            inputStack.push(newVal);
            calcDisplay.textContent = inputStack.join('');
    };
};

let inputStack = [];
let operandStack = [];
let calcOperator = null;
let result = null;

const calcDisplay = document.querySelector('.display-item');
const buttons = document.querySelectorAll('.numpad-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});