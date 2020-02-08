
class Rectangulo {


    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
        console.log(this.alto);
        console.log(this.largo)
    }

    getArea(){
        return 'Rectangulo:'+  (this.alto * this.largo);
    }

}


let rectangulo = new Rectangulo(4,6);
rectangulo.getArea()
console.log(rectangulo)
console.log(rectangulo.getArea())


class Cuadrado extends Rectangulo {


    constructor(alto){
        super(alto,alto);
        this.alto = alto;
        console.log('en clase cuadrado', this.alto);
    }

    getArea(){
        return  super.getArea()
        // return 'Cradrado:'+ (this.alto * this.alto)
    } 

}

let cuadrado = new Cuadrado(50)

console.log(cuadrado)
console.log(cuadrado.getArea())
console.log(cuadrado instanceof Cuadrado)
console.log(cuadrado instanceof Rectangulo)

class Triangulo extends Rectangulo {

    constructor(base){
        super(base,base);
        this.base = base;
        console.log('en clase Triangulo', this.base);
    }

    getArea(){
        
        return 'Triangulo:'+  ((this.base * this.alto)/2)
    }

    

}

let triangulo = new Triangulo(45)

console.log(triangulo)
console.log(triangulo.getArea())
console.log(triangulo instanceof Triangulo)
console.log(triangulo instanceof Rectangulo)






// class Figura{
//     constructor(lado){
//         this.lado = lado;
//     }
    
//      obtenerVentana(){
//       return super();
//      }
//    }
    
//    let figura = new Figura();
    
//    console.log( figura.obtenerVentana() );