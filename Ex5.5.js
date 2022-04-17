const initials = (string) =>{

    let array =  string.split(" ");
   let initials = "";
  
    for (let i = 0; i < array.length; i++) {
  
        initials +=array[i][0].toUpperCase() 

        if(i!== array.length-1){ initials += "."}
    
    }
  
  return initials
  } 
  
  console.log(initials("sobhi egbaria"));