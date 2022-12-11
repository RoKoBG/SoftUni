function nfs(data) {
    const n = data.shift();
    let result = new Map();
    for (let elements of data) {
      if (elements === "Stop") {
        break;
      }
      if (elements.includes("|")) {
        let [car, mileage, fuel] = elements.split("|");
        result.set(car, []);
        result.get(car).push(Number(mileage));
        result.get(car).push(Number(fuel));
      }
      if (elements.includes(" : ")) {
        let tokens = elements.split(" : ");
  
        if (elements.includes("Refuel")) {
          let givenCar = tokens[1];
          let givenFuel = Number(tokens[2]);
          let sum = givenFuel + result.get(givenCar)[1];
          if (sum > 75) {
            result.get(givenCar)[1] = 75;
            sum -= 75;
            console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
          } else {
            result.get(givenCar)[1] = sum;
            console.log(`${givenCar} refueled with ${givenFuel} liters`);
          }
        } else if (elements.includes("Revert")) {
          let givenCar = tokens[1];
          let kilometers = Number(tokens[2]);
          result.get(givenCar)[0] -= kilometers;
          if (result.get(givenCar)[0] < 10000) {
            result.get(givenCar)[0] = 10000;
          } else {
            console.log(
              `${givenCar} mileage decreased by ${kilometers} kilometers`
            );
          }
        } else if (elements.includes("Drive")) {
          let givenCar = tokens[1];
          let distance = Number(tokens[2]);
          let fuel = Number(tokens[3]);
          if (fuel <= result.get(givenCar)[1]) {
            result.get(givenCar)[1] -= fuel;
            result.get(givenCar)[0] += distance;
            console.log(
              `${givenCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
            );
          } else {
            console.log("Not enough fuel to make that ride");
          }
          if (result.get(givenCar)[0] >= 100000) {
            result.delete(givenCar);
            console.log(`Time to sell the ${givenCar}!`);
          }
        }
      }
    }
    for (let [car, carInfo] of result) {
      console.log(
        `${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`
      );
    }
  }
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
