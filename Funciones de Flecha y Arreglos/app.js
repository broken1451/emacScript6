var arreglo = [5,10,11,45,63,554,2,36,58]

var ordenadoEC5 = arreglo.sort(function (a,b) { 

    console.log('a: ',a)
    console.log('b: ',b)
    return a - b;
});

let ordenadoEC6 = arreglo.sort((a,b)=> { 

    console.log('a: ',a)
    console.log('b: ',b)
    return b - a;
});




console.log(ordenadoEC5);
console.log(ordenadoEC6);







