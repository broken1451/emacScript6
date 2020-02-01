
var objeto = {
    c:1,
    0:1,
    x:1,
    15:1,
    r:1,
    3:1,
    b:1,
    20:1
};


objeto.d = 1;
objeto['2'] = 1;
objeto['a'] = 1;

console.log(objeto);
console.log(Object.getOwnPropertyNames(objeto));// regresa un arreglo
console.log(Object.getOwnPropertyNames(objeto).join(','));
console.log(Object.keys(objeto));
console.log(JSON.stringify(objeto));

for (const i in Object.keys(objeto)) {
    console.log(Object.keys(objeto)[i]);
}

Object.keys(objeto).forEach(element => {
    console.log(element)
});

for (const data of Object.keys(objeto)) {
    console.log(data)
}

for (let i = 0; i < Object.keys(objeto).length; i++) {
    const element = Object.keys(objeto)[i];
    console.log(element)
}

let obj = Object.keys(objeto);
for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    console.log(element)
}



