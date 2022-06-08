// Dati HTML
const userDice = document.getElementById('user-dice');
const userNumber = document.getElementById('user-number');
const computerNumber = document.getElementById('computer-number');
const finalResult = document.getElementById('result');




// Quando l'utente preme il pulsante tira i dadi
userDice.addEventListener ('click',
    function() {
        // L'utente tira i dadi
        let diceUserNumber = Math.floor(Math.random() * 6) + 1;
        userNumber.innerHTML = 'Il tuo numero è ' + diceUserNumber;
    
        // Il computer tira i dadi 
        let diceComputerNumber = Math.floor(Math.random() * 6) + 1;
        computerNumber.innerHTML = 'Il numero del computer è ' + diceComputerNumber;
    
        // Se il computer genera un numero maggiore
        // a quello dell'utente, il computer vince
        // Se l'utente gioca un numero maggiore a quello del computer
        // l'utente vince
        // Invece se l'utente e il computer giocano lo stesso numero
        // è patta
        if (diceUserNumber > diceComputerNumber) {
            finalResult.innerHTML = 'Hai vinto!'
        } else if (diceUserNumber < diceComputerNumber) {
            finalResult.innerHTML = 'Hai perso!'
        } else {
            finalResult.innerHTML = 'É patta!'
        }

    }
)


