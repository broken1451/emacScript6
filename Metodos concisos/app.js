// Ecmascript5
var persona = {
    nombre: 'Adrian',
    // metodo e una funcion 
    getNombre: function(nombre) {
        console.log(`HOLA DESDE UN METODO CONCISOS ${nombre}`)
    }
}

// Ecmascript6
var persona1 = {
    nombre: 'Adrian',
    // metodo e una funcion 
    getNombre(nombre) {
        console.log(`HOLA DESDE UN METODO CONCISOS ${nombre}`)
    }
}



persona.getNombre('adrian')
persona1.getNombre('adrian')


