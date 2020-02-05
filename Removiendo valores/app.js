let numeros = [{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}];

let items = new Set(numeros)


console.log(items);
console.log(items.size);
items.delete(6); // borrar un item

console.log(items);
console.log(items.size);


// borrar todo el set
items.clear()
console.log(items);
console.log(items.size);