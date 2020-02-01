var miFuncion =  function (valor) { 
    console.log(valor)
    return valor;
 }

let miFuncion1 = (valor) =>{ 
    console.log(valor)
    return valor;
}

var sumar = function (num1, num2) { 
    console.log(`${num1} + ${num2} es ${num1+num2}`)
    return num1 + num2;
}

let sumar1 = (num1, num2) =>{
    console.log(`${num1} + ${num2} es ${num1+num2}`)
    return num1 + num2;
}

var saludar = function () { 
    // console.log(`hola mundo`)
    return 'hola mundo';
 }

 let saludar1 = ()=>{
    return 'hola mundo';
 }



miFuncion(4)
miFuncion1(4)
sumar(4,4)
sumar1(45,4)
console.log(saludar())
console.log(saludar1())


var saludarPersona =  function (nombre) {
    var salida = `hola ${nombre}`
    return salida;
}

let saludadoPersona2 = (nombre) =>{
    let salida = `hola ${nombre}`
    return salida;
}

console.log(saludarPersona('juan'))
console.log(saludadoPersona2('hola mundo'))


var obtenerLibro = function (id) { 
    var idLibro = ` ${id}`;
    console.log(idLibro);
    return {
        id: idLibro,
        nombre: 'Harry potter'
    }

}


let obtenerLibro1 = (id) => {
    let idLibro = ` ${id}`;
    console.log(idLibro);
    return {  id: idLibro,
        nombre: 'Harry potter'
    }
}

console.log(obtenerLibro('78'))
console.log(obtenerLibro1('80'))



























