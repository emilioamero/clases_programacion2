
/* Consola documento */

/* Consola objeto */

/* Obtencion de valores
Elemento especifico:
.getElementById(id)

array
.getElementsByClassName(class) 
.getElementsByName(name)
.getElementsByTagName(tag) 


.querySelector() solo 0
.querySelectorAll() todos

indice, largo


#id
.clse
div -> por tag
('[name="nickname"]')

*/

/* asignacion de atributos a objetos */

/* div Hidden con boton  */





let parrafo = document.getElementById('parrafoprincipal');
let boton1 = document.getElementById('botonocultar');
boton1.textContent='Ocultar';

function mifuncion(){
    if (parrafo.hidden) {
        parrafo.hidden=false;
        boton1.textContent='Ocultar';
    }else{
        parrafo.hidden=true;
     
        boton1.textContent='Mostrar';
    }

}





