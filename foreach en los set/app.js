
// la funcion foreeach funciona tanbien y tantos  para los mapas como para los sets
let personas = ['Fernando','Maria','Susana','Danny','Adrian'];
let items = new Set(personas);

items.forEach((valor,llave,setOriginal)=>{
    console.log(valor)
    console.log(llave)
    console.log(setOriginal)
    console.log(items === setOriginal)
});











