/*
 * Exercice 12
 *
 * Récupérer des éléments du DOM
 *
 * A partir du fichier HTML ci après
 *
 *  _________________________________________
 *  |                                       |
 *  |   <label>Nom : </label>               |
 *  |   <input type="text" id="name">       |
 *  |   <label>Prénom : </label>            |
 *  |   <input type="text" id="firstname">  |
 *  |   <script>                            |
 *  |       // A compléter                  |
 *  |   </script>                           |
 *  |_______________________________________|
 *
 * Compléter la partie <script></script> pour rajouter une couleur aux inputs
 */

// JS = const name = querySelector("#name");
const name = $("#name");
const firstname = $("#firstname");

// JS = name.style.backgroundColor = "red";
name.css("background-color", "red");
firstname.css("background-color", "orange");