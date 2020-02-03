

function crearJugador1(nickname, opciones) {
    
    opciones = opciones || {};

    let hp = opciones.hp;
    let sp = opciones.sp;
    let clase = opciones.clase;

    console.log(nickname)
    console.log(hp)
    console.log(sp)
    console.log(clase)
    console.log(opciones)

    // codigo para crear jugador

}

crearJugador1('Broken1451', {hp:100, sp:50, clase:'paladin'})

// function crearJugador(nickname,{hp,sp,clase} ) { error
function crearJugador(nickname,{hp,sp,clase} = {hp:100,sp:50,clase:'paladin'}) {
    
    // opciones = opciones || {};

    // let hp = opciones.hp;
    // let sp = opciones.sp;
    // let clase = opciones.clase;

    console.log(nickname)
    console.log(hp)
    console.log(sp)
    console.log(clase)
    // console.log(opciones)

    // codigo para crear jugador

}
// crearJugador('Broken1451') esto da error
crearJugador('Broken1451',{hp:500,sp:200,clase:'MAGO'})











