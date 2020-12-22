fetch('https://breakingbadapi.com/api/characters').then(res => res.json()).then(characters => {
    createDomCharacters(characters)
})

const createDomCharacters = (characters) => {
    for (const character of characters) {
        const figure$$ = document.createElement('figure');

        figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.img}/>`;
        // IGUAL
        // const figcaption$$ = document.createElement('figcaption');
        // const img$$ = document.createElement('img');

        // figcaption$$.textContent = character.name;
        // img$$.setAttribute('src', character.img);

        // figure$$.appendChild(figcaption$$)
        // figure$$.appendChild(img$$)

        document.body.appendChild(figure$$);
    }
}