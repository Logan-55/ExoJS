/*
 * Exercice 1
 *
 * Tableaux
 *
 * Vous devez créer un programme permettant de compléter un tableau de chiffres.
 *
 * Lorsque l'on saisit un chiffre, il est écrit directement à la bonne place,
 * afin de conserver un tableau trié.
 *
 * Réaliser un menu et permettre d'ajouter plusieurs valeurs.
 *
 *  _____________________________________________
 *  |                                           |
 *  |   [3,5,10,12]                             |
 *  |   1/ Ajouter un chiffre                   |
 *  |   2/ Afficher le tableau                  |
 *  |   0/ Quitter                              |
 *  |   Quel est votre choix ? 1                |
 *  |   Quel chiffre voulez-vous ajouter ? 6    |
 *  |   1/ Ajouter un chiffre                   |
 *  |   2/ Afficher le tableau                  |
 *  |   0/ Quitter                              |
 *  |   Quel est votre choix ? 2                |
 *  |   [3,5,6,10,12]                           |
 *  |   1/ Ajouter un chiffre                   |
 *  |   2/ Afficher le tableau                  |
 *  |   0/ Quitter                              |
 *  |   Quel est votre choix ? 1                |
 *  |   Quel chiffre voulez-vous ajouter ? 11   |
 *  |   1/ Ajouter un chiffre                   |
 *  |   2/ Afficher le tableau                  |
 *  |   0/ Quitter                              |
 *  |   Quel est votre choix ? 2                |
 *  |   [3,5,6,10,11,12]                        |
 *  |   1/ Ajouter un chiffre                   |
 *  |   2/ Afficher le tableau                  |
 *  |   0/ Quitter                              |
 *  |   Quel est votre choix ? 0                |
 *  |   A +                                     |
 *  |___________________________________________|
 */

//  Appelé du module permettant la saisie au clavier
const scan = require("readline-sync");

// Déclaration des variables;
let array = [3,5];
let inputMenu = 0;

// Création de la boucle qui rappelera automatiquement la fonction showMenu()
// tant que 0 ne sera pas saisie lors de la sélection dans le menu
do {
    showMenu();
} while (inputMenu !== 0)

// Message de sortie de la boucle si 0 saisi
console.log("A +");

// Fonction showMenu() permettant l'affichage du menu et l'envoi des fonctions suivant le choix saisi.
function showMenu()
{
    let menu = "1/ Ajouter un chiffre\n";
    menu += "2/ Afficher le tableau\n";
    menu += "0/ Quitter";

    console.log(menu);

    inputMenu = parseInt(scan.question("Quel est votre choix ? "));

    switch (inputMenu) {
        case 1 :
            addToArray();
            break
        case 2 :
            showArray();
            break
        default :
            console.log("Je n'ai pas compris");
    }
};

// Fonction d'affichage du tableau avec rappel de la fonction showMenu()
function showArray()
{
    console.log(array);
    showMenu();
};

function addToArray(){
    let newInputArray = parseInt(scan.question("Quel chiffre voulez-vous ajouter ? "));

    array.push(newInputArray);
    console.log("push");


    // On créé une boucle pour trier le tableau
    for (let i = 0; i <= array.length; i++)
    {
        // Si une valeur du tableau est supérieur à celle qui suit, on change les valeurs
        if (array[i] > array[i+1])
        {
            // Exemple [10,5] :

            // Etape 0
            // t[0] = 10 et t[1] = 5
            // Etape 1
            // t[0] += t[1] <=> t[0] = t[0] + t[1] <=> t[0] = 10 + 5 = 15
            // t[0] = 15 et t[1] = 5
            // Etape 2
            // t[1] = t[0] - t[1] <=> t[1] = 15 - 5 = 10
            // t[0] = 15 et t[1] = 10
            // Etape 3
            // t[0] -= t[1] <=> t[0] = t[0] - t[1] <=> t[0] = 15 - 10 = 5
            // t[0] = 5 et t[1] = 10

            array[i] += array[i+1]; // Etape 1
            array[i+1] = array[i] - array[i+1]; // Etape 2
            array[i] -= array[i+1]; // Etape 3

            i = 0;
        }

    }
    showMenu();
};

