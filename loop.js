const bottle = {
    name: 'xyz',
    color: 'red',
    price: 20,
    isGood: true,
}

for(const bottles in bottle){
    // console.log(bottles);
    // console.log(bottle[bottles]);
}

const keys = Object.keys(bottle);
console.log(keys);
for(const key of keys){
    console.log(key,':',bottle[key]);
}