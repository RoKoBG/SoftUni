function companyUsers(data) {
    let obj = {};
    for(let line of data){
        let [company, users] = line.split(" -> ");
        if(!obj.hasOwnProperty(company)){
            obj[company] = [];
        }
        if(!obj[company].includes(users)){
            obj[company].push(users);

        }
    }
    let sortedCompanies = Object.keys(obj);
    sortedCompanies.sort((a,b) => a.localeCompare(b));
    for(let company of sortedCompanies){
        console.log(company);
        for(let employes of obj[company]){
            console.log(`-- ${employes}`);
        }
    }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("--------------------------------");
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
