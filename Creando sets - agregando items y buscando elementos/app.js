
// los set son como los arreglos pero no permiten valores duplicados en si mismo y tienen funciones nativas en su prototipo
// los valores q pueden tener los set pueden ser cualquier cosa

let numero = [1,2,3,4,5,6,6,6,6,6,8]

let items = new Set([1,2,3,4,5,6,6,6,6,6,8]);
let items1 = new Set(numero);

// si existe un elemento tendriamos q barrer el arreglo con los set lo hacemos de la siguente manera 
// console.log(items.has(elemento q quiero buscar)) has metodo para buscar si un elemento existe
if (items.has(11)) {
    alert(' existe')
} else {
    alert('no existe')
}
console.log(items.has(20))
items.
// no permite valores duplicados
// items.add(10)
// items.add(1)
// items.add(0)
// items.add(8)
// items.add(45)
// items.add(12)
// items.add(12)
// items.add('12')

// loq hay dentro del add internamente tiene un Object.is()

console.log(items)
console.log(items.size)
console.log(items1)
console.log(items1.size)

