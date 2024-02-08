const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520',
};
// console.log(colors["golden rod"]);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    "passenger capacity": 5
};
car.price='$12345'
car['make']='BMW'
delete car['passenger capacity']
console.log(car);


const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student.physics.marks);


let studentTwo = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const key = Object.keys(studentTwo);
// console.log(key.length);


let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
const stores = Object.keys(myObject);
console.log(stores);
for(const store of stores){
    console.log(store,':', myObject[store],'type :',typeof myObject[store]);
}
