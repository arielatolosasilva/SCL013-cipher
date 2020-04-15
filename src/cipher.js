//ini
window.cipher = {
 
  encode: function (offset, string) {
    let mensajeCifrado = "";
    for (let i=0; i<string.length; i++){

      let ascii= string.charCodeAt([i]);
      let posicion;

      if (ascii >= 65 && ascii <= 90) {
 
          posicion = ((ascii - 65 + parseInt(offset)) % 26 + 65);
      }else{
        
          posicion = ascii;
      }
   
      mensajeCifrado +=String.fromCharCode(posicion);
      
    }//cierre for
    return mensajeCifrado;
   
  },
  
  decode: function (offset, string) {
    let mensajeDescifrado = "";
    for (let i=0; i<string.length; i++){
      let asciI= string.charCodeAt([i]);
      let posicion;
  //con mayusculas
      if (asciI >= 65 && asciI <= 90) {
  
        posicion = (asciI - 65 - parseInt(offset)) % 26 + 65;
        var dif = 65-posicion;
        if(dif>0){
          posicion= 91-dif;
        }
      }else{ 
        posicion = asciI;
      }
      mensajeDescifrado +=String.fromCharCode(posicion);
    
  }
   return mensajeDescifrado
}
}
export default window.cipher;
//cambios