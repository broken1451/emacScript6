
let nombreMetodo = 'giritarNOmbre'




class Persona {
    nombre;

    constructor(nombre){
        this.nombre = nombre;
        console.log(nombre)
    }

    decirNombre(){
        console.log(this.nombre)
    }


 // Propiedad computadados, son metodos cuyo nombre se puede definir atravez de una variable
 [nombreMetodo](){
    console.log(this.nombre.toUpperCase());
 }


// los metodos estaticos son metodos que podemos usar sin instanciar la clase, son esos metodos que nosotros podemos llamar sin inicializaruna clase

    static crear(nombre){
        return new Persona(nombre);// esto crea una instacia de la clase
    }




}


let yo = Persona.crear('Adrian');
console.log(yo)
yo.giritarNOmbre()

// no se puede hacer con los metodos estaticos
let otraPersona =  yo.crear('Juan')
console.log(otraPersona)
