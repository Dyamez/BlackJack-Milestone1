let tumpok = []
let kabuuan = 0
let panalo = false
let buhay = false
let mensahe = ""
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha") 

function karambola() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
}

function bagongLaro() {
    buhay = true;
    let unangBaraha = karambola();
    let pangalawangBaraha = karambola();
    tumpok = [unangBaraha + pangalawangBaraha]
    let kabuuan = unangBaraha + pangalawangBaraha
    simulaLaro()
}
function simulaLaro()