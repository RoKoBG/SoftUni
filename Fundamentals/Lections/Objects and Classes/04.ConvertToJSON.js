function convToJson(name, lastName, hairColor) {
    let obj = {name, lastName, hairColor};
    console.log(JSON.stringify(obj));

} convToJson('George', 'Jones', 'Brown')
