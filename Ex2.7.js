const BasicMath = ( number1,char, number2) =>{

    if(char == "+"){
        return (number1+number2)
    }
    else if (char == "-"){
        return (number1-number2)

    }
    else if (char == "*"){
        return (number1*number2)

    }
    else {
        return (number1/number2)
    }

}

console.log(BasicMath(4,"+" ,7));// Output: 11
console.log(BasicMath(15,"-" ,18)); // Output: -3
console.log(BasicMath(5,"*" ,5));// Output: 25
console.log(BasicMath(49,"/" ,7));// Output: 7



 
