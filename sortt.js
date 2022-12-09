//GREAT CHALLENGE SORTING ITEMS
let fruit = ["RED","BLUE","RED","RED","BLUE","YELLOW","RED","YELLOW"]
let redShelf = document.getElementById("redshelf")
let blueShelf = document.getElementById("blueshelf")
let yellowShelf = document.getElementById("yellowshelf")
function sortFruit(){
    for(let x = 0; x < fruit.length; x++){
        if(fruit[x]=== "RED"){
            redShelf.textContent += "RED" + " "
        }else if (fruit[x] === "BLUE"){
            blueShelf.textContent += "BLUE" + " "
        }else {
            yellowShelf.textContent += "YELLOW" + " "
        }
    }
}
sortFruit()