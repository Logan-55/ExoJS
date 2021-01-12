/*
 * Exercice 20
 *
 * Additionner des valeurs d'un tableau
 *
 * A partir du tableau suivant, additionner les valeurs si elles sont paires
 *      var tab = [2,6,10,3,8,7,20];
 * Voici le résultat attendu
 *
 *  _________________________________
 *  |                               |
 *  |   itération : 0 : 2           |
 *  |   itération : 1 : 8           |
 *  |   itération : 2 : 18          |
 *  |   itération : 3 : non paire   |
 *  |   itération : 4 : 26          |
 *  |   itération : 5 : non paire   |
 *  |   itération : 6 : 46          |
 *  |   Le total est de : 46        |
 *  |_______________________________|
 */

var tab = [2,6,10,3,8,7,20];
sum = 0;

for (let i = 0; i < tab.length; i++){
    if (tab[i] % 2 === 0){
        sum += tab[i]
        console.log("itération : " + i + " : " + sum)
    } else {
        console.log("itération : " + i + " : non paire")
    }
}

console.log("Le total est de : " + sum)