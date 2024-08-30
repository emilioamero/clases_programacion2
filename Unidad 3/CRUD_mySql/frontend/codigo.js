



//cargo usuarios al iniciar


obtenerUsuario();



function consultarUsuario(data) {

    let txtNombre = document.getElementById("txtNombre");
    let txtEmail = document.getElementById("txtEmail");
    let txtId = document.getElementById("txtId");

    txtNombre.value = data.nombre;
    txtEmail.value = data.email;
    txtId.value = data.id;

}

function actualizarUsuario() {
    const apiUrl = `http://localhost:3000/api/users`;

    let txtNombre = document.getElementById("txtNombre");
    let txtEmail = document.getElementById("txtEmail");
    let txtId = document.getElementById("txtId");

    if (txtId.value == "") {
        alert("Seleccionar Un registro");
        return;
    }
    if (txtNombre.value == "" || txtEmail.value == "") {
        alert("Faltan Completar datos");
        return;
    }

    // Datos del nuevo post que queremos crear
    const postData = {
        nombre: txtNombre.value,
        email: txtEmail.value,
        id: txtId.value
    };


    // Realizamos una solicitud POST a la API con Axios
    axios.put(apiUrl, postData)
        .then(function (response) {
            // La respuesta de la API se encuentra en 'response.data'
            console.log(response);

            alert("Usuario Guardado")
            obtenerUsuario();

        })
        .catch(function (error) {
            // Manejo de errores si la solicitud no tiene éxito
            console.error('Error al crear el nuevo post:', error);
        });
}

function agregarUsuario() {
    const apiUrl = `http://localhost:3000/api/users`;

    let txtNombre = document.getElementById("txtNombre");
    let txtEmail = document.getElementById("txtEmail");
    // let txtId = document.getElementById("txtId");

    if (txtNombre.value == "" || txtEmail.value == "") {
        alert("Faltan Completar datos");
        return;
    }

    // Datos del nuevo post que queremos crear
    const postData = {
        nombre: txtNombre.value,
        email: txtEmail.value
    };

    // Realizamos una solicitud POST a la API con Axios
    axios.post(apiUrl, postData)
        .then(function (response) {
            // La respuesta de la API se encuentra en 'response.data'
            console.log(response);

            alert("Usuario Guardado")


            obtenerUsuario();

        })
        .catch(function (error) {
            // Manejo de errores si la solicitud no tiene éxito
            console.error('Error al crear el nuevo post:', error);
        });
}

function borrarUsuario(id) {

let confirmar = confirm(`¿Desea Eliminar el registro ${id} ?`);

if (confirmar==true){

    const apiUrl = `http://localhost:3000/api/users/${id}`;

    axios.delete(apiUrl)
        .then(function (response) {
            console.log('Usuario eliminado con éxito');
            alert("Usuario eliminado con éxito")

            obtenerUsuario();
        })
        .catch(function (error) {
            console.error('Error al eliminar el usuario:', error);
        });
    }
}

function obtenerUsuarioSoloUno() {

    let txtId = document.getElementById("txtId");

    if (txtId.value == "") {
        alert("Seleccionar Un registro");
        return;
    }

    const apiUrl = `http://localhost:3000/api/users`;
    const postId = txtId.value;

    console.log(apiUrl);

    axios.get(`${apiUrl}`)
    .then(function (response) {
        // La respuesta de la API se encuentra en 'response.data'
        const post = response.data;
    
    })
    .catch(function (error) {
        // Manejo de errores si la solicitud no tiene éxito
        console.error('Error al obtener el post:', error);
    });

}

//Cargo la tabla
function obtenerUsuario() {

    const apiUrl = 'http://localhost:3000/api/users';
    axios.get(apiUrl)
        .then(function (response) {

            console.log(response.data)
            //console.log(response.data)

            // Obtener el contenedor de la tabla
            const tablaContainer = document.getElementById('tabla-container');
            tablaContainer.innerHTML = "";
            // Crear un elemento de tabla
            const tabla = document.createElement('table');

            // Crear una fila de encabezado
            const encabezado = document.createElement('tr');

            // Crear celdas de encabezado
            const encabezado1 = document.createElement('th');
            encabezado1.textContent = 'Id';
            const encabezado2 = document.createElement('th');
            encabezado2.textContent = 'Nombre';
            const encabezado3 = document.createElement('th');
            encabezado3.textContent = 'E-mail';
            const encabezado4 = document.createElement('th');
            encabezado4.textContent = 'Acciones';

            // Agregar celdas de encabezado a la fila de encabezado
            encabezado.appendChild(encabezado1);
            encabezado.appendChild(encabezado2);
            encabezado.appendChild(encabezado3);
            encabezado.appendChild(encabezado4);

            // Agregar la fila de encabezado a la tabla
            tabla.appendChild(encabezado);



            // Crear filas de datos

            response.data.forEach(function (item) {
                //item.id
                const fila = document.createElement('tr');

                // Crear celdas de datos
                const dato1 = document.createElement('td');
                dato1.textContent = item.id;
                const dato2 = document.createElement('td');
                dato2.textContent = item.nombre;
                const dato3 = document.createElement('td');
                dato3.textContent = item.email;

                const dato4 = document.createElement('td');
                // Boton eliminar
                let eliminarButton = document.createElement("button");
                eliminarButton.textContent = "Borrar";
                eliminarButton.classList = "btn danger";
                eliminarButton.type = "button";
                eliminarButton.addEventListener("click", function () {
                    borrarUsuario(item.id);//le paso al ID a la funcion eliminar
                });

                let consultarButton = document.createElement("button");
                consultarButton.textContent = "Consultar";
                consultarButton.classList = "btn warning";
                consultarButton.type = "button";
                consultarButton.addEventListener("click", function () {
                    consultarUsuario(item);//le paso el item completo
                });

                dato4.appendChild(eliminarButton);
                dato4.appendChild(consultarButton);


                // Agregar celdas de datos a la fila
                fila.appendChild(dato1);
                fila.appendChild(dato2);
                fila.appendChild(dato3);
                fila.appendChild(dato4);

                // Agregar la fila a la tabla
                tabla.appendChild(fila);
            });

            // Agregar la tabla al contenedor
            tablaContainer.appendChild(tabla);



        })
        .catch(function (error) {
            console.error('Error al obtener datos de la API', error);
        });

}




/* ---------------------------------test------------------------------------- */


// Función para hacer una solicitud GET a una API y mostrar los datos en la página
function obtenerData() {
    // URL de la API a la que vamos a realizar la solicitud GET
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Usamos Axios para realizar la solicitud GET
    axios.get(apiUrl)
        .then(function (response) {
            // Éxito: los datos de la API se encuentran en response.data
            const dataList = document.getElementById('data-list');

            // Recorremos los datos y los mostramos en una lista no ordenada (ul)
            response.data.forEach(function (item) {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${item.id}, Título: ${item.title}`;
                dataList.appendChild(listItem);
            });
        })
        .catch(function (error) {
            // Error: manejar errores aquí
            console.error('Error al obtener datos de la API', error);
        });
}

