const bottle = {
    name: 'xyz',
    color: 'red',
    price: 20,
    isGood: true,
    variation:[22, 23, 25],
    other: {
        name: 'abc',
        weight: 44,
        quality: {
            productQulity: 'good'
        }
    }
}

delete bottle.isGood;
bottle.variation[1]= 40;
bottle.other.quality.productQulity = 'verygood';
console.log(bottle);
// console.log(bottle.other.quality.productQulity);