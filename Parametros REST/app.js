
// ecmascript5

// function agregarAlumno() {
    
//     console.log(arguments);
//     for (var i = 0; i < arguments.length; i++) {
        
//         arguments[0].push(arguments[i]);
//     }
//     return arguments[0];

// }

// var alumnosArreglos = ['adrian']
// var alumnosArreglos2 = agregarAlumno(alumnosArreglos, 'maria','susana', 'migeul',45);

// console.log(alumnosArreglos2)


//ECMASCRIPT6
function agregarAlumno(arregloAlumnos, ...alumnos) {
    
    console.log(arguments);
    for (let i = 0; i < alumnos.length; i++) {
        
        arregloAlumnos.push(alumnos[i]);
    }
    console.log(arregloAlumnos)
    console.log(alumnos)
    return arregloAlumnos;

}

let alumnosArreglos = ['adrian']
let alumnosArreglos2 = agregarAlumno(alumnosArreglos, 'maria','susana', 'migeul',45);

console.log(alumnosArreglos2)