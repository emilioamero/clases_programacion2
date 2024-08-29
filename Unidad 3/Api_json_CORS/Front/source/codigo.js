/* ------- -Programacion 2 - Prof.Emilio Amero ----------------- */

//Llamamos a la funcion
obtenerUsuarios();

function eliminarUsuario(codigo) {
  //mensaje de confirmacion

  axios
    .delete("http://localhost:3000/data/" + codigo)
    .then((respuesta) => {
      alert("Usuario Eliminado");
    })
    .catch((error) => {
      // Manejar errores
      console.error("Hubo un problema con la solicitud:", error);
    });
}

function modificarDatos(registroConsultado) {
  let nombre = document.getElementById("nombre");
  nombre.value = registroConsultado.nombre;
  nombre.disabled = false;

  let apellido = document.getElementById("apellido");
  apellido.value = registroConsultado.apellido;
  apellido.disabled = false;

  let ciudad = document.getElementById("ciudad");
  ciudad.value = registroConsultado.ciudad;
  ciudad.disabled = false;

  let edad = document.getElementById("edad");
  edad.value = registroConsultado.edad;
  edad.disabled = false;

  let idUsuario = document.getElementById("idUsuario");
  idUsuario.value = registroConsultado.id;
  idUsuario.disabled = false;
}

function consultarDatos(registroConsultado) {
  let nombre = document.getElementById("nombre");
  nombre.value = registroConsultado.nombre;
  nombre.disabled = true;

  let apellido = document.getElementById("apellido");
  apellido.value = registroConsultado.apellido;
  apellido.disabled = true;

  let ciudad = document.getElementById("ciudad");
  ciudad.value = registroConsultado.ciudad;
  ciudad.disabled = true;

  let edad = document.getElementById("edad");
  edad.value = registroConsultado.edad;
  edad.disabled = true;

  let idUsuario = document.getElementById("idUsuario");
  idUsuario.value = registroConsultado.id;
  idUsuario.disabled = true;
}

function obtenerUsuarios() {
  //Utilizo Axios,tambien s epuede usar Fetch
  axios
    .get("http://localhost:3000/data")
    .then((respuesta) => {
      //La respuesta del servidor esta compuesta por varias partes.
      //Solo vamos a utilizar el data que es la informacion que necesitamos

      //Tomamos todos los datos recibidos, accedemos
      let datos = respuesta.data;

      console.log(respuesta);

      //Tomamos instancia de la tabla que es la parte dinamica
      let table_usuario = document.getElementById("table_usuario");

      for (let indice = 0; indice < datos.length; indice++) {
        //Tomamos registro por registro
        let registro = datos[indice];

        //Creamos por DOM la fila de la tabla
        let filaTabla = document.createElement("tr");

        //Creamos por DOM las Celdas de la tabla
        let datoCodigo = document.createElement("td");
        datoCodigo.textContent = registro.id;
        let datoNombre = document.createElement("td");
        datoNombre.textContent = registro.nombre;

        let celdaAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          eliminarUsuario(registro.id);
        });

        let botonConsultar = document.createElement("button");
        botonConsultar.textContent = "Consultar";
        botonConsultar.addEventListener("click", function () {
          consultarDatos(registro);
        });

        let botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        botonModificar.addEventListener("click", function () {
          modificarDatos(registro);
        });

        celdaAcciones.appendChild(botonEliminar);
        celdaAcciones.appendChild(botonConsultar);
        celdaAcciones.appendChild(botonModificar);

        //Agrego la Celda a la fila
        filaTabla.appendChild(datoCodigo);
        filaTabla.appendChild(datoNombre);
        filaTabla.appendChild(celdaAcciones);

        //Agrego fila a la tabla
        table_usuario.appendChild(filaTabla);
      }
    })
    .catch((error) => {
      // Manejar errores
      console.error("Hubo un problema con la solicitud:", error);
    });
}

function guardarUsuario() {

  let usuario = {
    "id": Number(document.getElementById("idUsuario").value),
    "nombre":  document.getElementById("nombre").value ,
    "apellido": document.getElementById("apellido").value,
    "edad": Number(document.getElementById("edad").value) ,
    "ciudad" : document.getElementById("ciudad").value
  };



  // Realizar una solicitud POST a JSONPlaceholder para crear un nuevo post
  axios.post("http://localhost:3000/data", usuario)
    .then((response) => {
      // Manejar los datos recibidos
      console.log("Respuesta del servidor:", response.data);
      obtenerUsuarios();
    })
    .catch((error) => {
      // Manejar errores
      console.error("Hubo un problema con la solicitud POST:", error);
    });
}
