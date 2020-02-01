var restar = (a,b) => {
    console.log(a)
    console.log(b)
    return a - b
}

console.log(restar(1,6));
console.log(typeof restar); // de que tipo es restar
console.log(restar instanceof Function); // de que tipo es restar

// var restar2 = new restar(2,8);

// ((a,b)=>{
//     console.log(arguments); // no hay argumento en las funciones de ecscript6
// })()

function ejemplo(x,y) { 

    ((a,b)=>{
        console.log(arguments); // aca arguments porq esta dentro de la funcion de flecha va a buscarse dentro del contexto o del objeto padre mas cercano
    })()

}

ejemplo(10,20)







