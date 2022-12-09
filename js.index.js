//document.getElementById("count-el").innerText = 5
let firstBatch = 5*6
let secondBatch = 4
let Batch = firstBatch + secondBatch

console.log(Batch) 

// 1. create a variable, myAge, and set its value to your age
//2. log the myAge variable to the console
//let myAge = 125 

//console.log(myAge) 

// create two variables and mulitply and the log
let myAge = 99 
let humanDogRatio = 7
console.log(myAge *humanDogRatio)

//Resigning and increament variable
let count = 0
count= count + 1
 count= count + 10
count = count - 5
console.log(count) 

// create a variable bonus,init it as 50. inc it to 100.dec 25 and finally inc 70
let bonusPoint = 50;
console.log(bonusPoint)
bonusPoint+=50;
console.log(bonusPoint)
bonusPoint-=75;
console.log(bonusPoint) 
bonusPoint+=45;
console.log(bonusPoint) 

// init the count.listen onclick when increament button..then change the count-el in HTML to reflect new count
function increament(){
    count += 1
    console.log("count")
}
//const button =document.getElementById('increament-btn')
//button.addEventListener('click', function(){
   // console.log("The button was onclick")
//})

// SETTING UP THE RACE GAME
 function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()// first race

countdown()// second race 


// writing the Function that logs out any number to the console
// call/invoke the function
function myLogger() {
    console.log(42)
}
myLogger()

//writing a function that logs the sum of all lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36
function logLapTime() { 
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}
 logLapTime()

 //writing a function that increament lapscompleted with one
 // Run it three times
let lapscompleted = 0
function increamentLap() {
    lapscompleted += 2
} 
increamentLap() 
increamentLap() 
increamentLap() 
console.log(lapscompleted) 

// change the count-el in the HTML to reflect the new count
// camelCase
let countEl = document.getElementById("count-el")

console.log(countEl)

let counter = 0
function increament() {
    counter +=1
    countEl.innerText = counter

}
// The Document object model
// Create a function, save() ,which logs the counter when it's called
 function save(){

    console.log(counter)
 } 
 //writing string variable
 // challenge 1
 let username = "Justine"

 let message = "You have three new notifications"

 let messageToUser = message + ", " + username + "!!"

 console.log(messageToUser)

 // challenge 2
 let name = "Davies Ibrahim Nabaala"

 let greeting = "Hi, my name is "

 let myGreeting = greeting + "," + name

 console.log(myGreeting)

 //challenge 3 Number and strings
 let points = 8

 let bonuspoints = "10"

 let totalPoints = points + bonuspoints

 console.log(totalPoints)

 //challenge 4
 let nub1 = 4
 let nub2 = 5
 console.log(4 + 5)

 //Render a welcome message using innerText
let welcomeEl= document.getElementById("welcome-el")

let fname = "Vestine J Nabaala"
let greetings ="Highly welcome back"

welcomeEl.textContent = greetings + "," +fname + "👋"
// add an emoji to the end
welcomeEl.textContent += "👋" + "✨"

// Create a save feature
let saveEl = document.getElementById("save-el")
let count1El = document.getElementById("count-el")
let count1 = 0

console.log(saveEl)

function increament(){
    count1 += 1
    countEl.textContent = count1
}

function save(){
    let countStr = count1 + " - "
    saveEl.textContent += countStr
    count1El.textContent = 0
    count1 = 0 
    
}
 
//let errorParagraph = document.getElementById("error")
//console.log(errorParagraph)

//function purchase(){
  //  console.log("button clicked")
  //  errorParagraph.textContent = "Something went wrong, please try again"
//}