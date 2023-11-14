"use strict"

const arrayVuoto = []
let somma = 0
console.log(arrayVuoto)

while(somma < 50){
  const numero =Number(prompt("inserisci il numero"))
  arrayVuoto.push(numero)
    somma+= numero;
    console.log("la somma dei miei elementi è" + somma)
}                




