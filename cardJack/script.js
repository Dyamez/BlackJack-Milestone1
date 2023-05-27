let tago; 
let tumpok; 
let patok = true;  
let sumaTangero = 0; 
let akingBilang = 0;  
let unangBilang = 0; 
let baraha = 0;  

let latagan = () => { 
    let uri = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
    let kahulugan = ["C", "D", "H", "S"]; 
    tumpok = []; 

    for (let i = 0; i < kahulugan.length; i++) {    
        for (let x = 0; x < uri.length; x++) {   
            tumpok.push(uri[x] + "-" + kahulugan[i]); 
        }
    }
     console.log(tumpok); 
}

function karambola() { 
    for (let i = 0; i < tumpok.length; i++) {  
        let x = Math.floor(Math.random() * tumpok.length); 
        let epal = tumpok[i]; 
        tumpok[i] = tumpok[x]; 
        tumpok[x] = epal; 
    }
    console.log(tumpok);  
}

function umpisaLaro() { 
    tago = tumpok.pop(); 
 sumaTangero += kuhaSagot(tago); 
    unangBilang += kuhaTangero(tago); 
    
    while  (sumaTangero < 17) {  
        
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                          
        tumpokPik.src = "./assets/" + papel + ".png";       
     sumaTangero += kuhaSagot(papel);                
        unangBilang += kuhaTangero(papel);                 
        document.getElementById("tangero").append(tumpokPik);    
    }
    console.log (sumaTangero);     

    for (let i = 0; i < 2; i++) {
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                          
        tumpokPik.src = "./assets/" + papel + ".png";       
        akingBilang += kuhaSagot(papel);                      
        baraha += kuhaTangero(papel);                 
        document.getElementById("bioData").append(tumpokPik);  
    }

    console.log(akingBilang);                                               
    document.getElementById("umpisa").addEventListener("click", palo);      
    document.getElementById("kuha").addEventListener("click", pirme);    

}

function kuhaSagot(papel) {           
    let kaalaman = papel.split("-");         
    let halaga = kaalaman[0];            

    if (isNaN(halaga)) {             
        if (halaga == "A") {             
            return 11;
        }
        return 10;
    }
    return parseInt(halaga);
}

function kuhaTangero(papel) {       
    if (papel[0] == "A") {       
        return 1;
    }
    return 0;
}

function bawasTungga(damiMo, damiNya) {         
    while (damiMo > 21 && damiNya > 0) {      
        damiMo -= 10;                                
        damiNya -= 1;                           
    }
    return damiMo;                                   
}


function palo() {        
    if ( patok) {      
        return;
    }

    let tumpokPik = document.createElement("img");        
    let papel = tumpok.pop();                              
    tumpokPik.src = "./assets/" + papel + ".png";           
    akingBilang += kuhaSagot(papel);                          
    baraha += kuhaTangero(papel);                     
    document.getElementById("bioData").append(tumpokPik);  

    if (bawasTungga(akingBilang, baraha) > 21) {            
     patok = false;                                     
    }

}

function pirme() {                                                       
 sumaTangero = bawasTungga (sumaTangero, unangBilang);                   
    akingBilang = bawasTungga(akingBilang, baraha);                         

 patok = false;                                                     
    document.getElementById("tagoMo").src = "./assets/" + tago + ".png";   
    let mensahe = "";           
    if (akingBilang > 21) {         
        mensahe = "You Lose!";  
    }
    else if  (sumaTangero > 21) {      
        mensahe = "You win!";           
    }
    //both you and dealer <= 21
    else if (akingBilang == sumaTangero) {        
        mensahe = "Tie!";                   
    }
    else if (akingBilang > sumaTangero) {         
        mensahe = "You Win!";               
    }
    else if (akingBilang < sumaTangero) {        
        mensahe = "You Lose!";              
    }

    document.getElementById("sumaTangeroTutal").innerText = sumaTangero;    
    document.getElementById("barahaKo").innerText = akingBilang;        
    document.getElementById("sugarol").innerText = mensahe;         
}

window.onload = () => {
    latagan(); 
    karambola();
    umpisaLaro(); 
}






