Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.

```js
const videogames = [
    {name: 'Final Fantasy VII', gender: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', gender: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', gender: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', gender: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', gender: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', gender: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]
```