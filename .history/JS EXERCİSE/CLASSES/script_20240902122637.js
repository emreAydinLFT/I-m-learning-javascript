class Person {
    constructor(firstName, lastName,age,country='Türkiye',city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.skills =  []
    }

getFullName() {
    return this.firstName + ' ' + this.lastName;
}
appendSkill(skill) {
    this.skills.push(skill);
}
get getSkills(){
    this.skills.push(skill);
}
getPersonelInfo() {
    let fullName =this.get
}
}