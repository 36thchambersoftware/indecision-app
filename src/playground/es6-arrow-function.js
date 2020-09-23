// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(9))
// const fullname = 'Aaron Priebe';
// const getFirstName = (name) => name.split(' ')[0];
// console.log(getFirstName(fullname));

const add = (a,b) => a+b;

console.log(add(55,1))

const user = {
    name: 'Aaron',
    cities: ['Algonquin', 'Elgin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num*this.multiplyBy)
    }
}

console.log(multiplier.multiply())