let texto = 'hola'

console.log(texto.repeat(4));
console.log('8'.repeat(4));


const ESPACIOS = 12;

let nombre = ['Adrian','Melissa','Jose']
let tlfs = ['123456','654321','123654']

   
// for of
for (const nombres of nombre) {
    let diferenciaEspacios =  ESPACIOS - nombres.length;
    console.log(nombres + ' '.repeat(diferenciaEspacios)+'|'+tlfs);
}

// for in
for (const i in nombre) {
    let diferenciaEspacios =  ESPACIOS - nombre[i].length;
    console.log(nombre[i] + ' '.repeat(diferenciaEspacios)+'|'+tlfs);
}