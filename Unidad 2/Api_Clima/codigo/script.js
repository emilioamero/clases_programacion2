//Alerta de seleccion de ciudadoculta
let alerta = document.getElementById("alerta");
alerta.hidden = true;

//seteo la imagen aca para darle tamaño fijo
let imagen = document.getElementById("imagenclima");
imagen.style.width = "140px";

//div inner html
let innerhtmldiv = document.getElementById("innerhtmldiv");

//oculto el label de temperatura y muestro la animacion, luego lo seteo
let temperatura = document.getElementById("valortemperatura");
temperatura.hidden = true;
let animacioncargaclima = document.getElementById("animacioncargaclima");
animacioncargaclima.hidden = false;

async function cargarClima() {
  //controlo que selecciono ciudad
  let codigopostal = document.getElementById("select1").value;
  if (codigopostal == 0 || codigopostal == "0") {
    alerta.hidden = false;
    return;
  } else {
    alerta.hidden = true;
  }

  let decripcion = document.getElementById("descclima");
  decripcion.innerText = "Buscando ...";
  temperatura.hidden = true;
  animacioncargaclima.hidden = false;

  await fetch(
    `http://api.weatherunlocked.com/api/current/${codigopostal}?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response;
    })
    .then((response) => response.json()) //Respuesta Cabecera
    .then((data) => {
      //Respuesta Body

      console.log(data);

      datosClima(data);
    });
}

function datosClima(datos) {
  // let temperatura = document.createElement("h2");
  // let decripcion = document.createElement("h2");
  //  let imagen = document.createElement("img");
  let temperatura = document.getElementById("valortemperatura");
  let decripcion = document.getElementById("descclima");

  let longitud = document.getElementById("valorlongitud");
  let latitud = document.getElementById("valorlatitud");
  let direccionviento = document.getElementById("direccionviento");
  let direccionvientocod = document.getElementById("direccionvientocod");
  let velocidadviento = document.getElementById("velocidadviento");
  let humedad = document.getElementById("humedad");
  let sensaciontermica = document.getElementById("sensaciontermica");

  temperatura.hidden = false;
  animacioncargaclima.hidden = true;

  //Titulo card
  let climalugar = document.getElementById("climalugar");
  let listaciudad = document.getElementById("select1");

  //Extraer texto de la lista desplegable
  let selectedText = listaciudad.options[listaciudad.selectedIndex].text;
  climalugar.textContent = "Clima en " + selectedText;
  //climalugar = select.options[select.selectedIndex].text;

  //Valor temperatura
  temperatura.textContent = datos.temp_c + "°";

  //Descripcion, cambio nuboso por Nublado
  let des = "";
  des = datos.wx_desc;
  des = des.replace("nuboso", "Nublado");
  decripcion.textContent = des;

  // Icono
  let icono = "";
  icono = datos.wx_icon;
  icono = icono.substring(0, icono.length - 3); // viene en gif y yo lo quiero en png
  imagen.alt = "Imagen clima";
  imagen.src = "./img_apiclima/" + icono + "png";

  //coordenadas
  longitud.value = datos.lon + "°";
  latitud.value = datos.lat + "°";

  //Viento
  velocidadviento.value = datos.windspd_kmh + " kmh";
  direccionvientocod.value = datos.winddir_compass;
  let dire = "";
  dire = datos.winddir_compass;
  direccionviento.value = "";

  
  if (dire.length == 3) {
    let ordinal = dire.substring(0, 1);
    let cardinal = dire.substring(1, 3);
    direccionviento.value =
      valorPuntoCardinal(ordinal) + " - " + valorPuntoCardinal(cardinal);
  } else {
    direccionviento.value = valorPuntoCardinal(datos.winddir_compass);
  }

  //Humedad
  humedad.value = datos.humid_pct + "%";
  //Sensacion terica
  sensaciontermica.value = datos.feelslike_c + "°";

  //inner html
  let imageninnerhtml = "./img_apiclima/" + icono + "png";
  agregarInformaciondiv(datos.temp_c + "°", imageninnerhtml);
}

function agregarInformaciondiv(valortemp, imagen) {
  innerhtmldiv.innerHTML = `  
    <div class="card bordecard mb-3 mt-3">
      <div class="card-header">
        <h6 id="" class="climalugar">Usando Inner HTML</h6>
      </div>
      <div class="row">
      <div class="col-lg-6 col-sm-12">

      <label for="" id="" class="labelTemperaturacss">
        ${valortemp}
      </label>
    </div>
        <div class="col-6">
          <img
            id=""
            class="card-img-top"
            style="width: 140px;"
            src="${imagen}"
          />
        </div>
      </div>
      </div>`;
}

function valorPuntoCardinal(valor) {
  //console.log(valor);
  switch (valor) {
    case "N":
      return "Norte";
    case "S":
      return "Sur";
    case "E":
      return "Este";
    case "W":
      return "Oeste";
    case "NE":
      return "Noroeste";
    case "SE":
      return "Sureste";
    case "SW":
      return "Suroeste";
    case "NW":
      return "Noroeste";
    default:
      return "Sin DEFINIR";
  }
}
