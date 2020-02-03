let autoGuardado = {
    archivo: 'app.js',
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: 'index.js',
        cursor: {
            linea: 8,
            columna: 21
        }
    },
    otroNodo: {
        subNodo:{
            cursor:{
                linea: 42,
                columna: 102
            }
        }
    }
};

let {cursor} = autoGuardado;
console.log(cursor);

let {ultimoArchivo:{cursor:cursor1}} = autoGuardado;
console.log(cursor1);

let {otroNodo:{subNodo:{cursor:cursor2}}} = autoGuardado;
console.log(cursor2);

let otroSuperNodo = autoGuardado.otroNodo.subNodo.cursor
console.log(otroSuperNodo);




