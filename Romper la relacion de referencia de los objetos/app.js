let perosna1 = {
  nombre: 'adrian',
  edad:27
}


let persona2 =  {...perosna1};

persona2.nombre = 'juan';

console.log(perosna1);
console.log(persona2);