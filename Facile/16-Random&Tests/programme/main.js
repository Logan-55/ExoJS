/*
 * Exercice 16
 *
 * Random et tests
 *
 * Faire un programme qui choisit un nombre aléatoire entre 0 et 20
 *      S'il est inférieur à 7 affiche "Petit"
 *      S'il est entre 7 et 14 affiche "Moyen"
 *      S'il est supérieur à 15 affiche "Grand"
 *
 *  _____________   _____________   _____________
 *  |           |   |           |   |           |
 *  |   5       |   |   14      |   |   16      |
 *  |   Petit   |   |   Moyen   |   |   Grand   |
 *  |___________|   |___________|   |___________|
 */


let random = Math.round(Math.random() * 20);

console.log(random);

let test = "";

if (random < 7) {
    test = "Petit";
} else if (random <= 14) {
    test = "Moyen";
} else {
    test = "Grand";
}

console.log(test);