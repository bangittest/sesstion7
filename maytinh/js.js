let display = document.getElementById('display');
let operator = null;
let operand1 = null;
let operand2 = null;

function insertNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function insertOperator(op) {
    operator = op;
    operand1 = parseFloat(display.value);
    display.value = '0';
}

function calculate() {
    operand2 = parseFloat(display.value);
    let result = null;
    if (operator === '+') {
        result = operand1 + operand2;
    } else if (operator === '-') {
        result = operand1 - operand2;
    } else if (operator === '*') {
        result = operand1 * operand2;
    } else if (operator === '/') {
        result = operand1 / operand2;
    }
    display.value = result.toString();
    operator = null;
    operand1 = null;
    operand2 = null;
}

function clearDisplay() {
    display.value = '0';
    operator = null;
    operand1 = null;
    operand2 = null;
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}