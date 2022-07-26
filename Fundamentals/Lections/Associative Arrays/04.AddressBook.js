function addressBook(data) {
    let books = {};
    for(let line of data){
        let [name, address] = line.split(":");
        books[name] = address;
    }



    let entries = Object.entries(books);
    let sortEntries= entries.sort(([keyA,valueA],[keyB,valueB]) =>{
        return keyA.localeCompare(keyB);
    })

    //  Other way of sorting only the keys.
    
    //let unsortedEntries= Object.keys(books);
    //let sortedEntries = unsortedEntries.sort((a,b) => a.localeCompare(b));
    
    for(let [name, address] of sortEntries){
        console.log(`${name} -> ${address}`);
    }

} addressBook([
    'Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);
