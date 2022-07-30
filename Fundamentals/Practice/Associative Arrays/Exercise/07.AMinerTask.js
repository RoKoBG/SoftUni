function aMinorTask(data) {
  let obj = {};
  for (let i = 0; i < data.length; i += 2) {
    let resource = data[i];
    let quantity = Number(data[i + 1]);
    if (!obj.hasOwnProperty(resource)) {
      obj[resource] = new Set();
    }
    obj[resource].add(quantity);
  }
  for (const [resource, value] of Object.entries(obj)) {
    let newValue = new Set(value);
    let sum = 0;
    for (const value of newValue) {
      sum += value;
    }
    console.log(`${resource} -> ${sum}`);
  }
}

aMinorTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log(`--------------------`);
aMinorTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
