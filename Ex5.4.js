const weard = (string) =>{

    let array =  string.split(" ");
  let weardCse = "";
  
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {
            
        if(j%2==0){
            weardCse +=array[i][j].toUpperCase();
        }
        else{
            weardCse +=array[i][j];
        }      
    }
    weardCse += " "
  
  } 
  return weardCse
}
  console.log(weard("sobhi egbaria"));