
function etiqueta(literales, ...subTituciones) {

    let resultado = '';

    // toda funcion recibe parametros asi no tenga parametros explicitos y cae en un objeto llamado argument
    // parametros explicitos en una funcion (literales,subliterales )
    console.log(arguments);
    console.log(literales); // cadena de literales
    console.log(subTituciones); // variables/calculos/valores que se encuentran en los literales

    for (let i = 0; i < subTituciones.length; i++) {
        resultado = resultado + literales[i];
        resultado = resultado + subTituciones[i];
        console.log('literales[i]', literales[i]);
        console.log('subTituciones[i]', subTituciones[i]);
    }


    return resultado + ' pesos.';
}


let unidades = 5;
let costoUnitario = 10;

// let mensaje = funcion que se dispara justo cuando se esta construyendo/ejecutando el template literal`${unidades} lapices cuestan ${unidades*costoUnitario} pesos.`
let mensaje = etiqueta`${unidades} lapices cuestan ${unidades*costoUnitario} pesos.`

console.log(mensaje);
