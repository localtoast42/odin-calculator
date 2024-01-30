function add(a, b) {
    return a + b;
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
            operandOneDisplay.textContent = null;
            operatorDisplay.textContent = null;
            operandTwoDisplay.textContent = null;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            operatorDisplay.textContent = newVal;
            break;
        case newVal === '=':
            operate(
                operatorDisplay.textContent, 
                operandOneDisplay.textContent, 
                operandTwoDisplay.textContent);
            break;
        default:
            if (operandOneDisplay.textContent && operandTwoDisplay.textContent) {
                return;
            } else if (operandOneDisplay.textContent) {
                operandTwoDisplay.textContent = newVal;
            } else {
                operandOneDisplay.textContent = newVal;
            };
    };
};

let operandOne = null;
let operandTwo = null;
let calcOperator = null;

const operandOneDisplay = document.querySelector('#operand-one');
const operandTwoDisplay = document.querySelector('#operand-two');
const operatorDisplay = document.querySelector('#operator');
const buttons = document.querySelectorAll('.numpad-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});