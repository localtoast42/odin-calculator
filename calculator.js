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

let operandOne = null;
let operandTwo = null;
let calcOperator = null;