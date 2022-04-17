const GrowthOfPopulation = (p0,percent,aug,p) =>{

    yearCounter =0;
    while (p0<p) {

       p0 = p0 + Math.floor(p0 * (percent/100)) + aug;
       yearCounter++;
        
    }

    return yearCounter;
}

console.log(GrowthOfPopulation(1500, 5, 100, 5000));
console.log(GrowthOfPopulation(1500000, 2.5, 10000, 2000000));



