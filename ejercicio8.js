const num = [2,5,6]

// el reduce suma todos los elementos de un array
let suma = num.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
}, 0);

console.log(suma); // 13