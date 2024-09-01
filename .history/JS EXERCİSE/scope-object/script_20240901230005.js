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

//!  Object.keys() yöntemi
//?  Bir nesnenin anahtarlarını veya özellikleri dizi olarak almak için kullanılır

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

//! Object.values() yöntemi
//? Nesnenin key'lerine karşılık gelen değerler dizi içerisinde almak için kullanılır

const values = Object.values(copyPerson)
console.log(values)


//! Object.entries() yöntemi
//? Bir dizideki anahtar ve değer değerleri almak için kullanılır


const entries = Object.entries(copyPerson)
console.log(entries)

//! hasOwnProperty() yöntemi
//?  Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))


Object Methodları
     //? Object.keys() Metodu
     //? Object.values() Methodu
     //? Object.entries() Methodu
     //? hasOwnProperty() Methodu