//ARRAYS
let experience = ["CEO at myhome","fronted instructor","family counter for basic needs"]
console.log(experience[0])
console.log(experience[1])
console.log(experience[2])

//removing and adding array
let card = [7, 5]
card.push(3)
console.log(card)

// adding new message
let messages = ["Hi, my name Justine","age is 99"]
let newmessage = "same there!"
messages.push(newmessage)
console.log(messages)

messages.pop()
console.log(messages)




//check if the person is old enough to enter the nightclub(21)
let age = 19
if (age < 21){
    console.log("You cannot be allowed to enter the nightclub")
}else{
    console.log("Welcome to the nightclub")
}
//check if the person is eligible for birthday card from the king
let marks = 350
if(marks< 350){
    console.log("Not eligible")
}else if(marks === 350){
    console.log("Here is your birthday card from the king!")
}else{
    console.log("You have already gotten one")
}


//FOR LOOPS
let count = 1
for (let count = 10; count<21; count += 1){
    console.log(count)
}

//challenge 1
for(let i = 0; i < 6; i += 1 ){
    console.log(i)
}
//challenge 2
for(x = 10; x<101; x += 10){
    console.log(x)
}

//loops and arrays
let message = ["pandas library","Django framework", "javascript","great news","bootstraps library","python language"] 
for(let y = 0; y  < message.length; y += 1){
    console.log(message[y])
}

//get random values
let player1time = 102
let player2time = 106
function getfastRaceTime(){
    if (player1time < player2time){
        console.log(player1time)
    } else if(player2time<player1time) {
        console.log(player2time)
    }else {
      console.log(player1time)
    }
  }
let fastestRace = getfastRaceTime()
console.log(fastestRace)
//write a function to return the total race time
//call/invoke the functions and store the return value in a new variable
//finally, log the variable out
function getTotalRaceTime(){
    return player1time + player2time
}
let totalTime = getTotalRaceTime()
console.log(totalTime)

//Generating random number
let randomNumber = Math.random()*6
console.log(randomNumber)

let flooredNumber = Math.floor(12.99999999999)
console.log(flooredNumber)

//writing Dice functions
//challenge 1
let RandomNumber = Math.floor(Math.random()*6)
console.log(RandomNumber)

//challenge 2 returning value btn 1 & 6
let RAndomNumber = Math.floor(Math.random()*6) + 1
console.log(RAndomNumber)

//challenge 3 write a function called rolldice to return 1$6
function rolldice(){
    let rAndomNumber = Math.floor(Math.random()*6) + 1
    return rAndomNumber
}
console.log(rolldice() )

//Logical operators
let hascompletecourse = true
let givescertificate = true

if(hascompletecourse === true || givescertificate === false){
        generatecertificate()
    }

function generatecertificate(){
    console.log("Generating certificate....")
} 

// challenge 2
let likesdocumentaries = true
let likestartups = false
if (likesdocumentaries === true || likestartups === true){
    recommendMovie()
}
function recommendMovie(){
    console.log("Hey , check out this new film we thik you will like!")
} 

// Creating Objects - stores data in-depth / complex data type
// key-value pairs
let course = {
    title: "Learn CSS grid for free",
    lessons: 16,
    creator: "Just Davies",
    length: 67,
    level: 3,
    isfree: true,
    tags:["html","css"]
}
console.log(course.tags)
//challenge 2
 let castle = {
    title: "Live like a king in my castle",
    prices: 180,
    isSuperHost:true,
    images: ["img/castle.png","img/caste2.png"]

 }
 console.log(castle.title)
 console.log(castle.images)  

 //PRACTICE FUNCTIONS AND OBJECTS
let programmer = {
    name : "Just",
    age : 99,
    country : "Country"
} 
function logData(){
    console.log("Just","is","99","years","old","and","lives","in","Kenya")
}
logData()

//IF/ELSE/ELSE IF
let Age = 77
if(Age < 6){
    console.log("free discount")
}else if(Age <= 17){
    console.log("child discount")
}else if(Age <= 26){
    console.log("Student discount")
}else if(Age <= 66){
    console.log("full price")
}else {
    console.log("senior citizen discount")
}

//PRACTCE FOR LOOPS 
let largeCountries = ["China","India", "USA","France","Russia","Kenya"]
for (let j = 0; j<largeCountries.length; j++){
    console.log("- " + largeCountries[j])
}
//challenge1
let largeCountry = ["China","India", "USA","France","Russia","Kenya"]
largeCountry.pop()
largeCountry.push("Ramadhan")
largeCountry.shift()
largeCountry.unshift("Nigeria")
console.log(largeCountry)

// RETURN 
let hand = ["Rock","Paper","Scissor"]
function gethand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hand[randomIndex]
}
console.log(gethand() )