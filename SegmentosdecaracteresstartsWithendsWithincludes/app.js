

var saludo = 'hola mundo!'

// para saber si empezaba con una letra en ec5
console.log(saludo.substr(0,1)=='h');

console.log(saludo.indexOf('x')); //saber si la palabra o string contenia una letra en particular o alguna cadena de texto
console.log(saludo.includes('x'));


// en ec6
console.log(saludo.startsWith('hola'));
console.log(saludo.endsWith('!'));

console.log(saludo.startsWith('mu',5));
console.log(saludo.endsWith('o',10));
console.log(saludo.includes('u',5));