
class Persona {

    constructor(nombre){
        this.nombre =  nombre;
        console.log(this.nombre);
        console.log(this);
    }


    // esto es parecido a Persona.prototype.decirNombre(), es lo mismo 
    decirNombre(){
        console.log(this.nombre);
    }

}


let adrian = new Persona('Adrian');
adrian.decirNombre()


console.log(adrian instanceof Persona);
console.log(adrian instanceof Object);
console.log(typeof Persona );
console.log(typeof Persona.prototype.decirNombre );










