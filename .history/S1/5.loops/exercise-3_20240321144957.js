for (let index = 0; index < 10; index++) {
    if(index === 9){
        console.log('Dormido!')
    } else{
        console.log('Intentando dormir')
    }
}




const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}
];


for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if(element.name === "Abel"){
        console.log("Que majo eres")
    }
}


