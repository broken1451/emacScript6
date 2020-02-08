// js siempre ha sido sincrono todo en secuencia


// proceso asincrono en ecmascript5

function tareaAsincrona() {
    setTimeout(function (){
        console.log('Proceso asincrono terminado');
        // resolve()
        reject()
    }, 1300);
}



tareaAsincrona();
console.log('Proceso secuencial');

function resolve() {
    console.log('Ok TODO BIEN');
}

function reject() {
    console.log('TODO MALO');
}










