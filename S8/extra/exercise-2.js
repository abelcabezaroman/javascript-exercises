const printMovies = (movies) => {
    for (const movie of movies) {
        const div$$ = document.createElement("div");
        div$$.innerHTML = `
            <h2>${movie.title}</h2>
            <img width="300" src="${'http://localhost:3000/' + movie.img}"/>
            <p>Description: ${movie.description}</p>
            <p>Date: ${movie.date}</p>
            <p>Rating: ${movie.rating}</p>
        `
        document.body.appendChild(div$$)
    }
}

fetch("http://localhost:3000/movies")
.then(res => res.json())
.then(printMovies)
// .then((movies) => printMovies(movies))
