/*
 * Exercice 13
 *
 * Afficher le nombre de clics sur un bouton
 *
 * A partir du fichier HTML ci-après :
 *
 *  _
 *  |   <button onClick="incrementer()">Incrementer !</button>
 *  |   <div>Cliquer sur le bouton pour incrémenter  !</div>
 *  |   <script>
 *  |       // A compléter
 *  |   </script>
 *  |_
 *
 * Compléter la partie <script></script> pour compter le nombre de clics et l'afficher
 *
 */

nbClick = 0;

function increment() {
    nbClick++; // nbClick = nbClick + 1 <=> nbClick += 1

    const result = document.querySelector("div");
    result.innerHTML = "Vous avez cliqué " + nbClick + " fois";

}