// ecma script 5 las funciones sirven con un doble proposito de ser llamadas con o sin la palabra reservada new
// con la palabra new el valor de this dentro de la funcion es un nuevo objeto y ese nuevo objeto es retornado
// sin la palabra new hacemos el llamado de la funcion y esperamos el retorno de algun valor procesado que puede ser un objeto, undefined o null

// var nombre = 'danny';

// EcmaScript5
// function Persona(nombre) {

//     // cuando la funcion es declarada sin new el objeto this pasa a ser el objeto global window
//     // en ecmaScript5
//     VALIDACION PARA VER SI LA FUNCION FUE LLAMADA CON LA PALABRA NEW O fue llamada de otra forma
//     if (this instanceof Persona) {
//         this.nombre = nombre;
//     } else {
//         throw new Error('Esta funcion debe de ser utilizada con el new')
//     }

//     this.nombre = nombre;

    
// }

// var persona = new Persona('adrian'); // es una instacia del objeto persona

// var noEsPersona =  Persona.call('elemento q queroemos trabajar como el this','miguel');
// var noEsPersona =  Persona.call(persona,'miguel');

// console.log(persona);
// console.log(noEsPersona);


// EcmaScript6
function Persona(nombre) {

   
    // en ecmaScript6, esto es una alternativa al instanceof si queremos evaluar que un objeto se creo usando el new usaremos new target
    if (typeof new.target !=="undefined") {
        this.nombre = nombre;
    } else {
        throw new Error('Esta funcion debe de ser utilizada con el new');
    }

    this.nombre = nombre;

    
}

var persona = new Persona('adrian');

var noEsPersona =  Persona.call(persona,'miguel');

console.log(persona);
console.log(noEsPersona);
