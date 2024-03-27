
const coches = [
    {
        name: "Ferrari 488 GTB",
        color: "Rojo"
    },
    {
        name: "Lamborghini Aventador",
        color: "Amarillo"
    },
    {
        name: "Porsche 911",
        color: "Blanco"
    },
    {
        name: "Chevrolet Corvette",
        color: "Rojo"
    },
    {
        name: "Ford Mustang",
        color: "Azul"
    },
    {
        name: "Tesla Model S",
        color: "Negro"
    },
    {
        name: "BMW M3",
        color: "Rojo"
    }
];

let rojoCarsCount = 0;

for (let index = 0; index < coches.length; index++) {
    const coche = coches[index];
    if(coche.color === "Rojo"){
        rojoCarsCount++;
    }
}

console.log(rojoCarsCount)