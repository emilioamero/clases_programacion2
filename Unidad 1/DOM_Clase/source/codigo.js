
let nacionalidad = "Brasilero";

function cambiarTitulo(valor) {
    let hola = "Hola perdida";
    let tituloPrincipal = document.getElementById("tituloPrincipal");
    tituloPrincipal.textContent = valor;
}

/* Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "success"
  });
 */

function tomarValor() {

    let campo_nacionalidad = document.getElementById("campo_nacionalidad").value;

    Swal.fire({
        title: "Sistema Emilio",
        text:campo_nacionalidad ,
        icon: "success"
      });
    
}