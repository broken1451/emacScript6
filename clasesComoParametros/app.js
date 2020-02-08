
// Definicion de las clases como parametros
function creadorClases (definicionClases) {
    return new definicionClases();
 }
 


let obj = creadorClases( class{

    constructor(){
        this.nombre = undefined;
        this.edad = 25;
    }

    saludar(){
        console.log('HOLA PAJUO');
    }

});

obj.saludar()


// clases como parametros en una funcion
class Cuadrado{
    constructor(lado){
        this.lado = lado;
        console.log(lado);
    }


    getArea(){
            
      return this.lado * this.lado;
        
    }

}


function imprimirCuadrado(cuadrado) {
    if (cuadrado instanceof Cuadrado) {
        console.log(cuadrado.getArea());
    } else {
       throw Error('NO es un cuadrado')
    }
    
}

let mesa =  new Cuadrado(100);
let hola = 74;
imprimirCuadrado(hola)


