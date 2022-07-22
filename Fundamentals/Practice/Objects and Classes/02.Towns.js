function town(input) {
    let currTown = {};
    for (let city of input) {
        let cityEl = city.split(' | ')
        let townName = cityEl[0];
        let townLatitude = Number(cityEl[1]);
        let townLongitude = Number(cityEl[2]);
        currTown.town = townName;
        currTown.latitude = townLatitude.toFixed(2);
        currTown.longitude = townLongitude.toFixed(2);
        console.log(currTown);
    }
    

} town(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);