const Fibonacci = (int) =>{

    let arrFibonacci = [];
    arrFibonacci[0]=0, arrFibonacci[1]=1;

    for (let i = 2; i < int; i++) {

        arrFibonacci[i]=arrFibonacci[i-1]+arrFibonacci[i-2];
               
    }

    return arrFibonacci;
}

console.log(Fibonacci(12));