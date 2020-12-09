/*
* Exercice 2
*
* Afficher des variables
*
* A partir des variables suivantes
*   Nom = toto
*   Age = 30
*   Homme = true
* Réaliser l'affichage :
*   Nom : toto
*   Age : 30
*   Sexe : homme
*/

var name = "toto";
var age = 30;
var male = true;

/*
 * %s : string,
 * %d ou %i : decimal
 * %f : float
 * %O : print un objet sur plusieurs lignes
 * %o : print un objet sur une seule ligne
 * %j : json. remplacé par la string '[Circular]' si l'argument contient des références circulaires ??
 * %% Signe de pourcentage unique ('%')
 */
console.log("Nom : %s avec l'age %d ans", name, age);
if (male) {
    console.log("Sexe : Homme");
}
else {
    console.log("Sexe : Femme");
}