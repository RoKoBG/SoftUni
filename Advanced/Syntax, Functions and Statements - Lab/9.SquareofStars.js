function squareofStars(param) {
    if(param !==Number){
        let param = 5;
    }
    for(i = 0; i < param; i++){
        let row = ''
            for(j = 0; j < param; j++){
                row+=' *'
            }
            
            console.log(row + " ");
        }
    
}
//squareofStars(1);
//squareofStars(2);
squareofStars(5);
//squareofStars(7);