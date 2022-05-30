function operationBetweenNum(input) {
  const a = Number(input[0]);
  const b = Number(input[1]);
  const operator = input[2];
  let evenOrOdd = 0;
  let result = 0;
  //  if ((a + b) % 2 == 0 || ((a * b) % 2 == 0) | ((a - b) % 2 == 0)) {
  //     evenOrOdd = "even";
  //   } else {
  //     evenOrOdd = "odd";
  //   }
  if (b == 0 && operator != "+" && operator != "-" && operator != "*") {
    console.log(`Cannot divide ${a} by zero`);
  } else {
    switch (operator) {
      case "+":
        result = a + b;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${a} + ${b} = ${result} - ${evenOrOdd}`);
        break;
      case "-":
        result = a - b;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${a} - ${b} = ${result} - ${evenOrOdd}`);
        break;

      case "*":
        result = a * b;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${a} * ${b} = ${result} - ${evenOrOdd}`);
        break;
      case "/":
        result = a / b;
        console.log(`${a} / ${b} = ${result.toFixed(2)}`);
        break;
      case "%":
        result = a % b;
        console.log(`${a} % ${b} = ${result}`);
        break;
    }
  }
}
operationBetweenNum(["7", "3", "*"]);
