function storage(data) {
  let map = new Map();
  for (let lines of data) {
    let [product, quantity] = lines.split(" ");
    if(map.has(product)){
        let oldQuantity= map.get(product);
        map.set(product, oldQuantity+Number(quantity));
    }else{
        map.set(product, Number(quantity))
    }

  }
  for([a,b] of map){
      console.log(`${a} -> ${b}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
