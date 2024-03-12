// Puis ajouter un script (dans un autre fichier) permettant de trouver le mot le plus long d’une phrase. Le tout devant être affiché dans la console.


function trouverMotLePlusLong(phrase) {
    let mots = phrase.split (" ");
    let lePluslong = mots.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    return lePluslong;
}

let phrase = "Les chaussettes de l'archiduchesse sont-elles sèchent archi-sèche";
console.log("Le mot le plus long est : " + trouverMotLePlusLong(phrase));
