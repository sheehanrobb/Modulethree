
const today = new Date();
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