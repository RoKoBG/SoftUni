function mathOps(num1, num2, op) {
  let result = 0;
  switch (op) {
    case "+":
        result = num1 + num2;
        console.log(result);
      break;
    case "-":
        result = num1 - num2;
        console.log(result);
      break;
    case "*":
        result = num1 * num2;
        console.log(result);
      break;
    case "/":
        result = num1 / num2;
        console.log(result);
      break;
    case "%":
        result = num1 % num2;
        console.log(result);
      break;
    case "**":
        result = num1 ** num2;
        console.log(result);
      break;
  }
}
mathOps(5, 6, "+");
mathOps(3, 5.5, "*");
