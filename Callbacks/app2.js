var empleados = [{
    id: 1,
    nombre: 'Adrian'
},{
    id: 2,
    nombre: 'Mellisa'
},{
    id: 3,
    nombre: 'Juan'
}];

var salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];



var getEmpleado = (id) => {

    return new Promise( (resolve,reject) => {
        // buscar una persona por id usando el metodo find de los arreglos
        var empleadoDB = empleados.find((empleado)=>{
           console.log('empleado', empleado);
           console.log('empleado.id', empleado.id);
            return empleado.id === id;
       });
       // console.log('empleadoDB', empleadoDB)
        
        if (!empleadoDB) {
            reject(`El empleado con el id ${id} no existe`);
           } else {
            resolve(empleadoDB);
           }
    });
}

const getSalario = (empleado) => {
    return new Promise( (resolve,reject) => {

        var empleadoSalario = salarios.find((salario)=>{
            console.log('salario', salario);
            console.log('salario.id', salario.id);
            console.log('empleado.id', empleado.id);
             return salario.id === empleado.id;
        });
        
    
        if (!empleadoSalario) {
            reject(`no se encontro un salario para el empleado ${empleado.nombre}`);
           } else {
            resolve({
                nombre: empleado.nombre,
                salario: empleadoSalario.salario,
                id:empleado.id
            });
           }
    })


}

getEmpleado(2).then((empleado)=>{ // primero esta

    console.log('El empleado es: ', empleado);

    return getSalario(empleado) // despues esta 

}).then((empleadoSalario)=>{

    console.log('El empleadoSalario es: ', empleadoSalario);

}).catch((err)=>{

    console.log('err es: ', err);

});



// getEmpleado(78).then((empleado)=>{ // primero esta

//     // getSalario(empleado).then((empleadoSalario)=>{
//     //     console.log('El empleadoSalario es: ', empleadoSalario);
//     // })

//     console.log('El empleado es: ', empleado);

//     return getSalario(empleado) // despues esta 

// }).then((empleadoSalario)=>{

//     console.log('El empleadoSalario es: ', empleadoSalario);

// }).catch((err)=>{

//     console.log('err es: ', err);

// });



