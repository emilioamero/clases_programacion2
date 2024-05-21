
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
        text: campo_nacionalidad,
        icon: "success"
    });


}


function setValorCampoTexto() {
    let campo_nacionalidad = document.getElementById("campo_nacionalidad");

    campo_nacionalidad.value = 35;
}

//document.writeln("Hola");
//generarContenido();
function generarContenido() {
    let textosArray = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt",
        "ut labore et dolore magna aliqua",
        "Ut enim ad minim veniam",
        "quis nostrud exercitation ullamco",
        "laboris nisi ut aliquip ex ea commodo",
        "consequat Duis aute irure dolor",
        "in reprehenderit in voluptate velit",
        "esse cillum dolore eu fugiat nulla"
    ];

    let contenedor = document.getElementById("contenedor");

    let colorAlternado = false;
    textosArray.forEach(elementodelarray => {
        let parrafo = document.createElement('p');

        parrafo.innerText = elementodelarray;
        if (colorAlternado == true) {
            parrafo.className = "estilo1";
            colorAlternado = false;
            // parrafo.hidden = true;
        } else {
            parrafo.className = "estilo2";
            colorAlternado = true;
        }

        contenedor.appendChild(parrafo);
    });

    /* 
        let colorAlternado = false;
        for (let index = 0; index < textosArray.length; index++) {
            let parrafo = document.createElement('p');
    
            parrafo.innerText = textosArray[index];
            if (colorAlternado == true) {
                parrafo.className = "estilo1";
                colorAlternado = false;
                // parrafo.hidden = true;
            } else {
                parrafo.className = "estilo2";
                colorAlternado = true;
            }
    
    
    
            contenedor.appendChild(parrafo);
        } */

    //contenedor.innerText = "Hola";


}


function obtenerValue() {
    let ciudades = document.getElementById("ciudades").value;

    if (ciudades == "no_ciudad") {
        alert("Selecciones Ciudad");
        return;
    }
    alert(ciudades)
}

generarSelect();
let ciudadesArray = [
    "Nueva York",
    "Los Ángeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Filadelfia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San José"
  ];
function generarSelect() {
    let ciudades2 = document.getElementById("ciudades2");
    let opcion = document.createElement("option");
    let opcion2 = document.createElement("option");

    ciudades2.classList.add("estilo1")
    ciudades2.classList.add("estilo3")

    opcion.value="villa_maria";
    opcion.text= "Villa María";

    opcion2.value="villa_nueva";
    opcion2.text= "Villa Nueva";
    opcion2.selected = true;

    ciudades2.appendChild(opcion);
    ciudades2.appendChild(opcion2);
}