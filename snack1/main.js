"use scrict";

const parola1 = prompt("inserisci una parola utente 1");
console.log(parola1)
const parola2 = prompt("inserisci una parola utente 2 ");
console.log(parola2)

if(parola1.length < parola2.length){
    console.log("la parola più corta è " + parola1)
    console.log("la parola più lunga è"+ parola2)
} else if (parola2.length < parola1.length){
    console.log("la parola più corta è" + parola2);
    console.log("la parola più lunga è " + parola1);
} else {
    console.log("le parole hanno la stessa grandezza")
}