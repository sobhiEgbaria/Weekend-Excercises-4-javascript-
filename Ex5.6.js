function maskify(string){
    
    let  word = '#'.repeat(string.length-4)+string[string.length-4]+string[string.length-3]+string[string.length-2]+string[string.length-1];
    return word;
 }
 
 console.log(maskify('abcdefghi'));