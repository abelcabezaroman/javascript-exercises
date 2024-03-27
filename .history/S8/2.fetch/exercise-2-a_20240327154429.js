const baseUrl = 'https://api.nationalize.io';

const input$$ = document.querySelector('input');
const button$ = document.querySelector('button');

const search = () => {
    // const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('input');

    // Ejemplo de url si en el input escribo Abel
    // https://api.nationalize.io?name=Abel
    //
    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}



button$.addEventListener('click', search);
