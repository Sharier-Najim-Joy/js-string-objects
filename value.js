const person ={
    name: 'abcd',
    age: 26,
    profession: 'student',
    group: 'science',
    blodGroup: 'A+',
    'favorite Place':['kuakata', 'cox-bazar', 'bandorbon']
}
person.age = 27;
const old = 'age';
person[old] = 28;

console.log(person);