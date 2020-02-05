/*los symbolos sirven para poner 
nombre a propiedades y asi asegurarse de no colisionar con los nombres 
de otras propiedades de otros elementos q esten en otras librerias o inclusive 
en la misma o mismo codigo*/

// los simbolos no tienen constructor
let primerNombre =  Symbol()
let segundoNombre =  Symbol()
let persona = {
    [segundoNombre]: 'Jose'
};
// si se define una propiedad como symbolo de un objeto, tiene que usarse como una propiedad computada[variable]
persona[primerNombre]= 'Adrian';
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);

console.log('===============================');
// alias a los simbolos
let alias =  Symbol('alias')
console.log(alias);

let symbolo1 = Symbol('simbolo');
let symbolo2 = Symbol('simbolo');

// todos los simbolos siempre son diferentes
console.log(symbolo1 == symbolo2);
console.log(symbolo1 === symbolo2);
console.log(Object.is(symbolo1, symbolo2));


console.log(typeof primerNombre);

console.log('===============================');
// no se puede convertir un symbolo a su valor string, porq ya es un valor primitivo
// console.log('mi simbolo es ' + primerNombre );
// console.log(`mi simbolo es ${primerNombre}`);

console.log('===============================');

// verificar si existe

console.log('segundoNombre' in persona);
console.log( persona[segundoNombre]);

console.log('===============================');

// 1) tienes pasion por la informatica
//     si

// 2) tienes capacidad para aprender por ti mismo ?
//     si

// 3) cuando programas pasa el tiempo rapido ?
//     si

// 4) curiosidad por como saber como funcionan las ConstantSourceNode
//     si

// 5) encuentras el camino para resolver problemas  
//     no

// 6) frikismo 
//     si

// 7) tienes hambre de aprendizaje 
//     si
// paciencia, autoaprendizaje, hambre de aprendizaje, atencion a los detalles,capacidad de relacionar conceptos(base datos,etc)
// pasion por esto, creatividad, curiosidad 






