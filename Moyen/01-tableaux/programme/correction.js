var readLine = require("readline-sync");

var tab = [3,5,10,12];
var saisie = "";

while(saisie !== "Q" && saisie !== "q")
{
    menu();
    var saisie = readLine.question("Quel est votre choix ? ");
    switch(saisie){
        case "a" :
        case "A" : ajoutChiffre();
        break;
        case "b" :
        case "B" : afficherTab();
        break;
        case "q" :
        case "Q" : console.log("A +");
        break;
        default : console.log("Je n'ai pas compris");
    }
}

function menu(){
    var txt = "";
    txt += "A/ Ajouter un chiffre \n"
    txt += "B/ Afficher le tableau \n"
    txt += "Q/ Quitter"
    console.log(txt);
};

function ajoutChiffre(){
    var chiffre = parseInt(readLine.question("Quel chiffre voulez-vous ajouter ? "));
    // Variable dont la valeur affectée sera celle retournée par la fonction getPosition()
    var positionToPush = getPosition(tab, chiffre);
    // la méthode splice() prend en paramètre la position ciblée dans le tableau,
    // le nombre d'éléments à supprimer depuis cette position, la valeur à saisir à cette position.
    // Si dans tab = [3,5,10,12] on ajoute 6, ce sera donc
    // tab.splice(2,0,6) 2 pour la position tab[2], 0 élément(s) à supprimer, 6 pour le nombre à rentrer)
    tab.splice(positionToPush, 0, chiffre);
}
// En prenant l'exemple que 6 veut être saisi dans le tableau [3,5,10,12]
// On appelle donc la méthode getPosition avec le tableau [3,5,10,12] pour t et 6 pour c en paramètre
function getPosition(t,c){
    // On va lancer une boucle pour parcourir le tableau
    for (var i = 0; i < t.length; i++){
        // Si les valeurs rencontrées sont inférieures au chiffre saisi on continue de parcourir
        // Ici, 6 étant saisi, la boucle ne s'arrête pas sur t[0] (3) ni t[1] (5)
        // La première valeur plus grande que 6 rencontrée sera 10 à t[2], la fonctionnera retourne donc i = 2
        if (t[i] > c){
            return i;
        }
    }
    // Dans le cas où aucune valeur n'est plus grande que celle ci, la valeur retournée sera la longueur du tableau
    // Dans le même tableau [3,5,10,12], si on saisi 16 au lieu de 6, la valeur retournée sera donc 4
    return t.length;
}

function afficherTab(){
    console.log(tab);
}