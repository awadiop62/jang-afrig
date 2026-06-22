console.log("script.js est bien branché !");
const prenom = "Awa";
console.log("Bonjour " + prenom);
console.log(`Bonjour ${prenom}, prêt(e) à coder ?`);
const pseudo = "Aminata"; // texte (string)
let score = 0; // nombre (number), va changer -> let
const partieFinie = false; // booléen (boolean)
console.log(`Joueur : ${pseudo}`);
console.log(`Score de départ : ${score}`);
score = score + 5; // on réécrit l'ardoise
console.log(`Nouveau score : ${score}`); // 5
function direBonjour(nom) {
    return `Bonjour ${nom}, bienvenue sur Jàng Afrig !`;
}
console.log(direBonjour("Cheikh"));
console.log(direBonjour("Ndèye"));
function appreciation(note) {
    if (note >= 16) {
        return "Très bien";
    } else if (note >= 12) {
        return "Bien";
    } else if (note >= 10) {
        return "Passable";
    } else {
        return "À retravailler";
    }
}
console.log(appreciation(14)); // "Bien"
console.log(appreciation(8)); // "À retravailler"
function statutMajorite(age) {
    return age >= 18 ? "majeur" : "mineur";
}
console.log(statutMajorite(20)); // "majeur"
const pays = ["Sénégal", "Mali", "Ghana", "Kenya"];
for (const nom of pays) {
    console.log(`Pays africain : ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);
function fcfaVersEuro(montant) {
    return montant / 656;
}
console.log(fcfaVersEuro(10000)); // environ 15.24
function moyenne(notes) {
    let somme = 0;
    for (const note of notes) {
        somme = somme + note;
    }
    return somme / notes.length;
}
const notesAminata = [12, 15, 9, 14];
console.log(`Moyenne : ${moyenne(notesAminata)}`); // 12.5
function estMajeur(age) {
    return age >= 18;
}
console.log(estMajeur(20)); // true
console.log(estMajeur(16)); // false
function fizzBuzzSenegal() {
    for (let n = 1; n <= 30; n++) {
        if (n % 15 === 0) {
            console.log("Thiéboudienne");
        } else if (n % 3 === 0) {
            console.log("Thié");
        } else if (n % 5 === 0) {
            console.log("Bou");
        } else {
            console.log(n);
        }
    }
}
fizzBuzzSenegal();
function estPalindrome(mot) {
    let inverse = "";
    for (const lettre of mot) {
        inverse = lettre + inverse; // on empile à l'envers
    }
    return mot === inverse;
}
console.log(estPalindrome("kayak")); // true
console.log(estPalindrome("Dakar")); // false
console.table(Pays);
console.log(choisirAuHasard(Pays));

// Exercice 1: 1. Création du tableau de 10 étudiants (objets { nom, note })
const etudiants = [
    { nom: "Alice", note: 14 },
    { nom: "Awa", note: 12 },
    { nom: "Fatou", note: 16 },
    { nom: "Daouda", note: 9 },
    { nom: "Eva", note: 15 },
    { nom: "Mouhamed", note: 11 },
    { nom: "Sophie", note: 18 },
    { nom: "Adama", note: 8 },
    { nom: "Julie", note: 13 },
    { nom: "Antoine", note: 10 }
];

// 2. Initialisation de la variable somme avec let (comme suggéré dans l'indice)
let somme = 0;

// 3. Utilisation de forEach pour accumuler les notes
etudiants.forEach(e => {
    somme += e.note;
});

// 4. Calcul de la moyenne en divisant par etudiants.length
const Moyenne = somme / etudiants.length;

// Affichage du résultat
console.log(`La moyenne de la classe est de : ${Moyenne} / 20`);

// Exercice 2: 1. Un tableau d'exemple avec des prix en FCFA
const prixFCFA = [1312, 6560, 20000, 3280, 500];

// 2. Utilisation de map pour créer le nouveau tableau des prix en euros
const prixEuros = prixFCFA.map(prix => {
    // On divise par 656 et on peut arrondir à 2 décimales pour faire propre
    return Number((prix / 656).toFixed(2));
});

// Affichage des résultats pour vérifier
console.log("Prix en FCFA :", prixFCFA);
console.log("Prix en Euros :", prixEuros);

//Exercice 3: 1. Utilisation de filter pour ne garder que les étudiants ayant une note >= 10
const etudiantsAdmis = etudiants.filter(e => e.note >= 10);

// 2. Affichage du résultat de manière lisible avec console.table
console.table(etudiantsAdmis);

// Exercice 4: Utilisation de map avec la fonction fléchée (comme indiqué dans l'indice)
const nomsCapitales = Pays.map(p => p.capitale);

// Affichage du résultat
console.log(nomsCapitales);