let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha") 

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
     
}
//let sumEl = document.querySelector("#sumaTotal")
//console.log(sum)
function bagongLaro() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    mgaBaraha.textContent = "Cards: " 
    for ( i = 0; i < cards.length; i++) {
        mgaBaraha.textContent += cards[i] + " "
    }
    kalahatan.textContent = ("Sum: ", + sum)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = " Hurray, You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    kathangTalata.textContent = message 
}

function bagongBalasa() {
    //console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
    //startGame()
    
}
/*
let age = 22

if (age <= 20) {
    console.log("Not allowed!")
} else if (age === 21) {
    console.log("Goodluck Player!")
    
}

else {
    console.log("Welcome!")
}




else if (age > 21) {
    console.log("Good Luck!")
} else if (age === 21) {
    console.log("Welcome!")
} 
*/
 