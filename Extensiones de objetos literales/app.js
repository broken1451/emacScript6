
// en ecmascript5 los objetos literales son colecciones de pares 
var objeto = {
    nombre: 'adrian'
}
console.log(objeto)



// en ecmascript5 
function crearPerson(nombre,apellido, edad) {
    console.log(`el nombre es ${nombre} y el apellido es ${apellido} y la edad es ${edad}`);
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

// en ecmascript6
function crearPerson(nombre,apellido, edad) {
    console.log(`el nombre es ${nombre} y el apellido es ${apellido} y la edad es ${edad}`);
    return {
        nombre,
        apellido,
        edad
    }
}
function suma(num1,num2, num3) {
    console.log(`el numero 1  es ${num1} el numero2 es ${num2} y el numero 3 es ${num3} y la suma de eso es ${num1+ num2+num3}`);
    return {
        num1,
        num2,
        num3
    }
}

var persona = crearPerson('juan', 'viloria', 56)
var persona1 = crearPerson('jose', 'liendo', 70)
var sumar = suma(50,50,40)
console.log(persona)
console.log(persona1)
console.log(sumar)
