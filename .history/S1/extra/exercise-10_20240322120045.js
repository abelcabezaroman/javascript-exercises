const aliens = [
    {
        name: "Zorg",
        color: "Verde"
    },
    {
        name: "Globo",
        color: "Azul"
    },
    {
        name: "Nebula",
        color: "Morado"
    },
    {
        name: "Ziltoid",
        color: "Rojo"
    }
];

let alienName;

for (let index = 0; index < aliens.length; index++) {
    const alien = aliens[index];
    
    if(alien.color === "Verde"){
        alienName = alien.name;
    }
}

console.log(alienName);