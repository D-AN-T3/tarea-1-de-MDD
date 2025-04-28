const nums = [2,3,4,6,9,10,16,20,24];
const may5 = nums.filter(function (elemento) {
    return elemento > 5;
});

// el filter crea un nuevo array a partir de otro array, aplicando una función para saber los numeros mayores a 5   
console.log(may5);       // [6, 9, 10, 16, 20, 24]
