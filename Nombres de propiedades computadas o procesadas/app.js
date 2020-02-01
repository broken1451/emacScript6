// Ecmascript5
var persona= {}
var apellido = 'apellido'

// persona.apellido = 'juan'


// persona['procesarlo en el momento'] = 'juan'
persona['primer nombre'] = 'JOSE'
persona[apellido] = 'juan'
console.log(persona);
console.log(persona[apellido]);
console.log(persona['primer nombre']);



var persona1 = {
    'primer nombre': 'Danyy'
}
console.log(persona1['primer nombre']);







// Ecmascript6

var apellido = 'primer apellido'

var persona2 = {
    'primer nombre': 'Fernando',
    [apellido]: 'herrera'
}

console.log(persona2);
console.log(persona2['primer nombre']);
console.log(persona2[apellido]);


var subfijo = ' nombre';

var persona3 = {
    ['primer' + subfijo]: 'Adrian',
    ['segundo' + subfijo]: 'Jose',
    ['edad' + subfijo]: 25
}

console.log(persona3);
console.log(persona3['primer nombre']);
console.log(persona3['segundo nombre']);
console.log(persona3['segundo'+subfijo]);
console.log(persona3['edad'+subfijo]);

