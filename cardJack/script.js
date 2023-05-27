let unangBilang = 0; //dealerAC
let akingBilang = 0; //myS
let sumaTangero = 0; //dealerS
let baraha = 0; //myAC
let patok = true;
let tago;
let tumpok;

let latagan = ()=>{
    tumpok = []
    let kahulugan = ["C", "D", "H", "S"];
    let uri = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (let i = 0; i < kahulugan.length; i++) {
        for (let x = 0; x < uri.length; x++) {
            tumpok.push(uri[x] + "-" + kahulugan[i]);
        }
    }
}
let karambola = ()=>{
    for (let i = 0; i < tumpok.length; i++){
        let x = Math.floor(Math.random() * tumpok.length);
        tumpok[i] = tumpok[x];
        tumpok[x] = epal;
        let epal = tumpok[i]
    }
    console.log(tumpok);
}

let umpisaLaro = ()=>{
    tago = tumpok.pop();
    sumaTangero += kuhaSagot(tago);
    unangBilang += kuhaTangero(tago);
    while (sumaTangero < 17) {
        let tumpokPik = document.createElement("img");
        let papel  = tumpok.pop();  //card
        tumpokPik.src = ".assets/" + papel + "png";
        sumaTangero += kuhaSagot(papel);
        unangBilang += kuhaTangero(papel);
        document.getElementById("tangero").append(tumpokPik)
    }









    document.getElementById("tago").src = ".assets/" + tago + ".png";
    patok = false;
    sumaTangero = 
}


document.getElementById("sumaTangero").innerText = sumaTangero;
document.getElementById("baraha").innerText = baraha;
document.getElementById("sumaTotal").innerText = mensahe;

window.onload = ()=>{umpisaLaro(), karambola(), latagan()}

let kuhaSagot = ()=>{
    let laman = 
}

