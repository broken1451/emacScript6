
// los WeakSet sirven para almacenar referencia a los objetos unicamente

// 1 en un WeakSet add, has, remove dan un error si enviamos como parametro algo que no sea un objeto 
// 2 no tiene manera de hacer repeticiones o ciclos for in
// 3 los WeakSet no tienen key(),values(), por lo que no hay manera via programacion de saber cuantos elementos hay adentro
// 4 no tienen un foreach tampoco 
// 5 no tienen propiedad size

let set = new WeakSet();

let persona = {
    nombre: 'adrian'
}

let persona1 = {
    nombre: 'jose'
}


set.add(persona)
set.add(persona1)

set.delete(persona1)
console.log(set);