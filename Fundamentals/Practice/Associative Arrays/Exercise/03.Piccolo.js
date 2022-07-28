function piccolo(data) {

    let park = new Set();

    for(let line of data){

        let tokens = line.split(", ");
        let command = tokens[0];
        let carNum = tokens[1];

        switch(command){
            case"IN":
            park.add(carNum);
            break;
            case "OUT":
                park.delete(carNum);
                break;
        }
    }
    if(park.size===0){
        return console.log("Parking Lot is Empty");
    }
    let sortPark = Array.from(park.values()).sort();
console.log(sortPark.join("\n"))
}
piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
console.log("-------------------");
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);
