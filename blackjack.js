let firstcard = getRandomcard()
let secondcard = getRandomcard()
let cards = []// array - ordered list of items
document.getElementById("fcard-el").textContent//= firstcard
document.getElementById("scard-el").textContent//= secondcard
 
let sum = 0//firstcard + secondcard 
let hasblackjack = false
let isAlive = false
let message = ""

//store the message-el and sum-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)
//let sumEl = document.getElementById("sum-el")
//console.log(sumEl)
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

let player = {
    Name :"Justine",
    Chips : 125
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

// return random btn 1 & 13
function getRandomcard(){
    let getRandomcard = Math.floor(Math.random()*13) + 1
    return getRandomcard
}
console.log(getRandomcard())

 
function StartGame(){
    isAlive = true
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
     cards = [firstcard,secondcard]
     sum = firstcard  + secondcard

    RenderGame() 
}

function RenderGame(){
// render out first and second cards on the page format    
    cardsEl.textContent = "cards: " //+ cards[0] + " " + cards[1]
    for(let x = 0; x < cards.length; x++){
        cardsEl.textContent += cards[x] + " "
    }
// renderout all the cards we have
    sumEl.textContent = "sum: " + sum

    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message ="Wohoo! you've got Blackjack!"
        hasblackjack = true
    }else if(sum > 21){
        message="You're out of the game!"
        isAlive = false
    }
//display message in the messageEl using .textcontent    
    messageEl.textContent = message
    
}
function newCard(){
   if (isAlive === true && hasblackjack === false){
       let card = getRandomcard()
       sum += card
       cards.push(card)
       RenderGame()
   }
   
}











