import cipher from './cipher.js';


window.addEventListener("load",inicio,);
function inicio(){
   // console.log (cipher.encode("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",34))
    document.getElementById("encode").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;               
        document.getElementById("mensaje2").value = cipher.encode( desplazar, texto);
    },);
    document.getElementById("decode").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;                               
        document.getElementById("mensaje2").value = cipher.decode(desplazar, texto);
    },);
}



