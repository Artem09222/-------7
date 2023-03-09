let names = [];
let number;

for (let n = 0; n < 7; n++) {
    number = Number(prompt("Enter one"));
    names.push(number);
}

console.log(names);
names.push(9);
names.unshift(8);
console.log(names.length);

