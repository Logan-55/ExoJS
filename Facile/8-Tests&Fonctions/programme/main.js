/*
* Exercice 8
*
* Vérifier si un mot contient moins de 8 caractères
*
* Vous devez réaliser une fonction qui vérifie si un mot de passse entré en paramètres contient
* moins de 7 caractères, si c'est le cas la fonction retournera le nombre de caractères,
* sinon il indiquera que le mot de passe contient plus de 8 caractères.
 */

var mdp1 = "sept"
var mdp2 = "quatorze"
var mdp3 = "trente-deux"

checkLengthPassword(mdp1);
checkLengthPassword(mdp2);
checkLengthPassword(mdp3);

function checkLengthPassword(password)
{
    var length = password.length;

    if (length > 8) {
        console.log("Le mot de passe contient plus de 8 caractères (%d)", length);
    }
    else if (length < 8) {
        // méthode d'affichage ECMA Script 6
        console.log(`Le mot de passe ne contient que ${length} caractères`)
    } else {
            console.log("Longueur de mot de passe valide")
    }

}





