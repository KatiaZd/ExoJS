//Coder en JS un script intégré à un fichier html permettant de retrouver le plus grand nombre d’un tableau (tableau en dur). 

let tableau = [5, 10, 15, 20, 30, 40, 50];
let max = Math.max(...tableau);
console.log("Le plus grand nombre est : " + max);
