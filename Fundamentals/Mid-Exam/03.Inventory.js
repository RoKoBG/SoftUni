function inventory(input) {
  let startItems = input.shift().split(", ");
  let line = input.shift();

  while (line !== "Craft!") {
    if (line.includes("Drop")) {
      let [action, item] = line.split(" - ");
      if (startItems.includes(item)) {

        let index = startItems.indexOf(item);
        startItems.splice(index,1)
      //  for (let i = 0; i < startItems.length; i++) {
        //  if (startItems[i] === item) {
         //  startItems.splice(i, 1);
        //  }
       // }
      }
    }

    if (line.includes("Combine Items")) {
      let [action, items] = line.split(" - ");
      let splittedItems = items.split(":");
      let oldItem = splittedItems.shift();
      let newItem = splittedItems.shift();
      if (startItems.includes(oldItem)) {
        let oldItemIndex = startItems.indexOf(oldItem);
        if (oldItemIndex >= 0) {
          startItems.splice(oldItemIndex + 1, 0, newItem);
        }
      }
    }
    if (line.includes("Renew")) {
      let [action, item] = line.split(" - ");
      if (startItems.includes(item)) {
        let indexOfItem = startItems.indexOf(item);
        if (indexOfItem >= 0) {
          startItems.splice(indexOfItem, 1);
          startItems.push(item);
        }
      }
    }

    if (line.includes("Collect")) {
      let [action, item] = line.split(" - ");
      if (startItems.includes(item)) {
        break;
      } else {
        startItems.push(item);
      }
    }

    line = input.shift();
  }
  console.log(startItems.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Iron", "Craft!"]);
