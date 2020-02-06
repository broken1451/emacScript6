
// los ciclo for of es un cliclo especializado para las colecciones

let numero =[1,2,3,4,5,6,7,12,58,1,5,86,3,65,90,87,4,2,3,62,96]

// for (let i = 0; i < numero.length; i++) {
//     const element = numero[i];
//     console.log(element);
// }

// for (const i in numero) {
//     const element = numero[i];
//     console.log(element); 
// }


for (let numeros of numero) {
    console.log(numeros); 
}


console.log('==========================================')

let personas =  [
    {nombre: 'Adrian', edad:20},
    {nombre: 'Juan', edad:63},
    {nombre: 'Danyy', edad:14},
    {nombre: 'Jose', edad:25},
    {nombre: 'Migeul', edad:28},
    {nombre: 'Guendy', edad:30},
]
console.log(personas);
for (const persona of personas) {
    console.log(persona); 
    console.log(persona.nombre, persona.edad); 
}


console.log('==========================================')
let personas1 = new Set();
personas1.add({nombre: 'Jose', edad:27})
personas1.add({nombre: 'Guendy', edad:20})
personas1.add({nombre: 'Adrian', edad:18})

console.log(personas1); 
for (const persona1 of personas1) {
    console.log(persona1); 
    console.log(persona1.nombre, persona1.edad); 
}

console.log('==========================================')

let person=[['nombre','adrian'], ['apellido','Juan']]

// los mapas no tienen nombres de propiedades repetido, 
let personas2 = new Map(person);

console.log(personas2); 

for (let persona2 of personas2) {
    console.log(persona2); 
}













