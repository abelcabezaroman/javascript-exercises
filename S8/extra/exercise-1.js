fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(({results}) => {
    createDomCharacters(results)
})

const createDomCharacters = (characters) => {
    for (const character of characters) {
        const figure$$ = document.createElement('figure');

        figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.image}/>`;
        // IGUAL
        // const figcaption$$ = document.createElement('figcaption');
        // const img$$ = document.createElement('img');

        // figcaption$$.textContent = character.name;
        // img$$.setAttribute('src', character.image);

        // figure$$.appendChild(figcaption$$)
        // figure$$.appendChild(img$$)

        document.body.appendChild(figure$$);
    }
}

// getCharacters();
// async function getCharacters(){
//     const res = await fetch('https://breakingbadapi.com/api/characters')
//     const {results} = await res.json()
//     printCharacters(results)
// }

// function printCharacters(characters){
//     for (const character of characters) {
//         const character$$ = createCharacter(character);
//         document.body.appendChild(character$$);
//     }
// }

// function createCharacter(character){
//     const figure$$ = document.createElement('figure');

//     figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.image}/>`;

//     return figure$$;
// }