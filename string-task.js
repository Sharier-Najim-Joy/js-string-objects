// task 01
const findA = "Count how many times a string has the letter a AAAAAA";
 
// console.log(findA.match(/a/g).length);
// console.log(findA.match(/a/gi).length);

// var str = "This is the way I walk my dog";

// var num_matches = str.match(/d/gi).length;
// console.log(num_matches);

// task 04
const value = ['a', 'b' ,'c', 'd', 'x', 'd', 't', 'w', 'y'];
let store = value[8];
value[8]= value[4];
value[4] = store;

// console.log(value);

// task 05
const letter = 'sharier najim joy';
console.log(letter.toUpperCase().charAt(2));