
// los callback son la forma tradicional de hacer las cosas a destiempos


const getUsuarioById = (id,callback) => {

    const usuario = {
        nombre: 'Adrian',
        id: id
    }


    if (id===20) {
        callback(`El usuario con el ${id} no existe`);
    } else {
        callback(null,usuario);
    }

    // callback(error,objeto q se esta esperando/algo q espera el callback); // es una simple funcion que se llama asi, normalmente una funcion q trabaja con callback recibe  parametros
    // callback(err,usuario); // es una simple funcion que se llama asi 
    // callback(null,usuario); // es una simple funcion que se llama asi 

};



// getUsuarioById(4,callback)
// getUsuarioById(20,(callback) => {

//     if (error) {
//         return console.error(error)
//     }

//     console.log('Usuario de base de datos', usuario)
// });
getUsuarioById(21,(error,usuario) => {

    if (error) {
        return console.error(error)
    }

    console.log('Usuario de base de datos', usuario)
});






