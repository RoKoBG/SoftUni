function matchPhoneNumber(arr) {
    let regex = /\+359[ ][2][ ]\d{3}[ ]\d{4}\b|\+359[-][2][-]\d{3}[-]\d{4}\b/g;
    let valid =[];

    // let validName = regex.exec(arr);
    // while(validName !== null)...

    while((validName = regex.exec(arr)) !== null){
        valid.push(validName[0])
    }
    console.log(valid.join(', '));
}
matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
