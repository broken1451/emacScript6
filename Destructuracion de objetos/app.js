
let ajustes = {
    nombre: 'adrian',
    email: 'fernando.herrera85@gmail.com',
    facebook:'adrian123',
    google: 'adrian14785',
    premium: true,
    twitter: '@Broken1451'
}

let persona = {
    nombre: 'danny',
    email: 'fernando.herrera85@gmail.com',
    facebook:'danny123',
    google: 'daniel145',
    premium: false,
    cuentaLinkein: '@Boken151',
    twitter: '@Broken1451'
}



// ecmaScript5
let nombre1 =  ajustes.nombre;
    correo1= ajustes.email;
    facebook1 =  ajustes.facebook;

console.log(nombre1,correo1,facebook1)

console.log('==================================================')

// Ecmascript6
// destructuracion de objetos, si no inicializa el objeto da error 
// let {nombre, email, facebook, google, premium} = inicializar el objeto

// let {nombre, email, facebook, google, premium} = ajustes
// console.log(nombre,facebook, premium)


// Esto esta destructurado con el nombre de cada variable
// let {nombre, email, facebook, google, premium:nombreQueQueremos} = ajustes
// let {nombre, email, facebook, google, premium:dePago} = ajustes
// console.log(nombre,facebook, dePago)

// el orden no importa en la destructuracion
// Inicializacion de variable
// let {premium:dePago,nombre, email, facebook, google, twitter='broken1451' } = ajustes
// console.log(nombre,facebook, dePago, twitter);

// si existe la variable en el ajuste, por consecuencia el parametro opcional ya no es necesario y usara el valor del ajuste 
// let {nombre, email, facebook, google, premium, twitter:cuentaTwee = 'broken145'} = ajustes
// console.log(nombre,facebook, premium, cuentaTwee);


console.log('==================================================')

let {nombre, email, premium, cuentaWeb='Webpay', cuentaLinkein:Linkein, twitter:cuentaTwee = 'broken145'} = persona
console.log(nombre,email, premium,cuentaWeb, Linkein, cuentaTwee);









