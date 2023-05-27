var sumaTangero = 0; //dealerS
var akingBilang = 0; //myS
var unangBilang = 0; //dealerAC
var baraha = 0; //myAC
var patok = true;
var tago;
var tumpok;

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

console.log(latagan)

let karambola = ()=>{
    for (let i = 0; i < tumpok.length; i++){
        let x = Math.floor(Math.random() * tumpok.length);
        tumpok[i] = tumpok[x];
        tumpok[x] = epal;
        let epal = tumpok[i]
    }
    console.log(tumpok);
}

let umpisaLaro = ()=> {
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
    console.log(sumaTangero)
    //console.log(umpisaLaro)
    
    for (let i = 0; i < 2; i++) {
        let tumpokPik = document.createElement("img");
        let papel  = tumpok.pop(); 
        tumpokPik.src = ".assets/" + papel + "png";
        sumaTangero += kuhaSagot(papel);
        unangBilang += kuhaTangero(papel);
        document.getElementById("tangero").append(tumpokPik)
    }
    console.log(akingBilang)
    document.getElementById("umpisa").addEventListener("click", palo);
    document.getElementById("kuha").addEventListener("click", pirme);
}
    const palo = ()=>{if (!sapul){return}
    let tumpokPik = document.createElement("img");
        let papel  = tumpok.pop(); 
        tumpokPik.src = ".assets/" + papel + "png";
        sumaTangero += kuhaSagot(papel);
        unangBilang += kuhaTangero(papel);
        document.getElementById("tangero").append(tumpokPik)
        if (bawasTungga(akingBilang, baraha) > 21){
            sapul = false;
        }
};
    let pirme = ()=>{
        sumaTangero = bawasTungga(sumaTangero, unangBilang);
        akingBilang = bawasTungga(akingBilang, baraha);
        sapul = false;
        document.getElementById("tago").src = ".assets/" + tago + ".png"
        let mensahe = "";
        if (akingBilang > 21) {
            mensahe = "Better Luck Next Time!"
        } else if (sumaTangero > 21){
            mensahe = "You got Black Jack!"
        } else if (akingBilang == sumaTangero){
            mensahe = "You are Tied!"
        } else if (akingBilang > sumaTangero){
            mensahe = "You got Black Jack!"
        }
        else if (akingBilang < sumaTangero){
            mensahe = "Better Luck Next Time!"
        };
        document.getElementById("sumaTangero").innerText = sumaTangero;
        document.getElementById("barahaKo").innerText = akingBilang;
        document.getElementById("sugarol").innerText = mensahe;
}
let kuhaSagot = (papel)=>{
    let kaalaman = papel.split("-");
    let halaga = kaalaman[0];
    if (isNaN(halaga)) {
        if (halaga == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(halaga)
}
let kuhaTangero = (papel)=>{
    if (papel[0] == "A"){
        return 1;
    }
    return 0
}
let bawasTungga = (damiMo, damiNya)=> {
    while (damiMo > 21 && damiNya > 0){
        damiMo -= 10;
        damiNya -= 1
    }
    return damiMo
}
window.onload = ()=>{
    umpisaLaro();
    karambola(); 
    latagan()
}