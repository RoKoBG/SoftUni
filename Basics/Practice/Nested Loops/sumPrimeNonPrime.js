function sumPrimeNonPrime(input) {
  let index = 0;
  let prime = 0;
  let nonPrime = 0;

  while (input[index] !== "stop") {
    let currNum = Number(input[index]);
    if (currNum < 0) {
      console.log("Number is negative.");
    } else {
      let isPrime = true;

      for (let i = 2; i < currNum; i++) {
        if (currNum % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        prime += currNum;
      } else {
        nonPrime += currNum;
      }
    }
    index++;
  }
  console.log(`Sum of all prime numbers is: ${prime}`);
  console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
