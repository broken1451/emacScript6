
// Assing nos permite agarrar todas las propiedades de un objeto y heredarselas o transmitirselas a otras sin usar la herencia directamente 

// EcmaScrip5
// function mezclar(objReceptor, objDonador) {
    
//     console.log('objReceptor: ', objReceptor);
//     console.log('objDonador: ', objDonador);

//     // Object.keys(objeto q quiero evaluar)esto barre todas las propiedades q tenga
//     Object.keys(objDonador).forEach(function(key) {
//         console.log('key: ', key);
//         objReceptor[key]=objDonador[key];
//     });

//     return objReceptor;

// }

// var objReceptor = {};

// var objDonador = {
//     nombre: 'mi-archivo.js'
// };

// console.log(mezclar(objReceptor,objDonador))



// Ecmascript6
// function mezclar(objReceptor, objDonador) {
    
//     console.log('objReceptor: ', objReceptor);
//     console.log('objDonador: ', objDonador);

//     // Object.keys(objeto q quiero evaluar)esto barre todas las propiedades q tenga
//     Object.keys(objDonador).forEach(function(key) {
//         console.log('key: ', key);
//         objReceptor[key]=objDonador[key];
//     });

//     return objReceptor;

// }

// var objReceptor = {};

// var objDonador = {
//     // nombre: 'mi-archivo.js'
//     get nombre(){
//         return 'mi-archivo.js';
//     }// esto sirve para obtener los valores
// };

// console.log(mezclar(objReceptor,objDonador))
// console.log(objDonador.nombre)
// console.log(objDonador)


function mezclar(objReceptor, objDonador) {
    
    console.log('objReceptor: ', objReceptor);
    console.log('objDonador: ', objDonador);

    // Object.keys(objeto q quiero evaluar)esto barre todas las propiedades q tenga
    Object.keys(objDonador).forEach(function(key) {
        console.log('key: ', key);
        objReceptor[key]=objDonador[key];
    });

    return objReceptor;

}

var objReceptor = {};

var objDonador = {
    apellido: 'JOSE',
    edad:24,
    get nombre(){
        return 'mi-archivo.js';
    }// esto sirve para obtener los valores
};
console.log(mezclar(objReceptor,objDonador))

// ecmascript6
console.log(Object.assign(objReceptor,objDonador))
console.log('objReceptor: ', objReceptor);
// console.log(objDonador.nombre)
// console.log(objDonador)





