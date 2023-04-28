
/*const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + ' seconds have passed so far today')
let x = years;
let y = months;
let z = days;
let age = 33;
console.log(today.getHours() + ' I am' + 'years' + 'months' + 'days', 'old today')


// const today = new Date();
const birthday = 1990-01-02;

function daysInBetween(date1, date2) {

    let differencesMS = date2 - date1
    let millisecondsPerDay = 24 * 60 * 60 * 1000
    let differenceDays = Math.floor(differenceMS / millisecondsPerDay)
    return differenceDays
}
console.log(differenceDays, today)
*/

/*Q1
1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.
*/
/*
function ucFirstLetters(str) {
    const words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ")

}

console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters("New York City"))
console.log(ucFirstLetters("san francisco"))
*/
//Q2
/* conditional operator/ternary operator

function truncate(str, max) {
    return str.length > max ? `${str.slice(0, max)}...` : str;
}

*/
/* if else statement

  function truncate(str, max){
    if (str.lrngth > max) {
        return str.slice(0, max) + '...';
    }
    return str
  }

console.log(truncate('This text will be truncated if it is too long', 25))
*/
//Q3
/*
let animals = ['Tiger', 'Giraffe'];

animals.push('Zebra', 'Elephant'); // add Zebra and elephant to the end of the array

animals.unshift('Monkey', 'Gorilla');// add Monkey and Gorilla to the beginning of the array

animals.sort(); // sort the array alphabetically

animals = replaceMiddleAnimal('Lion'); // replace the middle animal with Lion
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
    return animals;
}

function findMatchingAnimals (beginsWith) { // find all animals that start with the given letter
    return animals.filter(animal => animal.startsWith(beginsWith));

}

console.log('Animals that start with G: ' + findMatchingAnimals('G')); 
*/
//Q4
/*
function camelCase(cssProp) {
    const words = cssProp.split('-') // split words into an array ['margin', 'left']
    for (let i = 0 ; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1); // change each 1st letter of word in the array to uppercase
        return words.join(" "); // join the array into a string

    }
    // the split method is used to split the string at each hyphen
    // the for loop is used to iterate through each word in the resulting array
    //let i = 0 is the initial value of the counter 
    //i < words.length is the condition that is checked before each iteration
    //i++ is the increment value of the counter
    //words[i] = words[i][0].toUpperCase() + words[i].substr(1) is the code that is executed for each iteration which changes the first letter of each word to uppercase
    //the join method is used to join the array of words back to a string separated by a space

}
*/
/*
function camelCase(cssProp) {
    return cssProp ? cssProp.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)).join (" ") : "";
   
}
//camelCase function takes a string as a parameter. The conditional operator(?) checks if there is a string. if it is then the split method is ised to split the string at each hyphen. 
//The map method is used to iteraed trhough each word in the resulting array.
//The charAt method is used to get the first character of each word and the toUpperCase method is used to change it to uppercase.
//the slice method is used to concatenate the rest of the word to the first character.
//the join method is used to join the array of words back to a string separated by a space.

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
*/
//Q5
/*
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen)
//returns 0.200.10 because to fixed returns a string and not a number thus in this example two strings are being concatenated

function currencyAddition (float1, float2) {
    let sum = float1 + float2;
    return sum;
}

console.log(currencyAddition(0.2, 0.1))
*/
/*
function currencyOperation(float1, float2, operation) {

    switch(operation) {
        case 'add': {
            return float1 + float2;
            break;
        }
        case 'subtract': {
            return float1 - float2;
            break;
        }
        case 'multiply': {
            return float1 * float2;
            break;
        }
        case 'divide': {
            return float1 / float2;
        }
        default: {
            return 'Invalid operation';
        }
    }
}
console.log(currencyOperation(6.8,7.9, 'multiply'))

function currencyOperation(float1, float2, operation, numDecimals) {
    let result;

    switch(operation) {
        case '+': {
            result = float1 + float2;
            break;
        }
        case '-': {
            result = float1 - float2;
            break;
        }
        case '*': {
            result = float1 * float2;
            break;
        }
        case '/': {
            result = float1 / float2;
            break;
        }
        default: {
            return 'Invalid operation';
            break;
        }
    }
   if (numDecimals && numDecimals <= 10) { // if numDecimals is defined/truthy (ie not null undefined false NaN or empty) and less than or equal to 10 
    result = result.toPrecision(numDecimals); // toPrecision method returns a string representing the number in fixed-point or exponential notation rounded to precision significant digits
    return result; // return the result
   }

    
}
console.log(currencyOperation(6.85745765765765765,7.97768687665675, '*',(10)))
*/
//Q6
/*
function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

//set object can be used to remove duplicate values from an array
//the spread operator is used to spread the set object into an array

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const fleetwoodMac = ['Stevie Nicks', 'Lindsey Buckingham', 'Christine McVie', 'John McVie', 'Mick Fleetwood', 'Stevie Nicks', 'Lindsey Buckingham', 'Christine McVie', 'John McVie', 'Mick Fleetwood']
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(fleetwoodMac)) // [ 'Stevie Nicks', 'Lindsey Buckingham', 'Christine McVie', 'John McVie', 'Mick Fleetwood' ]

*/
//Q7
/*
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
//a)

    function getBookTitle (bookId) {
        const book = books.find(book => book.id === bookId);
        return book ? book.title : null;
    }

    console.log(getBookTitle(3)) // 1984
//b)
    function getOldBooks (year) {
        return books.filter(book => book.year < year)

    }
    console.log(getOldBooks(1950)) // [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 } ]
//c)using the map method add a new genre property

function addGenre () {
    const genre = ['classic']
    return books.map(book => ({...book, genre}))

}
console.log(addGenre())
*/
/*d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.


function getTitles(authorInitial){
    return books.filter(book => book.author[0] === authorInitial).map(book => book.title)
}

console.log(getTitles('J'))
*/
/* e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.


function latestBook() {
    let latest = null;
    books.forEach(function(book) {
        if (!latest || book.year > latest.year) {
            latest = book;
        }   
    })
    return latest;
}   

console.log(latestBook())
*/
//q8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')