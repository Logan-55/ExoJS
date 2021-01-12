/*
 * Exercice 14
 *
 * Afficher la table de 3 dans le navigateur
 *
 * A partir du fichier HTML ci-après :
 *
 *  _
 *  |   <button>table de 3</button>
 *  |   <div>Cliquerz sur un bouton pour afficher la table de multiplication</div>
 *  |   <script>
 *  |       // A compléter
 *  |   </script>
 *  |_
 *
 * Compléter la partie <script></script> pour afficher la table de multiplication dans la div
 *
 */

const button = document.querySelector("button");
const tableArea = document.querySelector("div");

button.addEventListener("click", showTable);

function showTable() {
    let tableRow = "";

    for (i = 1; i <= 10; i++) {
        let tableRowResult = 3 * i;
        tableRow += "3 x " + i + " = " + tableRowResult + "<br>";
    }

    tableArea.innerHTML = tableRow;
}