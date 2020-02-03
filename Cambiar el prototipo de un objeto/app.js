// ecmascript6 cambiar ptototipos de una funcion 
let gato = {

    sonido(){
        console.log('miau')
    },

    chillido(){
        console.log('MIAUUUUUUUUUU!');
    }

}


let perro = {

    sonido(){
        console.log('guau');
    }

}






// let angora = Object.create() esto es igual q new 
let angora = Object.create(gato);
const mau = Object.create(gato);

console.log(Object.getPrototypeOf(angora) === gato); //ver si tiene prototipo de un gato 
console.log(Object.getPrototypeOf(mau) === gato);

angora.sonido();
angora.chillido();
mau.sonido();
mau.chillido();

// ecmaescript6
// Object.setPrototypeOf(objeto en el cual se quiere cambiar el prototipo, de quien quiere agarra el prototipo)
Object.setPrototypeOf(angora,perro);
Object.setPrototypeOf(mau,perro);
console.log(Object.getPrototypeOf(angora) === gato);
console.log(Object.getPrototypeOf(mau) === gato);
angora.sonido();
mau.sonido();
// angora.chillido();
// mau.chillido();












