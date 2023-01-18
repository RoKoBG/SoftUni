function equalNeighbours(arr) {
    const res = arr.reduce((acc, currRow, rowIndex) => {
       const currCount = currRow.reduce((acc, currItem, itemIndex )=>{
        if(currItem === currRow[itemIndex + 1]){
            acc+=1;
        }
        if(currItem === (arr[rowIndex +1] || [])[itemIndex]){
            acc+=1;
        }
        return acc;

       },0);
        return acc+currCount;
    },0);
  console.log(res);
}
equalNeighbours([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);
// 1
equalNeighbours([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
// 2