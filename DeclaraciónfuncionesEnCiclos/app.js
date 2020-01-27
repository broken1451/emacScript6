
var funciones = [];

//  con var
//  for (var i = 0; i < 10; i++) {
  
//   // funciones.push( function () { console.log(i) } );
//   funciones.push( 
//     (function (valor) {
//       return function () { 
//         console.log(valor);
//       }
//     })(i)
//   );
  
//  }

// con let
 for (let i = 0; i <=10; i++) {
  
  funciones.push( function () { console.log(i) } );
  // funciones.push( 
  //   (function (valor) {
  //     return function () { 
  //       console.log(valor);
  //     }
  //   })(i)
  // );
  
 }

 console.log(funciones);

// llamar a esas funciones
 funciones.forEach( (funciones) => {
  funciones();
 });




