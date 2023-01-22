function solve(arr) {
  const ERROR_MESSAGE = "Error: not enough operands!";
  const nums = [];
  const ops = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (typeof ele === "number") {
      nums.push(ele);
    } else {
      if (nums.length < 2) {
        return ERROR_MESSAGE;
      }
      nums.push(ops[ele](nums.pop(), nums.pop()));
    }
  }
  if (nums.length != 1) {
    return "Error: too many operands!";
  }
  return nums[0];
}
console.log(solve([3, 4, "+"]));
solve([5, 3, 4, "*", "-"]);
console.log(solve([7, 33, 8, "-"]));
