
getAxios();

function getAxios() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // Manejar los datos recibidos
            const data = response.data;

            console.log(response);
          //  console.log(data);

        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
}


function postAxios() {
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    // Realizar una solicitud POST a JSONPlaceholder para crear un nuevo post
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(response => {
            // Manejar los datos recibidos
            console.log('Respuesta del servidor:', response.data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud POST:', error);
        });
}


function getAxiosOne() {

    axios.get('https://jsonplaceholder.typicode.com/posts/101')
        .then(response => {
            // Manejar los datos recibidos
            const data = response.data;

            console.log(data);

        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
}
