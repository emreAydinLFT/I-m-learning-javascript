// Literal notation
  const person = {
    firstName: 'Emre',
    lastName: 'AY',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
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
  
  // kçşeli parantez kullanarak
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location']) // undefined
  
  // örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
  console.log(person['phone number'])