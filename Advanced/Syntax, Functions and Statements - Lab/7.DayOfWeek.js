function dayOfWeek(param) {
    let result =0;
    if(param === 'Monday'){
        result =1;
        console.log(result);
    }else if(param ==='Tuesday'){
        result = 2;
        console.log(result);
    }
    else if(param ==='Wednesday'){
        result = 3;
        console.log(result);
    }
    else if(param ==='Thursday'){
        result = 4;
        console.log(result);
    }
    else if(param ==='Friday'){
        result = 5;
        console.log(result);
    }
    else if(param ==='Saturday'){
        result = 6;
        console.log(result);
    }
    else if(param ==='Sunday'){
        result = 7;
        console.log(result);
    }else{
        console.log(`error`);
    }
}dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');