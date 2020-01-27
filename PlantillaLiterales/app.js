let nombre = 'Adrian';
let apellido = 'Bravo';

let nombreC = nombre + ' ' + apellido

console.log(nombreC);

let nombreCompleto = `el nombre completo es ${nombre} ${apellido}`;

console.log(nombreCompleto);

/////////////////////////////////////////////////////////////////////////

function obtieneNOmbre() {
    return 'Adrian bravo' 
}

function obtieneNOmbre(nombre, apellido) {
    return nombre + apellido 
}

let nombreCompleto1 = `el nombre completo es ${obtieneNOmbre()}`;
let nombreCompleto2 = `el nombre completo es ${obtieneNOmbre(nombre, apellido)}`;

console.log(nombreCompleto1);
console.log(nombreCompleto2);


let multilinea = `<h1 class='algo'>${nombre}</h1>
<p>${apellido}</p>`;


console.log(multilinea);


