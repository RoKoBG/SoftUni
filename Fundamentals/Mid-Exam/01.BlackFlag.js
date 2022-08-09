function blackFlag(arr) {
  let daysOfPlunder = Number(arr[0]);
  let dailyPlunder = Number(arr[1]);
  let expectedPlunder = Number(arr[2]);
  let plundered = 0;
  let procent=0;
  let counter = 0;
  for (let days = 1; days <= daysOfPlunder; days++) {
    counter++;
    plundered += dailyPlunder;
    if(counter % 3===0){
     plundered = plundered  +(dailyPlunder * 0.5);
    }
    if(counter% 5 ===0){
        plundered = plundered -(plundered*0.3)
    }
  }
  if(plundered >= expectedPlunder){
    console.log(`Ahoy! ${plundered.toFixed(2)} plunder gained.`);
}
if(plundered< expectedPlunder){
 procent = plundered/expectedPlunder*100;
 console.log(`Collected only ${procent.toFixed(2)}% of the plunder.`);
}
  
}
blackFlag(["5", "40", "100"]);
blackFlag(["10",
"20",
"380"]);
