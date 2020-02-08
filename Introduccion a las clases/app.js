
// Ecmascript5


function Persona(nombre,jx) { 

    this.nombre = nombre;
    this.numero = jx
    console.log(this.nombre);
    console.log(this.jx);
    console.log(this);

    this.gritarNombre = function () { 
        console.log(this.nombre.toUpperCase());
     }

}



// Agregar una funcionalidad a una clase en ecmascriot5
Persona.prototype.decirNombre = function () { 
    console.log(this.nombre)
}


let adrian = new Persona('adriannnnn', 12)
adrian.decirNombre()
adrian.gritarNombre()
console.log(adrian)
console.log(adrian instanceof Persona);
console.log(adrian instanceof Object);


// asi trae undefined
// let adrian =  Persona('adrian')
// // adrian.decirNombre()
// // adrian.gritarNombre()
// console.log(adrian)







