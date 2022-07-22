function inventory(input){
    let heroes = [];
    for(let heroInfo of input){
        //let [name,level,items]=heroInfo.split(' / ') --- Same as bottom code just simpler :)
        let splitedEl = heroInfo.split(' / ');
        let name = splitedEl[0];
        let level = splitedEl[1];
        let items = splitedEl[2];

        let currHero = {
            name: name,
            level:Number(level),
            items: items,
        };
        heroes.push(currHero);
    }
    let sortedByLevel = heroes.sort((a,b)=>{
        return a.level -b.level;
    });
    for(const hero of sortedByLevel){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }


}inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);