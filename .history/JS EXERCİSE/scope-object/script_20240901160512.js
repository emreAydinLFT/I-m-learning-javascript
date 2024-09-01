// Literal notation
  const person = {
    firstName: 'Emre',
    lastName: 'AYDIN',
    age: 25,
    country: 'Türkiye',
    city: 'Kocaeli',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // "." operatörü kullanarak
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined
  
  // köşeli parantez kullanarak
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['location']) // undefined
  
  // örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
  console.log(person['phone number'])


  person.skills.push('Meteor')
  console.log(person.skills);


  
//!   Object.asign
//? Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

const copyPerson = Object.assign({}, person)
console.log(copyPerson)  
