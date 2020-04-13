
//select
function desplazamiento2(){
  var select = document.getElementById('desplazamiento');
  for (var i = 1; i < 101; i++){
    select.options[select.options.length] = new Option(i, i);
  }
}

desplazamiento2();
//solo numero en el telefono
document.getElementById('telefono').addEventListener('keypress', soloNumeros);
function soloNumeros()
{
  if ((event.keyCode < 48) || (event.keyCode > 57))
  {
    event.returnValue = false;
  }
}


document.getElementById('btnEnviar').addEventListener('click', enviarDatos);
function enviarDatos() 
{
 
  /*if (document.getElementById('nombreUsuario').value == ""){
    alert('campos obligatorios');
    return false;
  }*/

  if(document.getElementById('nombreUsuario').value != "" && document.getElementById('correoElectronico').value != ""  &&  document.getElementById('telefono').value != ""){
    //Aca ocultando las cajas informacionPersonal //
    document.getElementById("informacionPersonal").style.display="none"; //esconder
    document.getElementById("seccionMensajes").style.display="block";  //mostrar
    document.getElementById("mensajeBienvenida").style.display="block";  //mostrar
    document.getElementById("bienvenida").innerHTML = "<i> Bienvenida  " +  document.getElementById("nombreUsuario").value+" a nuestra fundacion, si quieres contar tu historia o pedir nuestra ayuda, nos puedes enviar un mensaje cifrado, asi nadie podra ver lo que escribiste solo nosotras. Estaremos en contanto...</i> ";
  }else{
    alert('Todos los campos son obligatorios');
    document.getElementById('nombreUsuario').title="Debe escribir un nombre";
    document.getElementById('correoElectronico').title="Debe escribir un mail";
    document.getElementById('telefono').title="Debe escribir un telefono";

  }
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
  let encodedText = window.cipher.encode(desplazamiento,texto);


  document.getElementById("tuMensaje").value = encodedText;

}

document.getElementById('btnDescifrar').addEventListener('click', Descifrar);

function Descifrar() {
  let textoOne= document.getElementById("escribeMensaje").value.toUpperCase();
  let desplazarOne= document.getElementById("desplazamiento").value;
  
  let decodeText=window.cipher.decode(desplazarOne,textoOne);

    document.getElementById("tuMensaje").value = decodeText;
}

 
document.getElementById('btnBorrar').addEventListener('click', Borrar);

function Borrar() {

  document.getElementById("tuMensaje").value = "";
  document.getElementById("escribeMensaje").value = "";

}


document.getElementById('btnEnviar2').addEventListener('click', enviarMensaje);
function enviarMensaje() 
{
  document.getElementById("todo").style.display="none"; //esconder
  document.getElementById("mensajeDespedida").style.display="block";  //mostrar

}
document.getElementById('btnVolver').addEventListener('click', volverPrincipal);
function volverPrincipal() 
{
  location.reload();
}

//import cipher from './cipher.js';

//console.log(cipher);

