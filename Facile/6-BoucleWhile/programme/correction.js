var readline = require("readline-sync");

var saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
var fin = false;

while(!fin){
    if(isNaN(saisie)){
        console.log("Veuillez recommencer la saisie, vous devez saisir un nombre");
        saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
    } else {
        console.log("C'est un nombre");
        fin = true;
    }
}

console.log("Le nombre saisi est : " + saisie);