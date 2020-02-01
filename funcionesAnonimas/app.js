var saludar = (function (nombre) { 
    return `hola ${nombre}`
})('adrian')

var sumar = (function (num1, num2, num3) { 
    return `hola la suma de num1 num2 y num3 es  ${num1 + num2 + num3}`
})(3,3,3)

var sumarFlecha =  ((num1, num2, num3) => {
    return `hola la suma de num1 num2 y num3 es  ${num1 + num2 + num3}`
})(4,4,4,);

console.log(saludar)
console.log(sumar)
console.log(sumarFlecha)


let saludo1 = (nombre =>{
    return `hola ${nombre}` 
})('jose')

console.log(saludo1)
