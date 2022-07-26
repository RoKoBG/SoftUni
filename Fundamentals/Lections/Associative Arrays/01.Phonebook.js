function phoneBook(input) {
    let phoneBooks = {};
    for(let line of input){
        let tokens = line.split(" ");
        let name = tokens[0];
        let phoneNum  = tokens[1];
        phoneBooks[name]=phoneNum;
    }
    for (let key in phoneBooks){
        console.log(key, "->", phoneBooks[key]);
    }

} phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']);
