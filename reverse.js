const sentence = 'i am lerning web dev';

let reverse = ''
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);


let rev = ''
for(let i = 0; i<sentence.length; i++){
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// shortcut system

const revOne = sentence.split(' ').reverse(' ').join(' ');
console.log(revOne);