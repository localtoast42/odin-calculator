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
    if (newVal === 'C') {
        operandOneDisplay.textContent = ''
        operatorDisplay.textContent = ''
        operandTwoDisplay.textContent = ''
    }
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