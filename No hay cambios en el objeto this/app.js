
var manejador = {

    id: 123,
    init: function () {  
        // Ecmascript5
        document.addEventListener('click',  (function (event) { 
            this.clickEnPagina(event.type);
            console.log(this);// apunta a todo el documento
        }).bind(this), false);


        // Ecmascript6
        document.addEventListener('click',(event)=>{
            this.clickEnPagina(event.type, 'hola')
        } )

    }, // fin init
    clickEnPagina: function (type, nombre) {
        console.log('Manejando' + type + 'para el id: ' + this.id + ' y ' + nombre);
    }

}

manejador.init('hola');






