
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


const getEmpleado = (id, callback)=>{

 // buscar una persona por id usando el metodo find de los arreglos
 var empleadoDB = empleados.find((empleado)=>{
    // console.log('empleado', empleado);
    // console.log('empleado.id', empleado.id);
     return empleado.id === id;
});
// console.log('empleadoDB', empleadoDB)
 
 if (!empleadoDB) {
     callback(`El empleado con el id ${id} no existe`);
    } else {
     callback(null,empleadoDB);
    }


}

// id de la persona
// error: no se encontro un salario para el empleado(nombredel empleado)
// si existe  la salida es :
// {
//     nombre: 'adrian',
//     salario: 1000,
//     id:1
// }

const getSalario = (empleado, callback) => {

    var empleadoSalario = salarios.find((salario)=>{
        console.log('salario', salario);
        console.log('salario.id', salario.id);
        console.log('empleado.id', empleado.id);
         return salario.id === empleado.id;
    });
    

    if (!empleadoSalario) {
        callback(`no se encontro un salario para el empleado ${empleado.nombre}`);
       } else {
        callback(null,{
            nombre: empleado.nombre,
            salario: empleadoSalario.salario,
            id:empleado.id
        });
       }


}


// uso 
getEmpleado(2, (error, empleadoDB)=>{

    if (error) {
        return console.error(error)
    }

    getSalario(empleadoDB,(error, empleadoSalario)=>{
        if (error) {
            return console.error(error)
        }
        console.log('empleadoSalario: ', empleadoSalario)
    });


    console.log('Empleado: ', empleadoDB)


});


















