function calorieObj(arr) {
  // let obj = {};
  return arr.reduce((acc, curr, i)=>{
   if(i % 2 ===0) acc[curr]=Number(arr[i+1]);
   return acc;
  }, {})
//One way of solution
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) obj[arr[i]] = Number(arr[i+1]);
//   }
//   return obj;
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// { Yoghurt: 48, Rise: 138, Apple: 52 }
calorieObj(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
