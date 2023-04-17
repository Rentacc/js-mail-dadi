// Genera un numero casuale intero tra 1 e 6
var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

alert(` Il numero del tuo avversario è: ${randomNum}` )
alert(` Il tuo numero è: ${randomNum2}` )

if (randomNum < randomNum2) {
    alert("HAI VINTO!");
} 
    if (randomNum > randomNum2) {
        alert("HAI PERSO!");
 }    

 if (randomNum == randomNum2) {
    alert("PAREGGIO!");
}    
  
 