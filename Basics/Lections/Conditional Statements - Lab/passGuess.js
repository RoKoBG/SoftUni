function passGuess(input) {
  let pass = "s3cr3t!P@ssw0rd";
  let submittedPass = input[0];
  if (pass == submittedPass) {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
passGuess(["s3cr3t!p@ss"]);
