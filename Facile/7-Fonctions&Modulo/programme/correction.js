var c1 = 123;
var c2 = 20;

afficherResultatDivisionPar3(c1);
afficherResultatDivisionPar3(c2);

function afficherResultatDivisionPar3(nombre)
{
    if(nombre % 3 === 0) {
        console.log("Le résultat de " + nombre + " / 3 = " + (nombre/3))
    } else {
        console.log("Le nombre " + nombre + " n'est pas divisible par 3")
    }
}