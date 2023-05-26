
let kathangTalata = document.getElementById("talata")
let kalahatan = document.getElementById("sumaTotal")
let mgaBaraha = document.getElementById("baraha")
let mgaSugarol = document.getElementById("sugarol") 
const bellSnd = document.getElementById("tunog1")                //concept linking audio file referenced from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
const yeySnd = document.getElementById("tunog2")
                                                                // I used "ID's" instead of classed on my HTML as i prefer targeting elements by itself.
let manlalaro = { pangalan: "🤑JavaNerd", barya: 223 }
mgaSugarol.textContent = manlalaro.pangalan + ": 💰" + manlalaro.barya 

let kalawakan = {
    tumpok : [],                                                // empty array to be 'added to' by my defined functions.
    kabuuan : 0,
    panalo : false,                                             //booleans 
    buhay : false,                                              //booleans
    mensahe : "",
}                                                               // I opted to 'encase' my variables to make the code more readable.

 let karambola = () => {                                        //I prefer using an 'arrow function' instead of wording out 'function'. It looks cooler to me.
    let randomNumber = Math.floor( Math.random()*13 ) + 1
                                                                //'Math.floor' was an included function of java I got the concept from scrimba & jschart youtube, since I would need to know how to round
                                                                //the value i got from 'Math.random'. I don't remember it being discussed in class.
    return randomNumber >  10 ? 10 : randomNumber === 1 ? 11 : randomNumber 
                                                                // this ^ concept of refactoring came from Sam, in one of our class. the shortcut "pulling all the tricks" as he called it.
}

 bagongLaro = ()=>{
    kalawakan.buhay = true
                                                                // A period was used to access the child objects encased in the parent object.
    let unangBaraha = karambola();
    let pangalawangBaraha = karambola();
    kalawakan.tumpok = [unangBaraha, pangalawangBaraha]
    kalawakan.kabuuan = unangBaraha + pangalawangBaraha
    simula()
    yeySnd.play()                                               //invocation of my sound snippet file.
}

 let simula = ()=>{
                                                                // for loops was a complicated concept to integrate for me, but had used it with 'Math.random'. This was discussed in day 2 of JS class.
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
                                                                //desperately trying to refactor this 'for loop' like the previous loop, 
                                                                //but am unable to make it work.
    kathangTalata.textContent = kalawakan.mensahe               // line 58 is displaying the result in the HTML.

} 

 bagongBalasa = ()=>{
    if (kalawakan.buhay === true && kalawakan.panalo === false) {
        let tumpok = karambola()
        kalawakan.kabuuan += tumpok
        kalawakan.tumpok.push(tumpok)
        simula()
        bellSnd.play()
    }
}