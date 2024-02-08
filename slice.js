const i = 'sharier';
const j = i.slice(2,6);
// console.log(j);

const sentence = 'sharier najim joy';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friend = 'hridoy,khalid,nahid,kalo,shawon';
const friends = friend.split(',');
console.log(friends);

const friendStr = [ 'hridoy', 'khalid', 'nahid', 'kalo', 'shawon' ];
console.log(friendStr.join('+'));
console.log(friendStr.join('='));
console.log(friendStr.join('_'));