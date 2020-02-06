let mapa  = new Map([['nombre','adrian'],['edad',27],[null,undefined],[undefined,123456]]);


mapa.forEach(function (valor,key,mapa) {
    console.log(` la llave es ${key} y El valor es ${valor} `);
    console.log(mapa);
});


mapa.forEach((valor,key,mapa) =>{
    console.log(` la llave es ${key} y El valor es ${valor} `);
    console.log(mapa);
});

console.log(mapa.keys())// imprime todas las keys