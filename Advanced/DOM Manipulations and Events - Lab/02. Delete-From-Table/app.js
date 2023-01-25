function deleteByEmail() {

 // read input value
const query = document.querySelector('input[name="email"]').value;

//get all rows
const rows = document.querySelectorAll('#customers tbody tr');
const rowsArr = Array.from(rows)

let deleted = false;
// Iterate rows and compare content to input
const match = rowsArr.find(row => row.children[1].textContent==query);
if(match){
    match.remove();
    document.getElementById('result').textContent = 'Deleted'
    // Iterate with FOR Of
// for (const row of rowsArr) {
//     const col = row.children[1];
//     if(col.textContent == query){

//         // remove matching row
//         row.remove();
//         deleted = true;
//     }
    
   // document.getElementById('result').textContent = match ? 'Deleted.' : 'Not found.';
}else{
    document.getElementById('result').textContent = 'Not found.'}

}
