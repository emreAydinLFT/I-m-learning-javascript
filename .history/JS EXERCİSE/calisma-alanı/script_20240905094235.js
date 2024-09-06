const person = {
    firstName: 'Emre',
    lastName:'AYDIN',
    tell: 5302556199,
    city: "Kocaeli",
    job: "Torna",
    experience: 2,
    skills: [HTML,CSS,JSON]

    function(){
        return `(${this.firstName}${this.lastName})`
    }
}
console.log(person.city);