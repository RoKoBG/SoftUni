function worldTour(arr) {
  let stops = arr.shift();
  let line = arr.shift();
  let startIndex;
  let endIndex;
  while (line !== "Travel") {
    let [command, first, second] = line.split(":");
    switch (command) {
      case "Add Stop":
        startIndex = Number(first);
        if (startIndex < 0 || startIndex >= stops) {
          console.log(stops);
          break;
        }
        let string = second;
        let firstSlicePart = stops.slice(0, startIndex);
        let secondSlicePart = stops.slice(startIndex);
        stops = firstSlicePart + string + secondSlicePart;
        console.log(stops);
        break;
      case "Remove Stop":
        startIndex = Number(first);
        endIndex = Number(second);
        if(!stops[startIndex] ||!stops[endIndex]){
            console.log(stops);
            break;
        }
        let subStr = stops.substring(startIndex, endIndex+1);
        stops = stops.replace(subStr, "");
        console.log(stops);
        break;
      case "Switch":
        let oldValue = first;
        let newValue = second;
        let regex = new RegExp(oldValue, "g");
        stops = stops.replace(regex, newValue);
        console.log(stops);
        break;
    }
    line = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
