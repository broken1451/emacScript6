// js siempre ha sido sincrono todo en secuencia


function tareaAsincrona() {

    let promesa = new Promise((resolve,reject)=>{
        setTimeout(function (){
            console.log('Proceso asincrono terminado');
            resolve()
            // reject()
        }, 1300);
    });

    return promesa;
}



tareaAsincrona().then( () =>{
    console.log('TODO BIEN');
}, () => {
    console.error('TODO MAL');
});
console.log('Proceso secuencial');











