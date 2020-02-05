
let id = Symbol.for('id')
let activo = Symbol.for('activo')


let persona = {
    [id]:12,
    [activo]: true,
    ['codigo']:123456,
    nombre: 'adrian',
    apellido: 'Bravo',
    edad:27
}

console.log(persona)
console.log(Object.keys(persona))

for (const key in persona) {
    console.log(key)
    console.log(persona[key])
    console.log(key ,persona[key])
}

// for (let i = 0; i < persona.length; i++) {
// //   con areglos
//     console.log(persona[i])
// }

// con areglos
// for (const data of persona) {
//     console.log(data)
// }


// para barrer los simbolos 
let symbolos =  Object.getOwnPropertySymbols(persona);
console.log(symbolos)

for (const key in symbolos) {
    console.log(key)
    console.log(symbolos[key])
    console.log(symbolos[key],key);
    console.log(symbolos[key], Symbol.keyFor(symbolos[key]))// referencia por alias
}


