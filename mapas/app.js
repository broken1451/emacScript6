let mapa  = new Map();

// los mapas puedes recibir cualquier cosa

// ingresar datos al mapa
// mapa.set('key','valor')
mapa.set('nombre','adrian')
mapa.set('edad',27);
mapa.set('apellido');
mapa.set({},{hola:'hola mundo'});
mapa.set();




console.log(mapa)
console.log(mapa.size)

// obtener una llave
console.log(mapa.get('nombre'))
console.log(mapa.get('edad'))

// ver si existe
console.log(mapa.has('nombre'))
console.log(mapa.has('apellido'))


// eliminar un valor, entrada  de un mapa
mapa.delete('nombre');
console.log(mapa.has('nombre'))
console.log(mapa.get('nombre'))
mapa.set('edad');
console.log(mapa)


// eliminar todo el mapa
mapa.clear()
console.log(mapa)