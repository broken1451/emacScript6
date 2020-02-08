// funcion hecha expresion
let miFuncion = function () { 
    console.log('Hola mundo')
 }


let otraFuncion = miFuncion;


console.log(typeof otraFuncion)
otraFuncion()



// clases hecha expresiones
let Persona = class{


    constructor(nombre){
        this.nombre =  nombre;
        this.edad = 25;
        this.direccion = 'Ramo Verde '
        console.log(this.nombre);
        console.log(this);
    }


    decirNombre(){
        console.log('Hola mundo')
    }

}



let adrian = new Persona('HOLA');

console.log(typeof adrian)
console.log(adrian instanceof Persona)
console.log(adrian)



















