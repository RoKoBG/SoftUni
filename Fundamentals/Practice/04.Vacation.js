function vacation(grpOfPpl, typeOfGrp, dayOfWeek) {
  let totalSum = 0;

  if (typeOfGrp === "Students") {
    switch (dayOfWeek) {
      case "Friday":
        totalSum = grpOfPpl * 8.45;
        break;
      case "Saturday":
        totalSum = grpOfPpl * 9.8;
        break;
      case "Sunday":
        totalSum = grpOfPpl * 10.46;
        break;
    }
    if (grpOfPpl >= 30) {
      totalSum = totalSum - totalSum * 0.15;
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    } else {
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    }
  } else if (typeOfGrp === "Business") {
    if (grpOfPpl >= 100) {
      grpOfPpl = grpOfPpl - 10;
      switch (dayOfWeek) {
        case "Friday":
          totalSum = grpOfPpl * 10.9;
          break;
        case "Saturday":
          totalSum = grpOfPpl * 15.6;
          break;
        case "Sunday":
          totalSum = grpOfPpl * 16;
          break;
      }
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    } else {
      switch (dayOfWeek) {
        case "Friday":
          totalSum = grpOfPpl * 10.9;
          break;
        case "Saturday":
          totalSum = grpOfPpl * 15.6;
          break;
        case "Sunday":
          totalSum = grpOfPpl * 16;
          break;
      }
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    }
  } else if (typeOfGrp === "Regular") {
    switch (dayOfWeek) {
      case "Friday":
        totalSum = grpOfPpl * 15;
        break;
      case "Saturday":
        totalSum = grpOfPpl * 20;
        break;
      case "Sunday":
        totalSum = grpOfPpl * 22.5;
        break;
    }
    if (grpOfPpl >= 10 && grpOfPpl <= 20) {
      totalSum = totalSum - totalSum * 0.05;
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    } else {
      console.log(`Total price: ${totalSum.toFixed(2)}`);
    }
  }
}
vacation(30, "Students", "Sunday");
vacation(90, "Business", "Saturday");
vacation(40, "Regular", "Saturday");
