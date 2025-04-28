const num = [1,3,5];

// el map crea un nuevo array a partir de otro array, aplicando una función
const nuevoArray = num.map(function (elemento) {
    return elemento * 2;
});

console.log(num); // [1, 3, 5]
console.log(nuevoArray); // [2, 6, 10]