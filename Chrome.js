// let listItems = ""
// for(let i = 0; i < myLeads.length; i++){
    
//     listItems += "<li>" + myLeads[i] + "</li>"// add item to list
// }
// ulEl.innerHTML = listItems

// // create a render Function
// function renderLeads(){
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++){
    
//         listItems += "<li> <a href='#'>" + myLeads[i] + "</a></li>" // to add alink in js
//     }
//     ulEl.innerHTML = listItems
// } 
// renderLeads()// call a function

// ///how to clear input in javascript
// inputEl.value = ""
// renderLeads()
// //how to creat a link and open on new tab
// listItems +=`
// <li>
//   <a target = '_blank' href='${myLeads[i]}'>
//       $myLeads[i]
//   </a>
// </li>
// `
// how to write template string
const recipient = "James" 
const sender = "Davies M. J"
// refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Justine"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`
console.log(email)

// truthy and falsy values
const credits = 12
if(credits > 0){
    console.log("Lets play the Game")
}else{
    console.log("Sorry,you have no credits")
}
// //Delete Function
// deleteBtn.addEventListener("dblclicked", function(){
//     console.log("double clicked")
//     db.clear()
//     myId = [12]
//     renderId()
// }) 

// Different between parameters and Arguments
function add(num1, num2){//num1 ,num2 are parameters aer inside function
    return num1 + num2
}
add(3, 4)//3 ,4 are arguments

//PRACTICE CHALLENGE
// setting the stage
const player = "Justine"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false
//playing the game
points += 100
hasWon = true
//announce the winner
if(hasWon){
    console.log(`${player} got ${points} points and won the ${game} game!`)
}else{
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}
//create a function that single parameter an array
let myCourses = ["Learn CSS","UI Design Fundamentals","Intr to clean code"]
function logItems(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
logItems(myCourses)//call a function
