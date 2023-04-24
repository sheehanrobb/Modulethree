//class exercise
/*
class Vehicle{
    constructor(speed){
        this.speed = speed;
    }
    move(){
        console.log(`move at ${this.speed} speed`)
    }
}

let run = new Vehicle("Slow")
let walk = new Vehicle("very slow")
let sprint = new Vehicle("Medium/slow")

walk.move()
run.move()

class Car extends Vehicle{
    constructor(speed){
        super(speed)
    }
    drive(){
        console.log(`Driving at ${this.speed} speed`)
    }
}

let ford = new Car("100mph")

ford.drive()

Note: you dont need to use classes for everything 
*/
/*
function startPreparingPizza() {
    console.log('startPreparingPizza')
}

function pizzaBaseIsPrepared() {
    console.log('pizzaBaseIsPrepared')
}
function cheeseIsAddedOnPizza() {
    console.log('cheeseIsAddedOnPizza')
}
function veggiesAreAddedOnPizza() {
    console.log('veggiesAreAddedOnPizza')
}
function pizzaIsHeated() {
    console.log('pizzaIsHeated')
}
function pizzaIsReady() {
    console.log('pizzaIsReady')
}

startPreparingPizza()
pizzaBaseIsPrepared()
cheeseIsAddedOnPizza()
veggiesAreAddedOnPizza()
pizzaIsHeated()
pizzaIsReady()
*/
/*program 2
const startPreparingPizza = function() {
    console.log('startPreparingPizza')
}

const pizzaBaseIsPrepared = function() {
    console.log('pizzaBaseIsPrepared')
}
const cheeseIsAddedOnPizza = function() {
    console.log('cheeseIsAddedOnPizza')
}
const veggiesAreAddedOnPizza = function() {
    console.log('veggiesAreAddedOnPizza')
}
const pizzaIsHeated = function() {
    console.log('pizzaIsHeated')
}
const pizzaIsReady = function() {
    console.log('pizzaIsReady')
}

startPreparingPizza()
pizzaBaseIsPrepared()
cheeseIsAddedOnPizza()
veggiesAreAddedOnPizza()
pizzaIsHeated()
pizzaIsReady()
*/
/* program 3
const startPreparingPizza = () =>{
    console.log('startPreparingPizza')
}

const pizzaBaseIsPrepared = () =>{
    console.log('pizzaBaseIsPrepared')
}
const cheeseIsAddedOnPizza = () => {
    console.log('cheeseIsAddedOnPizza')
}
const veggiesAreAddedOnPizza = () => {
    console.log('veggiesAreAddedOnPizza')
}
const pizzaIsHeated = () => {
    console.log('pizzaIsHeated')
}
const pizzaIsReady = () => {
    console.log('pizzaIsReady')
}
startPreparingPizza()
pizzaBaseIsPrepared()
cheeseIsAddedOnPizza()
veggiesAreAddedOnPizza()
pizzaIsHeated()
pizzaIsReady()

*/
function newOrder(nextfunc) {
    console.log('New Order')

}
function startPreparingPizza(nextfunc) {
    console.log('startPreparingPizza')
    setTimeout(nextfunc, 400, pizzaBaseIsPrepared)
}

function pizzaBaseIsPrepared(nextfunc) {
    console.log('pizzaBaseIsPrepared')
    setTimeout(nextfunc(cheeseIsAddedOnPizza), 400)
}
function cheeseIsAddedOnPizza(nextfunc) {
    console.log('cheeseIsAddedOnPizza')
    setTimeout(nextfunc(veggiesAreAddedOnPizza, 400))
}
function veggiesAreAddedOnPizza(nextfunc) {
    console.log('veggiesAreAddedOnPizza')
    setTimeout(nextfunc(pizzaIsHeated, 400))
}
function pizzaIsHeated(nextfunc) {
    console.log('pizzaIsHeated')
}
function pizzaIsReady() {
    console.log('pizzaIsReady')
}
