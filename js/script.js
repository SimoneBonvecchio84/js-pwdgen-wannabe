// Il programma chiede:
// Chiedi all'utente tramite prompt il suo nome,
// il cognome e il suo colore preferito
// infine scrivi sulla pagina nome cognome e colore preferito21

//RACCOLTA DATI
// 1 Creare una variabile let per chidere all'utente come si chiama

let userName = prompt("Ciao Utente! Come ti chiami?");
console.log(userName, typeof userName);  // stringa

// 2 Creare una variabile let per chiedere all' utenete quanti anni ha

let userAge = prompt("Ciao Utente! Quanti anni hai?");

// trasformiamo la stringa età in un numreo con il comando parseInt

userAge = parseInt(userAge);
console.log(userAge, typeof userAge); // number

// 3 Creare una variabile le per chiedere all utente il suo colore preferito

let favoriteColor = prompt("Ciao Utente! Qual'è il tuo colore preferito?");
console.log(favoriteColor, typeof favoriteColor); // string

// Math.random
// creo un generatore random di numeri e lo deposito in una variabile
let numRandom = Math.floor(Math.random() * 101);

// PARTE LOGICA 
// sommiamo i valori precedenti per creare una password contenete tutte le
// info raccolte e inserite nei prompt

let sommaInfo = userName + userAge + favoriteColor +numRandom; // string
console.log(sommaInfo);

// OUTPUT
// Stampo il messaggio in pagina grazie a getElementById

const raccoltaInfo = `${sommaInfo}`; // string

document.getElementById("password_gen").innerHTML =raccoltaInfo ;

