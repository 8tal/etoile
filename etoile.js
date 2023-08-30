function ultime(taille){
    let etoile = "";

    //Première branche
    for(let y = 1; y <= taille*4; y++){
        for(let x = 1; x <= taille*6-1; x++){
          if(x == taille*2+taille && y == 1 ){
            etoile += "*";
          }else if( y == taille*3-x+1 && y<= taille){
            etoile += "*"
          }else if( x == taille*3+y-1 && y<= taille){
            etoile += "*"
          }
          //première branche inverse
          else if(x == taille*2+taille && y == taille*4){
            etoile += "*";
          }else if( y == x + taille && y>= taille*3+1){
            etoile += "*";
          }else if( x == taille*7-y && y>= taille*3+1){
            etoile += "*"
          }
          //Deuxième branche 
          else if((y == taille+1 && x <= taille*2-1)  || (y == taille+1 && x >= taille*5-taille+1)){
            etoile += "*";
          }
          else if((y == taille*3 && x <= taille*2-1)  || (y == taille*3 && x >= taille*5-taille+1)){
            etoile += "*";
          }else if( y == taille*7-x && y <=taille*2){
            etoile += "*"
          }else if( y == x-taille*3+1 && y >=taille*2+1){
            etoile += "*"
          }else if( y == taille*3-x+1 && y >=taille*2+1){
            etoile += "*"
          }else if( y == taille+x && y <=taille*2){
            etoile += "*"
          }

          else{
            etoile += " ";
          }
        }
        etoile += "\n";
    }
 
    return etoile;
}



console.log(ultime(6));