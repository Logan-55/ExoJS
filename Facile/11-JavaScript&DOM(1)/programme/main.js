/*
* Exercice 11
*
* Modifier le contenu d'une div
*
* A partir de l'exemple HTML ci-après :
*
*   _____________________________________
*   |                                   |
*   |   <div>Un super fichier</div>     |
*   |   <script>                        |
*   |       // A compléter              |
*   |   </script>                       |
*   |___________________________________|
*
* Compléter la partie <script></script> pour modifier le contenu de la balise div, pour
* afficher "Bonjour"
 */


var maDiv = document.querySelector("div");
maDiv.innerHTML = "Bonjour";