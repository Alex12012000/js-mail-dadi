// Dati utente
const userEmail = prompt("Qual'è la tua email?");

// Email nel "database"
const emails = ['topleaf91@easygbd.com', 'gwm4grps@pickuplanet.com', 'ivannbi4@ololzi.ga', 'mike2101@bai47.com', 'marcorossi@gmail.com'];


let emailCheck = false;
// Controlliamo che l'email inserita dall'utente sia nella lista delle email nel database
for ( let i = 0; i < emails.length; i++) { 
    
    const thisEmail = emails[i];
   
    // Se nel database l'email inserita dallìutente è presente emailCheck = true
    if (userEmail === thisEmail) {
        emailCheck = true;
    }

}

// Stampiamo esito del controllo
// Se l'esito è positivo dico all'utente che la sua email è presente
// Altrimenti errore

if (emailCheck) {
    alert('La tua email è presente nel database!');
} else {
    alert('La tua email non è presente nel database! Procedi con la registrazione.');
}


