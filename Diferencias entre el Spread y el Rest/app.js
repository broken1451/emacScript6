
// Rest junta los elementos en un arreglo

// Spread esparce los elementos como si fueran enviados de forma separada

function saludarRest(saludos, ...nombres) {

  for (const i in nombres) {
   console.log(`${saludos} ${nombres[i]}`)
  }

  // for (const datos of nombres) {
  //   console.log(`${saludos} ${datos}`);
  // }
  
}

function saludarSpread(saludos, ...nombres) {
 
  console.log(`${saludos} ${nombres}.`)
  
}

let personas = ['maria', 'susana', 'miguel']

saludarRest('Hola','maria', 'susana', 'miguel')
saludarSpread('Q TAL', ...personas)

let partes= ['brazos', 'Piernas']
let cuerpo = ['pies','dedos', ...partes, 'cabeza']

console.log(cuerpo);
