function partyTime(data) {
  let vip = [];
  let normal = [];
  let isParty = false;
  for(let guest of data){
      if(guest === "PARTY"){
      isParty = true;
      continue;
      }
      if(!isParty){
        let firstCh = guest[0];
          if(isNaN(firstCh)){
              normal.push(guest);
          }else{
              vip.push(guest);
          }
      }else{
        let firstCh = guest[0];
          if(isNaN(firstCh)){
              let index = normal.indexOf(guest);
              normal.splice(index, 1)
          }else{
              let index  = vip.indexOf(guest);
            vip.splice(index, 1);
          }
          
          
      }
  }
  let size = vip.length+normal.length;
  console.log(size);
  for(let code of vip){
      console.log(code);
  }
  for(let code of normal){
      console.log(code);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
