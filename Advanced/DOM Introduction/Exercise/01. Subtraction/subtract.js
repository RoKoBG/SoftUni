function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;
    const num1 = Number(firstInput);
    const num2 = Number(secondInput);
    const result = num1 - num2;
   document.getElementById('result').textContent = result;
}