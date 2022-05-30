function buildProjects(input) {
  let archName = input[0];
  let numProjects = input[1];
  let timeNeed = numProjects * 3;
  console.log(
    `The architect ${archName} will need ${timeNeed} hours to complete ${numProjects} project/s.`
  );
}
buildProjects(["George", "4"]);
