const findNextSquare =(int) =>{

    let sqrt = Math.sqrt(int); 

    if (sqrt % Math.floor(sqrt)===0){

        let findNextSquare = ((sqrt+1)**2)
        return findNextSquare;
    }
   else return -1;

}
console.log(findNextSquare(144))
console.log(findNextSquare(100))
console.log(findNextSquare(114))