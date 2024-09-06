const person = {
    firstName: 'Emre',
    lastName:'AYDIN',
    tell: 5302556199,
    city: "Kocaeli",
    job: "Torna",
    experience: 2,
    skills: [HTML,CSS,JSON]

    getFullName:  function(){
        return `(${thisfirstName}${lastName})`;
    }
}
console.log(person.city);