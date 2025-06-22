//zadaca 1

const numbers = [39, 15, 50, 73, 12, 9, 1];
const filteredNumbers = numbers.filter( (num) => num >= 3 );

console.log("filtirani broevi (pogolemi od 3):", filteredNumbers);

//vtora zadaca

const sortedNumbersAsc = numbers.sort((a, b) => a - b);

console.log("rastecki sortirani:", sortedNumbersAsc.join(' '));

const sortedNumbersDsc = numbers.sort((a, b) => b - a);

console.log("namaluvacki sortirani", sortedNumbersDsc.join(' '));

//treta zadaca

const sumOfNumbers = numbers.reduce( (acc, curr) => acc + curr, 0 );

console.log("vkupna suma na site vroevi:", sumOfNumbers);

//cetvrta zadaca

const foundEvenNumber = numbers.find( (num) => num % 2 === 0 );

console.log("prviot najden paren brojј:", foundEvenNumber);