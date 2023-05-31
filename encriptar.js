var boton1 = document.querySelector("#btn-encriptar"); 
var boton2 = document.querySelector("#btn-desencriptar");
var salida = document.querySelector("#btn-msg"); 
var boton3 = document.querySelector("#btn-copy"); 

function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

}
    
function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;

}


boton1.onclick = encriptar;
boton2.onclick = desencriptar;
