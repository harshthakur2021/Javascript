let string = 'You cannot end a sentence with because because because is a conjunction'
let pattern = /because/gi;
console.log((string.match(pattern)).length);