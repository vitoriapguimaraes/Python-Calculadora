const resultDisplay = document.getElementById("result");
const firstNumberDisplay = document.getElementById("first-number");

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';
let resultDisplayed = false;

function clearAll() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    resultDisplay.textContent = '0';
    firstNumberDisplay.textContent = ''
    resultDisplayed = false;
}

function clearCurrent() {
    currentInput = '';
    resultDisplay.textContent = '0';
}

function handleNumber(num) {
    if (resultDisplayed) {
        currentInput = '';
        operator = '';
        operand1 = '';
        operand2 = '';
        firstNumberDisplay.textContent = ''
        resultDisplayed = false;
    }

    currentInput += num;
    resultDisplay.textContent = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;

    operand1 = currentInput;
    operator = op;
    currentInput = '';
    resultDisplay.textContent = '';
    firstNumberDisplay.textContent = `${operand1} ${operator}`;
}

function calculate() {
    if (currentInput === '' || operand1 === '' || operator === '') return;

    operand2 = currentInput;

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number1: operand1,
            number2: operand2,
            operation: operator
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.result !== undefined) {
            resultDisplay.textContent = data.result;
            currentInput = data.result.toString();
            resultDisplayed = true;
        } else {
            resultDisplay.textContent = data.error;
        }
    });
}

document.querySelectorAll('.button--number').forEach(button => {
    button.addEventListener('click', () => handleNumber(button.textContent));
})

document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('percentage').addEventListener('click', () => setOperator('%'));

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear-history').addEventListener('click', clearAll);
document.getElementById('clear').addEventListener('click', clearCurrent);

window.onload = () => {
    resultDisplay.textContent = '0';
    firstNumberDisplay.textContent = '';
};