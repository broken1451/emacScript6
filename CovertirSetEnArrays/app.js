
let numeros = [1,2,3,4,5,6,6,6,6,6,8]

let item = new Set(numeros);

console.log(item)

let arrayNumeros = [...item]

console.log(arrayNumeros);

console.log('==========================================');



let numero = [1,2,3,4,5,6,6,6,6,6,8]

let items = new Set(numero);



let arrayNumero = eliminaDuclicados(items);


function eliminaDuclicados(items) {

    // let arryNumeroSet = new Set(items);
    // return [...arryNumeroSet]

    return [...new Set(items)]
}

console.log(arrayNumero);