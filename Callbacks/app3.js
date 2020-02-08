//  el asyc hace q las funciones devuelvan una promesa

// const getNombre = async () => {
//     return 'Adrian'
// }

// console.log(getNombre());

// getNombre().then((nombre)=>{
//     console.log(nombre);
// });


const getNombre = async () => {
    return new Promise( (resolve,reject) => {
        
        setTimeout(() => {
            resolve('Adrian')
        }, 3000);
        
    });
}

console.log(getNombre());

getNombre().then((nombre)=>{
    console.log(nombre);
});

const saludo = async ()=>{

    let nombre = await getNombre();
    return `hola ${nombre}`;
};


console.log(saludo());
saludo().then((mensaje)=>{
    console.log(mensaje);
})



