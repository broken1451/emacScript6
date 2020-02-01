let persona1 = {
  nombre: 'jose',
  edad:20
}


let persona2 =  {
  nombre: 'adrian',
  edad:27,
  direccion: 'ramo verde',
  conduce: true,
  vehiculo: true,
  vegetariano: false,
  casado: true
};

// persona1.direccion = persona2.direccion;

// persona2.direccion = 'barrio petare';

persona1 = { 
  ...persona2,
  ...persona1
}


console.log(persona1);
console.log(persona2);
