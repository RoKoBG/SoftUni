function messageDecrypt(arr) {
  let regex =
    /^([$%])(?<name>[A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/gm;
  let n = arr.shift();
  isValid = false;
  let arrOfLine = [];
  for (let i = 0; i < n; i++) {
    let line = arr[i];
    if (line.match(regex)) {
      let [name, nums] = line.split(" ");
      let newName = name.substring(1, name.length - 2);
      let newNums = [];
      let char = "";
      newNums.push(nums);
      let filteredNums = newNums[0]
        .replace(/\D+/g, " ")
        .trim()
        .split(" ")
        .map((e) => parseInt(e));

      console.log(
        `${newName}: ${String.fromCharCode(
          filteredNums[0]
        )}${String.fromCharCode(filteredNums[1])}${String.fromCharCode(
          filteredNums[2]
        )}`
      );
    } else {
      console.log("Valid message not found!");
    }
  }
}
messageDecrypt([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
