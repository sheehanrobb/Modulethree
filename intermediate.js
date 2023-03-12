
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