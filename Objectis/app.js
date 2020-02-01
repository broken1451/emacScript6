console.log(+0 == -0)
console.log(+0 === -0);

// para comprar objetos con nuevo metedo
console.log(Object.is(+0,-0));// esto se puede utilizar cuando queremos tener una comparacion  bn minuciosa

console.log('===============================')
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))
console.log('===============================')

console.log(5 == 5)
console.log(5 == '5')
console.log('===============================')
console.log(5 == 5)
console.log(5 === '5')
console.log('==========5 contra 5=====================')
console.log(Object.is(5, 5))
console.log(Object.is(5, '5'))
