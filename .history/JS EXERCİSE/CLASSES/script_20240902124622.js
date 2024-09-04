class Person {
    constructor(firstName, lastName, age, country = 'Türkiye', city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.skills = [];
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    appendSkill(skill) {
        this.skills.push(skill);
    }

    get getSkills() {
        return this.skills;
    }

    getPersonelInfo() {
        let fullName = this.getFullName();
        let skillsText = this.skills.length > 0 ? ` Yeteneklerim: ${this.skills.join(', ')}` : '';
        return `Benim adım ${fullName} ve ${this.age} yaşındayım.${skillsText}`;
    }
}

const person = new Person('Emre', 'AYDIN', 25, 'Türkiye', 'Gebze');
person.appendSkill('JS');
console.log(person.getPersonelInfo()); 
//! Benim adım Emre AYDIN ve 25 yaşındayım. Yeteneklerim: JS


//! Inheritance 

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Animal constructor'ını çağır
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Rex makes a sound.
myDog.bark();  // Rex barks.
  