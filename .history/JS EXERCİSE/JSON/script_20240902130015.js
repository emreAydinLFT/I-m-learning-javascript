let sampleJSON =`[
    {
        "name":"Emre",
        "surname":"AYDIN"
    },
    {
        "name":"Mert",
        "surname":"AYDIN"
    },
    {
        "name":"Ayşegül",
        "surname":"AYDIN"
    },
    {
        "name":"Mehmet",
        "surname":"AYDIN"
    }
]`
let users = JSON.parse(sampleJSON);
console.log(users);



let categories = [
    {
        name: 'css',
        count: 5
    },
    {
        name: 'JS',
        count: 4
    }
]
let categoriesJSON = JSON.