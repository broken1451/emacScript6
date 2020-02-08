
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


var getEmpleado = async (id) => {

    var empleadoDB = empleados.find((empleado)=>{
       console.log('empleado', empleado);
       console.log('empleado.id', empleado.id);
        return empleado.id === id;
   });
    
   if (!empleadoDB) {
        // error
        throw new Error(`El empleado con el id ${id} no existe`);

    } else {

        return empleadoDB;

    }


}



const getSalario = async (empleado) => {
    
    var empleadoSalario = salarios.find((salario)=>{
        console.log('salario', salario);
        console.log('salario.id', salario.id);
        console.log('empleado.id', empleado.id);
        return salario.id === empleado.id;
    });

    if (!empleadoSalario) {

        throw new Error(`no se encontro un salario para el empleado ${empleado.nombre}`);

    } else {

        return {
            nombre: empleado.nombre,
            salario: empleadoSalario.salario,
            id:empleado.id
        }

    }


}


const getInformaicion = async (id) => {

    let empleado = await getEmpleado(id);
    let salarioYEmpleado = await getSalario(empleado);

    return `El empleado ${empleado.nombre} tiene como salario ${salarioYEmpleado.salario}`

}


getInformaicion(3).then((res)=>{
    console.log('res', res);
})


