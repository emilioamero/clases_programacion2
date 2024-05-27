/* -----Funciones------ */

function miFuncion() {
  let numero1 = prompt("Ingrese Numero");
  let numero2 = prompt("Ingrese Numero");

 
  suma(parseInt(numero1), parseInt(numero2));
}

  var el = document.getElementById("t");
  el.addEventListener("click", miFuncion,false);

function suma(valor1, valor2) {
  let resultado = valor1 + valor2;
  document.write(resultado);
}

/* Funciones nativas*/

let a = 10;
let b = "1" + 3 + "10";

console.log(parseFloat(a) + parseFloat(b));

/* Funciones Propias */

function mifuncion() {
  //Intrucciones Funciones;
}
/* Evento onClick */

/* ---------Flecha -------------- */
/* 
// Función tradicional
let suma = function (a, b) {
  return a + b;
};

/* Flecha 
let sum = (a, b) => a + b; */
