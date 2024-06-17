


//
//{id: '33t', url: 'https://cdn2.thecatapi.com/images/33t.gif', width: 500, height: 264}
function cargarInfoApi(cantidad) {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${cantidad}`)
        .then(response => {

            let contenedorGaleria = document.getElementById('galeria');

            let respuestaServidor = [];
            respuestaServidor = response.data;

            contenedorGaleria.innerHTML = "";
            respuestaServidor.forEach(elemento => {
                console.log(elemento.url);

                let imagen = document.createElement('img');
                let titulo = document.createElement('h6');

                titulo.textContent = "Imagen Codigo " + elemento.id;

                imagen.src = elemento.url;
                imagen.alt = "imagen servidor";
                imagen.width = 200;
                //imagen.width = elemento.width;
                // imagen.height = elemento.height;

                // imagen.className ="estiloimagen";

                contenedorGaleria.appendChild(titulo);
                contenedorGaleria.appendChild(imagen);



            });


        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
}

