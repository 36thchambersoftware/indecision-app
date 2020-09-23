var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

var fullname = 'Aaron Priebe';
if (fullname) {
    let firstName = fullname.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);