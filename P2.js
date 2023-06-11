/*
CIT 281 Project 2
Name: Colette Lajoie
*/

/////Origional Code/////

// Returns a random number between min (inclusive) and max (exclusive)
/* function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);}
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
result += alphabet[getRandomInteger(1,alphabet.length-1)];}

console.log(result); */


/////New Code/////

const varName = function() { }

// Returns a single, random, lowercase letter between min (incusive) and max (exclusive)
const getRandomLetter = function() {
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const letter = Math.floor(Math.random() * alphabet.length);
return alphabet[letter];
}
console.log(getRandomLetter());

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random length string with random lowercase letters
const getRandomString = function(minLength, maxLength) {
let result = "";
for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
result += getRandomLetter();}
return result;
}

console.log(getRandomString(10, 20));


// Return a string in ascending order
const getSortedString = function(string) {
return string.split("").sort().join("");
}

console.log(getSortedString("please"));

//-----------------------------------------------------------------------------------------


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random length string with random lowercase letters
function getRandomString(minLength, maxLength) {
  let result = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
    result += getRandomLetter();}
  return result;
}

console.log(getRandomString(10, 20));


// Return a string in ascending order
function getSortedString(string) {
  return string.split("").sort().join("");
}

console.log(getSortedString("please"));
