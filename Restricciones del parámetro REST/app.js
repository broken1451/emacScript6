// siempre los pararamotros van de ultimos en la funcion y solo puede existir un solo parametro rest

var arr= [1,2,5,8,7,7,9,9]

function juntarNombres(apellido, ...nombre) {
    console.log(apellido)
    console.log(nombre)
    return  apellido+ ' '+ nombre;
}



juntarNombres('hola', 'dsd',45,'fsdfsdfsd',45,'jdaskdjlasd')