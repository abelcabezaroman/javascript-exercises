const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');
const button$ = document.querySelector('button');

const search = () => {
    // const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('input');

    // Ejemplo de url si en el input escribo Abel
    // https://api.nationalize.io?name=Abel
    //
    fetch(baseUrl + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}



button$.addEventListener('click', search);