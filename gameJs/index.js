
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha")
let mgaSugarol = document.getElementById("sugarol") 

let manlalaro = { pangalan: "🤑JavaNerd", barya: 223 }
mgaSugarol.textContent = manlalaro.pangalan + ": 💰" + manlalaro.barya 

let kalawakan = {
    tumpok : [],
    kabuuan : 0,
    panalo : false,
    buhay : false,
    mensahe : "",
}

function karambola() {
    
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
    
}

function bagongLaro() {
    kalawakan.buhay = true
    let unangBaraha = karambola();
    let pangalawangBaraha = karambola();
    kalawakan.tumpok = [unangBaraha, pangalawangBaraha]
    kalawakan.kabuuan = unangBaraha + pangalawangBaraha
    simula()
}
function simula() {
    mgaBaraha.textContent = "Your Hand: "
    for (let i = 0; i < kalawakan.tumpok.length; i++) {
        mgaBaraha.textContent += kalawakan.tumpok[i] + " "
    }
    kalahatan.textContent = "Result: " + kalawakan.kabuuan    
    if (kalawakan.kabuuan <= 20) {
        kalawakan.mensahe = "Pick a new card"
    } else if (kalawakan.kabuuan === 21) {
        kalawakan.mensahe = " Hurray, its Blackjack!"
        kalawakan.panalo = true
    } else {
        kalawakan.mensahe = "Better luck next time!"
        kalawakan.buhay = false
    }
    kathangTalata.textContent = kalawakan.mensahe 
} 
function bagongBalasa() {
    if (kalawakan.buhay === true && kalawakan.panalo === false) {
        let tumpok = karambola()
        kalawakan.kabuuan += tumpok
        kalawakan.tumpok.push(tumpok)
        simula()
    }
}


/*
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha")
let mgaSugarol = document.getElementById("sugarol") 

let manlalaro = { pangalan: "🤑JavaNerd", barya: 223 }
mgaSugarol.textContent = manlalaro.pangalan + ": 💰" + manlalaro.barya 

let tumpok = []
let kabuuan = 0
let panalo = false
let buhay = false
let mensahe = ""

function karambola() {
    
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
    
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
    mgaBaraha.textContent = "Your Hand: "
    for (let i = 0; i < tumpok.length; i++) {
        mgaBaraha.textContent += tumpok[i] + " "
    }
    kalahatan.textContent = "Result: " + kabuuan    
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
*/