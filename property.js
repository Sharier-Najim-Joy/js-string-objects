const person ={
    name: 'abcd',
    age: 26,
    profession: 'student',
    group: 'science',
    blodGroup: 'A+',
    'favorite Place':['kuakata', 'cox-bazar', 'bandorbon']
}

person.age = 30;
console.log(person.age);

const fullName = person.name
console.log(fullName);
console.log(person['name']);
console.log(person.name);
// error
// console.log(person.favorite Place);
console.log(person['favorite Place']);