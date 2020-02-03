let colores1 = ['rojo',['verde','amarillo'],'morado','naranja']

let [color1, [color2]] = colores1;

console.log(color1)
console.log(color2)


let colores2 = ['rojo','verde','amarillo','morado','naranja']
// la destructuracion con parametros rest ... solo funciona para los arreglos, no funciona en los objetos
let [colorPrincipal,colorSecundario, ...demascolores] = colores2
console.log(colorPrincipal)
console.log(colorSecundario)
console.log(demascolores)








