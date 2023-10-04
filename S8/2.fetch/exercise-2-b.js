const baseUrl = "https://api.nationalize.io";
const button$ = document.querySelector("button");
const input$$ = document.querySelector("input");

const search = () => {
  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((person) => {
      createNationalizeP(person);
    });
};

const createNationalizeP = (person) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  p$$.textContent = text;

  document.body.appendChild(p$$);
};

button$.addEventListener("click", search);