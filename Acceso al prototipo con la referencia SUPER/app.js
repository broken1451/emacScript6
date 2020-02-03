let persona = {
    saludar(){
        return 'Hola';
    }
}



let amigo = {
    saludar(){
        // ecmaescript5 herencia con prototipos
        // return Object.getPrototypeOf(this).saludar.call(this) + ', saludos'

        // ecmascript6, super nos permite acceder al prototipo padre o heredado de forma directa
        return super.saludar() + ', saludos'
    }
}

// debe haber una herencia de un prototipo para utilizar el super
Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());















