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
    for(let [name, address] of sortEntries){
        console.log(`${name} -> ${address}`);
    }

} addressBook([
    'Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);
