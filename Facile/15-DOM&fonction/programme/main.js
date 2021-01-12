/*
 * Exercice 15
 *
 * PIle ou Face
 *
 * A partir du fichier HTML ci-après :
 *
 *  _________________________________________
 *  |                                       |
 *  |   <button>pile ou face</button>       |
 *  |   <div>Cliquer sur le bouton</div>    |
 *  |   <script>                            |
 *  |       // A compléter                  |
 *  |   </script>                           |
 *  |_______________________________________|
 *
 * Compléter la partie <script></script> pour afficher la table de multiplication dans le <div>
 *
 */

const button = document.querySelector("button");
const txtArea = document.querySelector("div");

button.addEventListener("click", headsOrTails)

function headsOrTails()
{
    let tossACoin = Math.round(100 * Math.random()/100);
    let result = "";

    switch (tossACoin) {
        case 0 :
            result = "pile";
            break;
        case 1 :
            result = "face";
            break;
    }

    txtArea.innerHTML = result;
}