

let tumpok = []
let kabuuan = 0
let panalo = false
let buhay = false
let mensahe = ""
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha")
let mgaSugarol = document.getElementById("sugarol") 

let manlalaro = { pangalan: "Edward", barya: 430 }
mgaSugarol.textContent = manlalaro.pangalan = ": $" + manlalaro.barya 

function karambola() {
    //return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function bagongLaro() {
    buhay = true
    let unangBaraha = karambola();
    let pangalawangBaraha = karambola();
    tumpok = [unangBaraha, pangalawangBaraha]
    kabuuan = unangBaraha + pangalawangBaraha
    simula()
}
function simula() {
    mgaBaraha.textContent = "Cards: "
    for (let i = 0; i < tumpok.length; i++) {
        mgaBaraha.textContent += tumpok[i] + " "
    }
    kalahatan.textContent = "Sum: ", + kabuuan    //!
    if (kabuuan <= 20) {
        mensahe = "Pick a new card"
    } else if (kabuuan === 21) {
        mensahe = " Hurray, its Blackjack!"
        panalo = true
    } else {
        mensahe = "Better luck next time!"
        buhay = false
    }
    kathangTalata.textContent = mensahe 
} 
function bagongBalasa() {
    if (buhay === true && panalo === false) {
        let tumpoks = karambola()
        kabuuan += tumpoks
        tumpok.push(tumpoks)
        simula()
    }
}