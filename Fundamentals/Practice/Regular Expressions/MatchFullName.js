function matchName(name) {
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames =[];
    while((validName = regex.exec(name)) !== null){
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '));
    
}matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
