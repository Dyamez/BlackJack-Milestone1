
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha")
let mgaSugarol = document.getElementById("sugarol") 
const bellSnd = document.getElementById("tunog1") //concept linking audio file referenced from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
const yeySnd = document.getElementById("tunog2")
let manlalaro = { pangalan: "🤑JavaNerd", barya: 223 }
mgaSugarol.textContent = manlalaro.pangalan + ": 💰" + manlalaro.barya 

let kalawakan = {
    tumpok : [],
    kabuuan : 0,
    panalo : false,
    buhay : false,
    mensahe : "",
}

 let karambola = () => {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
}

 bagongLaro = ()=>{
    kalawakan.buhay = true
    let unangBaraha = karambola();
    let pangalawangBaraha = karambola();
    kalawakan.tumpok = [unangBaraha, pangalawangBaraha]
    kalawakan.kabuuan = unangBaraha + pangalawangBaraha
    simula()
    yeySnd.play()
}

 let simula = ()=>{
    mgaBaraha.textContent = "Your Hand: "
    for (let i = 0; i < kalawakan.tumpok.length; i++) {
        mgaBaraha.textContent += kalawakan.tumpok[i]
        + " "
    }
    kalahatan.textContent = "Result: " + kalawakan.kabuuan    
    if (kalawakan.kabuuan <= 20) {
        kalawakan.mensahe = "Pick a new card"
    }  else if (kalawakan.kabuuan === 21) {
        kalawakan.mensahe = " Hurray, its Blackjack!"
        kalawakan.panalo = true
     } else {
        kalawakan.mensahe = "Better luck next time!"
        kalawakan.buhay = false
    }
    kathangTalata.textContent = kalawakan.mensahe 
} 

 bagongBalasa = ()=>{
    if (kalawakan.buhay === true && kalawakan.panalo === false) {
   // return kalawakan.buhay === true && kalawakan.panalo ==false; { 
        let tumpok = karambola()
        kalawakan.kabuuan += tumpok
        kalawakan.tumpok.push(tumpok)
        simula()
        bellSnd.play()
    }
}
