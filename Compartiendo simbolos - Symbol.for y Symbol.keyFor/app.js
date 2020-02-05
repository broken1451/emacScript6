
// si queremos verificar que este simbolo no este creado, que no exista previamente o si existe usarlo
// usamos la propiedad del simbolo for()
let userID = Symbol.for('userID');

let obj = {}

obj[userID] = 123;
console.log(obj[userID]);
console.log(userID);


let userID2 = Symbol.for('userID');

console.log(userID == userID2);
console.log(userID == userID2);
console.log(Object.is(userID, userID2));

console.log(obj[userID2]);
console.log(userID2);


// recuperar el valor unico el alias
let id = Symbol.for('id unico');
// posibilidad de tener el mismo alias del symbolo
console.log(Symbol.keyFor(id)); 


let id2 = Symbol.for('id unico');
console.log(Symbol.keyFor(id2)); // recuperar el valor unico


console.log(id == id2);

// no existe nada asociado en el id 3 porq se esta creando un nuevo simbolo
let id3 = Symbol('id unico');
console.log(Symbol.keyFor(id3)); 










