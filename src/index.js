
function desplazamiento2(){
  var select = document.getElementById('desplazamiento');
  for (var i = 1; i < 101; i++){
    select.options[select.options.length] = new Option(i, i);
  }
}

desplazamiento2();

document.getElementById('btnEnviar').addEventListener('click', enviarDatos);
function enviarDatos() 
{
  //Aca ocultando las cajas informacionPersonal //
  document.getElementById("informacionPersonal").style.display="none"; //esconder
  document.getElementById("seccionMensajes").style.display="block";  //mostrar
  document.getElementById("mensajeBienvenida").style.display="block";  //mostrar
  document.getElementById("bienvenida").innerHTML = "<i> Bienvenida  " +  document.getElementById("nombreUsuario").value+" a nuestra fundacion, si quieres contar tu historia o pedir nuestra ayuda, nos puedes enviar un mensaje cifrado, asi nadie podra ver lo que escribiste solo nosotras. Estaremos en contanto...</i> ";
 
}

document.getElementById('escribeMensaje').addEventListener('keyup', aMayuscula);

function aMayuscula() 
{
  var str = document.getElementById("escribeMensaje").value;
  var res = str.toUpperCase();
  document.getElementById("escribeMensaje").value = res;
}

document.getElementById('btnCifrar').addEventListener('click', Cifrar);

function Cifrar() {

  let texto= document.getElementById("escribeMensaje").value.toUpperCase();
  let desplazamiento= document.getElementById("desplazamiento").value;
  let mensajeCifrado = "";

  for (let i=0; i<texto.length; i++){
    let ascii= texto.charCodeAt([i]);
    //let posicion = 
   // (ascii - 65 + (desplazamiento)% 26 + 65);

    let posicion;
    //alert(ascii);
    // escribiendo con mayuscular
    if (ascii >= 65 && ascii <= 90) {
      // si usa espacio
      posicion = (ascii - 65 + parseInt(desplazamiento)) % 26 + 65;
      //alert('*');
    }//else if(ascii == 209)
     // posicion = (ascii - 209 + parseInt(desplazamiento)) % 26 + 209;

   
     else posicion = ascii;

    mensajeCifrado +=String.fromCharCode(posicion);
  }

  document.getElementById("tuMensaje").value = mensajeCifrado;
 
}

document.getElementById('btnDescifrar').addEventListener('click', Descifrar);

function Descifrar() {
  let textoOne= document.getElementById("escribeMensaje").value.toUpperCase();
  let desplazarOne= document.getElementById("desplazamiento").value;
  let mensajeDescifrado = "";
  let posicion;

  for (let i=0; i<textoOne.length; i++){
    let asciI= textoOne.charCodeAt([i]);
    
//con mayusculas
    if (asciI >= 65 && asciI <= 90) {
      //con espacio
      posicion = (asciI - 65 - parseInt(desplazarOne)) % 26 + 65;
   
    }else{ 
      posicion = asciI;
    }
    mensajeDescifrado +=String.fromCharCode(posicion);
  }
    document.getElementById("tuMensaje").value = mensajeDescifrado;
}

 
document.getElementById('btnBorrar').addEventListener('click', Borrar);

function Borrar() {

  document.getElementById("tuMensaje").value = "";
  document.getElementById("escribeMensaje").value = "";

}



document.getElementById('telefono').addEventListener('keypress', soloNumeros);
function soloNumeros()
{
  if ((event.keyCode < 48) || (event.keyCode > 57))
  {
    event.returnValue = false;
  }
}




import cipher from './cipher.js';

console.log(cipher);