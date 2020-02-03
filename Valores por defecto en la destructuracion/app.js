let fruta = ['banano','pera'];
let [fruta1,fruta2='Manzana'] = fruta;
console.log(fruta1)
console.log(fruta2)


console.log('============================')

let opciones = {
    nombre:'adrian'
}
// let nombre = opciones.nombre || 'fernando' para evitar eso usuamos la destructuracion
let {nombre, apellido='Bravo'}= opciones;
console.log(nombre, apellido)


