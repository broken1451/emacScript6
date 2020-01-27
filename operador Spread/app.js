
// var num1  = 10;
// var num2 = 30;

// var max = Math.max(num1,num2);
// console.log(max);


// // En ecma script5
// var numeros  = [10,45,200,854,4585];
// // apply nos permite cambiar el valor del objeto this y mandar un arreglo adicional
// var max = Math.max.apply(Math,numeros);
// console.log(max);


// En ecma script 6
let numeros  = [10,45,200,854,4585];
let numerosArr;
    numerosArr = [{...numeros,h:02},47];

let max = Math.max(...numeros);
console.log(numerosArr);
console.log(max);

