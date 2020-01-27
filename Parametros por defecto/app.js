

// function saludo(mensaje, tiempo) {
    
//   // en ecmascript5
//    // mensaje = mensaje || 'hola'
// //    mensaje =  (typeof mensaje !=='undefined')?mensaje:'hola mundo'
// //    if (typeof mensaje !=='undefined') {
// //      mensaje = mensaje;
// //    } else {
// //     mensaje='hola mundo';
// //    }

//     setTimeout(() => {
//         console.log(mensaje);
//     }, tiempo);

// }


function saludo(mensaje = 'hola mundo', tiempo=1500) {
    
    // en ecmascript5
     // mensaje = mensaje || 'hola'
  //    mensaje =  (typeof mensaje !=='undefined')?mensaje:'hola mundo'
  //    if (typeof mensaje !=='undefined') {
  //      mensaje = mensaje;
  //    } else {
  //     mensaje='hola mundo';
  //    }
  
      setTimeout(() => {
          console.log(mensaje);
      }, tiempo);
  
  }


///////////////////////////////////////////////////
  
// function saludo2(tiempo) {
//     saludo('hola mundo', tiempo);
// }

// function saludo(mensaje, tiempo=1500) {
    
//     // en ecmascript5
//      // mensaje = mensaje || 'hola'
//   //    mensaje =  (typeof mensaje !=='undefined')?mensaje:'hola mundo'
//   //    if (typeof mensaje !=='undefined') {
//   //      mensaje = mensaje;
//   //    } else {
//   //     mensaje='hola mundo';
//   //    }
  
//       setTimeout(() => {
//           console.log(mensaje);
//       }, tiempo);
  
//   }
//////////////////////////////////////////////////



// saludo('mmgbo');
saludo();
// saludo2();

//////////////////////////////////////////////////////////////

// function saludar(fn = function () { console.log('hola mundo'); }) {

//     console.log(typeof fn );
//     if (typeof  fn === 'undefined') {
//         console.error('no es una funcion');
//         return;
//     }
//     fn();
// }


// function saludar(fn=temporal , persona={nombre:'adrian'} ) {

//     console.log(typeof fn );
//     if (typeof  fn === 'undefined') {
//         console.error('no es una funcion');
//         return;
//     }
//     fn();
//     console.log(persona)
// }

// function temporal() {
//     return console.log('hola mundo temporal'); 
// }


// saludar();


function saludar(fn , persona ) {

    console.log(typeof fn );
    if (typeof  fn === 'undefined') {
        console.error('no es una funcion');
        return;
    }
    fn();
    console.log(persona)
}

function temporal() {
    return console.log('hola mundo temporal'); 
}

var persona = {
    nombre: 'adrian jose'
 }
 
saludar(temporal, persona);



