


//Forma 1

async function getData() {
  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);

  let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON

  let ret = commits[1].author.login;

  document.write(ret);
  return ret;
}


/* test = getData();
console.log(test) */


//forma 2

function getData2() {
  // Hacer una solicitud GET
  fetch('https://api.ejemplo.com/datos')
    .then(response => {
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      // Parsear la respuesta como JSON
      return response.json();
    })
    .then(data => {
      // Manejar los datos recibidos
      console.log(data);
    })
    .catch(error => {
      // Manejar errores
      console.error('Hubo un problema con la solicitud Fetch:', error);
    });

}

function postData() {

  fetch('https://api.ejemplo.com/datos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      clave1: 'valor1',
      clave2: 'valor2'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud Fetch:', error);
    });

}

//forma 3


fetch('https://jsonplaceholder.typicode.com/postssss')
  .then(response => {
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Manejar los datos recibidos
    console.log(data);

    console.log(data[0].title);
 
    document.write(data[0].title)

  
    data.forEach(elemento => {
      document.write(elemento.title + '</br>')
    });
  })
  .catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud Fetch:', error);
  });



