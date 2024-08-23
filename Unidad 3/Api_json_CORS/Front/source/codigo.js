/* ------- -Programacion 2 - Prof.Emilio Amero ----------------- */

//Llamamos a la funcion 
obtenerUsuarios();


function eliminarUsuario(codigo) {
    //mensaje de confirmacion

    axios.delete('http://localhost:3000/data/' + codigo)
        .then(respuesta => {
            alert("Usuario Eliminado")
        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
        });
}

function consultarDatos(registroConsultado) {
    let nombre = document.getElementById("nombre");
    nombre.value = registroConsultado.nombre;
    nombre.disabled = true;
}


function obtenerUsuarios() {
    //Utilizo Axios,tambien s epuede usar Fetch
    axios.get('http://localhost:3000/data')
        .then(respuesta => {
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
                let filaTabla = document.createElement('tr');

                //Creamos por DOM las Celdas de la tabla 
                let datoCodigo = document.createElement('td');
                datoCodigo.textContent = registro.id;
                let datoNombre = document.createElement('td');
                datoNombre.textContent = registro.nombre;

                let celdaAcciones = document.createElement('td');

                let botonEliminar = document.createElement('button');
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener('click', function () {
                    eliminarUsuario(registro.id);
                });

                let botonConsultar = document.createElement('button');
                botonConsultar.textContent = "Consultar";
                botonConsultar.addEventListener('click', function () {
                    consultarDatos(registro);
                });

                let botonModificar = document.createElement('button');
                botonModificar.textContent = "Modificar";

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
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
        });
}
