
// Array con los elementos

const nombres = [
    "Barcelona Leandro José",
    "Basso Peretti María Antonella",
    "Bergese Máximo",
    "Costamagna Lucas",
    "Cruz Rami Valentin",
    "D Aloia Alejo",
    "Ezenga Guadalupe",
    "Ferrere Juan Ignacio",
    "Frascarelli Samir",
    "Fuentes Damaris Luz",
    "Guzman Maximiliano Miguel",
    "Juvé Agustín Nicolás",
    "Lamponi Santiago Miguel",
    "Lazos Santiago Daniel",
    "Mairone Andrés",
    "Martina Valentín",
    "Martinez Ávila Alejo",
    "Miño Misael",
    "Molinero Bárbara Ruth",
    "Mondino Vito Valentín Alejandro",
    "Murúa Aarón Alejandro",
    "Nicolino Jorge Gabriel",
    "Pedraza María Virginia",
    "Pérez Lautaro Gines",
    "Pigliacampi Lucía Antonella",
    "Requena Tobias Gabriel",
    "Rumachella Fabrizzio",
    "Sánchez Tomás",
    "Sayago Francisco Enrique",
    "Scampone Garcia Santino",
    "Schmidt Alejo",
    "Strubbia Matías Agustín",
    "Urenda Santiago Javier"
];
let contador_tiempo = 0;

let h5_cantidad_alumnos = document.getElementById("h5_cantidad_alumnos");

h5_cantidad_alumnos.innerText = "Cantidad de alumnos: " + nombres.length;

reiniciar();

// Función para sortear aleatoriamente entre los elementos
function sortearElemento() {
    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);

    const elementoSorteado = nombres[indiceAleatorio];

    let btn_sorteo = document.getElementById("btn_sorteo");
    btn_sorteo.innerText = elementoSorteado;
    
}

function reiniciar(){
    let btn_sorteo = document.getElementById("btn_sorteo");
    btn_sorteo.innerText = 'Sorteo';
}

function ejecutar_timer() {

    let tiempo = setInterval(() => {
        sortearElemento();
        contador_tiempo++;

        if (contador_tiempo == 10) {
            contador_tiempo = 0;
            clearInterval(tiempo)
        };

    }, 300);
}


