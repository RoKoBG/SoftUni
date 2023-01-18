function evenPosEle(arr) {
    let result = [];
    for (let i = 0; i<= arr.length; i+=2) {
        result.push(arr[i]);
        
    }
    console.log(result.join(' '));
}
evenPosEle(['20', '30', '40','50', '60']);
// 20 40 60
evenPosEle(['5', '10']);
// 5