function steps(input) {
  let index = 0;
  let command = input[index];
  index++;
  let goal = 10000;
  while (command !== "Going home") {
    let steps = Number(command);
    goal -= steps;
    if (goal <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(goal)} steps over the goal!`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Going home") {
    let leftSteps = Number(input[index]);
    index++;
    goal -= leftSteps;
    if (goal <= 0) {
      console.log(`Goal reached! Good job!`);
      console.log(`${Math.abs(goal)} steps over the goal!`);
    } else {
      console.log(`${goal} more steps to reach goal.`);
    }
  }
}
steps(["125", "250", "4000", "30", "2678", "4682"]);
