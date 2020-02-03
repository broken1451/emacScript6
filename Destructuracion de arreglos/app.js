let fruta = ['banano','pera','uva'];
// Orden secuencial en orden
// destructuracion de objetos, si no inicializa el objeto da error 
// let [] = inicializar el objeto
let [fruta1, fruta2] = fruta;
console.log(fruta1, fruta2);

let [,,fruta3] = fruta;
console.log(fruta3);


let otrafruta = 'Manzana';
let [otrafruta1] = fruta;
console.log(otrafruta1);

console.log('========================================================');
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);


[a,b] = [b,a]
console.log(a);
console.log(b);
console.log('========================================================');

let arrObj = [
    {
    nombre:'Adrian'
    },
    ['2',0],
    {
        apellido:'bravo'
    },
    function (nombre) { 
        console.log(`hola ${nombre}`);
    }
];

let [pocicion1, ,pocision3] = arrObj;

console.log(pocicion1);
console.log(pocision3);

let [, pocision2,pocisio3] = arrObj;
console.log(pocision2);
console.log(pocisio3);

let [, ,posi3,posi4] = arrObj;
console.log(posi3);
posi4('adrian');

