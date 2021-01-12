/*
* Exercice 9
*
* Afficher les informations d'un objet
*
* A partir de l'objet suivant, réaliser l'affichage de l'impression d'écran ci-dessous.
*
*   var voiture = {
*       immatriculation : "AB1234CD",
*       marque : "Toyota",
*       annee : 2002
*   }
*   _____________________________________________________________________________
*   |                                                                           |
*   |   La voiture d'immatriculation AB1234CD, de marque Toyota, date de 2002   |
*   |___________________________________________________________________________|
 */


var voiture = {
    immatriculation: "AB1234CD",
    marque: "Toyota",
    annee: 2002,
    carac : {
        nbKilometre : 20000,
        couleur : "bleu",
        puissance : 7
    }
}

console.log(`La voiture d'immatriculation ${voiture.immatriculation}, 
    de marque ${voiture.marque}, date de ${voiture.annee}
    nombre de kilomètres : ${voiture.carac.nbKilometre},
    couleur :  ${voiture.carac.couleur}`
);